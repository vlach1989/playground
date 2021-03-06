import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {Provider} from '@gisatcz/ptr-state';
import createStore from './state/Store';

import '@gisatcz/ptr-core/lib/styles/reset.css';
import '@gisatcz/ptr-core/lib/styles/base.scss';
import './index.scss';

import MapZoomBoxRangeRange from "./components/MapZoomBoxRangeRange";
import MapWrapperPlayground from "./components/MapWrapperPlayground";
import MapView from "./components/MapView";

// import scripts from "./scripts";
import Test from "./components/Test";
import LeafletGlify from "./components/Leaflet";

import ContactMap from "../src/components/ContactMap";

const {store} = createStore();
ReactDOM.render(
    <Provider store={store}>
		{/*<LeafletGlify/>*/}
        {/*<MapZoomBoxRangeRange/>*/}
        {/*<MapWrapperPlayground/>*/}
        {/*<MapView/>*/}
        {/*<div>Check console!</div>*/}
        {/*<Test/>*/}
		<ContactMap />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
