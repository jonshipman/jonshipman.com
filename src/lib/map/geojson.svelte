<script lang="ts">
	import { tailwind } from '$lib/util';
	import type { Map } from 'ol';
	import type Feature from 'ol/Feature';
	import type { FeatureLike } from 'ol/Feature';
	import GeoJSON from 'ol/format/GeoJSON';
	import type { Geometry } from 'ol/geom';
	import VectorLayer from 'ol/layer/Vector';
	import VectorSource from 'ol/source/Vector';
	import { Fill, Stroke, Style } from 'ol/style';
	import { getContext, onMount } from 'svelte';
	import { fitAll } from './fit-all';

	type GeoJSON =
		| { type: string; coordinates: number[][][] }
		| { type: string; coordinates: number[][][][] };

	export let geojson: GeoJSON;
	export let zIndex = 10;

	const map = getContext<Map>('map');
	const projection = map.getView().getProjection();

	const blue = tailwind.theme.colors.blue as any;
	const orange = tailwind.theme.colors.orange as any;

	const style = new Style({
		stroke: new Stroke({
			color: blue.DEFAULT,
			width: 1.5
		}),
		fill: new Fill({
			color: orange.DEFAULT
		})
	});

	const features = {
		type: 'FeatureCollection',
		features: [{ type: 'Feature', geometry: geojson, properties: {} }]
	};

	const mapVector: VectorSource<FeatureLike> = new VectorSource({
		features: new GeoJSON().readFeatures(features, {
			featureProjection: projection
		})
	});

	const layer = new VectorLayer({
		zIndex,
		source: mapVector as unknown as VectorSource<Feature<Geometry>>,
		style
	});

	onMount(() => {
		map.addLayer(layer);
		fitAll(map);

		return () => {
			map.removeLayer(layer);
		};
	});
</script>
