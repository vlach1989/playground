import metroData from './data/metro.json';
import poiData from './data/poi.json';
import parkingData from './data/prague_points_parking.json';
import {metroStyle, poiStyle, parkingStyle} from './styles';

export const background = {
	key: 'background-osm',
	type: 'wmts',
	options: {
		url:
			'https://basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}@2x.png',
	},
};

export const poi = {
	key: 'poi',
	name: 'POI',
	type: 'vector',
	options: {
		features: poiData.features,
		fidColumnName: 'id',
		style: poiStyle.data.definition,
		hoverable: true,
		hovered: {
			style: {
				fill: '#ffffff'
			},
		},
		pointAsMarker: true,
	},
};

export const parking = {
	key: 'parking',
	name: 'Parking',
	type: 'vector',
	options: {
		features: parkingData.features,
		fidColumnName: 'OBJECTID',
		style: parkingStyle.data.definition,
		hoverable: true,
		hovered: {
			style: {
				fill: '#ffffff'
			},
		},
		pointAsMarker: true,
		selectable: true,
		selected: {
			testSelection: {
				style: 'default',
				hoveredStyle: 'default',
			},
		},
	},
};

export const metro = {
	key: 'metro',
	name: 'Metro',
	type: 'vector',
	options: {
		features: metroData.features,
		fidColumnName: 'OBJECTID',
		style: metroStyle.data.definition,
		hoverable: true,
		hovered: {
			style: {
				outlineOpacity: 1,
			},
		},
		selectable: true,
		selected: {
			testSelection: {
				style: 'default',
				hoveredStyle: 'default',
			},
		},
	},
};
