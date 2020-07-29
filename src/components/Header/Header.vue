<!-- 头部组件 -->
<template>
  <div class="header">
    <span class="search">
      <i class="iconfont iconsousuo"></i>
    </span>
    <span class="address ellipsis">
     昌平区北七家修正大厦(北清路北)
    </span>
    <span class="login-register">登录|注册</span>
  </div>
</template>

<script>

export default {
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
  height: 0.9rem;
  width: 100%;
  background-color: #02a774;
  span {
    position: absolute;
    line-height: 0.9rem;
    color: #fff;
  }
  .search {
    width: 0.9rem;
    top: 0;
    left: 0;
    text-align: center;
    i {
      font-size: 0.44rem;
    }
  }
  .address {
    width: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .login-register {
    bottom: 0;
    right: 0.2rem;
    font-size: 0.28rem;
  }
}
</style>
