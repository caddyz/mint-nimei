<template>
  <div class="box">
    <div class="shop_list" v-for="i in list" :key="i.id" @click="onItemClick(i)">
      <img :src="i.cover" class="img"/>
      <div  class="proNa">{{i.productName}}</div>
      <div class="pro">定金<span style="color: #FF4500">¥{{i.promotePrice}}</span>元</div>
      <div class="pro">{{i.stock}}人购买</div>
    </div>
  </div>
</template>
<script>
const li = [{
  id: '1',
  cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558166812270&di=f57cd906bae54e0303fd4119c50d0797&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F913c3f7541ba4ccfa0240da3fece6bbd_th.jpeg',
  productName: 'zhongs沙发沙发',
  promotePrice: 120,
  stock: 32
}, {
  id: '2',
  cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558166812270&di=f57cd906bae54e0303fd4119c50d0797&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F913c3f7541ba4ccfa0240da3fece6bbd_th.jpeg',
  productName: 'test1',
  promotePrice: 120,
  stock: 32
}, {
  id: '3',
  cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558166812270&di=f57cd906bae54e0303fd4119c50d0797&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170220%2F913c3f7541ba4ccfa0240da3fece6bbd_th.jpeg',
  productName: 'test2',
  promotePrice: 120,
  stock: 32
}]
export default {
  props: ['card'],
  data: function () {
    return {
      list: li
    }
  },
  methods: {
    onItemClick (i) {
      console.log('点击跳转' + JSON.stringify(i))
      // this.$router.push({path: '/detail', query: {id: i.id}})
    }
  }
}
</script>
<style scoped>
  .box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
  }
  .shop_list{
    box-sizing: border-box;
    flex: 0 0 50%;
    height: 250px;
    border: 1px solid white;
    margin-bottom: 10px;
  }
  .img{
    width: 100%;
    height: 73%;
  }
 .proNa {
   color: #666;
   font-size: 20px;
   height: 11%
 }
  .pro {
    font-size: 15px;
    color: lightgray;
    height: 7%;
    margin-bottom: 2px;
  }
</style>
