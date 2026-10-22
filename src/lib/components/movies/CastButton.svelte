<script lang="ts">
	import { onMount } from 'svelte';
	import { castStatus, initCast, playOnTv } from '$lib/cast';
	import ActionIcon from './ActionIcon.svelte';

	// Shown only in Chrome with a Cast device on the network, and hidden while this movie is
	// already on the TV (CastRemote takes over under the video).

	export let src: string; // absolute, with the family key
	export let title: string;
	export let poster: string | null; // absolute, with the family key
	export let video: HTMLVideoElement | undefined;

	onMount(initCast);

	function start() {
		const startAt = video?.currentTime ?? 0; // pick up where the page left off
		video?.pause();
		playOnTv(src, title, poster, startAt);
	}
</script>

{#if $castStatus.available && $castStatus.contentId !== src}
	<button type="button" class="action" on:click={start}>
		<ActionIcon name="cast" /> Play on TV
	</button>
	{#if $castStatus.error}
		<span class="cast-error" role="alert">{$castStatus.error}</span>
	{/if}
{/if}

<style>
	.cast-error {
		flex-basis: 100%;
		text-align: right;
		color: var(--coral);
	}
</style>
