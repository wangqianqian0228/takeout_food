import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home/Home.vue'
// import Search from '../views/Search/Search.vue'
// import Order from '../views/Order/Order.vue'
// import Personal from '../views/Personal/Personal.vue'
// import Login from '../views/Login/Login.vue'
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods.vue'
import ShopComments from '../views/Shop/ShopComments/ShopComments.vue'
import ShopDetails from '../views/Shop/ShopDetails/ShopDetails.vue'
Vue.use(VueRouter)
const routeOption = [{
    path: '/home',
    name: 'Home',
    meta: {
      showFooter: true
    }
  },
  {
    path: '/',
    redirect: '/home',
    name: 'Home'
  },
  {
    path: '/search',
    name: 'Search',
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    name: "Order",
    meta: {
      showFooter: true
    }
  },
  {
    path: '/personal',
    name: "Personal",
    meta: {
      showFooter: true
    }
  },
  {
    path: '/login',
    name: "Login",
  
  },
  {
    path: '/userinfo',
    name: "Userinfo",
  
  },
  {
    path: '/shop',
    name: 'Shop',
    children: [{
      path: '/shop/shopgoods',
      name: 'ShopGoods',
      component:ShopGoods
    }, {
      path: '/shop/shopcomments',
      name: 'ShopComments',
      component:ShopComments
    }, {
      path: '/shop/shopdetails',
      name: 'ShopDetails',
      component:ShopDetails

    }]
  }


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