<template>
  <div class="home">
    <header class="head">
      <div class="head-back"><i class="iconfont"></i></div>
      <div class="head-search"><i class="iconfont icon-search"></i>输入城市/景点/游玩主题</div>
      <!--<router-link class="head-place" to="/city">{{city}} <i class="icon-drop"></i></router-link>-->
    </header>
    <section class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide  class="swp-silde" v-for="(slide, key) in swiperList" :key="key" data-id="slide.id"><img class="swp-img" :src="slide.imgUrl" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
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

const swiperLi = [{
  id: '0001',
  imgUrl: 'http://img1.qunarzz.com/piao/fusion/1708/7c/c0b9acba07764302.jpg_750x200_389436b7.jpg'
}, {
  id: '0002',
  imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg'
}, {
  id: '0003',
  imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg'
}, {
  id: '0004',
  imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/c1/a8a7d6b08a69c002.jpg_750x200_59bdc9ae.jpg'
}, {
  id: '0005',
  imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/5a/a7fc8e091190d602.jpg_750x200_e3aae50d.jpg'
}]

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
  name: 'home',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: { el: '.swiper-pagination' },
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          delay: 3000 // 自动切换的时间间隔（单位ms）
        }
      },
      iconSwiperOption: {
        pagination: { el: '.swiper-pagination' }
      },
      swiperList: [],
      iconsList: []
    }
  },
  created () {
    this.iconsList = this.arrTrans(8, imgLi)
    this.swiperList = swiperLi
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
  }
}
</script>

<style scoped>
  .home{
    background-color: #F5F5F5;
  }
  .head{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 44px;
    color: #FFF;
    background-color: #00bcd4;
  }
  .head-back{
    line-height: 44px;
    margin: 0 15px 0 10px;
  }
  .head-back i{
    font-size: 18px;
  }
  .head-search{
    flex: 1;
    margin: 8px 0;
    padding: 0 8px;
    line-height: 28px;
    border-radius: 4px;
    background-color: #FFF;
    color: #CCC;
  }
  .head-search i{
    margin-right: 5px;
  }
  .head-place{
    margin: 0 10px;
    line-height: 44px;
    color: #FFF;
  }
  .icon-drop{
    display: inline-block;
    width: 0;
    height: 0;
    padding: 20px auto;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #FFF;
  }
  .swiper {
    height: 290px;
  }
  .swp-silde{
    height: 100%;
  }
  .swp-img{
    height: 100%;
    width: 100%;
  }
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
