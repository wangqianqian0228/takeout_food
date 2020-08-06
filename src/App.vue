<template>
  <div id="app">
    <!-- <router-link to="/home">首页</router-link> -->
    <div class="component-view">
      <router-view />
    </div>

    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  components: {
    FooterGuide,
  },
   mounted() {
    this.$store.dispatch('getAddress', {})
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
