<template>
  <div class="page-tabbar">
    <mt-tabbar v-model="selected" v-show="isShow" fixed class="border-1px-top">
      <mt-tab-item id="main">
        <img slot="icon" :src="img1">
        主页
      </mt-tab-item>
      <mt-tab-item id="merchant">
        <img slot="icon" :src="img2">
        商家
      </mt-tab-item>
      <mt-tab-item id="shopping">
        <img slot="icon" :src="img3">
        购物车
      </mt-tab-item>
      <mt-tab-item id="info">
        <img slot="icon" :src="img4">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'main',
      img1: 'static/icon_home_active.png',
      img2: 'static/icon_classify.png',
      img3: 'static/icon_shop_cart.png',
      img4: 'static/icon_info.png'
    }
  },
  computed: {
    isShow: function () {
      return true
    }
  },
  watch: {
    'selected': {
      handler () {
        if (this.selected === 'main') {
          this.$router.push('/')
          this.img1 = 'static/icon_home_active.png'
        } else {
          this.img1 = 'static/icon_home.png'
        }
        if (this.selected === 'merchant') {
          this.$router.push('/merchant')
          this.img2 = 'static/icon_classify_active.png'
        } else {
          this.img2 = 'static/icon_classify.png'
        }
        if (this.selected === 'shopping') {
          this.$router.push('/shopping')
          this.img3 = 'static/icon_shop_cart_active.png'
        } else {
          this.img3 = 'static/icon_shop_cart.png'
        }
        if (this.selected === 'info') {
          this.$router.push('/info')
          this.img4 = 'static/icon_info_active.png'
        } else {
          this.img4 = 'static/icon_info.png'
        }
      }
    }
  }
}
</script>

<style type="less">
  /*.page-tabbar {*/
    /*overflow: hidden;*/
    /*height: 100vh;*/
  /*}*/
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>
