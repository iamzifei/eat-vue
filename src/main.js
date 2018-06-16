import Vue from 'vue'
import App from './App'
import 'vue-material-design-icons/styles.css'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', 'pages/list/main', 'pages/poll/main', '^pages/home/main', 'pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#233238',
      navigationBarTitleText: ' 佛系青年要吃饭',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/home/main',
        text: '首页',
        iconPath: '/static/images/home.png',
        selectedIconPath: '/static/images/home-selected.png'
      }, {
        pagePath: 'pages/list/main',
        text: '历史',
        iconPath: '/static/images/list.png',
        selectedIconPath: '/static/images/list-selected.png'
      }],
      color: '#f6f7f7',
      backgroundColor: '#233238',
      selectedColor: '#ffffff'
    }
  }
}
