<!-- 头部组件 -->
<template>
  <div class="header">
    <slot name="search_left"></slot>
    <span class="address ellipsis">
      {{ title }}
    </span>
    <slot name="login_right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less">
.header {
  position: relative;
  line-height: 0.9rem;
  text-align: center;
  color: #fff;
  height: 0.9rem;
  width: 100%;
  background-color: #02a774;
  .address {
    width: 50%;
    text-align: center;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>
