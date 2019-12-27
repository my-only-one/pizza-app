import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
// 二级路由
import Contact from './components/about/Contact'
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'
// 三级路由
import Phone from './components/about/Phone'
import PersonName from './components/about/PersonName'

Vue.use(VueRouter)

const routes = [ // 给路由取名字,homeLink、menuLink...
  {path: '/', name: 'homeLink', component: Home},
  {path: '/menu', name: 'menuLink', component: Menu},
  {
    path: '/admin', name: 'adminLink', component: Admin,
    /*beforeEnter: (to, from, next) => { // 路由独享守卫
      // alert('非登录状态，不能访问此页面,--------路由独享守卫')
      //  next(false)
      if (to.path == '/login' || to.path == '/register') {
        next()
      } else {
        alert('还没有登录,请先登录')
        next('/login')
      }
    }*/
  },
  {
    path: '/about', name: 'aboutLink', component: About, redirect: '/about/history', // 默认展示某一个
    children: [
      {
        path: '/contact', name: 'contactLink', component: Contact, title: '联系我们', redirect: '/personName',
        children: [
          {path: '/phone', name: 'phoneNumber', component: Phone, title: '联系电话'},
          {path: '/personName', name: 'personName', component: PersonName, title: '联系人'}
        ]
      },
      {path: '/about/history', name: 'historyLink', component: History},
      {path: '/delivery', name: 'deliveryLink', component: Delivery},
      {path: '/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide},
    ]
  },
  {path: '/login', name: 'loginLink', component: Login},
  {path: '/register', name: 'registerLink', component: Register},
  {path: '*', redirect: '/'}, // 当直接输入访问路径,未找到该路径,则返回到根路径
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
// 全局守卫
/*router.beforeEach((to, from, next) => {
  // to 进入到哪个路由
  // from 你从哪一个路由离开
  // to.path 目标路由
  // next 必须有否则程序不会继续执行
  // 判断store.gettes.isLogin === false
  console.log(to)
  if (to.path == '/login' || to.path == '/register') {
    next()
  } else {
    alert('还没有登录,请先登录')
    next('/login')
  }

})*/
// 后置钩子
/*router.afterEach((to, from) => {
  alert('还没有登录,请先登录')
})*/
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

