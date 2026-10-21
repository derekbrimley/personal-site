import { error, redirect } from '@sveltejs/kit';
import { findMovie, videoUrl } from '$lib/server/movies';

// A fresh signed R2 link on every request; the video itself streams straight from R2.
export async function GET({ params, url, setHeaders }) {
	const movie = await findMovie(params.slug);
	if (!movie) {
		throw error(404, 'Movie not found');
	}
	setHeaders({ 'cache-control': 'no-store' });
	throw redirect(302, await videoUrl(movie, url.searchParams.has('download')));
}
