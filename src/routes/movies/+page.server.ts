import { error } from '@sveltejs/kit';
import { collectionsFromMovies, listMovies } from '$lib/server/movies';
import { collectionCard, movieCard } from '$lib/server/movieCards';

export async function load() {
	try {
		const movies = await listMovies();
		return {
			collections: collectionsFromMovies(movies).map(collectionCard),
			movies: movies.filter((m) => !m.collection).map(movieCard)
		};
	} catch (e) {
		console.error(e);
		throw error(503, 'The movies are not available right now');
	}
}
