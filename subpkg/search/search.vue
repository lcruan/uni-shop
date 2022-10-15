<template>
  <view>
    <view class="search-box">
      <uni-search-bar 
      :radius="100" 
      @input="input" 
      cancelButton="none" 
      placeholder="请输入搜索内容" ></uni-search-bar>
    </view>
    
    <!-- 搜索建议列表 -->
    <view class="sugg-list">
      <view class="sugg-item" v-for="(item, i) in searchResults" 
        :key="i"
        @click="gotoDetail(item)">
        <view class="goods-name">{{item.goods_name}}</view>
        <uni-icons type="arrow-right" size="16"></uni-icons>
      </view>
    </view>
    
    <!-- 搜索历史 -->
    <view class="history-box">
      <!-- 标题区域 -->
      <view class="history-title">
        <text>搜索历史</text>
        <uni-icons type="trash" size="17"></uni-icons>
      </view>
      <!-- 列表区域 -->
      <view class="history-list">
        <uni-tag :text="item" v-for="(item, i) in historyList"
          :key="i"></uni-tag>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        timer: null,
        kw: '',
        // 搜索的结果列表
        searchResults: [],
        // 搜索历史的数组
        historyList: ['a', 'app', 'apple']
      };
    },
    methods: {
      // input输入事件的处理函数
      input(e) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.kw = e
          this.getSearchList()
        }, 500)
      },
      async getSearchList() {
        // 判断搜索关键词是否为空
        if(this.kw.length === 0) {
          this.searchResults = []
          return
        }
        const { data } = await uni.$http.get('/api/public/v1/goods/qsearch', {
          query: this.kw
        })
        if(data.meta.status !== 200) return uni.$showMsg()
        this.searchResults = data.message
      },
      gotoDetail(item) {
        uni.navigateTo({
          url: '/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id
        })
      }
    }
  }
</script>

<style lang="scss">
.search-box {
  position: sticky;
  top: 0;
  z-index: 999;
}

.sugg-list {
  padding: 0 5px;
  .sugg-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    padding: 13px 0;
    border-bottom: 1px solid #efefef;
    .goods-name {
      // 不允许换行
      white-space: nowrap;
      // 溢出隐藏
      overflow: hidden;
      // 超出的部分用...显示
      text-overflow: ellipsis;
    }
  }
}

.history-box {
  padding: 0 5px;
  .history-title {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    font-size: 13px;
    border-bottom: 1px solid #efefef;
  }
  .history-list {
    display: flex;
    flex-wrap: wrap;
    
    .uni-tag {
      margin-top: 5px;
      margin-right: 5px;
    }
  }
}
</style>
