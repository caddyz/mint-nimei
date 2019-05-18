import Vue from 'vue'
import Router from 'vue-router'
// import Swipper from '@/components/Swipper'
// import ShopCard from '@/components/Shop_card'
import Home from '@/pages/Home'
// import Home from '@/pages/Index'
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
