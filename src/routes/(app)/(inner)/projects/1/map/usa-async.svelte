<script lang="ts">
	import { tailwind } from '$1/util';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Geojson, Marker, Openlayer } from '$lib/map';
	import { dispatch } from '$lib/util';
	import type { WpPosts } from '$lib/wp';
	import { fade } from 'svelte/transition';
	import map from './map-polygon.json';

	const blue = tailwind.theme.colors.blue as any;
	const orange = tailwind.theme.colors.orange as any;

	export let hovervalue = '';
	let element: HTMLDivElement;

	let locations: WpPosts<any>;
	$: locations = $page.data.locations;
</script>

<div transition:fade bind:this={element}>
	<Openlayer
		class="contents"
		projection="EPSG:2163;+proj=laea +lat_0=45 +lon_0=-100 +x_0=0 +y_0=0 +ellps=sphere +units=m +no_defs +type=crs"
	>
		{#each map.features as feature}
			<Geojson geojson={feature.geometry} strokeColor={blue.DEFAULT} fillColor={orange.DEFAULT} />
		{/each}

		{#each locations.results as location, index}
			<Marker
				lat={location.meta.latitude}
				lon={location.meta.longitude}
				zIndex={hovervalue === location.title.rendered ? 999 : 100 - index}
				on:mouseenter={() => {
					dispatch(element, 'hover', { title: location.title.rendered });
				}}
				on:mouseleave={() => {
					dispatch(element, 'hover', { title: '' });
				}}
				on:click={() => {
					goto(location.link);
				}}
			/>
		{/each}

		<slot />
	</Openlayer>
</div>
