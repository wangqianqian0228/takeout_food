<!--  -->
<template>
  <div class="home-list">
    <div class="near-shop">
      <span><i class="iconfont iconcaidan"></i></span>
      <span>附近商家</span>
    </div>
    <div v-if="shops.length">
      <ul class="shop-list" v-for="(shop, index) in shops" :key="index">
        <li class="shop-bg">
          <img :src="`${baseImgUrl}${shop.image_path}`" alt="" />
        </li>
        <li class="shop-detail">
          <div class="list-name">
            <span class="brand">品牌</span
            ><span class="name ellipsis">{{ shop.name }}</span>
          </div>
          <div class="list-star">
            <span class="star">
              <span
                class="star-item"
                v-for="(star, index) in parseInt(shop.rating)"
                :key="index"
              ></span>
              <span
                class="star-item half"
                v-show="shop.rating - parseInt(shop.rating) < 1"
              ></span>
              <span class="star-item none"> </span>
              <span class="score">{{ shop.rating }}</span>
            </span>
            <span class="sale"> 月售{{ shop.recent_order_num }}单 </span>
          </div>
          <div class="list-price">
            <span>¥{{ shop.float_minimum_order_amount }}起送</span>
            <span>配送费约¥{{ shop.float_delivery_fee }}</span>
          </div>
        </li>
        <li class="service">
          <div>
            <span v-for="(support, index) in shop.supports" :key="index">{{
              support.icon_name
            }}</span>
          </div>
          <div>
            <span class="meituan-service">{{ shop.delivery_mode.text }}</span>
          </div>
        </li>
      </ul>
    </div>
    <ul v-else>
      <li v-for="(item,index) in 10" :key="index"><img src="./imgs/shop/shop_back.svg" alt="" /></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      baseImgUrl: "http://cangdu.org:8001/img/",
    };
  },

  components: {},

  computed: {
    ...mapState(["shops"]),
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="less">
.home-list {
  margin-top: 0.2rem;
  border-top: 1px solid rgb(214, 214, 214);
  .near-shop {
    font-size: 0.28rem;
    padding: 0.2rem 0.2rem 0;
    span {
      margin-right: 6px;
      color: #999;
    }
  }
  .shop-list {
    display: flex;
    padding: 10px 10px;
    .shop-bg {
      flex: 1;
      img {
        border: 1px solid #999;
        width: auto;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .shop-detail {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: space-between;
      font-size: 0.24rem;
      color: #666;

      .list-name {
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
    .star-item {
      display: inline-block;
      background: url(./imgs/stars/star24_on@2x.png);
      background-size: 10px 10px;
      width: 0.2rem;
      height: 0.2rem;
    }
    .star-item.half {
      background-image: url(./imgs/stars/star24_half@2x.png);
    }
    .star-item.none {
      background-image: url(./imgs/stars/star24_off@2x.png);
    }
    .score {
      color: #ff6000;
      font-size: 10px;
      margin: 0 8px;
    }
    .sale {
      font-size: 10px;
    }
    .shop-detail > div {
      flex: 1;
    }
    .list-price span {
      margin-right: 8px;
    }
    .service {
      flex: 1;
      display: flex;
      flex-direction: column;
      div {
        flex: 1;
        font-size: 0.2rem;
        color: #999;
        text-align: right;
        vertical-align: bottom;
        line-height: 0.56rem;
      }
      span {
        border: 1px solid #f1f1f1;
        padding: 0 2px;
      }
      .meituan-service {
        color: #02a774;
        border: 1px solid #02a774;
        font-size: 0.16rem;
        padding: 1px;
      }
    }
  }
}
</style>
