<!-- 个人组件 -->
<template>
  <div>
    <Header >
      <span class="address ">
       {{title}}
      </span>
    </Header>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
export default {
  data () {
    return {
      title:'我的'
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