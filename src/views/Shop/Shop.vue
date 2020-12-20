<!-- 商家详情首页 -->
<template>
  <div>
    <ShopHeader></ShopHeader>
    <div class="tab"></div>
    <!-- 点餐 -->
    <div class="tab-shops">
       <ShopGoods></ShopGoods>
    </div>
    <!-- 评价 -->
    <div class="tab-comments">
    <router-link to="/shop/shopcomments">评价</router-link>
    </div>

    <!-- 商家 -->
    <div class="tab-shops-details">
    <router-link to="/shop/shopdetails">商家</router-link>
    </div>

   
  </div>
</template>

<script>
import ShopGoods from '@/views/Shop/ShopGoods/ShopGoods'
// import ShopComments from '@/views/Shop/ShopComments/ShopComments'
// import ShopDetails from '@/views/Shop/ShopDetails/ShopDetails'
import ShopHeader from '@/components/ShopHeader/ShopHeader'
export default {
  data() {
    return {
      
    };
  },

  components: {
    ShopGoods,
    // ShopComments,
    // ShopDetails,
    ShopHeader
  },

  computed: {},

  mounted() {
    this.$store.dispatch('getGoods')
    this.$store.dispatch('getShopInfo')
    this.$store.dispatch('getRatings')
  },

  methods: {
  
  },
};
</script>
<style lang="less">

</style>
