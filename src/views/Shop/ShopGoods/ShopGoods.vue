<!-- 点餐tab页 -->
<template>
  <div class="goods-container">
    <div class="menu-wrapper">
      <ul>
        <li class="menu-wrapper-list" v-for="(item,index) in goods" :key="index" >
          <i class="list-icon" v-if="item.icon" :style="{backgroundImage:`url(${item.icon})`}"></i>
          <span class="list-title">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <div class="foods-content" v-for="(item,index) in goods" :key="index" >
        <h2 class="foods-content-title">
          {{item.name}}
        </h2>
        <ul>
          <li class="foods-list" v-for="(food,index) in item.foods" :key="index">
            <div class="foods-img">
              <img :src="food.image" alt="" />
            </div>
            <div class="foods-info">
              <div class="foods-info-title"><span>{{food.name}}</span></div>
              <div class="foods-info-desc overellipsis">
                {{food.description}}
              </div>
              <div class="foods-info-quantity">
                <span>月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
              </div>
              <div class="foods-info-price">
                <span class="now">￥{{food.price}}</span><span class="ago" v-if='food.oldPrice'>￥{{food.oldPrice}}</span>
              </div>
              <div class="add-icon"><span>+</span></div>
            </div>
          </li>
          
        </ul>
      </div>
     
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
    };
  },

  components: {},

  computed: {
    // goods就是一个计算属性
    ...mapState(['goods'])
  },

  mounted() {
   this.$store.dispatch('getGoods')
  },

  methods: {
   
    
  },
};
</script>
<style lang="less">
.goods-container {
  display: flex;
  background: #f3f5f7;
  font-size: 0.24rem;
  .menu-wrapper {
    width: 80px;
    ul {
      padding: 0 0.2rem;
    }
    .menu-wrapper-list {
      height: 1.08rem;
      line-height: 1.08rem;
      text-align: center;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      box-sizing: border-box;
      .list-icon {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        margin-right: 5px;
        background-repeat:  no-repeat;
        background-size: 0.24rem 0.24rem;
        margin-bottom: 3px;
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    .foods-content-title {
      height: 0.52rem;
      line-height: 0.52rem;
      padding-left: 0.28rem;
      color: #93999f;
    }
    .foods-list {
      display: flex;
      padding: 0.36rem;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .foods-img {
        width: 1.14rem;
        height: 1.14rem;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .foods-info {
        flex: 1;
        color: #93999f;
        font-size: 0.2rem;
        position: relative;
        .foods-info-title {
          height: 0.28rem;
          line-height: 0.28rem;
          color: #07111b;
          margin: 2px 0 0.16rem 0;
        }
        .foods-info-desc {
          line-height: 0.28rem;
          margin-bottom: 0.12rem;
        }
        .foods-info-quantity {
          margin-bottom: 0.12rem;
          span {
            margin-right: 0.24rem;
          }
        }
        .foods-info-price {
          .now {
            color: #f01414;
            font-size: 0.28rem;
            margin-right: 0.16rem;
          }
          .ago {
            text-decoration: line-through;
          }
        }
        .add-icon{
          position: absolute;
          bottom: 0;
          right: 0;
          width: .48rem;
          height: .48rem;
          font-size: .48rem;
          line-height: .38rem;
          text-align: center;
          border-radius: 50%;
          background-color: #02a774;
          span{
            display: block;
            height: 100%;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
