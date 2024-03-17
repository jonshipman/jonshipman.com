<script lang="ts">
	import { browser } from '$app/environment';
	import { Map, View } from 'ol';
	import type { FeatureLike } from 'ol/Feature';
	import { Projection, fromLonLat, get as getProjection } from 'ol/proj';
	import { register } from 'ol/proj/proj4';
	import proj4 from 'proj4';
	import { setContext } from 'svelte';
	import { fitAll } from './fit-all';

	export let projection = 'EPSG:3857';
	export let zoom = 4;
	export let lat = 37.0902;
	export let lon = -95.7129;

	let className = 'relative w-full aspect-video';
	let ready = false;
	let map: Map;

	const options = {
		controls: [],
		interactions: []
	};

	if (browser) {
		map = new Map(options);
		setContext('map', map);
	}

	function mapInit(node: HTMLDivElement) {
		let view: View | undefined = undefined;

		if (projection.includes(';')) {
			const [projName, projData] = projection.split(';');

			proj4.defs(projName, projData);
			register(proj4);
			const projectionInstance = getProjection(projName);

			if (projectionInstance)
				view = new View({
					projection: projectionInstance,
					zoom,
					center: [lon, lat]
				});
		} else {
			view = new View({
				projection: new Projection({
					code: projection,
					units: 'us-ft'
				}),
				zoom,
				center: [lon, lat]
			});
		}

		if (view) {
			map.setView(view);
			map.setTarget(node);
			map.getView().setCenter(fromLonLat([lon, lat], map.getView().getProjection()));
			map.getView().setZoom(zoom);

			map.on('postrender', () => {
				ready = true;
			});

			let selected: FeatureLike | null = null;
			let onmouseleave: null | (() => void) = null;

			map.on('click', function (e) {
				map.forEachFeatureAtPixel(e.pixel, function (f) {
					const properties = f.getProperties();
					if (typeof properties.onclick === 'function') properties.onclick();
				});
			});

			map.on('pointermove', function (e) {
				map.forEachFeatureAtPixel(e.pixel, function (f) {
					if (selected !== null) {
						if (onmouseleave) onmouseleave();
						onmouseleave = null;
						selected = null;
					}

					selected = f;
					return true;
				});

				if (selected) {
					const properties = selected.getProperties();
					if (properties.type === 'marker') {
						properties.onmouseenter();

						if (typeof properties.onmouseleave === 'function')
							onmouseleave = properties.onmouseleave;
					}
				}
			});

			let fitTimeout: ReturnType<typeof setTimeout>;
			map.on('change:size', function () {
				clearTimeout(fitTimeout);

				fitTimeout = setTimeout(() => {
					fitAll(map);
				}, 2000);
			});
		}

		return {
			destroy() {
				map.setTarget(undefined);
			}
		};
	}

	export { className as class, externalMap as map };
</script>

<div class={className}>
	<div class="absolute inset-0" use:mapInit />

	{#if ready}
		<slot />
	{/if}
</div>
