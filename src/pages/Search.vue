<template>
  <div class="page-search">
    <form @submit="searching">
      <search-vue v-model="searchValue"
                  :visible.sync="searchVisible"
                  :style="searchVisible && {top: '-40px', height: '100%',height: '100vh'}">
        <div class="hotkey-wrapper" v-if="searchState === 0">
          <p>历史记录</p>
          <ul class="hotkey-list">
            <template v-for="(item, index) in hotkeys">
              <template v-if="index === 0 ">
                <li class="speical" @click="goSpecial(item.url)" :key="index">{{ item.k }}</li>
              </template>
              <template v-else>
                <li @click="hoykeySearch(item.k)" :key="index">{{ item.k }}</li>
              </template>
            </template>
          </ul>
        </div>
        <div class="result-list" v-if="searchState === 2">
          <mt-cell class="music-cell-type5"
                   v-for="(item, index) in searchResult"
                   :key="index"
                   @click.native="playSingleMusic(item)">
            <i class="music-icon"></i>
            <div class="song-wrapper">
              <p>{{ item.name }}</p>
              <p>{{ item.singer }}</p>
            </div>
          </mt-cell>
        </div>
      </search-vue>
    </form>
  </div>
</template>
<script>
import searchVue from '../components/Search'
export default {
  data () {
    return {
      searchValue: '',
      searchVisible: false,
      searchState: 0, // search input bar state 0: ready, 1: searching, 2: search result,
      searchResult: {}, // song search result
      hotkeys: {}
    }
  },
  components: {
    searchVue
  },
  methods: {
    // searching the song by the hotkey
    hoykeySearch (hotkey) {
      this.searchValue = hotkey
      this.searching()
    },
    searching (e) {
      // e && e.preventDefault()
      // let searchValue = this.searchValue
      // this.searchState = 1 // searching
      // apiHandler({
      //   name: 'search',
      //   params: {
      //     key: searchValue
      //   }
      // }, response => {
      //   this.searchState = 2 // search result
      //   this.searchResult = response.data.song.itemlist || []
      // })
      console.log('seee')
    },
    playSingleMusic () {
      console.log('123')
    }
  },
  watch: {
    searchVisible (visible) {
      if (!visible) {
        this.searchState = 0
        this.searchResult = []
      }
    },
    searchState (state) {
      if (state === 1) {
        this.$indicator.open(`正在搜索${this.searchValue}`)
      } else {
        this.$indicator.close()
      }
    }
  }
}
</script>
<style>
  .hotkey-wrapper{
    padding: 15px;
  }
  .hotkey-wrapper p:first-child{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px
  }
  .hotkey-list{
    display: flex;
    flex-wrap: wrap;
  }
  .hotkey-list > li {
    font-size: 14px;
    margin-right: 5px;
    margin-bottom: 10px;
    text-align: center;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    border-radius: 16px;
    border: 1px solid #D7D7D7;
  }
  .speical {
    border-color: #31c27c;
    color: #31c27c;
  }
</style>
