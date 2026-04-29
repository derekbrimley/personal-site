const WIKILINK_RE = /\[\[([^\]]+)\]\]/g;

function toSlug(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

export function renderMarkdown(content: string, allSlugs: Set<string>): string {
	let html = content;

	// Replace wiki-links with anchor tags
	html = html.replace(WIKILINK_RE, (_match, rawLink: string) => {
		const slug = toSlug(rawLink);
		const title = rawLink;
		if (allSlugs.has(slug)) {
			return `<a href="/notes/${slug}" class="wiki-link">${title}</a>`;
		}
		return `<span class="wiki-link broken">${title}</span>`;
	});

	// Basic markdown rendering
	// Headings
	html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
	html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
	html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

	// Bold and italic
	html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
	html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

	// Links
	html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

	// Unordered lists
	html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
	html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

	// Paragraphs (lines separated by blank lines)
	html = html
		.split(/\n\n+/)
		.map((block) => {
			block = block.trim();
			if (!block) return '';
			if (
				block.startsWith('<h') ||
				block.startsWith('<ul') ||
				block.startsWith('<ol') ||
				block.startsWith('<li')
			) {
				return block;
			}
			return `<p>${block.replace(/\n/g, ' ')}</p>`;
		})
		.join('\n');

	return html;
}
