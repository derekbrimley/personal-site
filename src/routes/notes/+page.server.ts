import { loadGardenNotes, buildGraphData } from '$lib/garden';

export async function load() {
	const notes = await loadGardenNotes();
	const graph = buildGraphData(notes);

	const noteList = [...notes.values()].map((n) => ({
		slug: n.slug,
		title: n.title,
		linkCount: n.links.length + n.backlinks.length
	}));

	noteList.sort((a, b) => a.title.localeCompare(b.title));

	return { notes: noteList, graph };
}
