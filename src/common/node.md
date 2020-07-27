# 外卖项目总结以及注意事项
## 项目前期工作
1. 重置样式可以在index.html文件上采用link的方式，也可以在main.js入口文件中采用import的方式引入
2. `import router from './router'`:导入了router，可以用：组件标签和属性
   - <router-link>
   - <router-view>
   -  <keep-alive>
   -  $route
   -  $router
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