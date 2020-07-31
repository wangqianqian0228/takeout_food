<!-- 首页组件 -->
<template>
  <div class="home">
    <Header :title="title" class="header-box">
      <span class="search" slot="search_left">
        <i class="iconfont iconsousuo"></i>
      </span>
      <span class="address ellipsis">
       {{title}}
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
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header/Header";
import Swiper from "swiper";
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
        loop: true, // 循环模式选项
        // 如果需要分页器
        // 自动播放
        autoplay: {
          delay: 1000,
        },
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
  background-color: pink;
  .header-box {
    position: relative;
    span {
      position: absolute;
      line-height: 0.9rem;
      color: #fff;
    }
    .address {
    width: 50%;
    text-align: center;
    left: 0;
    right: 0;
    margin: 0 auto;
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
  }
}
</style>
