import {adjustGeoJson} from "./jsonAdjustment";

import riskZones from "./jsonAdjustment/riskZones.json";
import road from "./jsonAdjustment/road.json";

function run() {
    adjustGeoJson(road, 'road', {
        properties: {
            update: {
                "km": {decimals: 2, nullValue: 9999},
                "max": {decimals: 2, nullValue: 9999},
                "mean": {decimals: 2, nullValue: 9999},
                "median": {decimals: 2, nullValue: 9999},
                "min": {decimals: 2, nullValue: 9999},
                "p25": {decimals: 2, nullValue: 9999},
                "p75": {decimals: 2, nullValue: 9999},
                "p75_weight": {decimals: 2, nullValue: 9999},
                "A": {nullValue: 9999},
                "B": {nullValue: 9999},
                "C": {nullValue: 9999},
                "D": {nullValue: 9999},
                "haz_0_10": {nullValue: 9999},
                "haz_10_20": {nullValue: 9999},
                "haz_20_30": {nullValue: 9999},
                "haz_30_40": {nullValue: 9999},
                "haz_40_50": {nullValue: 9999},
                "haz_50_": {nullValue: 9999}
            }
        }
    });
}

export default run();