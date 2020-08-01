import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Personal from '../views/Personal/Personal.vue'
import Login from '../views/Login/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/login',
    component:Login
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// console.log(router);
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

export default router
