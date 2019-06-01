<template>
  <div class="good_list">
    <div class="page-infinite-desc">{{val}}</div>
    <div class="page-infinite-wrapper" style="height: 640px">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <shop-card></shop-card>
      </ul>
      <p v-show="loading" class="page-infinite-loading">
        <my-spinner></my-spinner>
        加载中...
      </p>
    </div>
  </div>
</template>
<script>
import ShopCard from './common/Shop_card'
import MySpinner from './common/MySpinner'
export default {
  props: ['title'],
  components: {
    ShopCard,
    MySpinner
  },
  data () {
    return {
      val: this.title,
      list: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 0
    }
  },

  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          if (last < 101) {
            this.list.push(last + i)
          } else {
            this.$toast('到底了')
            return
          }
        }
        this.loading = false
      }, 1000)
    }
  },

  mounted () {
    // this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
    for (let i = 1; i <= 20; i++) {
      this.list.push(i)
    }
  }
}
</script>
<style>
  .good_list{
    height: 50vh;
  }
.page-infinite-desc{
  height: 30px;
  font-size: 20px;
  text-align: center;
  color: #666;
  padding-bottom: 5px;
  border-bottom: solid 1px #eee;
}
.page-infinite-wrapper{
  margin-top: -1px;
  overflow: scroll;
}
.page-infinite-listitem :first-child {
  border-top: solid 1px #eee;
}
.page-infinite-loading{
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.page-infinite-loading  div {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
