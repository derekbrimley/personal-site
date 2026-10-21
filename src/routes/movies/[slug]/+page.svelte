<script>
	import CollectionView from '$lib/components/movies/CollectionView.svelte';
	import MovieView from '$lib/components/movies/MovieView.svelte';

	export let data;
</script>

{#if data.kind === 'collection'}
	<CollectionView {data} />
{:else}
	<MovieView {data} />
{/if}
