// AWS Signature V4 query signing ("presigned URLs"), enough for GETs against R2's S3 API.
// No SDK: one GET per request is all the movies page needs.

export type Credentials = { accessKeyId: string; secretAccessKey: string };

type PresignOptions = {
	host: string;
	path: string; // already encoded, starting with '/'
	region: string;
	credentials: Credentials;
	expiresIn: number; // seconds, at most 7 days
	query?: Record<string, string>;
	now?: Date;
};

export function encodeRfc3986(s: string): string {
	return encodeURIComponent(s).replace(
		/[!'()*]/g,
		(c) => '%' + c.charCodeAt(0).toString(16).toUpperCase()
	);
}

export function encodePath(key: string): string {
	return key.split('/').map(encodeRfc3986).join('/');
}

const encoder = new TextEncoder();

async function hmac(key: string | ArrayBuffer, data: string): Promise<ArrayBuffer> {
	const raw = typeof key === 'string' ? encoder.encode(key) : key;
	const k = await crypto.subtle.importKey('raw', raw, { name: 'HMAC', hash: 'SHA-256' }, false, [
		'sign'
	]);
	return crypto.subtle.sign('HMAC', k, encoder.encode(data));
}

function hex(buf: ArrayBuffer): string {
	return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function presignUrl(opts: PresignOptions): Promise<string> {
	const now = opts.now ?? new Date();
	const amzDate = now
		.toISOString()
		.replace(/[-:]/g, '')
		.replace(/\.\d{3}/, '');
	const date = amzDate.slice(0, 8);
	const scope = `${date}/${opts.region}/s3/aws4_request`;

	const params: Record<string, string> = {
		...opts.query,
		'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
		'X-Amz-Credential': `${opts.credentials.accessKeyId}/${scope}`,
		'X-Amz-Date': amzDate,
		'X-Amz-Expires': String(opts.expiresIn),
		'X-Amz-SignedHeaders': 'host'
	};
	const query = Object.keys(params)
		.sort()
		.map((k) => `${encodeRfc3986(k)}=${encodeRfc3986(params[k])}`)
		.join('&');

	const canonical = [
		'GET',
		opts.path,
		query,
		`host:${opts.host}\n`,
		'host',
		'UNSIGNED-PAYLOAD'
	].join('\n');
	const toSign = [
		'AWS4-HMAC-SHA256',
		amzDate,
		scope,
		hex(await crypto.subtle.digest('SHA-256', encoder.encode(canonical)))
	].join('\n');

	let key = await hmac('AWS4' + opts.credentials.secretAccessKey, date);
	key = await hmac(key, opts.region);
	key = await hmac(key, 's3');
	key = await hmac(key, 'aws4_request');
	const signature = hex(await hmac(key, toSign));

	return `https://${opts.host}${opts.path}?${query}&X-Amz-Signature=${signature}`;
}
