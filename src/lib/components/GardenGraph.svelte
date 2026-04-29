<script>
	import { onMount } from 'svelte';
	import {
		forceSimulation,
		forceLink,
		forceManyBody,
		forceCenter,
		forceCollide
	} from 'd3-force';

	export let graph;

	let svgEl;
	let width = 600;
	let height = 300;
	let nodes = [];
	let edges = [];
	let simulation;
	let dragging = null;

	onMount(() => {
		if (svgEl) {
			width = svgEl.clientWidth;
			height = Math.min(300, width * 0.5);
		}

		nodes = graph.nodes.map((n) => ({ ...n, x: width / 2, y: height / 2 }));
		edges = graph.edges.map((e) => ({ ...e }));

		simulation = forceSimulation(nodes)
			.force(
				'link',
				forceLink(edges)
					.id((d) => d.id)
					.distance(80)
			)
			.force('charge', forceManyBody().strength(-200))
			.force('center', forceCenter(width / 2, height / 2))
			.force('collide', forceCollide(30))
			.on('tick', () => {
				nodes = [...nodes];
				edges = [...edges];
			});

		return () => simulation.stop();
	});

	function handleMouseDown(event, node) {
		dragging = node;
		node.fx = node.x;
		node.fy = node.y;
		simulation.alphaTarget(0.3).restart();

		const handleMouseMove = (e) => {
			if (!dragging || !svgEl) return;
			const rect = svgEl.getBoundingClientRect();
			dragging.fx = e.clientX - rect.left;
			dragging.fy = e.clientY - rect.top;
		};

		const handleMouseUp = () => {
			if (dragging) {
				dragging.fx = null;
				dragging.fy = null;
				dragging = null;
			}
			simulation.alphaTarget(0);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		};

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
	}
</script>

<svg bind:this={svgEl} {width} {height} class="garden-graph">
	{#each edges as edge}
		<line
			x1={edge.source.x}
			y1={edge.source.y}
			x2={edge.target.x}
			y2={edge.target.y}
			class="graph-edge"
		/>
	{/each}
	{#each nodes as node}
		<g
			class="graph-node"
			transform="translate({node.x},{node.y})"
			on:mousedown={(e) => handleMouseDown(e, node)}
			role="button"
			tabindex="0"
		>
			<circle r="6" class="node-dot" />
			<a href="/notes/{node.id}">
				<text dy="18" text-anchor="middle" class="node-label">{node.title}</text>
			</a>
		</g>
	{/each}
</svg>

<style>
	.garden-graph {
		width: 100%;
		display: block;
		cursor: grab;
	}

	.garden-graph:active {
		cursor: grabbing;
	}

	.graph-edge {
		stroke: var(--text-dim);
		stroke-width: 1;
		opacity: 0.4;
	}

	.graph-node {
		cursor: pointer;
	}

	.node-dot {
		fill: var(--link);
		stroke: var(--bg);
		stroke-width: 2;
		transition: fill var(--transition-fast);
	}

	.graph-node:hover .node-dot {
		fill: var(--coral);
	}

	.node-label {
		font-size: 9px;
		font-family: 'Space Mono', monospace;
		fill: var(--text);
		pointer-events: none;
	}
</style>
