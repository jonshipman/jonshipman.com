<script lang="ts">
	import dogThumb from '$lib/portfolio/2025-12-12-0804-thumb.jpg';
	import comicThumb from '$lib/portfolio/2026-02-21-1816-thumb.jpg';
	import princessThumb from '$lib/portfolio/2026-02-21-2029-thumb.jpg';
	import beeThumb from '$lib/portfolio/2026-02-26-0824-thumb.jpg';
	import tobyThumb from '$lib/portfolio/2026-03-06-1651-thumb.jpg';
	import kpopThumb from '$lib/portfolio/kpop-thumb.jpg';
	import yukikoThumb from '$lib/portfolio/2025-12-07-1932-thumb.jpg';
	import frierenThumb from '$lib/portfolio/2026-02-11-1938-thumb.jpg';
	import port1Thumb from '$lib/portfolio/2026-03-03-1620-thumb.jpg';
	import port2Thumb from '$lib/portfolio/2025-07-10-0941-thumb.jpg';
	import hondaThumb from '$lib/portfolio/honda-thumb.jpg';

	import dogFull from '$lib/portfolio/2025-12-12-0804-full.jpg';
	import comicFull from '$lib/portfolio/2026-02-21-1816-full.jpg';
	import princessFull from '$lib/portfolio/2026-02-21-2029-full.jpg';
	import beeFull from '$lib/portfolio/2026-02-26-0824-full.jpg';
	import tobyFull from '$lib/portfolio/2026-03-06-1651-full.jpg';
	import kpopFull from '$lib/portfolio/kpop-full.jpg';
	import yukikoFull from '$lib/portfolio/2025-12-07-1932-full.jpg';
	import frierenFull from '$lib/portfolio/2026-02-11-1938-full.jpg';
	import port1Full from '$lib/portfolio/2026-03-03-1620-full.jpg';
	import port2Full from '$lib/portfolio/2025-07-10-0941-full.jpg';
	import hondaFull from '$lib/portfolio/honda-full.jpg';

	import Masonry from 'svelte-bricks';
	import PortfolioItem from './portfolio-item.svelte';

	const [minColWidth, maxColWidth, gap] = [200, 800, 20];

	const images = [
		[port2Thumb, port2Full],
		[beeThumb, beeFull],
		[kpopThumb, kpopFull],
		[dogThumb, dogFull],
		[princessThumb, princessFull],
		[tobyThumb, tobyFull],
		[comicThumb, comicFull],
		[yukikoThumb, yukikoFull],
		[frierenThumb, frierenFull],
		[port1Thumb, port1Full],
		[hondaThumb, hondaFull]
	];

	const items: { id: number; src: string; full: string }[] = [];

	for (let index = 0; index < images.length; index++) {
		const element = images[index];
		items.push({ id: index + 1, src: element[0], full: element[1] });
	}
</script>

<Masonry {minColWidth} {maxColWidth} {gap} {items}>
	{#snippet children({ item: { src, full } })}
		<PortfolioItem {src} {full} />
	{/snippet}
</Masonry>
