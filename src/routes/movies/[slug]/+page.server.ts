import { error } from '@sveltejs/kit';
import { findMovie } from '$lib/server/movies';

export async function load({ params, url }) {
	let movie;
	try {
		movie = await findMovie(params.slug);
	} catch (e) {
		console.error(e);
		throw error(503, 'The movies are not available right now');
	}
	if (!movie) {
		throw error(404, 'Movie not found');
	}

	return {
		slug: movie.slug,
		title: movie.title,
		hasPoster: movie.poster !== null,
		pageUrl: `${url.origin}/movies/${movie.slug}`,
		posterUrl: movie.poster ? `${url.origin}/movies/${movie.slug}/poster` : null
	};
}
