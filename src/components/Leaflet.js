import React from 'react';
import _ from "lodash";
import {Button} from "@gisatcz/ptr-atoms";
import {PresentationMap, MapControls, ReactLeafletMap} from "@gisatcz/ptr-maps";

import france from "../data/fra_gadm_5_points.json";
// import france from "../data/france_gadm_4.json";

const view = {
	center: {lat: 46, lon: 5},
	boxRange: 500000
};

const osm = {
	key: 'background-osm',
	type: 'wmts',
	options: {
		url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
	}
};

function getTile(features, start, stop) {
	return {
		level: _.random(1,18),
		tile: [_.random(-90,90, true), _.random(-180,180, true)],
		features: features.slice(start, stop + 20) // some duplicities
	}
}

function getFirstTiledFeatures(features, step) {
	return [
		getTile(features, 0, step),
		getTile(features, step, 2*step)
	]
}

function getAllTiledFeatures(features, step) {
	let restTiledFeatures = [];
	for (let i = 0; i <= features.length/step; i++) {
		restTiledFeatures.push(getTile(features, i*step, (i+1)*step));
	}
	return restTiledFeatures;
}

const styleAsMarkers = {
	rules: [{
		styles: [{
			outlineWidth: 1,
			outlineColor: "#000000",
			fillOpacity: 0.7,
			outlineOpacity: 1,
			size: 12
		}, {
			attributeKey: "GID_1",
			attributeValues: {
				"FRA.1_1": {
					fill: "#ff0000",
				},
				"FRA.2_1": {
					fill: "#00ff00",
					size: 40
				},
				"FRA.3_1": {
					fill: "#0000ff"
				},
				"FRA.4_1": {
					fill: "#00ffff"
				},
				"FRA.5_1": {
					fill: "#ff00ff"
				},
				"FRA.6_1": {
					fill: "#ffff00"
				},
				"FRA.7_1": {
					fill: "#aaffcc"
				},
				"FRA.8_1": {
					fill: "#cf18cc"
				},
				"FRA.9_1": {
					fill: "#8118cc"
				},
				"FRA.10_1": {
					fill: "#8aa8cc"
				},
				"FRA.11_1": {
					fill: "#8a7818"
				},
				"FRA.12_1": {
					fill: "#8aa818"
				},
				"FRA.13_1": {
					fill: "#111818"
				}
			}
		}]
	}]
}

const styleAsPoints = {
	rules: [{
		styles: [{
			outlineWidth: 0,
			outlineColor: "#000000",
			fillOpacity: 0.7,
			outlineOpacity: 1,
			size: 1200
		}, {
			attributeKey: "GID_1",
			attributeValues: {
				"FRA.1_1": {
					fill: "#ff0000",
				},
				"FRA.2_1": {
					fill: "#00ff00",
					size: 4000
				},
				"FRA.3_1": {
					fill: "#0000ff"
				},
				"FRA.4_1": {
					fill: "#00ffff"
				},
				"FRA.5_1": {
					fill: "#ff00ff"
				},
				"FRA.6_1": {
					fill: "#ffff00"
				},
				"FRA.7_1": {
					fill: "#aaffcc"
				},
				"FRA.8_1": {
					fill: "#cf18cc"
				},
				"FRA.9_1": {
					fill: "#8118cc"
				},
				"FRA.10_1": {
					fill: "#8aa8cc"
				},
				"FRA.11_1": {
					fill: "#8a7818"
				},
				"FRA.12_1": {
					fill: "#8aa818"
				},
				"FRA.13_1": {
					fill: "#111818"
				}
			}
		}]
	}]
}


const layers = [
	{
	key: "layer",
	type: "canvas-vector",
	// type: "tiled-vector",
	// type: "vector",
	opacity: 1,

	options: {
		// renderAs: [{
		// 	type: "canvas-vector",
		// 	options: {
		// 		style: styleAsPoints
		// 	},
		// 	boxRangeRange: [50000, null]
		// }, {
		// 	type: "vector",
		// 	options: {
		// 		pointAsMarker: true,
		// 		style: styleAsMarkers
		// 	},
		// 	boxRangeRange: [null, 49999]
		// }],
		pointAsMarker: false,
		// tiles: getFirstTiledFeatures(france.features, 500),
		features: france.features,
		hoverable: true,
		hovered: {
			style: "default"
		},
		selectable: true,
		selected: {
			testSelection: {
				style: "default",
				hoveredStyle: "default"
			}
		},
		style: styleAsPoints,
		fidColumnName: "GID_5"
	}
}];

