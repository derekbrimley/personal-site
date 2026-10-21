import type { Collection, Movie } from './movies';

// What the poster grids show: a link, a title, a poster and an optional caption.

export function movieCard(m: Movie) {
	return {
		href: `/movies/${m.slug}`,
		title: m.title,
		poster: m.poster ? `/movies/${m.slug}/poster` : null
	};
}

export function collectionCard(c: Collection) {
	const latest = [...c.movies].reverse().find((m) => m.poster);
	return {
		href: `/movies/${c.slug}`,
		title: c.name,
		poster: latest ? `/movies/${latest.slug}/poster` : null,
		caption: `${c.movies.length} video${c.movies.length === 1 ? '' : 's'}`
	};
}
