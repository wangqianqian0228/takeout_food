<!-- 头部组件 -->
<template>
  <div class="header">
    <!-- 使用作用域插槽，别的组件引用的时候，你要写成什么形式，就写成什么形式 -->
    <slot name="search_left"></slot>
    <span>{{title}}</span>  
    <slot name="login_right"></slot>
  </div>
</template>

<script>
export default {
  // 父子组件传参
  props:{
     title:String
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less">
.header {
  position: relative;
  line-height: 0.9rem;
  text-align: center;
  color: #fff;
  height: 0.9rem;
  width: 100%;
  background-color: #02a774;
  font-size: .48rem;
  
}
</style>
