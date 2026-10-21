<script>
	import MovieGrid from '$lib/components/movies/MovieGrid.svelte';

	export let data;
</script>

<svelte:head>
	<title>Home Movies — Derek Brimley</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="movies">
	<h1 class="section-label">Home Movies</h1>

	{#if data.collections.length === 0 && data.movies.length === 0}
		<p class="empty">No movies yet.</p>
	{/if}

	{#if data.collections.length > 0}
		<MovieGrid items={data.collections} />
	{/if}

	{#if data.movies.length > 0}
		{#if data.collections.length > 0}
			<h2 class="section-label more">More videos</h2>
		{/if}
		<MovieGrid items={data.movies} />
	{/if}
</div>

<style>
	.empty {
		color: var(--text-dim);
	}

	.more {
		margin-top: var(--spacing-2xl);
	}
</style>
