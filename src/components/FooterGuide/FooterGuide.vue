<!-- 尾部导航 -->
<template>
  <footer class="footer_guide">
    <div
      href="javascript:;"
      class="guide_item"
      @click="goto('/home')"
      :class="{ clicked_color:$route.path==='/home'  }"
    >
      <span class="item_icon">
        <i class="iconfont iconwaimai1"></i>
      </span>
      <span>外卖</span>
    </div>
    <div
      href="javascript:;"
      class="guide_item"
      @click="goto('/search')"
      :class="{ clicked_color: $route.path==='/search'}"
    >
      <span class="item_icon">
        <i class="iconfont iconsousuo"></i>
      </span>
      <span>搜索</span>
    </div>
    <div
      href="javascript:;"
      class="guide_item"
      @click="goto('/order')"
      :class="{ clicked_color:$route.path==='/order' }"
    >
      <span class="item_icon">
        <i class="iconfont iconorder"></i>
      </span>
      <span>订单</span>
    </div>
    <div
      href="javascript:;"
      class="guide_item"
      @click="goto('/personal')"
      :class="{ clicked_color:  $route.path==='/personal'}"
    >
      <span class="item_icon">
        <i class="iconfont iconmainoff"></i>
      </span>
      <span>我的</span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    goto(paths) {
      this.$router.replace(paths);
    },
  },
};
</script>
<style lang="less">
// 被激活时的样式
.clicked_color {
  color: #02a774;
  
}
.footer_guide {
  // position: fixed;
  // bottom: 0;
  // left: 0;
  display: flex;
  width: 100%;
  height: 1rem;
  border-top: 1px solid #ccc;
  .guide_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      font-size: 0.32rem;
    }
    span:first-child {
      margin-bottom: 4px;
    }
    .iconfont {
      font-size: 0.44rem;
    }
  }
}
</style>
