<script>
	import { resolve } from '$app/paths';
	import ActionIcon from './ActionIcon.svelte';
	import CastButton from './CastButton.svelte';
	import CastRemote from './CastRemote.svelte';

	/** @type {Extract<import('../../../routes/movies/[slug]/$types').PageData, { kind: 'movie' }>} */
	export let data;

	/** @type {HTMLVideoElement | undefined} */
	let video;
	let copied = false;

	async function share() {
		if (navigator.share) {
			try {
				await navigator.share({ title: data.title, url: data.pageUrl });
			} catch {
				// closed the share sheet
			}
			return;
		}
		await navigator.clipboard.writeText(data.pageUrl);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<svelte:head>
	<title>{data.title} — Home Movies</title>
	<meta name="robots" content="noindex" />
	<meta property="og:type" content="video.other" />
	<meta property="og:title" content={data.title} />
	<meta property="og:url" content={data.pageUrl} />
	{#if data.posterUrl}
		<meta property="og:image" content={data.posterUrl} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<article class="movie">
	<div class="movie-top">
		{#if data.collection}
			<a href={resolve('/movies/[slug]', { slug: data.collection.slug })} class="back-link"
				>&larr; {data.collection.name}</a
			>
		{:else}
			<a href={resolve('/movies')} class="back-link">&larr; home movies</a>
		{/if}

		<div class="actions">
			<CastButton src={data.videoUrl} title={data.title} poster={data.posterUrl} {video} />
			<button type="button" class="action" on:click={share}>
				<ActionIcon name={copied ? 'check' : 'link'} />
				{copied ? 'Copied!' : 'Share link'}
			</button>
			<!-- A file download from the video endpoint, not a page navigation. -->
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a class="action" href={`${resolve('/movies/[slug]/video', { slug: data.slug })}?download`}>
				<ActionIcon name="download" /> Download
			</a>
		</div>
	</div>
	<h1 class="movie-title">{data.title}</h1>

	<!-- Keyed URLs: Chrome's own Cast button hands `src` to the TV, which has no cookie. -->
	<!-- svelte-ignore a11y_media_has_caption -->
	<video
		bind:this={video}
		controls
		playsinline
		preload="metadata"
		src={data.videoUrl}
		poster={data.posterUrl ?? undefined}
	></video>

	<CastRemote src={data.videoUrl} {video} />
</article>

<style>
	.back-link {
		font-size: 1rem;
		color: var(--text-dim);
		letter-spacing: 0.04em;
	}

	.back-link:hover {
		color: var(--link);
	}

	.movie-title {
		margin-top: var(--spacing-sm);
	}

	video {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9;
		background: var(--text);
		border: 2px solid var(--border);
		box-shadow: 5px 5px 0 var(--shadow);
	}

	.movie-top {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-sm) var(--spacing-md);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
	}

	/* :global reaches the Play on TV button inside CastButton */
	.actions :global(.action) {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font: inherit;
		font-size: 1rem;
		color: var(--link);
		background: none;
		border: 1px dashed var(--text-dim);
		padding: 0.15rem 0.6rem;
		letter-spacing: 0.06em;
		cursor: pointer;
		transition: border-color var(--transition-fast);
	}

	.actions :global(.action:hover) {
		border-color: var(--border);
		text-decoration: none;
	}
</style>
