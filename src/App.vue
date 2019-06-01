<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
    <div v-if="(path ==='/'|| path ==='/merchant' || path ==='/shopping' || path ==='/info')">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
import Footer from './components/common/FooterBar.vue'
export default {
  name: 'App',
  data () {
    return {
      path: ''
    }
  },
  components: {
    'footer-bar': Footer
  },
  // 判断路由
  mounted () {
    this.path = this.$route.path
    // console.log(this.$route.path)
  },
  watch: {
    $route (to, from) {
      this.path = to.path
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
