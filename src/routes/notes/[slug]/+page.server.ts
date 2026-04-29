import { error } from '@sveltejs/kit';
import { loadGardenNotes } from '$lib/garden';
import { renderMarkdown } from '$lib/markdown';

export async function load({ params }) {
	const notes = await loadGardenNotes();
	const note = notes.get(params.slug);

	if (!note) {
		throw error(404, 'Note not found');
	}

	const allSlugs = new Set(notes.keys());
	const html = renderMarkdown(note.content, allSlugs);

	const backlinks = note.backlinks.map((slug) => ({
		slug,
		title: notes.get(slug)!.title
	}));

	return {
		slug: note.slug,
		title: note.title,
		html,
		backlinks
	};
}
