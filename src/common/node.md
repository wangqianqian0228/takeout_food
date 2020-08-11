# 外卖项目总结以及注意事项
## 项目前期工作
1. 重置样式可以在index.html文件上采用link的方式，也可以在main.js入口文件中采用import的方式引入
2. `import router from './router'`:导入了router，可以用：组件标签和属性
   - <router-link>
   - <router-view>
   -  <keep-alive>
   -  $route：当前路由信息
      ![](../common/noteImgs/2.png)
  
   -  $router
> 有类似的结构可以设置成组件
1. 在app组件引入FooterGuide组件，
   1.1 先导入 `import FooterGuide from '@/components/FooterGuide/FooterGuide'`
   1.2 定义为组件
   ```js
   export default {
    components:{
        FooterGuide
    }
    }
   ```
   1.3 引用组件 `<FooterGuide></FooterGuide>`
2. 完成FooterGuide组件
   
### 采用rem布局样式
1. 先安装 安装 flexible和 postcss-px2rem（命令行安装）
   npm install lib-flexible --save
   npm install postcss-px2rem --save
2. 在项目入口文件main.js 中引入lib-flexible
   import 'lib-flexible'
> 注意事项（important）: 由于flexible会动态给页面header中添加`<meta name='viewport' >`标签，所以务必请把目录 public/index.html 中的这个标签删除！！！

3. 配置postcss-px2rem
   ```js
   module.exports = {
    css: {
        loaderOptions: {
          css: {},
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 37.5
              })
            ]
          }
        }
    },
   }
   ```
4. 在vscode中cssrem中配置选项，font-size：75px
5. 重启使用

### 关于rem引入的flexible.js，对于移动端和pc端设置会不同
移动端：
```js
function setRemUnit() {
   //clientWidth:可点击区域范围的宽
      console.log(docEl.clientWidth);
      var rem = docEl.clientWidth*2 / 15;
      docEl.style.fontSize = rem + "px";
    }
```
移动端设计稿一般拿来的是750px，所以750px以下会有rem缩放问题，故750px/15=50px=1rem
由于iphone678屏幕像素为375，所以在计算公式里面要乘以2，再除以15，也可设置max-width:750px,超过屏幕区域的话，按照750px计算，并且居中。

/* 约束屏幕尺寸 */
  @media screen and (max-width: 1024px) {
    // width小于或者等于max-width
    html {
      font-size: 42px !important;
    }
  }

  @media screen and (min-width: 1920px) {
    // width大于或者等于min-width
    html {
      font-size: 80px !important;
    }
  }

#### push和replace区别：
push一个地址，就会向在history栈中添加一个记录，点击浏览器上的返回键的时候，会返回上一个页面；replace一个地址，跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

### 点击footer的各个部分，实现路由的跳转，采用replace跳转
`@click='goto("/home")'`
`@click='goto("/search")'`
`@click='goto("/order")'`
`@click='goto("/personal")'`

### 点击谁 图标和字体会变成绿色
动态绑定class看是否要用对象语法？
{类名：布尔值}
如果当前路径==请求的路径
:class="{ clicked_color:  this.$route.path==='/personal'}"

### flex布局
要给父盒子定高，内层盒子才会有滚动效果，加上flex:1

> 对象的属性必须是合法的标志符，合法的标志符可以直接不加引号引用，而不是合法的标志符，就不能直接引用，只能加引号括起来，标明其为字符串，如clicked-color不是合法标志符，所以必须加引号，标明其为字符串。

### 点击切换路由
```js
@click="goto('/personal')"
@click='$router.back()'
//返回上一级

goto(paths) {
      this.$router.replace(paths);
    },
```
$route:当前路由，包含当前路由信息：
  {
    path:'/home',
    name:'Home',
    meta:{

    }

  },

### 使用的是同一款组件，但是可以根据作用域插槽来控制组件内部的元素是否显示
在Home组件中，使用作用域插槽的形式占位，在各自的组件中，采用slot="xxx",与子组件中的`<slot name = 'search_left'></slot>`name属性值要一致。
Header组件中：
```html
 <slot name = 'search_left'></slot>
    <span class="address ellipsis">
     {{title}}
    </span>
 <slot name = 'login_right'></slot>
```
在Home组件中：
```html
<Header :title="title">
    <span class="search" slot="search_left">
        <i class="iconfont iconsousuo"></i>
    </span>
    <span class="login-register" slot="login_right">登录|注册</span>
</Header>
```

### 项目中出现的问题
1. 引入swipe.js:
   在进行移动端开发的时候，引用swiper.js的时候，引用的是swipe.js 6.0版本，引入过后，发现底部的分页器不能显示，也不能自动轮播，添加了相关属性，都不能解决，在github上查看，目前的swipe.js 6.0确实存在这个bug，最后只能卸载新版本，引用旧版本，（删除node_modules后，重新npm i）当时就是觉得旧版本可能会稳定一点，最后就解决了这个问题。
