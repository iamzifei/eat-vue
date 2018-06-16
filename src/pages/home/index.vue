<template>
  <div class="page">
    <image src="/static/images/wechat-logo-no-bg.png" class="logo" />
    <div class="paper">
      <div class="paper_title">佛系青年想吃...</div>
      <div class="paper_swiper">
        <swiper :display-multiple-items="displayMultipleItems" :next-margin="swiperMargin" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">
          <div v-for="(item, index) in  bases" :key="index">
            <swiper-item>
              <div :class="['base', 'base-' + index, {active: item.key === selectedBase}]" @click="choose(item.key)">
                <image :src="item.url" class="slide_image" />
                <div class="base_text">{{item.label}}</div>
              </div>
            </swiper-item>
          </div>
        </swiper>
      </div>
    </div>
    <div>
      <button :class="['zan-btn zan-btn--danger', {hide: selectedBase === '', 'zan-btn--loading': loading}]" @click="submit">帮我选菜</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperMargin: '16rpx',
      displayMultipleItems: 3,
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 900,
      circular: false,
      selectedBase: '',
      loading: false,
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
  methods: {
    choose (selected) {
      this.selectedBase = selected
    },
    submit () {
      this.loading = true
      // 绑定添加书目的提交按钮点击事件，向服务器发送数据
      // let baseName = this.selectedBase // 缓存在 data 对象中的输入框输入的书名
      // let tableID = '34407' // 从知晓云后台的数据表中获取到的对应数据表的 ID
      // let Polls = new wx.BaaS.TableObject(tableID) // 实例化对应 tableID 的数据表对象
      // let poll = Polls.create() // 创建一条记录

      // 调用创建数据项接口，进行数据的持久化存储，详见：https://doc.minapp.com/js-sdk/schema/create-record.html
      // poll.set({base: baseName})
      //   .save()
      //   .then(() => {
      //     this.loading = false
      //     wx.navigateTo({ url: '../poll/main' })
      //   })
      //   .catch(() => {
      //     this.loading = false
      //   })
      this.loading = false
      wx.navigateTo({ url: '../poll/main' })
    },
    swiperChange (e) {
      // console.log('第' + e.mp.detail.current + '张轮播图发生了滑动')
    },
    animationfinish (e) {
      // console.log('第' + e.mp.detail.current + '张轮播图滑动结束')
    }
  }
}
</script>

<style>
.page {
  background-color: #007fad;
  height: 100vh;
  padding: 0 48rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  margin-top: 192rpx;
  width: 120rpx;
  height: 120rpx;
}
.paper {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  overflow: auto;
  position: relative;
  z-index: 1;
  border-radius: 2px;
  background-color: #ffffff;
  width: 600rpx;
  height: 328rpx;
}
.paper_title {
  font-size: 34rpx;
  color: #233238;
  line-height: 128rpx;
  margin-left: 32rpx;
}
swiper,
.paper_swiper {
  background-color: #233238;
  height: 200rpx;
}
.base {
  width: 200rpx;
  height: 200rpx;
  background-color: #2bb673;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.base.active {
  box-shadow: inset 0 0 20rpx #abb1b3;
}
.base.base-0 {
  background-color: #2bb673;
}
.base.base-0.active {
  background-color: #42855a;
}
.base.base-1 {
  background-color: #9e3e97;
}
.base.base-1.active {
  background-color: #6e326e;
}
.base.base-2 {
  background-color: #e9a227;
}
.base.base-2.active {
  background-color: #b07f2f;
}
.base.base-3 {
  background-color: #d91e48;
}
.base.base-3.active {
  background-color: #952739;
}
.base.base-4 {
  background-color: #85a1ac;
}
.base.base-4.active {
  background-color: #526c77;
}
.base_text {
  color: #ffffff;
  font-size: 28rpx;
  margin-top: 16rpx;
}
.slide_image {
  width: 64rpx;
  height: 64rpx;
}
.zan-btn {
  margin-top: 64rpx;
  background-color: #d91e48;
}
.zan-btn.hide {
  display: none;
}
</style>