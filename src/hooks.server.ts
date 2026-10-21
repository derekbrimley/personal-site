import type { Handle } from '@sveltejs/kit';
import { hasMoviesAccess } from '$lib/server/movieAccess';

// Pages under /movies show a "family only" message when locked (requireMoviesAccess);
// the video, poster and JSON endpoints just don't exist without the key.
const MOVIE_PAGES = new Set(['/movies', '/movies/[slug]']);

export const handle: Handle = async ({ event, resolve }) => {
	const path = event.url.pathname;
	if (path === '/movies' || path === '/movies.json' || path.startsWith('/movies/')) {
		event.locals.moviesAccess = hasMoviesAccess(event.url, event.cookies);
		if (!event.locals.moviesAccess && !MOVIE_PAGES.has(event.route.id ?? '')) {
			return new Response('Not found', { status: 404 });
		}
	}
	return resolve(event);
};
