import Vue from 'vue'
import Router from 'vue-router'
// import Swipper from '@/components/Swipper'
import Home from '@/pages/Home'
// import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
