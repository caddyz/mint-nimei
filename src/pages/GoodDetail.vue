<template>
  <div class="detail">
    <heade :title="title"></heade>
    <detail-swipper></detail-swipper>
    <div class="goodInfo">
      <h2>{{good.name}}</h2>
      <div class="sub">已有{{good.subtitle}}人购买</div>
      <div class="dj">定金：<span>￥{{good.di}}元</span></div>
      <div class="sc">市场价：￥{{good.shi}}元</div>
      <div class="yh">优惠价：￥{{good.you}}元</div>
    </div>
    <div class="seg"></div>
    <div class="tit">
      <span style="color: orangered">▌</span>
      <span style="font-size: 18px">注意事项</span>
    </div>
    <div class="con">
      如有疑问请联系客服，客服热线：0000000000
    </div>
    <div class="seg"></div>
    <div class="tit">
      <span style="color: orangered">▌</span>
      <span style="font-size: 18px">商品参数</span>
    </div>
    <div class="can">
      <div>商品编号：暂无</div>
      <div>上架时间：2019-4-22</div>
      <div>防伪认证：已认证</div>
    </div>
    <div class="seg"></div>
    <div class="tit">
      <span style="color: orangered">▌</span>
      <span style="font-size: 18px">商品详情</span>
    </div>
    <div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
    <div class="buy">
      <div class="tu" style="border-right: solid 1px lightgrey" @click="toHome">
        <img src="../assets/home.png"/>
        <div>首页</div>
      </div>
      <div class="tu">
        <img src="../assets/message.png"/>
        <div>客服</div>
      </div>
      <div class="goBuy" style="background-color: #ff6e30" @click="addShopCard">加入购物车</div>
      <div class="goBuy" style="background-color: #ff4856" @click="payNow">立即购买</div>
    </div>
  </div>
</template>
<script>
import Heade from '@/components/common/Header'
import DetailSwipper from '@/components/DetailSwipper'
export default {
  data () {
    return {
      title: '商品详情',
      good: {
        id: 1,
        name: '这是一个商品',
        subtitle: '神魔都没有',
        di: 500,
        shi: 90000,
        you: 1233
      }
    }
  },
  components: {
    Heade,
    DetailSwipper
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    addShopCard () {
      console.log('添加购物车。。。')
    },
    payNow () {
      console.log('立即购买')
    }
  }
}
</script>
<style scoped>
  .con,.can{
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .can div{
    display: flex;
    flex-direction: row;
    align-items: center;
    text-indent: 2em;
    margin-bottom: 8px;
    font-size: 17px;
  }
  .tit{
    height: 22px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
  }
  .goBuy{
    width: 30%;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tu{
    width: 20%;
  }
  .buy{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    z-index: 9999;
    background-color: whitesmoke;
    display: flex;
    flex-direction: row;
  }
  .seg{
    height: 7px;
    background-color: whitesmoke;
  }
  .goodInfo{
    height: 150px;
  }
  .goodInfo div{
    height: 19%;
  }
  .goodInfo h2{
    height: 24%;
    font-size: 23px;
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
  }
  .sub{
    color: lightgray;
    font-size: 19px;
  }
  .sc{
    text-decoration: line-through;
  }
  .dj span{
    color: palevioletred;
    font-size: 21px;
  }
  .dj,.sc{
    font-size: 17px;
  }
  .yh{
    font-size: 19px;
    color: indianred;
  }
</style>
