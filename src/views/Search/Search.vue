<!-- 搜索组件 -->
<template>
  <div>
   <Header >
     <span class="address ">
       {{title}}
      </span>
   </Header>
   <div class="search-box">
     <input type="text" placeholder="请输入商家名称" class="search-name">
     <input type="submit" value="提交" class="submit">
     <!-- 注意点击的时候，引入一个event.preventDefault函数 -->
   </div>
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
.search-box{
  padding: 10px 8px;
  position: relative;
  .search-name{
    border: 4px solid #f2f2f2;
    font-size: .28rem;
    color: #333;
    background-color: #f2f2f2;
    padding: 8px 0;
    width: 80%;
    outline: none;
  }
  .submit{
    position: absolute;
    top: .2rem;
    right:.16rem;
    font-size: .32rem;
    color: #fff;
    background-color: #02a774;
    padding: 8px ;
    outline: none;


  }
}
</style>