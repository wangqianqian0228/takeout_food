import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Personal from '../views/Personal/Personal.vue'

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
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
