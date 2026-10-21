import { json } from '@sveltejs/kit';
import { listMovies } from '$lib/server/movies';
import { withKey } from '$lib/server/movieAccess';

// The movie list for other apps (the kitchen tablet casts `video` to the TV).
export async function GET({ url }) {
	const movies = await listMovies();
	return json(
		movies.map((m) => ({
			slug: m.slug,
			title: m.title,
			collection: m.collection,
			page: withKey(`${url.origin}/movies/${m.slug}`),
			video: withKey(`${url.origin}/movies/${m.slug}/video`),
			poster: m.poster ? withKey(`${url.origin}/movies/${m.slug}/poster`) : null,
			updated: m.updated
		})),
		{ headers: { 'cache-control': 'private, max-age=300', 'x-robots-tag': 'noindex' } }
	);
}
