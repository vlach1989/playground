import download from "downloadjs";
import _ from "lodash";

/**
 * @param json {JSON}
 * @param outputName {string}
 * @param options {Object}
 * @param options.geometry {Object}
 * @param options.properties {Object}
 * @param options.properties.update {Object}
 * @param options.properties.remove {Array}
 *
 *
 * options.geometry example:
 * {
 *     decimals: 7
 * }
 *
 * options.properties.update example:
 * {
 *     "attrKey": {
 *         decimals: 2
 *     },
 *     "attr2Key": {
 *         decimals: 3
 *     }
 * }
 *
 * options.properties.remove example:
 * {
 *     list: [],
 *     regexp: []
 * }
 */

function updateProperties(properties, update) {
    let newProperties = {};
    _.forIn(properties, (value, key) => {
        const operations = update[key];
        if (operations) {
            if (operations.nullValue && operations.nullValue === value) {
                newProperties[key] = null;
            } else if (operations.decimals) {
                newProperties[key] = Math.round((value + Number.EPSILON) * Math.pow(10, operations.decimals)) / Math.pow(10, operations.decimals);
            } else {
                newProperties[key] = value;
            }
        } else {
            newProperties[key] = value;
        }
    });

    return newProperties;
}

export function adjustGeoJson(json, outputName, options) {
    json.features.forEach(feature => {
        if (options?.properties?.update) {
            feature.properties = updateProperties(feature.properties, options.properties.update);
        }

        return feature;
    });

    download(JSON.stringify(json), outputName + ".json", "text/plain");
}