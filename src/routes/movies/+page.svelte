<script>
	import { resolve } from '$app/paths';

	export let data;
</script>

<svelte:head>
	<title>Home Movies — Derek Brimley</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="movies">
	<h1 class="section-label">Home Movies</h1>

	{#if data.movies.length === 0}
		<p class="empty">No movies yet.</p>
	{:else}
		<ul class="movie-grid">
			{#each data.movies as movie (movie.slug)}
				<li>
					<a href={resolve('/movies/[slug]', { slug: movie.slug })} class="movie-card">
						{#if movie.hasPoster}
							<img src="/movies/{movie.slug}/poster" alt="" loading="lazy" />
						{:else}
							<span class="no-poster" aria-hidden="true">▶</span>
						{/if}
						<span class="movie-title">{movie.title}</span>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.empty {
		color: var(--text-dim);
	}

	.movie-grid {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: var(--spacing-lg);
	}

	.movie-card {
		display: flex;
		flex-direction: column;
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
		padding: 0.6rem 0.8rem;
		font-weight: 700;
	}
</style>
