<template>
  <div id="seckil">
    <div class="ti">限时秒杀</div>
    <div v-for="item in seckillValue" :key="item.id" class="inf">
      <div class="im"><img :src="item.url"/></div>
      <div class="text">{{item.text}}</div>
      <div style="height: 5px;background-color: whitesmoke"></div>
    </div>
  </div>
</template>
<script>
const val = [{
  id: 1,
  url: 'https://anniemodern-1259124052.cos.ap-chengdu.myqcloud.com/%E4%B9%94%E6%81%A92/2-2.jpg',
  text: '美容，面部整形 超微创手术'
}, {
  id: 2,
  url: 'https://anniemodern-1259124052.cos.ap-chengdu.myqcloud.com/%E4%B9%94%E6%81%A92/8-2.jpg',
  text: '面部吸脂'
}
]
export default {
  data () {
    return {
      seckillValue: val
    }
  }
}
</script>
<style scoped>
  .inf{
    margin-bottom: 15px;
  }
  .ti{
    height: 30px;
    font-size: 20px;
    text-align: center;
    color: #666;
    padding-bottom: 5px;
    border-bottom: solid 1px #eee;
  }
  .im{
    width: 100%;
    height: 150px;
    margin-bottom: 3px;
  }
  .im img {
    width: 100%;
    height: 100%;
  }
  .text{
    height: 25px;
    font-size: 15px;
    color: #666;
  }
</style>
