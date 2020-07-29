# 外卖项目总结以及注意事项
## 项目前期工作
1. 重置样式可以在index.html文件上采用link的方式，也可以在main.js入口文件中采用import的方式引入
2. `import router from './router'`:导入了router，可以用：组件标签和属性
   - <router-link>
   - <router-view>
   -  <keep-alive>
   -  $route
   -  $router
> 有类似的结构可以设置成组件
3. 在app组件引入FooterGuide组件，
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
4. 完成FooterGuide组件
   
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