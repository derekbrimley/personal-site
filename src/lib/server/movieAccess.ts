import { env } from '$env/dynamic/private';
import { error, type Cookies } from '@sveltejs/kit';

// The home movies are behind one family key (MOVIES_KEY). A link carrying it (`?k=...`) lets
// you in and leaves a year-long cookie, so the rest of the site works without it. No key
// set means nobody gets in. Changing the key locks out every old link and cookie.

const PARAM = 'k';
const COOKIE = 'movies_key';
const YEAR = 365 * 24 * 60 * 60;

function sameString(a: string, b: string): boolean {
	if (a.length !== b.length) return false;
	let diff = 0;
	for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
	return diff === 0;
}

export function hasMoviesAccess(url: URL, cookies: Cookies): boolean {
	const key = env.MOVIES_KEY;
	if (!key) return false;

	const fromLink = url.searchParams.get(PARAM);
	if (fromLink && sameString(fromLink, key)) {
		cookies.set(COOKIE, key, { path: '/', maxAge: YEAR, httpOnly: true, sameSite: 'lax' });
		return true;
	}
	return sameString(cookies.get(COOKIE) ?? '', key);
}

// A link that works for someone without the cookie: what Share copies, what link previews
// fetch, and what the kitchen tablet hands the Chromecast.
export function withKey(url: string): string {
	const key = env.MOVIES_KEY;
	if (!key) return url;
	return `${url}${url.includes('?') ? '&' : '?'}${PARAM}=${encodeURIComponent(key)}`;
}

// For page loads: hooks.server.ts lets locked pages through so they can say why.
export function requireMoviesAccess(locals: App.Locals): void {
	if (!locals.moviesAccess) {
		throw error(401, 'These videos are just for family.');
	}
}
