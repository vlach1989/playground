import _ from "lodash";

function getStatisticsFromMultipleProperties(features, properties) {
    if (properties.regexp) {
        let filteredProps = [];
        _.forEach(features, feature => {
            const props = _.pickBy(feature.properties, (value, key) => properties.regexp.test(key));
            if (!_.isEmpty(props)) {
                filteredProps.push(props);
            }
        });

        if (_.isEmpty(filteredProps)) {
            console.log("No property fits filter!");
        } else {
            const statistics = {
                min: _.min(_.flatten(_.map(filteredProps, props => Object.values(props)))),
                max: _.max(_.flatten(_.map(filteredProps, props => Object.values(props))))
            }
            console.log("Statistics", statistics);
        }
    } else {
        console.log("Missing regular epression!");
    }
}

export default {
    getStatisticsFromMultipleProperties
}