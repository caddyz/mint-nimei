<template>
  <div class="sp">
    <heade :title="title"></heade>
    <good-card></good-card>
    <!--<div class="shop_card" >-->
      <!--<div class="yu"><div class="cri"></div></div>-->
      <!--<card :li="item" style="width: 90%"></card>-->
    <!--</div>-->
    <div class="account">
      <div class="bu"><div class="cri"></div><div style="font-size: 15px;color: orangered">&nbsp;全选</div></div>
      <div class="bu">合计：<span style="color: red">￥20000000</span></div>
      <div class="bu" style="background-color: #EE3A8C;font-size: 20px" @click="goOrder">去结算</div>
    </div>
  </div>
</template>
<script>
import Heade from '@/components/common/Header'
import GoodCard from '@/components/common/GoodCard'
import Card from '@/components/common/Card'
import Slide from '@/components/Slide'

const ti = [{
  id: 1,
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558609589604&di=8f7beb0683918426c648f46620ad8e9f&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn0%2Fjfs%2Ft2452%2F31%2F1885115214%2F279795%2F2d2d6a44%2F567dfd47N08715111.jpg',
  tit: '纳米无痕双眼皮',
  num: 1,
  pri: 458,
  shic: 1200
}, {
  id: 2,
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558609589604&di=8f7beb0683918426c648f46620ad8e9f&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn0%2Fjfs%2Ft2452%2F31%2F1885115214%2F279795%2F2d2d6a44%2F567dfd47N08715111.jpg',
  tit: '纳米无痕双眼皮',
  num: 1,
  pri: 458,
  shic: 1200
}, {
  id: 3,
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558609589604&di=8f7beb0683918426c648f46620ad8e9f&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn0%2Fjfs%2Ft2452%2F31%2F1885115214%2F279795%2F2d2d6a44%2F567dfd47N08715111.jpg',
  tit: '纳米无痕双眼皮',
  num: 1,
  pri: 458,
  shic: 1200
}]
export default {
  components: {
    GoodCard,
    Heade,
    Card,
    Slide
  },
  data () {
    return {
      title: '购物车',
      shopLi: ti
    }
  },
  methods: {
    goOrder () {
      this.$router.push('/order')
    }
  }
}
</script>
<style>
  .sp{
    position: relative;
  }
  .shop_card{
    display: flex;
    flex-direction: row;
  }
  .yu{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
  }
  .account{
    position: fixed;
    left: 0;
    bottom: 50px;
    width: 100%;
    height: 50px;
    z-index: 9999;
    background-color: whitesmoke;
    display: flex;
    flex-direction: row;
  }
  .bu{
    display: flex;
    flex-direction: row;
    width: 33%;
    justify-content: center;
    align-items: center;
  }
  .cri{
    width: 18px;
    height: 18px;
    background: lightgrey;
    -moz-border-radius: 9px;
    -webkit-border-radius: 9px;
    border-radius: 9px;
  }
</style>
