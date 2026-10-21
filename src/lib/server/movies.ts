import { env } from '$env/dynamic/private';
import { encodePath, presignUrl } from './sigv4';

// Home movies live in a private Cloudflare R2 bucket. Drop `Christmas 2024.mp4` in it and it
// shows up at /movies/christmas-2024; an image with the same name (`Christmas 2024.jpg`) is
// its poster. Every play gets a freshly signed link, so shared page links never go stale.

export type Movie = {
	slug: string;
	title: string;
	key: string;
	poster: string | null;
	size: number;
	updated: string;
};

const VIDEO = /\.(mp4|m4v|mov)$/i;
const IMAGE = /\.(jpe?g|png|webp)$/i;

const VIDEO_TTL = 12 * 60 * 60; // long enough to pause a movie and come back to it
const POSTER_TTL = 24 * 60 * 60;

function config() {
	const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET } = env;
	if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET) {
		throw new Error(
			'R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY and R2_BUCKET must be set'
		);
	}
	return {
		host: `${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
		bucket: R2_BUCKET,
		credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY }
	};
}

function sign(
	key: string | null,
	expiresIn: number,
	query: Record<string, string> = {}
): Promise<string> {
	const c = config();
	const path = `/${encodePath(c.bucket)}${key === null ? '' : '/' + encodePath(key)}`;
	return presignUrl({
		host: c.host,
		path,
		region: 'auto',
		credentials: c.credentials,
		expiresIn,
		query
	});
}

export function slugify(name: string): string {
	return name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

export function titleFromName(name: string): string {
	const spaced = name.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
	// `christmas-2024` reads better as `Christmas 2024`; a name typed with capitals is kept as is.
	return spaced === spaced.toLowerCase() ? spaced.replace(/\b\w/g, (c) => c.toUpperCase()) : spaced;
}

function decodeXml(s: string): string {
	return s
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&apos;/g, "'")
		.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
		.replace(/&amp;/g, '&');
}

function tag(xml: string, name: string): string | null {
	const m = xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
	return m ? decodeXml(m[1]) : null;
}

type BucketObject = { key: string; size: number; updated: string };

async function listObjects(): Promise<BucketObject[]> {
	const objects: BucketObject[] = [];
	let token: string | null = null;
	do {
		const query: Record<string, string> = { 'list-type': '2' };
		if (token) query['continuation-token'] = token;
		const res = await fetch(await sign(null, 60, query));
		if (!res.ok) throw new Error(`R2 list failed: ${res.status} ${await res.text()}`);
		const xml = await res.text();
		for (const [, item] of xml.matchAll(/<Contents>([\s\S]*?)<\/Contents>/g)) {
			objects.push({
				key: tag(item, 'Key') ?? '',
				size: Number(tag(item, 'Size') ?? 0),
				updated: tag(item, 'LastModified') ?? ''
			});
		}
		token = tag(xml, 'IsTruncated') === 'true' ? tag(xml, 'NextContinuationToken') : null;
	} while (token);
	return objects;
}

export function moviesFromObjects(objects: BucketObject[]): Movie[] {
	const stem = (key: string) => key.replace(/\.[^./]+$/, '');
	const posters = new Map<string, string>();
	for (const o of objects) if (IMAGE.test(o.key)) posters.set(stem(o.key), o.key);

	const movies = new Map<string, Movie>();
	for (const o of objects) {
		if (!VIDEO.test(o.key)) continue;
		const name = stem(o.key).split('/').pop()!;
		const slug = slugify(name);
		if (!slug || movies.has(slug)) continue;
		movies.set(slug, {
			slug,
			title: titleFromName(name),
			key: o.key,
			poster: posters.get(stem(o.key)) ?? null,
			size: o.size,
			updated: o.updated
		});
	}
	return [...movies.values()].sort((a, b) => b.updated.localeCompare(a.updated));
}

export async function listMovies(): Promise<Movie[]> {
	return moviesFromObjects(await listObjects());
}

export async function findMovie(slug: string): Promise<Movie | undefined> {
	return (await listMovies()).find((m) => m.slug === slug);
}

export function videoUrl(movie: Movie, download = false): Promise<string> {
	// R2 hands back whatever type the uploader set; .mov files with H.264 inside play in more
	// browsers (and on a Chromecast) when served as MP4.
	const query: Record<string, string> = { 'response-content-type': 'video/mp4' };
	if (download) {
		const ext = movie.key.match(/\.[^./]+$/)?.[0] ?? '.mp4';
		const filename = movie.title.replace(/[^\w .-]/g, '') + ext;
		query['response-content-disposition'] = `attachment; filename="${filename}"`;
	}
	return sign(movie.key, VIDEO_TTL, query);
}

export async function posterUrl(movie: Movie): Promise<string | null> {
	return movie.poster ? sign(movie.poster, POSTER_TTL) : null;
}
