<!-- 点餐tab页 -->
<template>
  <div class="goods-container">
    <div class="menu-wrapper">
      <ul>
        <li 
        class="menu-wrapper-list" 
        
        v-for="(item,index) in goods" 
        :key="index" 
        @click="showGoodsMenu(index)"
        >
          <i class="list-icon" v-if="item.icon" :style="{backgroundImage:`url(${item.icon})`}"></i>
          <span 
            class="list-title"
            :class="{ currenColor:isShowColor}"
            >{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <div>
        <div class="foods-content" v-for="(item,index) in goods" :key="index" >
        <h2 class="foods-content-title" :ref="'foods_'+ index">
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
                <span class="now">￥{{food.price}}</span>
                <span class="ago" v-if='food.oldPrice'>￥{{food.oldPrice}}</span>
              </div>
              <div class="add-icon"><span>+</span></div>
            </div>
          </li>
          
        </ul>
      </div>
      </div>
      
     
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BetterScroll from 'better-scroll'

export default {
  data() {
    return {
      menuScroll: null,
      GoodsScroll: null,
      isShowColor: false,
      tops:[],
      scrollY : 0
    };
  },
filters:{
// priceFloat(cal){
// return val.toFixed(2)
// }
},
  components: {},

  computed: {
    // goods就是一个计算属性
    ...mapState(['goods']),
    // 计算滚动时对应的菜单选项的下标
    // getIndex(){
    //   this.tops.for
    //   return index
    // }
  },

  mounted() {
    const options = {
      click: true,
      tap: true,
      // probeType
      probeType: 2 // 惯性滚动是不会触发scroll事件的
    }
   this.$store.dispatch('getGoods',() => {
     this.$nextTick(()=>{
         this.initScroll(options)
         this.initTops()
     })
   })
  },

  methods: {
    // 点击滚动到对应的食品
   showGoodsMenu(i){
     this.GoodsScroll.scrollToElement(this.$refs[`foods_${i}`][0])
   },
   // 初始化滚动
   initScroll(options){
     this.menuScroll = new BetterScroll('.menu-wrapper',options)
     this.GoodsScroll = new BetterScroll('.foods-wrapper',options)
     this.GoodsScroll.on('scroll',({x,y})=>{
           this.scrollY = Math.abs(y)
      })
   },
   // 初始化右边我的菜单选项，存储到达顶部的距离
   initTops(){
     const menutops = []
     let top = 0
     // document.getElementsByClassName('menu-wrapper-list') :元素集合
     const eleCollection = document.getElementsByClassName('foods-content')
     const eleArr = Array.prototype.slice.call(eleCollection)
    //  console.log(111,eleArr)
     eleArr.forEach(element => {
       menutops.push(top)
       top += element.offsetHeight      
     });
     this.tops = menutops
   }
  },
};
</script>
<style lang="less">
.goods-container {
  display: flex;
  background: #f3f5f7;
  font-size: 0.24rem;
  flex: 1;
  overflow: hidden;
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
    .currenColor {
      color: #02a774;
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