2. 有关eslint相关错误，vue-cli3.0没有安装eslintignore,则自己创建文件，文件内容：`src/assets/`
3. 根据后端返回来的数据是一维数组，要转换成长度为8的二维数组，进行轮播图的翻转数据，采用的是？
```js
 categorysArr() {
      // 解构赋值
      const { categorys } = this;
      // 准备空的二维数组
      const arr = [];
      // 准备空的一维数组
      let minArr = [];
      categorys.forEach((c) => {
        if (minArr.length === 8) {
          // 满8个的时候，又创建了一个数组，又推进去
          // 主要思想，满8个的时候，就创建新数组，推到二维数组里面去。
          minArr = [];
        }
        // 第一轮将空的一维数组推进空的二维数组里面，因为推的是地址，所以，可以向以为数组里面再推元素进去
        if(minArr.length === 0){
          arr.push(minArr)
        }
        minArr.push(c);
      });
      // 返回这个二维数组
      return arr;
    },
```
### 项目中用到的一些方法：
`Object.keys()`:把一个对象转化成数组，这个数组是由对象的属性名所组成的数组。
`arr.map()`:对数组的每一项进行处理加工，并返回一个新数组。
```js
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
console.log(Object.keys(comsOption))
Object.keys(comsOption).forEach(item => {
  Vue.component(comsOption[item].name, comsOption[item]);
})
```
comsOption中的内容：

![](../common/noteImgs/1.png)
```js
// 导入路由
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
```
### 使某些页面不显示底部组件
### 配置请求代理
    1. 创建api文件夹，里面存放ajax请求函数ajax.js(一般公司提供)和接口请求函数index.js(自己配置)
    2. 在index.js中，
       ```js
       import ajax from './ajax'
       const BASE_URL='/api'
       //配置用户代理参数
       ```
    3. 在vue.config.js中，配置匹配规则
      ```js
      module.exports = {
          devServer: {
              proxy: {
                  '/api': {
                      //要访问的跨域的域名
                      target: 'http://localhost:3000',
                      ws: true,
                      secure: false, 
                      // 使用的是http协议则设置为false，https协议则设置为true
                      changOrigin: true, //开启代理
                      //  相当于请求遇见 /api 才做代理，但真实的请求中没有/api，
                      // 所以在pathRewrite中把 /api 去掉, 这样既有了标识, 又能在请求接口中把 /api 去掉。
                      pathRewrite: {
                          // pathRewrite：如果不写则只能修改代理的域名，如果写则可以修改代理的域名和后边的路径。
                          '^/api': ''
                      }
                  }
              }
          }
      }
      ```

### 采用骨架屏占位
主要思想：采用v-if 和v-else的思想，数据未拿到，就采用一张图片占位，有数据的时候显示正常数据，没数据的时候显示svg图片
` <div class="swiper-container" v-if="categorys.length">...</div>`
`<div v-else><img src="./imgs/nav/msite_back.svg" alt="back"></div>`
### 获取验证码的字体颜色，手机号正则判断正确，则显示这个类，可以用计算属性来做。
` <a href="javascript:;" :class="{'get-verification':rightPhone}" >获取验证码</a>`
```js
computed: {
    rightPhone(){
      return /^1[3|4|5|7|8][0-9]{9}$/.test(this.phone)
    }
  },
```

### 发送短信倒计时注意：
在一轮定时器没有完的时候，是不能再执行这个定时器的,所以前提需要判断这个定时器存不存在。把这个定时器挂载到vue全局上。
```js
// 点击按钮
    getVerify(e) {
      // this.timer存在的时候，直接退出函数，不执行以后的代码
      // this.timer不存在的时候，相当于没有定时器，点击按钮有效
      if(this.timer){
        return
      }
      let num = 20;
      this.timer = setInterval(() => {
        num--;
        if (num < 0) { 
        clearInterval(this.timer);
        e.target.innerHTML = `获取验证码`;
          return;
        }
        e.target.innerHTML = `已发送${num}s`;
      }, 1000);
    },
  },
```
`<form class="tab-box" @submit.prevent='login'>`:form表单提交login事件，在提交之前，可做表单的预校验操作。

### 点击更换图片验证码
```js
// 点击更换验证码图片
    getCaptcha(event){
      // console.log(Date.now()) 获取现在的时间
      // http://localhost:3000/captcha 返回的就是一张图片路径
      event.target.src=`http://localhost:3000/captcha/?time=${Date.now()}`
      // 路径点击一次不发生改变，是不会发送请求的，所以要保证每次点击时候的路径不一样
    }
```

当需要在页面中或者是form标签中放置一个button按钮的时候，如果这个按钮不是做提交表单的，切记一定要设置其的属性type="button"。否则，给button一个点击事件的时候，它会自动将type="button"，自动提交表单。
