import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'

// 第一种方法 配置默认根路径
axios.defaults.baseURL = 'https://mingyuan-318af.firebaseio.com/' // baseURL中URL还必须大写
// 第二种方法 配置Vue原型 (在任何组件中都可以使用axios)
Vue.prototype.$axios = axios

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    // return {x: 0, y: 100}
    // return {selector: '.btn'}
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

