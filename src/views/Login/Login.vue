<!-- 登录组件 -->
<template>
  <div class="login">
      <h1>美团外卖</h1>
    
        <mt-button @click.native='handle'>按钮</mt-button>
    
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

  methods: {
    handle(){
      this.$toast('hello world');
    }
  }
}

</script>
<style  lang='less'>
.login{
  width: 6rem;
  margin: 1.2rem auto;
  margin-bottom: 0;
}
</style>