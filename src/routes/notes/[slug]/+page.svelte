<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title} — Derek Brimley</title>
</svelte:head>

<article class="garden-note">
	<header class="note-header">
		<a href="/notes" class="back-link">&larr; notes</a>
		<h1 class="note-title">{data.title}</h1>
	</header>

	<div class="note-body">
		{@html data.html}
	</div>

	{#if data.backlinks.length > 0}
		<footer class="note-backlinks">
			<span class="section-label">Linked from</span>
			<ul class="backlink-list">
				{#each data.backlinks as backlink}
					<li>
						<a href="/notes/{backlink.slug}" class="backlink">{backlink.title}</a>
					</li>
				{/each}
			</ul>
		</footer>
	{/if}
</article>

<style>
	.garden-note {
		max-width: 640px;
	}

	.note-header {
		margin-bottom: var(--spacing-xl);
	}

	.back-link {
		font-size: 1rem;
		color: var(--text-dim);
		text-decoration: none;
		letter-spacing: 0.04em;
	}

	.back-link:hover {
		color: var(--link);
	}

	.note-title {
		font-size: 1.4rem;
		margin-top: var(--spacing-sm);
		margin-bottom: 0;
	}

	.note-body {
		font-size: 1rem;
		line-height: 1.75;
	}

	.note-body :global(p) {
		margin-bottom: var(--spacing-md);
	}

	.note-body :global(ul) {
		padding-left: var(--spacing-lg);
		margin-bottom: var(--spacing-md);
	}

	.note-body :global(li) {
		margin-bottom: var(--spacing-xs);
	}

	.note-body :global(.wiki-link) {
		color: var(--link);
		text-decoration: none;
		border-bottom: 1px dashed var(--link);
		padding-bottom: 1px;
	}

	.note-body :global(.wiki-link:hover) {
		border-bottom-style: solid;
	}

	.note-body :global(.wiki-link.broken) {
		color: var(--text-dim);
		border-bottom-color: var(--text-dim);
		cursor: default;
	}

	.note-backlinks {
		margin-top: var(--spacing-2xl);
		padding-top: var(--spacing-lg);
		border-top: 1px dashed var(--text-dim);
	}

	.backlink-list {
		list-style: none;
		padding: 0;
	}

	.backlink-list li {
		padding: 0.3rem 0;
	}

	.backlink {
		font-size: 1rem;
		color: var(--link);
		text-decoration: none;
	}

	.backlink:hover {
		text-decoration: underline;
	}
</style>
