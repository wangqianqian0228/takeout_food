import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home/Home.vue'
// import Search from '../views/Search/Search.vue'
// import Order from '../views/Order/Order.vue'
// import Personal from '../views/Personal/Personal.vue'
// import Login from '../views/Login/Login.vue'

Vue.use(VueRouter)

  const routeOption = [
  {
    path:'/home',
    name:'Home'
  },
  {
    path:'/',
    redirect:'/home',
    name:'Home'
  },
  {
    path:'/search',
    name:'Search'
  },
  {
    path:'/order',
    name: "Order",
  },
  {
    path:'/personal',
    name: "Personal",
  },
  {
    path:'/login',
    name: "Login",
  },
  
  
]
const routes = routeOption.map((route) => {
   const routeItem = {
      ...route,
      component: () => import(`../views/${route.name}/${route.name}.vue`)
   }
   return routeItem
})
// console.log(routes)

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
