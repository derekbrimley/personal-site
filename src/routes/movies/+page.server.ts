import { error } from '@sveltejs/kit';
import { listMovies } from '$lib/server/movies';

export async function load() {
	try {
		const movies = await listMovies();
		return {
			movies: movies.map((m) => ({ slug: m.slug, title: m.title, hasPoster: m.poster !== null }))
		};
	} catch (e) {
		console.error(e);
		throw error(503, 'The movies are not available right now');
	}
}
