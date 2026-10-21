import { json } from '@sveltejs/kit';
import { listMovies } from '$lib/server/movies';

// The movie list for other apps (the kitchen tablet casts `video` to the TV).
export async function GET({ url }) {
	const movies = await listMovies();
	return json(
		movies.map((m) => ({
			slug: m.slug,
			title: m.title,
			page: `${url.origin}/movies/${m.slug}`,
			video: `${url.origin}/movies/${m.slug}/video`,
			poster: m.poster ? `${url.origin}/movies/${m.slug}/poster` : null,
			updated: m.updated
		})),
		{ headers: { 'cache-control': 'public, max-age=300', 'x-robots-tag': 'noindex' } }
	);
}
