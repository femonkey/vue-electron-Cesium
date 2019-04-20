import Vue from 'vue'
import Router from 'vue-router'
import cesiumViewer from '@/components/CesiumViewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cesiumViewer',
      component: cesiumViewer
    }
  ]
})