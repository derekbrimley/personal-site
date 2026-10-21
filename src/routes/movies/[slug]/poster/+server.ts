import { error, redirect } from '@sveltejs/kit';
import { findMovie, posterUrl } from '$lib/server/movies';

export async function GET({ params, setHeaders }) {
	const movie = await findMovie(params.slug);
	const signed = movie && (await posterUrl(movie));
	if (!signed) {
		throw error(404, 'No poster');
	}
	// The signed link lasts a day, so the redirect can be cached for an hour.
	setHeaders({ 'cache-control': 'private, max-age=3600' });
	throw redirect(302, signed);
}
