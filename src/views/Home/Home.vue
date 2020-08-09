<!-- 首页组件111 -->
<template>
  <div class="home">
    <Header class="header-box">
      <span class="search" slot="search_left">
        <i class="iconfont iconsousuo"></i>
      </span>
      <span class="address ellipsis">
        {{ address.name }}
      </span>
      <span class="login-register" slot="login_right">登录|注册</span>
    </Header>
    <div class="content">
      <nav class="home-nav">
        <div class="swiper-container" v-if="categorys.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
              <a href="javascript:;" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                <div class="food_container">
                  <img :src="`${baseImageUrl}${category.image_url}`"/>
                  <!-- https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg -->
                </div>
                <span>{{category.title}}</span>
              </a>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div v-else><img src="./imgs/nav/msite_back.svg" alt="back"></div>
      </nav>
      <ShopList></ShopList>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header/Header";
import ShopList from "../../components/ShopList/ShopList";
import Swiper from "../../assets/swiper";
import { mapState } from "vuex";

export default {
  data() {
    return {
      title: "昌平区北七家修正大厦(北清路北)",
      baseImageUrl:'https://fuss10.elemecdn.com'
    };
  },

  components: {
    Header,
    ShopList,
  },

  computed: {
    ...mapState(["address", "categorys"]),
    // 计算categorysArr的属性，根据一维数组转换成二维数组
    categorysArr() {
      // 解构赋值
      const { categorys } = this;
      // 准备空的二维数组
      const arr = [];
      // 准备空的一维数组
      let minArr = [];
      categorys.forEach((c) => {
        if (minArr.length === 8) {
          // 满8个的时候，又创建了一个数组，又推进去
          // 主要思想，满8个的时候，就创建新数组，推到二维数组里面去。
          minArr = [];
        }
        // 第一轮将空的一维数组推进空的二维数组里面，因为推的是地址，所以，可以向以为数组里面再推元素进去
        if(minArr.length === 0){
          arr.push(minArr)
        }
        minArr.push(c);
      });
      // 返回这个二维数组
      return arr;
    },
  },

  mounted() {
    
    // 发送请求获取商品列表数据
    this.$store.dispatch("getFoodsCategories");
    // 发送请求获取商家列表数据
    this.$store.dispatch('getShops')
  },
  watch: {
    categorys(){
  // categorys一旦有数据，就等界面更新，立即调用$nextTick函数，创建轮播对象。
      this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
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

    }
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
              display: block;
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
