<template>
  <div class="header">
    <div class="im"><img src="../../assets/icon_header.png"></div>
    <div class="icon" @click="goSearch"><img src="../../assets/search.png"></div>
  </div>
</template>
<script>
export default {
  methods: {
    goSearch () {
      this.$router.push('/search')
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
  }
  .im {
    width: 40%;
  }
  .im img{
    width: 100%;
    height: 100%;
  }
  .icon img{
    height: 100%;
  }
</style>
