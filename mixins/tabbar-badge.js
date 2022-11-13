import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('m_cart', ['total'])
  },
  watch: {
    total() {
      this.setBadge()
    }
  },
  onShow() {
    this.setBadge()
  },
  methods: {
    setBadge() {
      // text必须是字符串，不能是数字
      uni.setTabBarBadge({
        index:2,
        text: this.total + ''
      })
    }
  }
}