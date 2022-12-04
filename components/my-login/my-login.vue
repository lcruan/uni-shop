<template>
  <view class="login-container">
    <uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
    <button type="primary" class="btn-login" @tap="getUserInfo">一键登录</button>
    <text class="tips-text">登录后尽享更多权益</text>
  </view>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  export default {
    name:"my-login",
    data() {
      return {
        
      };
    },
    computed: {
      ...mapState('m_user', ['redirectInfo'])
    },
    methods: {
      ...mapMutations('m_user', ['updateUserInfo', 'updateToken','updateRedirectInfo']),
      // 用户授权之后，获取用户的基本信息
      getUserInfo(e) {
        var that = this
        uni.getUserProfile({
          lang: 'zh_CN',
          desc: '获取用户信息',
          success(res) {
            // console.log(res.userInfo);
            // debugger
            that.updateUserInfo(res.userInfo)
            console.log(res);
            that.getToken(res)
          },
          fail(err) {
            if(err.errMsg === 'getUserProfile:fail auth deny') {
              return uni.$showMsg('您取消了授权！')
            }
          }
        })
      },
      async getToken(info) {
        // 获取code对应的值
        const [err, res]  = await uni.login().catch(err => err)
        if(err || res.errMsg !== 'login:ok') return uni.$showMsg('登录失败！')
        console.log(res);
        // 准备参数
        const query = {
          code: res.code,
          encryptedData: info.encryptedData,
          iv: info.iv,
          rawData: info.rawData,
          signature: info.signature
        }
        // console.log(query);
        
        const {data: loginResult } = await uni.$http.post('/api/public/v1/users/wxlogin', query)
        // 因接口问题  注释 后面手动赋token
        // if(loginResult.meta.status !== 200) return uni.$showMsg('登录失败！')
        loginResult.message = {
          "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo"
        }
        // 直接把 token 保存到 vuex中
        this.updateToken(loginResult.message.token)
        this.navigateBack()
      },
      navigateBack() {
        if(this.redirectInfo && this.redirectInfo.openType === 'switchTab') {
          uni.switchTab({
            url: this.redirectInfo.from,
            complete: () => {
              this.updateRedirectInfo(null)
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss">
.login-container {
  height: 750rpx;
  background-color: #F8F8F8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  // 超出隐藏 把椭圆另一半隐藏
  overflow: hidden;
  
  // 绘制半椭圆
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 40px;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    // 100%绘制椭圆
    border-radius: 100%;
    transform: translateY(50%);
  }
  
  .btn-login {
    width: 90%;
    border-radius: 100px;
    margin: 15px 0;
    background-color: #C00000;
  }
  .tips-text {
    font-size: 12px;
    color: gray;
  }
}
</style>