/**
 * @Description:
 * @author  ZQ
 * @date 2022/2/8 18:53:48
 */
import * as Cesium from 'cesium/Build/Cesium/Cesium'
/**
 *
 * @param views
 * @param index
 * @constructor
 */
export function AddTerrainLayers(viewer,index) {
    var scene = viewer.scene;
    var terrainProvider;
    let type = window.EarthBaseConfig.EarthDEM[0].show;
    if(type){
        if (scene.terrainProvider._url){
            terrainProvider = new Cesium.EllipsoidTerrainProvider({});
        }
        else {
            terrainProvider = new Cesium.CesiumTerrainProvider({
                url : window.EarthBaseConfig.EarthDEM[0].url,
                requestWaterMask: true
            });
        }
        scene.terrainProvider = terrainProvider;
    }else {
        scene.terrainProvider = new Cesium.EllipsoidTerrainProvider({});
    }
}