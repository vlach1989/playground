import React from 'react';
import {PresentationMap, MapControls, WorldWindMap, ReactLeafletMap, MapSet, MapSetMap, MapSetPresentationMap} from "@gisatcz/ptr-maps";
import CustomWrapper from "./MapWrapperPlayground/CustomWrapper";

const view = {
    center: {lat: 50, lon: 15},
    boxRange: 1000000
};

const viewLimits = {
  boxRangeRange: [50000,2000000]
};

const osm = {
    key: 'background-osm',
    type: 'wmts',
    options: {
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
};

class MapZoomBoxRangeRange extends React.PureComponent {
    render() {
        return (
            <div className="ptr-light" style={{display: 'flex', flexWrap: 'wrap'}}>
                <div style={{height: 400, width: 1000, margin: 10}}>
                    <PresentationMap
                        mapKey="leaflet"
                        mapComponent={ReactLeafletMap}
                        backgroundLayer={osm}
                        view={view}
                        viewLimits={viewLimits}
                        wrapper={CustomWrapper}
                    >
                        <MapControls zoomOnly levelsBased/>
                    </PresentationMap>
                </div>
                <div style={{height: 400, width: 500, margin: 10}}>
                    <PresentationMap
                        mapComponent={WorldWindMap}
                        backgroundLayer={osm}
                        view={view}
                        viewLimits={viewLimits}
                        levelsBased={true}
                        wrapper={CustomWrapper}
                    >
                        <MapControls zoomOnly levelsBased/>
                    </PresentationMap>
                </div>
                <div style={{height: 400, width: 500, margin: 10}}>
                    <PresentationMap
                        mapComponent={WorldWindMap}
                        backgroundLayer={osm}
                        view={view}
                        viewLimits={viewLimits}
                        wrapper={CustomWrapper}
                    >
                        <MapControls/>
                    </PresentationMap>
                </div>
            </div>
        );
    }
}

export default MapZoomBoxRangeRange;