import React from 'react';

import {Action} from '@gisatcz/ptr-state';

const path = process.env.PUBLIC_URL;


function init(Store, {absPath, isPreloaded, currentUrl, navHandler}) {
    /**
     * Creates router instance that can be used to manipulat urls.
     *
     * App handler updates store with current page and it's up to views to react to the change.
     * In case of url change, redux selector possibly retrieves different data and passes them
     * into some the component.
     *
     */

    Store.dispatch(Action.app.setKey('vlach1989playground'));
    Store.dispatch(Action.app.setBaseUrl(path));
}

export {init};