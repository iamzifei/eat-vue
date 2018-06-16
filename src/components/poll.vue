<template>
  <div class="zan-cell">
    <div class="zan-cell__icon zan-icon zan-icon-checked" style="color:#38f;"></div>
    <div class="zan-cell__bd">{{content}}</div>
    <div class="zan-cell__ft">{{meta}}</div>
  </div>
</template>

<script>
export default {
  props: ['content', 'meta']
}
</script>

<style>
.card {
  /* padding: 10px; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  overflow: auto;
  position: relative;
  z-index: 1;
  border-radius: 2px;
  background-color: #ffffff;
  width: 600rpx;
  height: 164rpx;
}

.content {
  font-size: 34rpx;
}

.meta {
  font-size: 24rpx;
  display:flex;
  align-self:flex-end;
  justify-content: flex-end;
  position: absolute;
  bottom: 16rpx;
}
</style>
