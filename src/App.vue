<template>
  <div id="app">
    <!-- <router-link to="/home">首页</router-link> -->
    <router-view />
    <FooterGuide></FooterGuide>
    
  </div>
</template>
<script>
import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  components: {
    FooterGuide,
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
  display: flex;
  flex-direction: column;
  max-width: 15rem;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;

}
.content{
  flex: 1;
  overflow: auto;
  background-color: pink;
}
</style>
