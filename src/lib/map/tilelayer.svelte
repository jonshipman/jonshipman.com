<script lang="ts">
	import type { Map } from 'ol';
	import TileLayer from 'ol/layer/Tile';
	import type TileSource from 'ol/source/Tile';
	import { getContext, onMount } from 'svelte';

	export let source: TileSource;
	export let zIndex = 0;

	const map = getContext<Map>('map');
	const layer = new TileLayer({ source, zIndex });

	onMount(() => {
		map.addLayer(layer);

		return () => {
			if (map) map.removeLayer(layer);
		};
	});
</script>

<slot />
