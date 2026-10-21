<script lang="ts">
	import { castStatus, playOrPause, seekTo, skip, stopCasting } from '$lib/cast';

	// The remote under the video while this movie is playing on the TV.

	export let src: string;
	export let video: HTMLVideoElement | undefined;

	function stop() {
		if (video) video.currentTime = $castStatus.current; // carry on here from where the TV was
		stopCasting();
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

{#if $castStatus.contentId === src}
	<div class="remote">
		<p class="remote-status">Playing on {$castStatus.device}</p>
		<div class="remote-seek">
			<span>{clock($castStatus.current)}</span>
			<input
				type="range"
				min="0"
				max={$castStatus.duration || 0}
				step="1"
				value={$castStatus.current}
				on:change={(e) => seekTo(Number(e.currentTarget.value))}
				aria-label="Position"
			/>
			<span>{clock($castStatus.duration)}</span>
		</div>
		<div class="remote-buttons">
			<button type="button" class="action" on:click={() => skip(-30)}>&laquo; 30s</button>
			<button type="button" class="action" on:click={playOrPause}
				>{$castStatus.paused ? 'Play' : 'Pause'}</button
			>
			<button type="button" class="action" on:click={() => skip(30)}>30s &raquo;</button>
			<button type="button" class="action" on:click={stop}>Stop casting</button>
		</div>
	</div>
{/if}

<style>
	.remote {
		margin-top: var(--spacing-lg);
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
</style>
