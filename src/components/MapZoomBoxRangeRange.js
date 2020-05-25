import React from 'react';
import {PresentationMap, MapControls, WorldWindMap} from "@gisatcz/ptr-maps";

const view = {
    center: {lat: 50, lon: 15},
    boxRange: 2000000
};

const presentational_backgroundLayer = {
    key: 'background-osm',
    type: 'wmts',
    options: {
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
};

class MapZoomBoxRangeRange extends React.PureComponent {
    render() {
        return (
            <div className="ptr-light" style={{height: 600}}>
                <PresentationMap
                    mapComponent={WorldWindMap}
                    backgroundLayer={presentational_backgroundLayer}
                    view={view}
                >
                    <MapControls/>
                </PresentationMap>
            </div>
        );
    }
}

export default MapZoomBoxRangeRange;