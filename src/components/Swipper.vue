<template>
  <mt-swipe :auto="4000" @change="handleChange">
    <mt-swipe-item v-for="im in imgList" :key="im.id" @click.native="onClickImg"><img :src="im.uri" :alt="err"/></mt-swipe-item>
  </mt-swipe>
</template>
<script>
export default {
  data () {
    return {
      index: 0,
      imgList: [{
        id: 1,
        uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558087630052&di=76d34c56d6cc8e094a28edbc43776c86&imgtype=0&src=http%3A%2F%2Fwww.herblovertw.com%2Flife%2Fpic%2Fgingermint02.jpg'
      }, {
        id: 2,
        uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558683808&di=cc33bb59826be4cf76c7acf8883252e4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tvb.com%2Fdams%2F1%2F473%2F4723_512_288_2_1.jpg'
      }, {
        id: 3,
        uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558089142052&di=0e3d367c8a8ee99c19c82951241e185b&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fbmiddle%2F3f0b3deb44a1c78ab1db2'
      }],
      err: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558087751807&di=4a9a185327f97ac6dbb83d628d751c33&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F75%2F15%2F31v58PICZdW_1024.png'
    }
  },
  methods: {
    handleChange (index) {
      this.index = index
    },
    onClickImg () {
      console.log('获取id:' + this.imgList[this.index].id)
    }
  }
}
</script>
<style type="less">
      .mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }
      .mint-swipe-item {
        line-height: 200px;
      }
      .mint-swipe-item img{
        width: 100%;
        height: 100%;
      }
</style>
