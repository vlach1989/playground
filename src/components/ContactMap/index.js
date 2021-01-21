import {ReactLeafletMap} from '@gisatcz/ptr-maps';
import React from 'react';
import {Icon} from "@gisatcz/ptr-atoms";

import './style.scss';

import {background, metro, poi, parking} from '../../data/gst-web-map/layers';
import {HoverHandler} from "@gisatcz/ptr-core";

const Gisat = (props) => (
	<svg
		style={props.style} //todo better solution (used for transform: rotate)
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		width="32px"
		height="32px"
		viewBox="0 0 32 32"
		xmlSpace="preserve"
		className={`ptr-icon ${props.className || ''}`}
	>
		<g>
			<path
				d="m 17.066669,3.5074879 c -0.412302,0.021037 -0.835994,0.078277 -1.036695,0.078277 h -3.066173 c 0.08405,0.080218 0.167095,0.159979 0.250105,0.240559 1.945977,1.8754824 4.137662,3.6586073 5.771507,5.8249651 1.546386,2.051849 2.115393,4.505765 2.115393,7.031578 0,5.273663 -4.720205,8.721677 -8.137005,12.010768 h 5.00401 C 22.311904,24.509947 26.655079,20.323742 31,16.140654 27.948087,13.199269 24.893695,10.260147 21.841574,7.3201574 20.571426,6.0972821 19.302716,4.8745876 18.032723,3.6506778 17.879088,3.502499 17.47897,3.4864506 17.066669,3.5074879 Z M 9.3305967,8.1201116 c -1.9666419,0.00312 -3.9249945,0.6665327 -5.4622164,1.9512004 -2.4080237,2.012852 -3.45646161,5.316134 -2.5392348,8.333653 0.9285423,3.052946 3.6843736,5.244671 6.8120204,5.683683 3.1495081,0.43983 6.4260001,-0.946707 8.2000071,-3.606475 0.854213,-1.281889 1.321628,-2.801649 1.323075,-4.341519 -0.0039,-3.171127 -1.993,-6.035014 -4.874183,-7.304593 C 11.692805,8.3530837 10.510581,8.1182394 9.3305967,8.1201116 Z"/>
		</g>
	</svg>
);

const view = {
	center: {lat: 50.0995436, lon: 14.4225},
	boxRange: 1000,
};

const layers = [parking];

const resources = {
	icons: {
		"monitor": {
			component: Icon,
			componentProps: {icon: "monitor"},
			anchorPoint: [0.5,1],
		},
		"monitoring": {
			component: Icon,
			componentProps: {icon: "monitoring"},
			anchorPoint: [0.5, 1],
		},
		crop: {
			component: Icon,
			componentProps: {icon: "crop"},
			anchorPoint: [0.5, 1],
		},
		"cross": {
			component: Icon,
			componentProps: {icon: "cross"},
			anchorPoint: [0.5, 0.5],
		},
		"gear": {
			component: Icon,
			componentProps: {icon: "gear"},
			anchorPoint: [0.5, 0.5],
		},
		"plus": {
			component: Icon,
			componentProps: {icon: "plus"},
			anchorPoint: [0.5, 0.5],
		},
		gisat: {
			component: Gisat,
			anchorPoint: [0.5, 0.5],
		}
	},
};

const Tooltip = props => {
	const data = props.data;

	return (
		<div>
			<div className="gst-map-tooltip-title">{data.name}</div>
			<div className="gst-map-tooltip-description">{data.description}</div>
		</div>
	);
};

class ContactMap extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			layers
		}

		this.onLayerClick = this.onLayerClick.bind(this);
	}

	onLayerClick(map, layer, features) {
		if (layer === 'parking') {
			let updatedLayers = [
				{
					...parking,
					options: {
						...parking.options,
						selected: {
							...parking.options.selected,
							testSelection: {
								...parking.options.selected.testSelection,
								keys: features,
							},
						},
					},
				},
			];

			this.setState({
				layers: updatedLayers,
			});
		} else if (layer === 'metro') {
			let updatedLayers = [
				{
					...metro,
					options: {
						...metro.options,
						selected: {
							...metro.options.selected,
							testSelection: {
								...metro.options.selected.testSelection,
								keys: features,
							},
						},
					},
				},
			];

			this.setState({
				layers: updatedLayers,
			});
		}
	}

	render() {
		return (
			<div className={'gst-contact-map ptr-light'}>
				<HoverHandler popupContentComponent={Tooltip}>
					<ReactLeafletMap
						mapKey="react-leaflet-map"
						view={view}
						backgroundLayer={background}
						layers={this.state.layers}
						resources={resources}
						onLayerClick={this.onLayerClick}
					/>
				</HoverHandler>
			</div>
		);
	}
}

export default ContactMap;