import Vue from 'vue'
import Router from 'vue-router'
// import Swipper from '@/components/Swipper'
// import ShopCard from '@/components/Shop_card'
import Home from '@/pages/Home'
import GoodDetail from '@/pages/GoodDetail'
import Shopping from '@/pages/Shopping'
import Info from '@/pages/Info'
import Merchant from '@/pages/Merchant'
import MoreGoods from '@/pages/MoreGoods'
import Search from '@/pages/Search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/goodDetail',
      name: 'GoodDetail',
      component: GoodDetail
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/merchant',
      name: 'Merchant',
      component: Merchant
    },
    {
      path: '/moreGoods',
      name: 'MoreGoods',
      component: MoreGoods
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
