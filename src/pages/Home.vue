<template>
  <div>
    <header-main></header-main>
    <swipper></swipper>
    <classification></classification>
    <seckill></seckill>
    <good-list></good-list>
  </div>
</template>

<script>
import Swipper from '../components/Swipper'
import Classification from '../components/Classification'
import GoodList from '../components/GoodList'
import Seckill from '../components/Seckill'
import HeaderMain from '../components/common/HeaderMain'
export default {
  data () {
    return {
    }
  },
  components: {
    Swipper,
    Classification,
    GoodList,
    Seckill,
    HeaderMain
  }
}
</script>

<style>
</style>
