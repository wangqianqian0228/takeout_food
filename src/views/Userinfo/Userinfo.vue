<!--  -->
<template>
  <div class="userinfo">
    <i class="iconfont iconzuojiantou" @click="$router.back()"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style  lang='less'>
.userinfo{
    position: relative;
}
.iconzuojiantou {
    position: absolute;
    top: .2rem;
    left: .3rem;
    font-size: 0.74rem;
  }
</style>