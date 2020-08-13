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
    name:'Home',
    meta:{
      showFooter:true
    }
  },
  {
    path:'/',
    redirect:'/home',
    name:'Home'
  },
  {
    path:'/search',
    name:'Search',
    meta:{
      showFooter:true
    }
  },
  {
    path:'/order',
    name: "Order",
    meta:{
      showFooter:true
    }
  },
  {
    path:'/personal',
    name: "Personal",
    meta:{
      showFooter:true
    }
  },
  {
    path:'/login',
    name: "Login",
    meta:{
      showFooter:false
    }
  },
  {
    path:'/userinfo',
    name: "Userinfo",
    meta:{
      showFooter:false
    }
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
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
//  console.log(router);
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

export default router
