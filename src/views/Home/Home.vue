<!-- 首页组件 -->
<template>
  <div class="home">
    <Header class="header-box">
      <span class="search" slot="search_left">
        <i class="iconfont iconsousuo"></i>
      </span>
      <span class="address ellipsis">
        {{ title }}
      </span>
      <span class="login-register" slot="login_right">登录|注册</span>
    </Header>
    <div class="content">
      <nav class="home-nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/15.jpeg" />
                </div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/4.jpg" />
                </div>
                <span>商超便利</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/13.jpg" />
                </div>
                <span>美食</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/9.jpg" />
                </div>
                <span>简餐</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/12.jpg" />
                </div>
                <span>新店特惠</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/16.jpeg" />
                </div>
                <span>准时达</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/6.jpg" />
                </div>
                <span>预订早餐</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/10.jpg" />
                </div>
                <span>土豪推荐</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/17.jpeg" />
                </div>
                <span>川湘菜</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/11.jpg" />
                </div>
                <span>麻辣烫</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/13.jpg" />
                </div>
                <span>包子粥店</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/19.jpeg" />
                </div>
                <span>鲜花蛋糕</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/20.jpeg" />
                </div>
                <span>日韩料理</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/14.jpg" />
                </div>
                <span>果蔬生鲜</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/21.jpeg" />
                </div>
                <span>汉堡薯条</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./imgs/nav/8.jpg" />
                </div>
                <span>披萨意面</span>
              </a>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <div class="home-list">
        <div class="near-shop">
          <span><i class="iconfont iconcaidan"></i></span>
          <span>附近商家</span>
        </div>
        <ul class="shop-list">
          <li class="shop-bg"><img src="./imgs/shop/1.jpg" alt="" /></li>
          <li class="shop-detail">
            <div class="list-name">
              <span class="brand">品牌</span
              ><span class="name ellipsis">嘉禾一品（温都水城）</span>
            </div>
            <div class="list-star">
              <span class="star">
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item half"></span>
                <span class="score">4.7</span>
              </span>
              <span class="sale">
                月售106单
              </span>
            </div>
            <div class="list-price">
              <span>¥20起送</span>
              <span>配送费约¥5</span>
            </div>
          </li>
          <li class="service">
            <div>
              <span>保</span>
              <span>准</span>
              <span>票</span>
            </div>
            <div ><span class="meituan-service">美团专送</span></div>
          </li>
        </ul>
         <ul class="shop-list">
          <li class="shop-bg"><img src="./imgs/shop/2.jpg" alt="" /></li>
          <li class="shop-detail">
            <div class="list-name">
              <span class="brand">品牌</span
              ><span class="name ellipsis" >闪电哥哥ghj慰问费22</span>
            </div>
            <div class="list-star">
              <span class="star">
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item none"></span>
                <span class="score">4.2</span>
              </span>
              <span class="sale">
                月售106单
              </span>
            </div>
            <div class="list-price">
              <span>¥20起送</span>
              <span>配送费约¥5</span>
            </div>
          </li>
          <li class="service">
            <div>
              <span>保</span>
              <span>准</span>
              <span>票</span>
            </div>
            <div ><span class="meituan-service">美团专送</span></div>
          </li>
        </ul>
         <ul class="shop-list">
          <li class="shop-bg"><img src="./imgs/shop/3.jpg" alt="" /></li>
          <li class="shop-detail">
            <div class="list-name">
              <span class="brand">品牌</span
              ><span class="name ellipsis">苏州嘻哈包袱铺</span>
            </div>
            <div class="list-star">
              <span class="star">
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item"></span>
                <span class="star-item half"></span>
                <span class="score">4.6</span>
              </span>
              <span class="sale">
                月售106单
              </span>
            </div>
            <div class="list-price">
              <span>¥20起送</span>
              <span>配送费约¥5</span>
            </div>
          </li>
          <li class="service">
            <div>
              <span>保</span>
              <span>准</span>
              <span>票</span>
            </div>
            <div ><span class="meituan-service">美团专送</span></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header/Header";
import Swiper from "swiper";
// import Swiper from "../../assets/swiper";
import "swiper/swiper-bundle.min.css";

export default {
  data() {
    return {
      title: "昌平区北七家修正大厦(北清路北)",
    };
  },

  components: {
    Header,
  },

  computed: {},

  mounted() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        // loop: true, // 循环模式选项
        // 如果需要分页器
        // 自动播放
        autoplay: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    });
    // 页面元素加载完成，显示轮播
  },
  methods: {},
};
</script>
<style lang="less">
// @import 'swiper/swiper-bundle.css';
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  // background-color: pink;
  .header-box {
    position: relative;
    span {
      position: absolute;
      line-height: 0.9rem;
      color: #fff;
    }
    .address {
      width: 50%;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    .search {
      width: 0.9rem;
      top: 0;
      left: 0;
      i {
        font-size: 0.44rem;
      }
    }
    .login-register {
      bottom: 0;
      right: 0.2rem;
      font-size: 0.28rem;
    }
  }
  .content {
    flex: 1;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .home-nav {
      height: 4rem;
      margin-top: 0.3rem;
      border-bottom: 1px solid #eee;
      .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-wrapper {
          width: 100%;
          height: 100%;
          --swiper-theme-color: #ff6600;
          --swiper-pagination-color: #00ff33; /* 两种都可以 */
          .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            .link_to_food {
              width: 25%;
              .food_container {
                display: block;
                width: 100%;
                text-align: center;
                padding-bottom: 0.2rem;
                font-size: 0;
                img {
                  display: inline-block;
                  width: 1rem;
                  height: 1rem;
                }
              }
              span {
                display: block;
                width: 100%;
                text-align: center;
                font-size: 13px;
                color: #666;
              }
            }
          }
        }
      }
    }
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
        .star-item.half{
          background-image: url(./imgs/stars/star24_half@2x.png);
        }
        .star-item.none{
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
            font-size: .16rem;
            padding: 1px;
          }
        }
      }
    }
  }
}
</style>
