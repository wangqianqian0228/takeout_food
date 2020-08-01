<template>
  <div id="app">
    <!-- <router-link to="/home">首页</router-link> -->
    <div class="component-view">
      <router-view />
    </div>

    <FooterGuide></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  components: {
    FooterGuide,
  },
  mounted() {
    window.onhashchange=function(){
      console.log(location.hash);
    }
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
