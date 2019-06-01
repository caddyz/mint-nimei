<template>
  <div class="header">
    <div class="text" @click="goBack">&lt;返回</div>
    <div class="text">{{vale}}</div>
    <div class="im"><img src="../../assets/icon_header.png"></div>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {
      vale: this.title
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
  .header{
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .text{
    font-size: 15px;
    color: palevioletred;
  }
  .im {
    width: 33%;
  }
  .im img{
    width: 100%;
    height: 100%;
  }
</style>
