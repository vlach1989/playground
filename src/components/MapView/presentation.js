import React from 'react';
import {MapControls, WorldWindMap, ReactLeafletMap, MapSet, MapSetPresentationMap, PresentationMap} from "@gisatcz/ptr-maps";
import CustomWrapper from "../MapWrapperPlayground/CustomWrapper";
import {connects} from "@gisatcz/ptr-state";

const osm = {
    key: 'background-osm',
    type: 'wmts',
    options: {
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
};

const ConnectedMap = connects.Map(PresentationMap);
const ConnectedMapSet = connects.MapSet(MapSet);

const leafletConnectedMap = {
    key: 'leafletConnectedMap',
    data: {
        backgroundLayer: osm,
        view: {
            center: {
                lat: 0,
                lon: 40
            },
            boxRange: 200000
        }
    }
};

const worldWindConnectedMap = {
    key: 'worldWindConnectedMap',
    data: {
        backgroundLayer: osm,
        view: {
            center: {
                lat: 0,
                lon: 40
            },
            boxRange: 200000
        }
    }
};

const connectedMapSet = {
    key: 'connectedMapSet',
    data: {
        backgroundLayer: osm,
        view: {
            center: {
                lat: 50,
                lon: 15
            },
            boxRange: 50000
        }
    },
    sync: {center: true, boxRange: true}
};

class Presentation extends React.PureComponent {
    componentDidMount() {
        const props = this.props;
        props.addMap(leafletConnectedMap);
        props.addMap(worldWindConnectedMap);

        props.addSet(connectedMapSet);

        props.addMap({key: 'connectedMapSet-map1'});
        props.addMap({key: 'connectedMapSet-map2'});
        props.addMap({key: 'connectedMapSet-map3'});

        props.addMapToSet('connectedMapSet', 'connectedMapSet-map1');
        props.addMapToSet('connectedMapSet', 'connectedMapSet-map2');
        props.addMapToSet('connectedMapSet', 'connectedMapSet-map3');
    }

    render() {
        return (
            <div className="ptr-light" style={{paddingLeft: 10}}>
                <h2>Presentational components</h2>
                <p>What's wrong with World wind in equal size & portrait view when zooming in at street level? :/</p>
                <div style={{height: 400, width: 400, margin: 10}}>
                    <ReactLeafletMap
                        backgroundLayer={osm}
                        view={{boxRange: 2000}}
                        mapKey='leaflet-presentational'
                    />
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{height: 200, width: 200, margin: 10}}>
                        <PresentationMap
                            backgroundLayer={osm}
                            wrapper={CustomWrapper}
                            view={{boxRange: 2000}}
                            mapComponent={ReactLeafletMap}
                            mapKey='leaflet-presentational'
                        >
                            <MapControls levelsBased zoomOnly/>
                        </PresentationMap>
                    </div>
                    <div style={{height: 200, width: 200, margin: 10}}>
                        <PresentationMap
                            backgroundLayer={osm}
                            wrapper={CustomWrapper}
                            view={{boxRange: 2000}}
                            mapComponent={WorldWindMap}
                        >
                            <MapControls levelsBased zoomOnly/>
                        </PresentationMap>
                    </div>
                    <div style={{height: 200, width: 200, margin: 10}}>
                        <PresentationMap
                            backgroundLayer={osm}
                            wrapper={CustomWrapper}
                            view={{boxRange: 2000000}}
                            mapComponent={ReactLeafletMap}
                            mapKey='leaflet-presentational-a'
                        >
                            <MapControls levelsBased zoomOnly/>
                        </PresentationMap>
                    </div>
                    <div style={{height: 200, width: 200, margin: 10}}>
                        <PresentationMap
                            backgroundLayer={osm}
                            wrapper={CustomWrapper}
                            view={{boxRange: 2000000}}
                            mapComponent={WorldWindMap}
                        >
                            <MapControls levelsBased zoomOnly/>
                        </PresentationMap>
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{height: 600, width: 200, margin: 10}}>
                        <PresentationMap
                            backgroundLayer={osm}
                            wrapper={CustomWrapper}
                            view={{boxRange: 2000}}
                            mapComponent={ReactLeafletMap}
                            mapKey='leaflet-presentational-1'
                        >
                            <MapControls levelsBased zoomOnly/>
                        </PresentationMap>
                    </div>
                    <div style={{height: 600, width: 200, margin: 10}}>
                        <PresentationMap
                            backgroundLayer={osm}
                            wrapper={CustomWrapper}
                            view={{boxRange: 2000}}
                            mapComponent={WorldWindMap}
                        >
                            <MapControls levelsBased zoomOnly/>
                        </PresentationMap>
                    </div>
                    <div style={{height: 600, width: 200, margin: 10}}>
                        <PresentationMap
                            backgroundLayer={osm}
                            wrapper={CustomWrapper}
                            view={{boxRange: 2000000}}
                            mapComponent={ReactLeafletMap}
                            mapKey='leaflet-presentational-a1'
                        >
                            <MapControls levelsBased zoomOnly/>
                        </PresentationMap>
                    </div>
                    <div style={{height: 600, width: 200, margin: 10}}>
                        <PresentationMap
                            backgroundLayer={osm}
                            wrapper={CustomWrapper}
                            view={{boxRange: 2000000}}
                            mapComponent={WorldWindMap}
                        >
                            <MapControls levelsBased zoomOnly/>
                        </PresentationMap>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{height: 200, width: 800, margin: 10}}>
                        <PresentationMap
                            backgroundLayer={osm}
                            wrapper={CustomWrapper}
                            view={{boxRange: 2000}}
                            mapComponent={ReactLeafletMap}
                            mapKey='leaflet-presentational-3'
                        >
                            <MapControls levelsBased zoomOnly/>
                        </PresentationMap>
                    </div>
                    <div style={{height: 200, width: 800, margin: 10}}>
                        <PresentationMap
                            backgroundLayer={osm}
                            wrapper={CustomWrapper}
                            view={{boxRange: 2000}}
                            mapComponent={WorldWindMap}
                        >
                            <MapControls levelsBased zoomOnly/>
                        </PresentationMap>
                    </div>
                    <div style={{height: 200, width: 800, margin: 10}}>
                        <PresentationMap
                            backgroundLayer={osm}
                            wrapper={CustomWrapper}
                            view={{boxRange: 2000000}}
                            mapComponent={ReactLeafletMap}
                            mapKey='leaflet-presentational-3a'
                        >
                            <MapControls levelsBased zoomOnly/>
                        </PresentationMap>
                    </div>
                    <div style={{height: 200, width: 800, margin: 10}}>
                        <PresentationMap
                            backgroundLayer={osm}
                            wrapper={CustomWrapper}
                            view={{boxRange: 2000000}}
                            mapComponent={WorldWindMap}
                        >
                            <MapControls levelsBased zoomOnly/>
                        </PresentationMap>
                    </div>
                </div>





                <h2>Controlled component</h2>
                <div style={{height: 300, width: 800, margin: 10}}>
                    <ConnectedMap
                        stateMapKey="leafletConnectedMap"
                        wrapper={CustomWrapper}
                        mapComponent={ReactLeafletMap}
                    >
                        <MapControls levelsBased zoomOnly/>
                    </ConnectedMap>
                </div>
                <div style={{height: 300, width: 800, margin: 10}}>
                    <ConnectedMap
                        stateMapKey="worldWindConnectedMap"
                        wrapper={CustomWrapper}
                        mapComponent={WorldWindMap}
                    >
                        <MapControls/>
                    </ConnectedMap>
                </div>

                <h2>Map set</h2>
                <h3>Presentation</h3>
                <div style={{height: 100, margin: 10}}>
                    <MapSet
                        activeMapKey='map-2'
                        sync={{
                            boxRange: true,
                            center: true
                        }}
                        backgroundLayer={osm}
                        view={{boxRange: 1000}}
                        wrapper={CustomWrapper}
                    >
                        <MapSetPresentationMap
                            mapKey='map-1'
                            mapComponent={ReactLeafletMap}
                        />
                        <MapSetPresentationMap
                            mapKey='map-2'
                            mapComponent={ReactLeafletMap}
                        />
                        <MapSetPresentationMap
                            mapKey='map-3'
                            mapComponent={ReactLeafletMap}
                        />
                        <MapControls levelsBased zoomOnly/>
                    </MapSet>
                </div>
                <h4>Levels-based World Wind</h4>
                <div style={{height: 500, margin: 10}}>
                    <MapSet
                        activeMapKey='map-2'
                        sync={{
                            boxRange: true,
                            center: true
                        }}
                        backgroundLayer={osm}
                        view={{boxRange: 666666}}
                        wrapper={CustomWrapper}
                    >
                        <MapSetPresentationMap
                            mapKey='map-1'
                            mapComponent={WorldWindMap}
                            levelsBased
                        />
                        <MapSetPresentationMap
                            mapKey='map-2'
                            mapComponent={WorldWindMap}
                            levelsBased
                        />
                        <MapSetPresentationMap
                            mapKey='map-3'
                            mapComponent={WorldWindMap}
                            levelsBased
                        />
                        <MapControls levelsBased zoomOnly/>
                    </MapSet>
                </div>
                <h4>Continual World Wind</h4>
                <div style={{height: 600, width: 400, margin: 10}}>
                    <MapSet
                        activeMapKey='map-2'
                        sync={{
                            boxRange: true,
                            center: true
                        }}
                        backgroundLayer={osm}
                        view={{boxRange: 666666}}
                        wrapper={CustomWrapper}
                        mapComponent={WorldWindMap}
                    >
                        <MapSetPresentationMap
                            mapKey='map-1'
                        />
                        <MapSetPresentationMap
                            mapKey='map-2'
                        />
                        <MapSetPresentationMap
                            mapKey='map-3'
                        />
                        <MapControls/>
                    </MapSet>
                </div>
                <h3>Controlled map set</h3>
                <div style={{height: 500, margin: 10}}>
                    <ConnectedMapSet
                        stateMapSetKey="connectedMapSet"
                        mapComponent={ReactLeafletMap}
                        connectedMapComponent={ConnectedMap}
                        wrapper={CustomWrapper}
                    >
                        <MapControls levelsBased zoomOnly/>
                    </ConnectedMapSet>
                </div>
                <h3>Mixed frameworks</h3>
                <div style={{height: 100, margin: 10}}>
                    <MapSet
                        activeMapKey='map-2'
                        sync={{
                            boxRange: true,
                            center: true
                        }}
                        backgroundLayer={osm}
                        view={{boxRange: 666666}}
                        wrapper={CustomWrapper}
                    >
                        <MapSetPresentationMap
                            mapKey='map-1'
                            mapComponent={ReactLeafletMap}
                        />
                        <MapSetPresentationMap
                            mapKey='map-2'
                            mapComponent={WorldWindMap}
                            levelsBased
                        />
                        <MapControls levelsBased zoomOnly/>
                    </MapSet>
                </div>
                <div style={{height: 500, margin: 10}}>
                    <MapSet
                        activeMapKey='map-2'
                        sync={{
                            boxRange: true,
                            center: true
                        }}
                        backgroundLayer={osm}
                        view={{boxRange: 666666}}
                        wrapper={CustomWrapper}
                    >
                        <MapSetPresentationMap
                            mapKey='map-1'
                            mapComponent={ReactLeafletMap}
                        />
                        <MapSetPresentationMap
                            mapKey='map-2'
                            mapComponent={WorldWindMap}
                            levelsBased
                        />
                        <MapControls levelsBased zoomOnly/>
                    </MapSet>
                </div>
                <div style={{height: 100, width: 600, margin: 10}}>
                    <MapSet
                        activeMapKey='map-2'
                        sync={{
                            boxRange: true,
                            center: true
                        }}
                        backgroundLayer={osm}
                        view={{boxRange: 6666}}
                        wrapper={CustomWrapper}
                    >
                        <MapSetPresentationMap
                            mapKey='map-1'
                            mapComponent={ReactLeafletMap}
                        />
                        <MapSetPresentationMap
                            mapKey='map-2'
                            mapComponent={WorldWindMap}
                            levelsBased
                        />
                        <MapControls levelsBased zoomOnly/>
                    </MapSet>
                </div>
            </div>
        );
    }
}

export default Presentation;