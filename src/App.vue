<template>
  <div id="app">
   <!-- <router-link to="/home">首页</router-link> -->
    <router-view/>
    <FooterGuide></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from '@/components/FooterGuide/FooterGuide'
export default {
  components:{
    FooterGuide
  }
}
</script>
<style lang="stylus">


</style>
