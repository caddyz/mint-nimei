<template>
  <div>
    <div class="gc">
      <div class="img" @click="checkGood">
        <img :src="shopList.img" alt=""/>
      </div>
      <div class="con">
        <div class="ti">
          <div>{{shopList.tit}}</div>
          <div style="text-decoration: line-through #FF1493">市场价：<span style="color: #FF69B4">￥3585</span></div>
        </div>
        <div class="pr">
          <div style="color:red;">￥<span style="font-size: 18px">20000</span></div>
          <div>x&nbsp;{{shopList.num}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['li'],
  data () {
    return {
      shopList: this.li
    }
  },
  methods: {
    checkGood () {
      console.log('跳转...')
    },
    reduceNum (index) {
      console.log('减少数量' + index)
      if (this.shopList[index].num > 1) {
        this.shopList[index].num--
      }
    },
    addNum (index) {
      console.log('增加数量' + index)
      this.shopList[index].num++
    }
  }
}
</script>
<style scoped>
  .gc{
    height: 100px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    width: 100%;
  }
  .img{
    width: 30%;
  }
  .img img{
    width: 100%;
    height: 100%;
  }
  .con{
    width: 70%;
    display: flex;
    flex-direction: row;
  }
  .ti{
    width: 65%;
    height: 100%;
  }
  .pr{
    width: 35%;
    height: 100%;
  }
  .ti div{
    text-align: left;
    text-indent: 6px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 15px;
  }
  .ti div,.pr div{
    margin-top: 8px;
    width: 100%;
  }
</style>
