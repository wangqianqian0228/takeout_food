<!-- 搜索组件 -->
<template>
  <div>
   <Header :title='title'></Header>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
export default {
  data () {
    return {
      title:'搜索'
    };
  },

  components: {
    Header
  },

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style  lang='less'>
</style>