<template>
  <div>
    <section class="icons">
      <swiper :options="iconSwiperOption">
        <swiper-slide  class="icons-silde"  v-for="(slide, key) in iconsList" :key="key" >
          <ul class="icons-ul">
            <li class="icons-li" v-for="(value, key) in slide" :key="key" data-id="value.id">
              <router-link class="icons-link" to="/">
                <img class="icons-img" :src="value.imgSrc" alt="">
                <span>{{value.text}}</span>
              </router-link>
            </li>
          </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import '../assets/styles/reset.css' // 引入默认配置样式文件
import '../assets/styles/border.css' // 引入1像素边框样式文件
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const imgLi = [{
  id: '0001',
  imgSrc:
    'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
  text: '景点门票'
}, {
  id: '0002',
  imgSrc:
    'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
  text: '自然风光'
}, {
  id: '0003',
  imgSrc:
    'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
  text: '必游榜单'
}, {
  id: '0004',
  imgSrc:
    'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
  text: '动植物园'
}, {
  id: '0005',
  imgSrc:
    'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
  text: '一日游'
}, {
  id: '0006',
  imgSrc:
    'http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
  text: '本地玩乐'
}, {
  id: '0007',
  imgSrc:
    'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
  text: '情迷九寨'
}, {
  id: '0008',
  imgSrc:
    'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
  text: '踏青赏花'
}, {
  id: '0009',
  imgSrc:
    'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
  text: '演出'
}, {
  id: '0010',
  imgSrc:
    'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
  text: '全部玩乐'
}]
export default {
  created () {
    this.iconsList = this.arrTrans(8, imgLi)
  },
  data () {
    return {
      iconSwiperOption: {
        pagination: { el: '.swiper-pagination' }
      },
      iconsList: []
    }
  },
  methods: {
    arrTrans: function (num, arr) { // 一维数组转换为二维数组
      let iconsArr = [] // 声明数组
      for (let i = 0; i < Math.ceil(arr.length / num); i++) {
        iconsArr[i] = [] // 声明该数组第一个元素为一个数组
        for (let j = 0; j < num && j + num * i < arr.length; j++) {
          iconsArr[i].push(arr[j + num * i])
        }
      }
      return iconsArr
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style scoped>
  .icons{
    height: 190px;
    margin: 6px 0 8px;
    background-color: #FFF;
  }
  .icons-silde{
    height: 190px;
  }
  .icons-ul{
    display: flex;
    flex-wrap: wrap;
  }
  .icons-li{
    flex: 0 1 25%;
    margin: 5px 0;
  }
  .icons-link{
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #333;
    text-decoration: none;
  }
  .icons-img{
    height: 55px;
    width: 55px;
  }
</style>
