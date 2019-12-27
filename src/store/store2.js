import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)
export const store = new Vuex.Store({
  // 设置属性
  state: {
    menuItems: {},
    currentUser: null,
    isLogin: false
  },

  getters, // 获取属性的状态
  mutations, // 更改属性的状态
  actions // 应用mutations,不直接操作
})
