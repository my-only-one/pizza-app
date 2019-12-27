const state = {
  // 设置属性
  menuItems: {}
}
const getters = {
  getMenuItems: state => state.menuItems
}
const mutations = {
  // 更改属性的状态
  setMenuItems(state, data) {
    state.menuItems = data
  },
  // 将匹配到的对象,在menuItems数组中删除
  removeMenuItems(state, data) {
    state.menuItems.forEach((item, index) => {
      if (item === data) {
        state.menuItems.splice(index, index)
      }
    })
  },
// 将新添加的pizza push到menuItems中
  addMenuItems(state, data) {
    state.menuItems.push(data)
  }
}
const actions = {}
export default {
  state,
  getters,
  mutations,
  actions
}
