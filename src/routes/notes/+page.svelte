<script>
	import GardenGraph from '$lib/components/GardenGraph.svelte';

	export let data;
</script>

<div class="garden">
	<div class="garden-header">
		<h1 class="section-label">Notes</h1>
	</div>

	<div class="garden-index">
		<span class="section-label">All Notes</span>
		<ul class="note-list">
			{#each data.notes as note}
				<li class="note-item">
					<a href="/notes/{note.slug}" class="note-link">
						{note.title}
					</a>
					<span class="note-connections">{note.linkCount} connection{note.linkCount > 0 || note.linkCount == 0 ? 's' : ''}</span>
				</li>
			{/each}
		</ul>
	</div>

	<!-- <div class="garden-graph-wrapper">
		<GardenGraph graph={data.graph} />
	</div> -->
</div>

<style>
	.garden {
		max-width: 720px;
	}

	.garden-header {
		margin-bottom: var(--spacing-xl);
	}

	.garden-index {
		margin-top: var(--spacing-lg);
	}

	.note-list {
		list-style: none;
		padding: 0;
	}

	.note-item {
		display: flex;
		align-items: baseline;
		gap: var(--spacing-sm);
		padding: 0.4rem 0;
		border-bottom: 1px dotted var(--grid-line);
	}

	.note-item:last-child {
		border-bottom: none;
	}

	.note-link {
		font-size: 1rem;
		color: var(--link);
		text-decoration: none;
	}

	.note-link:hover {
		text-decoration: underline;
	}

	.note-connections {
		font-size: 1rem;
		color: var(--text-dim);
		letter-spacing: 0.04em;
	}
</style>
