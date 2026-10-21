<script lang="ts">
	/* global cast, chrome -- set by the Cast sender library and Chrome */
	import { onDestroy, onMount } from 'svelte';

	// Plays the movie on a Chromecast with Google's Cast sender library (Chrome only; other
	// browsers never see the button). The TV fetches `src` itself, straight from R2, so the
	// laptop or phone is only a remote.

	export let src: string; // absolute, with the family key
	export let title: string;
	export let poster: string | null; // absolute, with the family key
	export let video: HTMLVideoElement | undefined;

	const SDK = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1';

	let available = false; // a Cast device is on the network
	let casting = false; // this movie is playing on the TV
	let device = '';
	let paused = false;
	let current = 0;
	let duration = 0;

	let player: cast.framework.RemotePlayer | undefined;
	let controller: cast.framework.RemotePlayerController | undefined;
	let cleanup: (() => void)[] = [];

	onMount(() => {
		if (!('chrome' in window)) return; // not Chrome: no Cast support, don't load the library
		if (window.cast?.framework) {
			setup();
			return;
		}
		window.__onGCastApiAvailable = (ok) => {
			if (ok) setup();
		};
		if (!document.querySelector(`script[src="${SDK}"]`)) {
			const script = document.createElement('script');
			script.src = SDK;
			document.head.append(script);
		}
	});

	onDestroy(() => cleanup.forEach((fn) => fn()));

	function setup() {
		const { CastContext, CastContextEventType, CastState, RemotePlayer, RemotePlayerController } =
			cast.framework;
		const context = CastContext.getInstance();
		context.setOptions({
			receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
			autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
		});

		const onState = () => {
			available = context.getCastState() !== CastState.NO_DEVICES_AVAILABLE;
		};
		context.addEventListener(CastContextEventType.CAST_STATE_CHANGED, onState);
		onState();

		const remote = new RemotePlayer();
		const remoteController = new RemotePlayerController(remote);
		const onChange = () => {
			casting = remote.isConnected && remote.mediaInfo?.contentId === src;
			device = context.getCurrentSession()?.getCastDevice().friendlyName ?? 'the TV';
			paused = remote.isPaused;
			current = remote.currentTime;
			duration = remote.duration;
		};
		remoteController.addEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE, onChange);
		onChange();
		player = remote;
		controller = remoteController;

		cleanup = [
			() => context.removeEventListener(CastContextEventType.CAST_STATE_CHANGED, onState),
			() =>
				remoteController.removeEventListener(
					cast.framework.RemotePlayerEventType.ANY_CHANGE,
					onChange
				)
		];
	}

	async function playOnTv() {
		const context = cast.framework.CastContext.getInstance();
		if (!context.getCurrentSession()) {
			try {
				await context.requestSession(); // Chrome's device picker
			} catch {
				return; // picker closed
			}
		}
		const session = context.getCurrentSession();
		if (!session) return;

		const info = new chrome.cast.media.MediaInfo(src, 'video/mp4');
		const metadata = new chrome.cast.media.GenericMediaMetadata();
		metadata.title = title;
		if (poster) metadata.images = [new chrome.cast.Image(poster)];
		info.metadata = metadata;

		const request = new chrome.cast.media.LoadRequest(info);
		request.currentTime = video?.currentTime ?? 0; // pick up where the page left off
		video?.pause();
		await session.loadMedia(request);
	}

	function skip(seconds: number) {
		if (!player || !controller) return;
		player.currentTime = Math.min(Math.max(player.currentTime + seconds, 0), player.duration);
		controller.seek();
	}

	function seekTo(event: Event) {
		if (!player || !controller) return;
		player.currentTime = Number((event.currentTarget as HTMLInputElement).value);
		controller.seek();
	}

	function stop() {
		if (video) video.currentTime = current; // carry on here from where the TV was
		cast.framework.CastContext.getInstance().endCurrentSession(true);
	}

	function clock(seconds: number): string {
		const s = Math.floor(seconds % 60)
			.toString()
			.padStart(2, '0');
		const m = Math.floor((seconds / 60) % 60);
		const h = Math.floor(seconds / 3600);
		return h ? `${h}:${m.toString().padStart(2, '0')}:${s}` : `${m}:${s}`;
	}
</script>

{#if casting}
	<div class="remote">
		<p class="remote-status">Playing on {device}</p>
		<div class="remote-seek">
			<span>{clock(current)}</span>
			<input
				type="range"
				min="0"
				max={duration || 0}
				step="1"
				value={current}
				on:change={seekTo}
				aria-label="Position"
			/>
			<span>{clock(duration)}</span>
		</div>
		<div class="remote-buttons">
			<button type="button" class="action" on:click={() => skip(-30)}>&laquo; 30s</button>
			<button type="button" class="action" on:click={() => controller?.playOrPause()}
				>{paused ? 'Play' : 'Pause'}</button
			>
			<button type="button" class="action" on:click={() => skip(30)}>30s &raquo;</button>
			<button type="button" class="action" on:click={stop}>Stop casting</button>
		</div>
	</div>
{:else if available}
	<button type="button" class="action" on:click={playOnTv}>Play on TV</button>
{/if}

<style>
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
	}

	.remote {
		flex-basis: 100%;
		border: 2px solid var(--border);
		box-shadow: 4px 4px 0 var(--shadow);
		padding: var(--spacing-md);
	}

	.remote-status {
		font-weight: 700;
		margin-bottom: var(--spacing-sm);
	}

	.remote-seek {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		margin-bottom: var(--spacing-md);
	}

	.remote-seek input {
		flex: 1;
		accent-color: var(--text);
	}

	.remote-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
	}
</style>
