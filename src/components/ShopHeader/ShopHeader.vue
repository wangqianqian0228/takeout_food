<!--  -->
<template>
  <div class="headers">
    <div class="top">
      <i class="iconfont iconzuojiantou" @click="$router.push('/')"></i>
    </div>
    <div class="body">
      <img src="./imgs/bg1.png" alt="" class="shop-img" />
      <div class="title">
        <span class="brand">品牌</span>
        <span class="name ellipsis" @click="getlist">一心堂</span>
        <p class="quantity"></p>
      </div>
      <p class="info">
        <span>4.2&nbsp;</span>
        <span>月售90单</span>
        <span>
          硅谷专送
        </span>
        <span>约28分钟&nbsp;</span>
        <span>距离1000m</span>
      </p>
      <p class="coupon">
        <span class="first_order">首单</span>
        <span>新用户下单立减17元(不与其它活动同享)</span>
        <span class="discount">8个优惠</span>
      </p>
    </div>
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

  methods: {
    getlist() {},
  },
};
</script>
<style lang="less">
.headers {
  .top {
    height: 1rem;
    background-image: url("./imgs/bg1.png");
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
    padding: 0.6rem 0;
    font-size: 0.3rem;
    .title {
      height: 0.6rem;
      line-height: 0.6rem;
      position: relative;
      margin-top: 10px;
      padding: 0 1.46rem;
      box-sizing: border-box;
      &::after {
        content: "";
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        top: 50%;
        right: 1.4rem;
        transform: translateY(-50%);
        background: url(./imgs/row_right.svg) no-repeat;
        background-size: 0.3rem 0.3rem;
      }
    }
    .info {
      margin-top: 10px;
      padding: 0 0.64rem;
      color: black;
      line-height: 1;
    }
    .coupon {
      color: black;
      line-height: 1;
      position: relative;
      margin-top: 5px;
      .first_order {
        padding: 0.01rem;
        background-color: #70bc46;
        border-radius: 2px;
        color: #fff;
      }
      .discount::after {
        content: "";
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        top: 50%;
        right: 0.2rem;
        transform: translateY(-50%);
        background: url(./imgs/down_row.svg) no-repeat;
        background-size: 0.2rem 0.2rem;
      }
    }
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
      height: 100%;
      margin-right: 5px;
      box-sizing: border-box;
      vertical-align: top;
    }
    .name {
      display: inline-block;
      width: 2.8rem;
      height: 100%;
      color: #333;
      font-size: 0.32rem;
      text-align: center;
      line-height: 0.7rem;
    }
  }
}
</style>
