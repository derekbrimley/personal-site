<script lang="ts">
	// Line icons for the movie page buttons (paths from Lucide, ISC licence).
	export let name: 'cast' | 'link' | 'download' | 'check';
</script>

<svg
	viewBox="0 0 24 24"
	width="1.1em"
	height="1.1em"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{#if name === 'cast'}
		<path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
		<path d="M2 12a9 9 0 0 1 8 8" />
		<path d="M2 16a5 5 0 0 1 4 4" />
		<line x1="2" y1="20" x2="2.01" y2="20" />
	{:else if name === 'link'}
		<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
		<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
	{:else if name === 'download'}
		<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
		<polyline points="7 10 12 15 17 10" />
		<line x1="12" y1="15" x2="12" y2="3" />
	{:else}
		<polyline points="20 6 9 17 4 12" />
	{/if}
</svg>
