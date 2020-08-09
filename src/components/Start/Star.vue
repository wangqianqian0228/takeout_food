<!-- 渲染星级颗数组件 -->
<!-- 因为每个组件都会用，故封装成组件 -->

<template>
  <div class="star-box">
    <span
      :class="[`star-item${size}`, `${sc}`]"
      v-for="(sc, index) in starClass"
      :key="index"
    ></span>
  </div>
</template>

<script>
export default {
  // 需要由别的组件传过来的值，有评分和图的大小
  props: {
    score: Number,
    size: Number,
  },
  data() {
    return {};
  },

  components: {},

  computed: {
    //   比如说，这个sc=['on','on','on','half','off']
    // 具体多少个他是根据分数来计算，进而推进去的。
    starClass() {
      const sc = [];
      //   已经将props里面的数据挂载到了vm上面，所以引用数据要用this
      const { score } = this;
      //   推几个'on'属性进去
      const onlength = Math.floor(score);
      for (let i = 0; i < onlength; i++) {
        sc.push("on");
      }
      //   推几个half属性进去，half要么0个要么1个，相当于要么推，要么不推
      // 因为小数计算不精确，3.5-3~0.4999的情况，所以双方同时扩大，就不会有这个问题
      if (score * 10 - onlength * 10 > 5) {
        sc.push("half");
      }
      while (sc.length < 5) {
        sc.push("off");
      }
      console.log(sc);
      return sc;
    },
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="less">
.star-box{
    display: inline-block;
}
.star-item24 {
  display: inline-block;
  background-size: 10px 10px;
  width: 0.2rem;
  height: 0.2rem;
}
.star-item24.on {
  background-image: url(./imgs/star24_on@2x.png);
}
.star-item24.half {
  background-image: url(./imgs/star24_half@2x.png);
}
.star-item24.off {
  background-image: url(./imgs/star24_off@2x.png);
}

.star-item36 {
  display: inline-block;
  background-size: 15px 15px;
  width: 0.3rem;
  height: 0.3rem;
}
.star-item36.on {
  background-image: url(./imgs/star36_on@2x.png);
}
.star-item36.half {
  background-image: url(./imgs/star36_half@2x.png);
}
.star-item36.off {
  background-image: url(./imgs/star36_off@2x.png);
}
.star-item48 {
  display: inline-block;
  background-size: 20px 20px;
  width: 0.4rem;
  height: 0.4rem;
}
.star-item48.on {
  background-image: url(./imgs/star48_on@2x.png);
}
.star-item48.half {
  background-image: url(./imgs/star48_half@2x.png);
}
.star-item48.off {
  background-image: url(./imgs/star48_off@2x.png);
}
</style>
