<template>
  <div id="app">
    <!-- <router-link to="/home">首页</router-link> -->
    <div class="component-view">
      <router-view />
    </div>
<!-- $route 当前路由-->
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
import {mapActions} from 'vuex'
export default {
  components: {
    FooterGuide,
  },
   mounted() {
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress','getUserInfo'])
  },
};
</script>
<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .component-view {
    flex: 1;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
