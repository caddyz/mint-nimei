<template>
  <section class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide  class="swp-silde" v-for="(slide, key) in swiperList" :key="key" data-id="slide.id"><img class="swp-img" :src="slide.uri" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
const li = [{
  id: 1,
  uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558087630052&di=76d34c56d6cc8e094a28edbc43776c86&imgtype=0&src=http%3A%2F%2Fwww.herblovertw.com%2Flife%2Fpic%2Fgingermint02.jpg'
}, {
  id: 2,
  uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558683808&di=cc33bb59826be4cf76c7acf8883252e4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tvb.com%2Fdams%2F1%2F473%2F4723_512_288_2_1.jpg'
}, {
  id: 3,
  uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558089142052&di=0e3d367c8a8ee99c19c82951241e185b&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fbmiddle%2F3f0b3deb44a1c78ab1db2'
}]
export default {
  data () {
    return {
      swiperOption: {
        pagination: { el: '.swiper-pagination' },
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          delay: 3000 // 自动切换的时间间隔（单位ms）
        }
        // height: 250
      },
      swiperList: li
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style>
  .swp-silde{
    height: 100%;
  }
  .swp-img{
    height: 100%;
    width: 100%;
  }
</style>
