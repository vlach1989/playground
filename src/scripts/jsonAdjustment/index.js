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
 *     regexps: []
 * }
 */

export function adjustGeoJson(json, outputName, options) {
    json.features.forEach(feature => {
        if (options?.properties) {
            if (options.properties.remove) {
                feature.properties = removeProperties(feature.properties, options.properties.remove);
            }

            if (options.properties.updateRegexp) {
                feature.properties = updatePropertiesRegexp(feature.properties, options.properties.updateRegexp);
            }

            if (options.properties.update) {
                feature.properties = updateProperties(feature.properties, options.properties.update);
            }

            if (options.properties.changeKey) {
                feature.properties = changeKey(feature.properties, options.properties.changeKey);
            }
        }

        return feature;
    });

    download(JSON.stringify(json), outputName + ".json", "text/plain");
}

function updatePropertiesRegexp(properties, update) {
    let fitProperties = _.pickBy(properties, (value, key) => update.regexp.test(key));
    let restProperties = _.omitBy(properties, (value, key) => update.regexp.test(key));

    let newProperties = {};
    _.forIn(fitProperties, (value, key) => {
        const operations = update;
        if (operations) {
            if (operations.nullValue && operations.nullValue === value) {
                newProperties[key] = null;
            } else if (operations.integer) {
                newProperties[key] = Math.round(value);
            } else if (operations.decimals) {
                if (value === 0) {
                    newProperties[key] = 0;
                }

                newProperties[key] = Math.round((value + Number.EPSILON) * Math.pow(10, operations.decimals)) / Math.pow(10, operations.decimals);
            } else {
                newProperties[key] = value;
            }
        } else {
            newProperties[key] = value;
        }
    });

    return {...restProperties, ...newProperties};
}

function updateProperties(properties, update) {
    let newProperties = {};
    _.forIn(properties, (value, key) => {
        const operations = update[key];
        if (operations) {
            if (operations.nullValue && operations.nullValue === value) {
                newProperties[key] = null;
            } else if (operations.integer) {
                newProperties[key] = Math.round(value);
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

function changeKey(properties, changes) {
    let newProperties = {};
    _.forIn(properties, (value, key) => {
        const change = changes[key];
        if (change) {
            newProperties[change] = value;
        } else {
            newProperties[key] = value;
        }
    });

    return newProperties;
}

function removeProperties(properties, remove) {
    let newProperties = {...properties};

    if (remove.regexps) {
        remove.regexps.forEach(regexp => {
            newProperties = _.omitBy(newProperties, (value, key) => regexp.test(key));
        });
    }

    if (remove.list) {
        newProperties = _.omitBy(newProperties, (value, key) => _.includes(remove.list, key));
    }

    return newProperties;
}