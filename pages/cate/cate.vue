<template>
  <view>
    <view class="scroll-view-container">
      <!-- 左侧滑动区域 -->
      <scroll-view class="left-scroll-view" scroll-y="true" :style="{height: wh + 'px'}">
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx</view>
        <view class="left-scroll-view-item">xxx1</view>
        <view class="left-scroll-view-item">xxx1</view>
        <view class="left-scroll-view-item">xxx1</view>
        <view class="left-scroll-view-item">xxx1</view>
        <view class="left-scroll-view-item">xxx1</view>
        <view class="left-scroll-view-item">xxx1</view>
        <view class="left-scroll-view-item">xxx1</view>
        <view class="left-scroll-view-item">xxx2</view>
        <view class="left-scroll-view-item">xxx2</view>
        <view class="left-scroll-view-item">xxx2</view>
        <view class="left-scroll-view-item">xxx2</view>
        <view class="left-scroll-view-item">xxx2</view>
        <view class="left-scroll-view-item">xxx2</view>
        <view class="left-scroll-view-item">xxx2</view>
        <view class="left-scroll-view-item">xxx2</view>
      </scroll-view>
      <!-- 右侧滑动区域 -->
      <scroll-view scroll-y="true" :style="{height: wh + 'px'}">
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy</view>
        <view>yyy1</view>
        <view>yyy1</view>
        <view>yyy1</view>
        <view>yyy1</view>
        <view>yyy1</view>
        <view>yyy1</view>
        <view>yyy2</view>
        <view>yyy2</view>
        <view>yyy2</view>
        <view>yyy2</view>
        <view>yyy2</view>
        <view>yyy2</view>
        <view>yyy2</view>
        <view>yyy2</view>
        <view>yyy2</view>
        <view>yyy2</view>
        <view>yyy2</view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 当前设备可用的高度
        wh: 0
      };
    },
    onLoad() {
      const sysInfo = uni.getSystemInfoSync()
      this.wh = sysInfo.windowHeight
    }
  }
</script>

<style lang="scss">
.scroll-view-container {
  display: flex;
  
  .left-scroll-view {
    width: 120px;
    
    .left-scroll-view-item {
      background-color: #f7f7f7;
      line-height: 60px;
      text-align: center;
      font-size: 12px;
    }
  }
}
</style>
