import React from 'react';
import {PresentationMap, MapControls, WorldWindMap, ReactLeafletMap, MapSet, MapSetMap, MapSetPresentationMap, MapWrapper} from "@gisatcz/ptr-maps";
import {HoverHandler} from "@gisatcz/ptr-core";
import {connects} from "@gisatcz/ptr-state";

import czGadm from "../../data/czGadm.json";

const ConnectedMap = connects.Map(PresentationMap);
const ConnectedMapSet = connects.MapSet(MapSet);

const view = {
    center: {lat: 50, lon: 15},
    boxRange: 1000000
};

const osm = {
    key: 'background-osm',
    type: 'wmts',
    options: {
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
};

const layers = [{
    key: "polygons-with-selection",
    type: "vector",
    options: {
        features: czGadm.features,
        fidColumnName: "GID_1"
    }
}];

class Presentation extends React.PureComponent {
    constructor(props) {
        super(props);

        props.addSet({
            key: 'map-wrapper-map-set',
            data: {
                backgroundLayer: osm,
                layers: layers,
                view: {
                    center: {
                        lat: 50,
                        lon: 15
                    },
                    boxRange: 5000000
                }
            }
        });

        props.setSetSync('map-wrapper-map-set', {center: true, boxRange: true, heading: true});
        props.addMap({key: 'map-wrapper-map-1'});
        props.addMap({key: 'map-wrapper-map-2'});
        props.addMap({key: 'map-wrapper-map-3'});
        props.addMapToSet('map-wrapper-map-set', 'map-wrapper-map-1');
        props.addMapToSet('map-wrapper-map-set', 'map-wrapper-map-2');
        props.addMapToSet('map-wrapper-map-set', 'map-wrapper-map-3');
    }

    render() {
        return (
            <div className="ptr-light" style={{paddingLeft: 10}}>
                <h3>Connected map set</h3>
                <div style={{height: 500}}>
                    <ConnectedMapSet
                        stateMapSetKey="map-wrapper-map-set"
                        mapComponent={ReactLeafletMap}
                        connectedMapComponent={ConnectedMap}
                    >
                        <MapControls levelsBased zoomOnly/>
                    </ConnectedMapSet>
                </div>

                <h3>Unconrolled unconnected Map set</h3>
                <div style={{height: 260, margin: 10}}>
                    <MapSet
                        activeMapKey='map-2'
                        mapComponent={ReactLeafletMap}
                        view={{
                            boxRange: 5000000
                        }}
                        sync={{
                            boxRange: false,
                            center: true
                        }}
                        backgroundLayer={osm}
                        wrapper
                        wrapperOptions={{
                            onMapRemove: (mapKey)=>{window.alert(mapKey)},
                        }}
                    >
                        <MapSetPresentationMap
                            mapKey='map-1'
                            name="Map 1"
                        />
                        <MapSetPresentationMap
                            mapKey='map-2'
                            name="Map 2"
                        />
                        <MapSetPresentationMap
                            mapKey='map-3'
                            name="Map XYZ"
                        />
                        <MapControls levelsBased zoomOnly/>
                    </MapSet>
                </div>

                <h3>PresentationMap component - wrapper, wrapperOptions as props</h3>
                <div style={{height: 260, width: 500, margin: 10}}>
                    <HoverHandler
                        popupContentComponent={
                            (props) => <b>{props.data["NAME_1"]}</b>
                        }
                    >
                        <PresentationMap
                            mapComponent={WorldWindMap}
                            name="Name from map"
                            mapKey="very special map key"
                            wrapper
                            wrapperOptions={{
                                title: "Mapička dlouhý název, předlouhý, tuze dlouhý, no, opravdu",
                                onMapRemove: (mapKey)=>{window.alert(mapKey)},
                                active: true
                            }}
                            backgroundLayer={osm}
                            layers={layers}
                            view={view}
                        >
                            <MapControls/>
                        </PresentationMap>
                    </HoverHandler>
                </div>

                <h3>presentation</h3>
                <div style={{height: 400, width: 500, margin: 10}}>
                    <MapWrapper title="Custom map title which is very looooooooong, longer than expected" onMapRemove={()=>{window.alert("Remove")}}>
                        <ReactLeafletMap
                            mapKey="leaflet"
                            backgroundLayer={osm}
                            view={view}
                        />
                    </MapWrapper>
                </div>
                <div style={{height: 400, width: 500, margin: 10}}>
                    <MapWrapper active onMapRemove={()=>{window.alert("Remove")}}>
                        <ReactLeafletMap
                            mapKey="leaflet"
                            backgroundLayer={osm}
                            view={view}
                        />
                    </MapWrapper>
                </div>
                <div style={{height: 400, width: 500, margin: 10}}>
                    <MapWrapper active title onMapRemove={()=>{window.alert("Remove")}}>
                        <WorldWindMap
                            backgroundLayer={osm}
                            view={view}
                        />
                    </MapWrapper>
                </div>
            </div>
        );
    }
}

export default Presentation;