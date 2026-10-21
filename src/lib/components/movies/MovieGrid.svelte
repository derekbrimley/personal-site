<script>
	/** @type {{ href: string; title: string; poster: string | null; caption?: string }[]} */
	export let items;
</script>

<ul class="movie-grid">
	{#each items as item (item.href)}
		<li>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={item.href} class="movie-card">
				{#if item.poster}
					<img src={item.poster} alt="" loading="lazy" />
				{:else}
					<span class="no-poster" aria-hidden="true">▶</span>
				{/if}
				<span class="movie-title">{item.title}</span>
				{#if item.caption}
					<span class="movie-caption">{item.caption}</span>
				{/if}
			</a>
		</li>
	{/each}
</ul>

<style>
	.movie-grid {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: var(--spacing-lg);
	}

	.movie-card {
		display: flex;
		flex-direction: column;
		height: 100%;
		border: 2px solid var(--border);
		box-shadow: 4px 4px 0 var(--shadow);
		background: var(--bg);
		color: var(--text);
		text-decoration: none;
		transition:
			transform var(--transition-fast),
			box-shadow var(--transition-fast);
	}

	.movie-card:hover {
		text-decoration: none;
		transform: translate(-2px, -2px);
		box-shadow: 6px 6px 0 var(--shadow);
	}

	.movie-card img,
	.no-poster {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		border-bottom: 2px solid var(--border);
	}

	.no-poster {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.5rem;
		color: var(--bg);
		background: var(--text);
	}

	.movie-title {
		padding: 0.6rem 0.8rem 0;
		font-weight: 700;
	}

	.movie-caption {
		padding: 0 0.8rem;
		color: var(--text-dim);
	}

	.movie-title:last-child,
	.movie-caption {
		padding-bottom: 0.6rem;
	}
</style>
