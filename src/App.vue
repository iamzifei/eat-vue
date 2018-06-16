<script>
import '@/utils/sdk-v1.3.0.js'

export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')

      // 初始化 SDK
    let clientID = '9eea60be5b9eea95ef1a'
    wx.BaaS.init(clientID)
  }
}
</script>

<style>
@import "./assets/style/zanui.wxss";
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}

.zan-btn {
  border-radius: 4pt;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
}

.btn {
  position: relative;
  font-size: 14pt;
  line-height: 35pt;
  height: 35pt;
  display: block;
  padding: 0 30pt;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 4pt;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  
  background-color: #2ecc71;
  color: #ecf0f1;
  transition: background-color .3s;
}

.btn > * {
  position: relative;
}

.btn span {
  display: block;
  padding: 12px 24px;
}

.btn:before {
  content: "";
  
  position: absolute;
  top: 50%;
  left: 50%;
  
  display: block;
  width: 0;
  padding-top: 0;
    
  border-radius: 100%;
  
  background-color: rgba(236, 240, 241, .3);
  
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.btn:active:before {
  width: 120%;
  padding-top: 120%;
  
  transition: width .2s ease-out, padding-top .2s ease-out;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
