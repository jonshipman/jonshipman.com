<script lang="ts">
	import type { Picture } from '@sveltejs/enhanced-img';

	import dogThumb from '$lib/portfolio/2025-12-12-0804-thumb.jpg?enhanced';
	import comicThumb from '$lib/portfolio/2026-02-21-1816-thumb.jpg?enhanced';
	import princessThumb from '$lib/portfolio/2026-02-21-2029-thumb.jpg?enhanced';
	import beeThumb from '$lib/portfolio/2026-02-26-0824-thumb.jpg?enhanced';
	import tobyThumb from '$lib/portfolio/2026-03-06-1651-thumb.jpg?enhanced';
	import kpopThumb from '$lib/portfolio/kpop-thumb.jpg?enhanced';
	import yukikoThumb from '$lib/portfolio/2025-12-07-1932-thumb.jpg?enhanced';
	import frierenThumb from '$lib/portfolio/2026-02-11-1938-thumb.jpg?enhanced';
	import port1Thumb from '$lib/portfolio/2026-03-03-1620-thumb.jpg?enhanced';
	import port2Thumb from '$lib/portfolio/2025-07-10-0941-thumb.jpg?enhanced';
	import hondaThumb from '$lib/portfolio/honda-thumb.jpg?enhanced';
	import minorDetailThumb from '$lib/portfolio/minor-detail-thumb.jpg?enhanced';
	import aigaThumb from '$lib/portfolio/aiga-banner-thumb.jpg?enhanced';
	import edgeWeekThumb from '$lib/portfolio/edge-week-thumb.jpg?enhanced';
	import amRoyThumb from '$lib/portfolio/am-royal-08-thumb.jpg?enhanced';

	import dogFull from '$lib/portfolio/2025-12-12-0804-full.jpg?enhanced';
	import comicFull from '$lib/portfolio/2026-02-21-1816-full.jpg?enhanced';
	import princessFull from '$lib/portfolio/2026-02-21-2029-full.jpg?enhanced';
	import beeFull from '$lib/portfolio/2026-02-26-0824-full.jpg?enhanced';
	import tobyFull from '$lib/portfolio/2026-03-06-1651-full.jpg?enhanced';
	import kpopFull from '$lib/portfolio/kpop-full.jpg?enhanced';
	import yukikoFull from '$lib/portfolio/2025-12-07-1932-full.jpg?enhanced';
	import frierenFull from '$lib/portfolio/2026-02-11-1938-full.jpg?enhanced';
	import port1Full from '$lib/portfolio/2026-03-03-1620-full.jpg?enhanced';
	import port2Full from '$lib/portfolio/2025-07-10-0941-full.jpg?enhanced';
	import hondaFull from '$lib/portfolio/honda-full.jpg?enhanced';
	import minorDetailFull from '$lib/portfolio/minor-detail-full.jpg?enhanced';
	import aigaFull from '$lib/portfolio/aiga-banner-full.jpg?enhanced';
	import edgeWeekFull from '$lib/portfolio/edge-week-full.jpg?enhanced';
	import amRoyFull from '$lib/portfolio/am-royal-08-full.jpg?enhanced';

	import Masonry from 'svelte-bricks';
	import PortfolioItem from './portfolio-item.svelte';

	const [minColWidth, maxColWidth, gap] = [200, 800, 20];

	const images = [
		[port2Thumb, port2Full],
		[beeThumb, beeFull],
		[kpopThumb, kpopFull],
		[amRoyThumb, amRoyFull],
		[dogThumb, dogFull],
		[princessThumb, princessFull],
		[aigaThumb, aigaFull],
		[tobyThumb, tobyFull],
		[minorDetailThumb, minorDetailFull],
		[comicThumb, comicFull],
		[yukikoThumb, yukikoFull],
		[frierenThumb, frierenFull],
		[edgeWeekThumb, edgeWeekFull],
		[port1Thumb, port1Full],
		[hondaThumb, hondaFull]
	];

	const items: { id: number; src: string | Picture; full: string | Picture }[] = [];

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
