<script>
	import { resolve } from '$app/paths';
	import MovieGrid from './MovieGrid.svelte';

	/** @type {Extract<import('../../../routes/movies/[slug]/$types').PageData, { kind: 'collection' }>} */
	export let data;
</script>

<svelte:head>
	<title>{data.name} — Home Movies</title>
	<meta name="robots" content="noindex" />
	<meta property="og:title" content="{data.name} — Home Movies" />
	<meta property="og:url" content={data.pageUrl} />
	{#if data.posterUrl}
		<meta property="og:image" content={data.posterUrl} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<div class="collection">
	<a href={resolve('/movies')} class="back-link">&larr; home movies</a>
	<h1 class="collection-name">{data.name}</h1>
	<MovieGrid items={data.movies} />
</div>

<style>
	.back-link {
		font-size: 1rem;
		color: var(--text-dim);
		letter-spacing: 0.04em;
	}

	.back-link:hover {
		color: var(--link);
	}

	.collection-name {
		margin-top: var(--spacing-sm);
		margin-bottom: var(--spacing-lg);
	}
</style>
