<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Home Movies — Derek Brimley</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="locked">
	{#if $page.status === 401}
		<h1 class="section-label">Home Movies</h1>
		<p>These videos are just for family. If that's you, ask Derek for the link.</p>
	{:else}
		<h1 class="section-label">{$page.status}</h1>
		<p>{$page.error?.message}</p>
	{/if}
</div>

<style>
	.locked {
		max-width: 640px;
	}
</style>
