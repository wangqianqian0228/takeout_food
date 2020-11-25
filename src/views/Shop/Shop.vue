<!-- 商家详情首页 -->
<template>
  <div>
    <div class="header">
      <div class="top">
        <i class="iconfont iconzuojiantou" @click="$router.back()"></i>
      </div>
      <div class="body">
        <img src="../Shop/imgs/bg2.jpeg" alt="" class="shop-img" />
        <div class="title">
          <span class="brand">品牌</span>
          <span class="name ellipsis" @click='getlist'>一心堂</span>
          <p class="quantity"></p>
        </div>
        <!-- <p class="coupon" v-for="(item,i) in arr" :key="i">
          {{item}}
        </p> -->
      </div>
    </div>
    <div class="tab"></div>
    <div class="tab-shops"></div>
    <div class="tab-comments"></div>
    <div class="tab-shops-details"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // obj:[],
      // arr:[],
      // str:[],
      // str1:[],
      // obj1:['13658834047,默认情况下，下拉区域的高度是和内容高度保持一致的，如果需要让下拉区域始终为全屏，可以给设置一个与屏幕大小相等的最小高度'],
      // obj2:['13888982512,随后，特朗普发推称，他感谢艾米莉墨菲对国家的奉献和忠诚，并称她受到了“威胁和骚扰”。'],
      // obj3:['13769143343,我们的诉讼还在继续，我们会继续不懈努力。我相信我们会胜利！”特朗普在推文中写道']
    };
  },

  components: {},

  computed: {},

  mounted() {
  },

  methods: {
  //   getlist(){
  //   this.obj = this.obj.concat(this.obj1,this.obj2,this.obj3)
  //   this.obj.forEach(function(val,index){
  //      var index = val.indexOf(',')
  //     var str['index'] = val.slice(0,index)
  //     this.str1 = val.slice(index)
  //   })
  //  console.log(str)
  //  console.log(str2)
  //   }
  },
};
</script>
<style lang="less">
.header {
  .top {
    height: 1rem;
    background-image: url("../Shop/imgs/bg1.png");
    background-size: cover;
    position: relative;
    .iconzuojiantou {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      font-size: 0.74rem;
      color: #fff;
    }
  }
  .body {
    height: 100%;
    position: relative;
    padding: 0.6rem 0.4rem 0.1rem;
    .shop-img {
      position: absolute;
      width: 1.32rem;
      height: 1.32rem;
      left: 50%;
      transform: translate(-50%, -90%);
    }
    .brand {
      display: inline-block;
      padding: 3px;
      background-color: #ffd930;
      font-size: 0.22rem;
      margin-right: 5px;
    }
    .name {
      display: inline-block;
      width: 2.8rem;
      color: #333;
      font-size: 0.32rem;
    }
  }
}
</style>
