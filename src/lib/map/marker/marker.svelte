<script lang="ts">
	import { Feature, type Map } from 'ol';
	import { Point } from 'ol/geom';
	import VectorLayer from 'ol/layer/Vector';
	import { fromLonLat } from 'ol/proj';
	import VectorSource from 'ol/source/Vector';
	import Icon from 'ol/style/Icon';
	import Style from 'ol/style/Style';
	import { createEventDispatcher, getContext, onMount } from 'svelte';
	import markerPin from './pin.webp';

	export let zIndex = 1;
	export let lon: number;
	export let lat: number;
	export let data: unknown = undefined;

	const map = getContext<Map>('map');
	const projection = map.getView().getProjection();
	const dispatch = createEventDispatcher();

	const image = new Icon({
		scale: 0.25,
		anchor: [164, 246],
		anchorXUnits: 'pixels',
		anchorYUnits: 'pixels',
		crossOrigin: 'anonymous',
		src: markerPin
	});

	const style = new Style({ image });

	const layer = new VectorLayer({
		zIndex,
		source: new VectorSource({
			features: [
				new Feature({
					onmouseenter,
					onmouseleave,
					onclick,
					type: 'marker',
					geometry: new Point(fromLonLat([lon, lat], projection))
				})
			]
		}),
		style
	});

	function onmouseenter() {
		dispatch('mouseenter', data);
	}

	function onmouseleave() {
		dispatch('mouseleave', data);
	}

	function onclick() {
		dispatch('click', data);
	}

	function changeZIndex(node: HTMLDivElement, _zindex: number) {
		return {
			update(_zindex: number) {
				layer.setZIndex(_zindex);
			}
		};
	}

	onMount(() => {
		map.addLayer(layer);

		return () => {
			map.removeLayer(layer);
		};
	});
</script>

<div use:changeZIndex={zIndex} class="contents" />
