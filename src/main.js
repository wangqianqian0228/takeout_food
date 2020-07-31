import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'
import store from './store'
import './common/css/reset.css'
import './common/js/flexible'
import "swiper/swiper-bundle.min.css";




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
