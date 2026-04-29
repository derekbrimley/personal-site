export interface GardenNote {
	slug: string;
	title: string;
	content: string;
	links: string[];
	backlinks: string[];
}

export interface GraphData {
	nodes: { id: string; title: string }[];
	edges: { source: string; target: string }[];
}

const WIKILINK_RE = /\[\[([^\]]+)\]\]/g;

function toSlug(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

function extractWikiLinks(content: string): string[] {
	const links: string[] = [];
	let match;
	while ((match = WIKILINK_RE.exec(content)) !== null) {
		links.push(toSlug(match[1]));
	}
	return [...new Set(links)];
}

function slugToTitle(slug: string): string {
	return slug
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export async function loadGardenNotes(): Promise<Map<string, GardenNote>> {
	const modules = import.meta.glob('/src/content/garden/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	});

	const notes = new Map<string, GardenNote>();

	for (const [path, raw] of Object.entries(modules)) {
		const slug = path.split('/').pop()!.replace('.md', '');
		const content = raw as string;

		const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
		let title = slugToTitle(slug);
		let body = content;

		if (frontmatterMatch) {
			const titleMatch = frontmatterMatch[1].match(/title:\s*(.+)/);
			if (titleMatch) title = titleMatch[1].trim();
			body = frontmatterMatch[2];
		}

		const links = extractWikiLinks(body);

		notes.set(slug, { slug, title, content: body, links, backlinks: [] });
	}

	// Build backlinks
	for (const [slug, note] of notes) {
		for (const link of note.links) {
			const target = notes.get(link);
			if (target) {
				target.backlinks.push(slug);
			}
		}
	}

	return notes;
}

export function buildGraphData(notes: Map<string, GardenNote>): GraphData {
	const nodes = [...notes.values()].map((n) => ({ id: n.slug, title: n.title }));
	const edges: GraphData['edges'] = [];

	for (const note of notes.values()) {
		for (const link of note.links) {
			if (notes.has(link)) {
				edges.push({ source: note.slug, target: link });
			}
		}
	}

	return { nodes, edges };
}
