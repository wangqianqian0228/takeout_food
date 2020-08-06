import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'
import store from './store'
import './common/css/reset.css'
import './assets/swiper.css'
import './common/js/flexible'
// import "swiper/swiper-bundle.min.css";
// 按需导入mint-ui中的组件
import {
  Button,
  Toast,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Field,
  Switch
} from 'mint-ui'

let comsOption = {
  Button,
  Toast,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Field,
  Switch
}
// console.log(Object.keys(comsOption))
Object.keys(comsOption).forEach(item => {
  Vue.component(comsOption[item].name, comsOption[item]);
})

// Vue.component(Button.name, Button);
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);
// Vue.component(Field.name, Field);
// Vue.component(Switch.name, Switch);
//Toast是方法，不同注册侧组件，应该是把这个对象挂载到 Vue.prototype上面。
// Vue.component(Toast.name,Toast);
Vue.prototype.$toast = Toast;
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
new Vue({
  router,//使用上vue-router
  store,//使用上vuex
  render: h => h(App)
}).$mount('#app')