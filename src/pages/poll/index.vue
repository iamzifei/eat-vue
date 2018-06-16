<template>
  <div class="page">
    <div class="title">请推荐一个菜...</div>
    <form @submit="formSubmit">
      <zan-select v-bind="{ items: polls, checkedValue: checked, name: 'formtest', componentId: 'form'}"  @handleZanSelectChange="handleZanSelectChange"/>
      <!-- <ul class="list">
        <li v-for="(poll, index) in polls" :class="{ red: aa }" :key="index" class="list_item">
          <poll :content="poll.label"></poll>
        </li>
      </ul> -->
      <div class="button_section">
        <button
          class="zan-btn zan-btn--danger"
          :disabled="checked === -1"
          formType="submit">选好了</button>
      </div>
    </form>
  </div>
</template>

<script>
import ZanSelect from '@/components/select'
import poll from '@/components/poll'
import randomInt from 'random-int'

export default {
  components: {
    poll,
    ZanSelect
  },

  data () {
    return {
      loading: false,
      polls: [],
      checked: -1,
      dishes: [
        {
          padding: 0,
          image: '/static/images/rice.png',
          name: '天同生煎',
          value: 'rice',
          url: ''
        },
        {
          padding: 0,
          image: '/static/images/noodles.png',
          name: '小笼包',
          value: 'noodle',
          url: ''
        },
        {
          padding: 0,
          image: '/static/images/soup.png',
          name: '水煮鱼',
          value: 'soup',
          url: ''
        },
        {
          padding: 0,
          image: '/static/images/flour.png',
          name: '糖醋小排',
          value: 'flour',
          url: ''
        },
        {
          padding: 0,
          image: '/static/images/foreign.png',
          name: '口水鸡',
          value: 'foreign',
          url: ''
        },
        {
          padding: 0,
          image: '/static/images/foreign.png',
          name: '红油抄手',
          value: ' sdjadkjksad',
          url: ''
        },
        {
          padding: 0,
          image: '/static/images/foreign.png',
          name: '红烧肉',
          value: 'fdaklklklasd',
          url: ''
        },
        {
          padding: 0,
          image: '/static/images/foreign.png',
          name: '咸蛋黄肉蟹',
          value: 'aklklaskdlkal',
          url: ''
        },
        {
          padding: 0,
          image: '/static/images/foreign.png',
          name: '干煸四季豆',
          value: 'alklklasd',
          url: ''
        },
        {
          padding: 0,
          image: '/static/images/foreign.png',
          name: '锅贴',
          value: 'asjkjkaskjdkajk',
          url: ''
        }
      ]
    }
  },

  created () {
    this.loading = true
    // generate 5 random number and put in polls
    const dishesCount = this.dishes.length - 1
    while (this.polls.length < 5) {
      const randomnumber = randomInt(dishesCount)
      if (this.polls.indexOf(this.dishes[randomnumber]) > -1) continue
      this.polls[this.polls.length] = this.dishes[randomnumber]
    }
    console.log(this.polls)
  },

  methods: {
    handleZanSelectChange ({ componentId, value }) {
      this.checked = value
      console.log(value)
    },
    formSubmit (event) {
      console.log('[zan:field:submit]', event.target.value)
    }
  }
}
</script>

<style>
.page {
  background-color: #e9a227;
  padding: 0 48rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
.title {
  font-size: 34rpx;
  color: #233238;
  line-height: 128rpx;
  margin-top: 48rpx;
}

radio-group {
  display: flex;
  flex-direction: column;
  padding: 0 40rpx;
}

radio-group > label {
  margin: 16rpx;
  width: 600rpx;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  overflow: auto;
  position: relative;
  z-index: 1;
  border-radius: 2px;
  background-color: #ffffff;
}

.button_section {
  justify-content: center;
  display: flex;
  align-items: center;
}

.zan-btn {
  margin-top: 64rpx;
  background-color: #d91e48;
}
.zan-btn.hide {
  display: none;
}
</style>
