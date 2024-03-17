import type { Map } from 'ol';
import { createEmpty, extend, isEmpty } from 'ol/extent';
import LayerGroup from 'ol/layer/Group';
import VectorLayer from 'ol/layer/Vector';

export function fitAll(map: Map) {
	const extent = createEmpty();

	map.getLayers().forEach(function (layer) {
		if (layer instanceof LayerGroup) {
			layer.getLayers().forEach(function (groupLayer) {
				if (groupLayer instanceof VectorLayer) extend(extent, groupLayer.getSource().getExtent());
			});
		} else if (layer instanceof VectorLayer) {
			extend(extent, layer.getSource().getExtent());
		}
	});

	if (isEmpty(extent)) return;

	const padding = [16, 16, 16, 16];

	map.getView().fit(extent, { padding });
}