const style = {
	rules: [{
		styles: [{
			fill: "#bbeeee",
			outlineWidth: 1,
			outlineColor: "#666666",
			size: 3
		}]
	}]
}

class Leaflet extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			layers
		};

		this.addFeaturesTiled = this.addFeaturesTiled.bind(this);
		this.setStyle = this.setStyle.bind(this);
		this.removeTile = this.removeTile.bind(this);
		this.removeLayer = this.removeLayer.bind(this);
		this.onLayerClick = this.onLayerClick.bind(this);
		this.addLayer = this.addLayer.bind(this);
	}

	onLayerClick(mapKey, layerKey, selectedFeatures) {
		this.setState({
			layers: this.state.layers.map((layer, i) => {
				// Otherwise, this is the one we want - return an updated value
				if (layer.key === layerKey) {
					return {
						...layer,
						options: {
							...layer.options,
							selected: {
								...layer.options.selected,
								testSelection: {
									...layer.options.selected.testSelection,
									keys: selectedFeatures
								}
							}
						}
					}
				} else {
					return layer;
				}
			})
		});
	}

	setStyle() {
		this.setState({
			layers: this.state.layers.map((layer, i) => {
				// Otherwise, this is the one we want - return an updated value
				if (layer.key === 'layer') {
					return {
						...layer,
						options: {
							...layer.options,
							style,
							// features: layer.options.features.map(feature => _.cloneDeep(feature))
						}
					}
				} else {
					return layer;
				}
			})
		});
	}

	removeLayer() {
		this.setState({
			layers: null
		});
	}

	addLayer() {
		this.setState({
			layers
		});
	}

	removeTile() {
		const prevTiles = this.state.layers[0].options.tiles;
		const tiles = prevTiles.slice(1, prevTiles.length + 1);

		this.setState({
			layers: this.state.layers.map((layer, i) => {
				// Otherwise, this is the one we want - return an updated value
				if (layer.key === 'layer') {
					return {
						...layer,
						options: {
							...layer.options,
							tiles
						}
					}
				} else {
					return layer;
				}
			})
		});
	}

	addFeaturesTiled() {
		const restTiledFeatures = getAllTiledFeatures(france.features, 500);
		for (let i = 2; i < restTiledFeatures.length; i++) {
			setTimeout(() => {
				let tiles = [...this.state.layers[0].options.tiles];
				const tileToAdd = restTiledFeatures[i];

				if (!_.find(tiles, tile => tile.tile[0] === tileToAdd.tile[0])) {
					tiles.push(tileToAdd);
				}


				this.setState({
					layers: this.state.layers.map((layer, i) => {
						// Otherwise, this is the one we want - return an updated value
						if (layer.key === 'layer') {
							return {
								...layer,
								options: {
									...layer.options,
									tiles
								}
							}
						} else {
							return layer;
						}
					})
				});
			}, 1);
		}
	}

	render() {
		return (
			<div className="ptr-light">
				<div className="ptr-light" style={{display: 'flex', flexWrap: 'wrap'}}>
					<div style={{height: 400, width: 1000, margin: 10}}>
						<PresentationMap
							mapKey="leaflet"
							mapComponent={ReactLeafletMap}
							backgroundLayer={osm}
							view={view}
							layers={this.state.layers}
							onLayerClick={this.onLayerClick}
						>
							<MapControls zoomOnly levelsBased/>
						</PresentationMap>
					</div>
				</div>
				<Button onClick={this.setStyle}>Change style</Button>
				{/*<Button onClick={this.addFeaturesTiled}>Add the rest of tiles</Button>*/}
				{/*<Button onClick={this.removeTile}>Remove tile</Button>*/}
				<Button onClick={this.removeLayer}>Remove layer</Button>
				<Button onClick={this.addLayer}>Add layer</Button>
			</div>
		);
	}
}

export default Leaflet;