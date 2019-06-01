<template>
  <div>
    <heade :title="title"></heade>
    <swipper></swipper>
    <div class="newgood">
      <goods-list :title="newGood"></goods-list>
    </div>
    <div class="seg"></div>
    <div class="hotgood">
      <goods-list :title="hotGood"></goods-list>
    </div>
    <div class="seg"></div>
    <div class="selection">
      <goods-list :title="selection"></goods-list>
    </div>
  </div>
</template>
<script>
import Swipper from '../components/Swipper'
import GoodsList from '../components/GoodsList'
import Heade from '@/components/common/Header'
export default {
  data () {
    return {
      title: '更多商品',
      newGood: '最新上架',
      hotGood: '爆款购买',
      selection: '精选商品'
    }
  },
  components: {
    Swipper,
    GoodsList,
    Heade
  }
}
</script>
<style>
.newgood,.selection,.hotgood{
  height: 680px;
}
.seg{
  height: 7px;
  background-color: whitesmoke;
}
</style>
