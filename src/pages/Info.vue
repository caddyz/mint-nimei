<template>
  <div>
    <div class="hea">
      <div class="header_content">
        <img class="avatarUrl" :src="userInfo.headImgUrl"/>
        <div class="nickName cfff">{{userInfo.nickname}}</div>
        <div style="color: white;font-size: 15px"><span v-if="member">【等级：会员】</span> <span>【推荐人：{{referName}}】</span></div>
        <!--<div style="height: 30px;background-color: #ff6a3c"></div>-->
      </div>
    </div>
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell title="我的订单" is-link :to="{ path: '/' }"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell title="分销二维码" is-link :to="{ path: '/merchant' }"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import {api} from '../api/api'

export default {
  created () {
    this.getUserInfo(this.$route.query.code)
  },
  components: {
  },
  methods: {
    onItemClick (index) {
      this.index = index
    },
    async getUserInfo (code) {
      let data = await api.get('api/userInfo', {
        code: code
      })
      this.userInfo = data.result
      this.insertUser(data.result.nickname, data.result.openId)
      this.getReferName(this.userInfo.openId)
      this.checkMember(data.result.openId)
      if (this.$route.query.state === 'STATE') {
        return
      }
      this.addMember(this.$route.query.state, data.result.openId)
    },
    async addMember (parentOpenid, childOpenid) {
      await api.get('user/Sellto', {
        parentName: parentOpenid,
        subclassName: childOpenid
      })
      let da = await api.get('user/getMember', {
        openId: parentOpenid
      })
      this.referName = da.result.name
    },
    async insertUser (userName, userOpenid) {
      await api.get('user/login', {
        Name: userName,
        openId: userOpenid
      })
    },
    async getReferName (childOpenId) {
      let res = await api.get('user/getParentName', {
        subclassName: childOpenId
      })
      if (res.status === true) {
        this.referName = res.result
      } else {
        this.referName = '无'
      }
    },
    async checkMember (userOpenid) {
      let r = await api.get('user/getMember', {
        openId: userOpenid
      })
      this.member = r.status
    }
  },
  data () {
    return {
      selected: '1',
      userInfo: {},
      member: false,
      referName: ''
    }
  }
}
</script>
<style>
  .hea {
    background: #ff6a3c;
    height: 260px;
    width: 100%;
  }
  .header_content {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-top: 48px;
  }
  .avatarUrl {
    width: 122px;
    height: 122px;
    border-radius: 50%;
  }
  .nickName {
    font-size: 30px;
    padding-top: 15px;
    color: white;
  }
</style>
