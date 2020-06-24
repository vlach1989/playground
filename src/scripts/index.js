import {adjustGeoJson} from "./jsonAdjustment";
import jsonStatistics from "./jsonStatistics";

import riskZones from "./jsonAdjustment/riskZones.json";
import road from "./jsonAdjustment/road.json";
import t41_orig from "./jsonAdjustment/t41_orig.json";
import t41 from "./jsonStatistics/t41.json";

function run() {
    jsonStatistics.getStatisticsFromMultipleProperties(t41.features, {
       regexp: /^d_/
    });

    // adjustGeoJson(t41, 't41', {
    //     properties: {
    //         remove: {
    //             regexps: [/^m_/],
    //             list: ['lat', 'lon', 'h_sd', 'vel_sd', 'ktemp', 'svet', 'lvet', 'in', 'fin', 'st_dev', 'cl_jmp', 's0_mod', 'vacc_mod', 'cl_noise', 'vel_last', 'cl_ue', 'corr_ue', "ws_zone","aoi01_class_rr","size","vel_last","td_last","svel_last","std_last", "href"]
    //         },
    //         updateRegexp: {
    //             regexp: /^d_/,
    //             integer: true,
    //             nullValue: 9999
    //         },
    //         update: {
    //             "h": {decimals: 2, nullValue: 9999},
    //             "h_ref": {decimals: 2, nullValue: 9999},
    //             "vel_avg": {decimals: 2, nullValue: 9999},
    //             "vel_cum": {decimals: 2, nullValue: 9999},
    //             "coh": {decimals: 2, nullValue: 9999},
    //             "s0": {decimals: 2, nullValue: 9999},
    //             "inc_ang": {decimals: 2, nullValue: 9999},
    //             "stdev": {decimals: 2, nullValue: 9999},
    //             "coh_mod": {decimals: 2, nullValue: 9999},
    //             "sens": {decimals: 2, nullValue: 9999},
    //             "aspect": {decimals: 2, nullValue: 9999},
    //             "slope": {decimals: 2, nullValue: 9999},
    //             "az_ang": {decimals: 2, nullValue: 9999},
    //         },
    //         changeKey: {
    //             "orig_id": "id"
    //         }
    //     }
    // });

    // adjustGeoJson(road, 'road', {
    //     properties: {
    //         update: {
    //             "km": {decimals: 2, nullValue: 9999},
    //             "max": {decimals: 2, nullValue: 9999},
    //             "mean": {decimals: 2, nullValue: 9999},
    //             "median": {decimals: 2, nullValue: 9999},
    //             "min": {decimals: 2, nullValue: 9999},
    //             "p25": {decimals: 2, nullValue: 9999},
    //             "p75": {decimals: 2, nullValue: 9999},
    //             "p75_weight": {decimals: 2, nullValue: 9999},
    //             "A": {nullValue: 9999},
    //             "B": {nullValue: 9999},
    //             "C": {nullValue: 9999},
    //             "D": {nullValue: 9999},
    //             "haz_0_10": {nullValue: 9999},
    //             "haz_10_20": {nullValue: 9999},
    //             "haz_20_30": {nullValue: 9999},
    //             "haz_30_40": {nullValue: 9999},
    //             "haz_40_50": {nullValue: 9999},
    //             "haz_50_": {nullValue: 9999}
    //         }
    //     }
    // });
}

export default run();