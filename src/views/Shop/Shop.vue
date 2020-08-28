<!-- 商家详情首页 -->
<template>
  <div>
    <div class="header">
      <div class="top">
        <i class="iconfont iconzuojiantou" @click="$router.back()"></i>
      </div>
      <div class="body">
        <img src="../Shop/imgs/bg2.jpeg" alt="" class="shop-img" />
        <div class="title">
          <span class="brand">品牌</span>
          <span class="name ellipsis">一心堂</span>
          <p class="quantity"></p>
        </div>
        <p class="coupon"></p>
      </div>
    </div>
    <div class="tab"></div>
    <div class="tab-shops"></div>
    <div class="tab-comments"></div>
    <div class="tab-shops-details"></div>
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
  .top {
    height: 1rem;
    background-image: url("../Shop/imgs/bg1.png");
    background-size: cover;
    position: relative;
    .iconzuojiantou {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      font-size: 0.74rem;
      color: #fff;
    }
  }
  .body {
    height: 100%;
    position: relative;
    padding: 0.6rem 0.4rem 0.1rem;
    .shop-img {
      position: absolute;
      width: 1.32rem;
      height: 1.32rem;
      left: 50%;
      transform: translate(-50%, -90%);
    }
    .brand {
      display: inline-block;
      padding: 3px;
      background-color: #ffd930;
      font-size: 0.22rem;
      margin-right: 5px;
    }
    .name {
      display: inline-block;
      width: 2.8rem;
      color: #333;
      font-size: 0.32rem;
    }
  }
}
</style>
