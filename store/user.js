export default {
  // 开启命名空间
  namespaced: true,
  
  // 数据
  state: () => ({
    address: {}
  }),
  
  // 方法
  mutations: {
    // 更新收货地址
    updateAddress(state, address) {
      state.address = address
    }
  },
  
  
  getters: {}
}