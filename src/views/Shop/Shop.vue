<!-- 商家详情首页 -->
<template>
  <div class="shop-content">
    <ShopHeader></ShopHeader>
    <!-- 点餐 -->
    <div class="tab-box">
      <div class="tab-shops common-tab " :class="{selected:$route.path ==='/shop/shopgoods'}">
        <router-link to="/shop/shopgoods">店铺</router-link>
      </div>
      <!-- 评价 -->
      <div class="tab-comments common-tab" :class="{selected:$route.path ==='/shop/shopcomments'}">
        <router-link to="/shop/shopcomments">评价</router-link>
      </div>
      <!-- 商家 -->
      <div class="tab-shops-details common-tab" :class="{selected:$route.path ==='/shop/shopdetails'}">
        <router-link to="/shop/shopdetails">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import ShopGoods from "@/views/Shop/ShopGoods/ShopGoods";
// import ShopComments from '@/views/Shop/ShopComments/ShopComments'
// import ShopDetails from '@/views/Shop/ShopDetails/ShopDetails'
import ShopHeader from "@/components/ShopHeader/ShopHeader";
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed:{
    ...mapState['infos']
  },
  mounted(){
    this.$store.dispatch('getShopInfo')
  },
  components: {
    // ShopGoods,
    // ShopComments,
    // ShopDetails,
    ShopHeader,
  },

  computed: {},

  mounted() {

  },

  methods: {},
};
</script>
<style lang="less">
.shop-content{
  height: 100%;
  display: flex;
  flex-direction: column;
  .tab-box{
  display: flex;
  height: .8rem;
  .common-tab{
    flex: 1;
    height: 100%;
    text-align: center;
    line-height: .8rem;
    border-bottom: 1px solid transparent;
    box-sizing: border-box;
    a{
      display: block;
      height: 100%;
      font-size: .32rem;
    }
  }
  .selected{
    border-color: #02a774 ;
    a{
      color: #02a774;
    }
  }
}
}

</style>
