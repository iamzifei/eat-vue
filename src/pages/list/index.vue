<template>
  <div class="page">
    <ul class="container log-list">
      <li v-for="(poll, index) in polls" :class="{ red: aa }" :key="index" class="log-item">
        
        <card :content="'我选择了『' + getBaseName(poll.base) + '』'" :meta="getTime(poll.created_at)"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import card from '@/components/card'
import moment from 'moment'

export default {
  components: {
    card
  },

  data () {
    return {
      loading: false,
      polls: [],
      bases: [
        {
          url: '/static/images/rice.png',
          label: '米饭',
          key: 'rice'
        },
        {
          url: '/static/images/noodles.png',
          label: '面类',
          key: 'noodle'
        },
        {
          url: '/static/images/soup.png',
          label: '汤汤水水',
          key: 'soup'
        },
        {
          url: '/static/images/flour.png',
          label: '面点',
          key: 'flour'
        },
        {
          url: '/static/images/foreign.png',
          label: '外国菜',
          key: 'foreign'
        }
      ]
    }
  },

  created () {
    this.loading = true
    // 绑定添加书目的提交按钮点击事件，向服务器发送数据
    let tableID = '34407' // 从知晓云后台的数据表中获取到的对应数据表的 ID
    let Polls = new wx.BaaS.TableObject(tableID) // 实例化对应 tableID 的数据表对象

    Polls.find()
      .then(res => {
        this.loading = false
        this.polls = res.data.objects
      })
      .catch(err => {
        this.loading = false
        console.dir(err)
      })
  },

  methods: {
    getTime (time) {
      return moment.unix(time).format('YYYY/MM/DD HH:MM')
    },
    getBaseName (key) {
      return this.bases.filter(base => base.key === key).length ? this.bases.filter(base => base.key === key)[0].label : key
    },
    hello (text) {
      return text
    }
  }
}
</script>

<style>
.page {
  background-color: #2bb673;
  padding: 0 48rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
