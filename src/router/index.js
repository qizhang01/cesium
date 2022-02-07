import Vue from 'vue'
import Router from 'vue-router'
import CesiumMap from '../components/CesiumContainer'
import mapboxgl from '../components/mapboxgl/MapboxContainer'


Vue.use(Router)

// component: () => import('@/components/CesiumContainer')//路由懒加载方式
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/mapboxgl',
    name: 'mapboxgl',
    component: mapboxgl
  },
    {
    path: '/',
    name: 'CesiumMap',
    component: CesiumMap
  }
  ]
})

