import {adjustGeoJson} from "./jsonAdjustment";
import jsonStatistics from "./jsonStatistics";

// import riskZones from "./jsonAdjustment/riskZones.json";
// import vietnamRoads from "./jsonAdjustment/roads.json";
// import mya_zones from "./jsonAdjustment/mya_zones.json";
import crp_zones from "./jsonAdjustment/crp_zones.json";
// import t41_orig from "./jsonAdjustment/t41_orig.json";
// import t41 from "./jsonStatistics/t41.json";
// import t143_1 from "./jsonAdjustment/t143/t143_1.json";
// import t143_2 from "./jsonAdjustment/t143/t143_2.json";
// import t143_3 from "./jsonAdjustment/t143/t143_3.json";
// import t143_4 from "./jsonAdjustment/t143/t143_4.json";
// import t143_5 from "./jsonAdjustment/t143/t143_5.json";
// import t143_6 from "./jsonAdjustment/t143/t143_6.json";
// import t143_7 from "./jsonAdjustment/t143/t143_7.json";
// import t143_8 from "./jsonAdjustment/t143/t143_8.json";
// import t143_9 from "./jsonAdjustment/t143/t143_9.json";
// import t143_10 from "./jsonAdjustment/t143/t143_10.json";
// import t143_11 from "./jsonAdjustment/t143/t143_11.json";
// import t143_12 from "./jsonAdjustment/t143/t143_12.json";
// import t143_13 from "./jsonAdjustment/t143/t143_13.json";

function run() {
    // jsonStatistics.getStatisticsFromMultipleProperties(t41.features, {
    //    regexp: /^d_/
    // });

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
    
    // Myanmar zones
    // adjustGeoJson(mya_zones, 'zones', {
    //     properties: {
    //         update: {
    //             "count": {integer: true, nullValue: 9999},
    //             "km": {decimals: 2, nullValue: 9999},
    //             "max": {decimals: 2, nullValue: 9999},
    //             "mean": {decimals: 2, nullValue: 9999},
    //             "median": {decimals: 2, nullValue: 9999},
    //             "min": {decimals: 2, nullValue: 9999},
    //             "p25": {decimals: 2, nullValue: 9999},
    //             "p75": {decimals: 2, nullValue: 9999},
    //             "p75_weight": {decimals: 2, nullValue: 9999},
    //             "p75_dts": {decimals: 2},
    //             "p75_dts_weighted": {decimals: 2},
    //             "A": {nullValue: 9999, integer: true,},
    //             "B": {nullValue: 9999, integer: true,},
    //             "C": {nullValue: 9999, integer: true,},
    //             "D": {nullValue: 9999, integer: true,},
    //             "haz_0_10": {nullValue: 9999, integer: true,},
    //             "haz_10_20": {nullValue: 9999, integer: true,},
    //             "haz_20_30": {nullValue: 9999, integer: true,},
    //             "haz_30_40": {nullValue: 9999, integer: true,},
    //             "haz_40_50": {nullValue: 9999, integer: true,},
    //             "haz_50_": {nullValue: 9999, integer: true,},
    //             "susc_mean": {decimals: 2, nullValue: 9999},
    //             "susc_m_rng": {decimals: 2, nullValue: 9999},
    //             "susc_m_std": {decimals: 2, nullValue: 9999},
    //             "susc_p83": {decimals: 2, nullValue: 9999}
    //         }
    //     }
    // });


    // Vietnam roads

    // adjustGeoJson(vietnamRoads, 'roads', {
    //     properties: {
    //         remove: {
    //             list: ["Shape_Leng", "name"]
    //         }
    //     }
    // });

    // Vietnam zones
    adjustGeoJson(crp_zones, 'zones', {
        properties: {
            remove: {
                list: ["shape_leng", "type", "shape_area", "hgt_bld", "img_before", "img_after","s1986_1990","s1991_1995","s1996_2000", "s2001_2005","s2006_2010","s2011_2015", "s1985", "max","2001-2005", "s_chng", "s_bu"]
            }
        }
    });
}

export default run();