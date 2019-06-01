<template>
  <div>
    <div class="gc" v-for="(item,index) in shopList" :key="item.id">
      <div class="img" @click="checkGood">
        <img :src="item.img" alt=""/>
      </div>
      <div class="con">
        <div class="gt">
          <div class="ti">
            <div>{{item.tit}}</div>
            <div>医疗美容</div>
            <div style="text-decoration: line-through #FF1493">市场价：<span style="color: #FF69B4">￥3585</span></div>
          </div>
          <div class="pr">
            <div style="color:red;">￥<span style="font-size: 18px">20000</span></div>
            <div>x&nbsp;{{item.num}}</div>
          </div>
        </div>
        <div class="cz">
          <div class="ad" @click="reduceNum(index)">-</div>
          <div class="ad-con">{{item.num}}</div>
          <div class="ad" @click="addNum(index)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const te = [{
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
  data () {
    return {
      shopList: te
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
  }
  .gt{
    height: 75%;
    display: flex;
    flex-direction: row;
  }
  .ti{
    width: 75%;
    height: 100%;
  }
  .pr{
    width: 25%;
    height: 100%;
  }
  .ti div{
    text-align: left;
    text-indent: 6px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .ti div,.pr div{
    margin-top: 8px;
    width: 100%;
  }
  .cz{
    height: 25%;
    display: flex;
    justify-content: center;
  }
  .ad{
    width: 10%;
    background-color: whitesmoke;
  }
  .ad-con{
    width: 18%;
  }
  .ad-con,.ad{
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px lightgrey;
  }
</style>
