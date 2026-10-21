<script>
	import { resolve } from '$app/paths';

	export let data;

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
	<a href={resolve('/movies')} class="back-link">&larr; home movies</a>
	<h1 class="movie-title">{data.title}</h1>

	<!-- svelte-ignore a11y_media_has_caption -->
	<video
		controls
		playsinline
		preload="metadata"
		src="/movies/{data.slug}/video"
		poster={data.hasPoster ? `/movies/${data.slug}/poster` : undefined}
	></video>

	<div class="actions">
		<button type="button" class="action" on:click={share}
			>{copied ? 'Copied!' : 'Share link'}</button
		>
		<!-- A file download from the video endpoint, not a page navigation. -->
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a class="action" href={`${resolve('/movies/[slug]/video', { slug: data.slug })}?download`}
			>Download</a
		>
	</div>
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

	.actions {
		display: flex;
		gap: var(--spacing-sm);
		margin-top: var(--spacing-lg);
	}

	.action {
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

	.action:hover {
		border-color: var(--border);
		text-decoration: none;
	}
</style>
