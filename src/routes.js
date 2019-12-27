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

export const routes = [ // 给路由取名字,homeLink、menuLink...
  {
    path: '/', name: 'homeLink', components: { // 复用router-view
      default: Home,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery,
      'history': History
    }
  },
  {path: '/menu', name: 'menuLink', component: Menu},
  {path: '/admin', name: 'adminLink', component: Admin},
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
