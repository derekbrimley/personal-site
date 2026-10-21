import { error, redirect } from '@sveltejs/kit';
import { collectionsFromMovies, listMovies, matchMovie, slugify } from '$lib/server/movies';
import { movieCard } from '$lib/server/movieCards';
import { requireMoviesAccess, withKey } from '$lib/server/movieAccess';

export async function load({ params, url, locals }) {
	requireMoviesAccess(locals);
	let movies;
	try {
		movies = await listMovies();
	} catch (e) {
		console.error(e);
		throw error(503, 'The movies are not available right now');
	}

	const collections = collectionsFromMovies(movies);
	const collection = collections.find((c) => c.slug === params.slug);
	if (collection) {
		const latest = [...collection.movies].reverse().find((m) => m.poster);
		return {
			kind: 'collection' as const,
			name: collection.name,
			movies: collection.movies.map(movieCard),
			pageUrl: withKey(`${url.origin}/movies/${collection.slug}`),
			posterUrl: latest ? withKey(`${url.origin}/movies/${latest.slug}/poster`) : null
		};
	}

	const movie = matchMovie(movies, params.slug);
	if (!movie) {
		throw error(404, 'Movie not found');
	}
	if (movie.slug !== params.slug) {
		throw redirect(301, `/movies/${movie.slug}`);
	}

	return {
		kind: 'movie' as const,
		slug: movie.slug,
		title: movie.title,
		hasPoster: movie.poster !== null,
		collection: movie.collection
			? { slug: slugify(movie.collection), name: movie.collection }
			: null,
		pageUrl: withKey(`${url.origin}/movies/${movie.slug}`),
		videoUrl: withKey(`${url.origin}/movies/${movie.slug}/video`),
		posterUrl: movie.poster ? withKey(`${url.origin}/movies/${movie.slug}/poster`) : null
	};
}
