<!-- 订单组件 -->
<template>
  <div>
    <Header>
      <span class="address ">
        {{ title }}
      </span>
    </Header>
    <div class="order-bg">
        <img src="./order/person.png" alt="" />
        <div>登录后可查看外卖订单</div>
        <button>立即登录</button>
      </div>
    </div>
</template>

<script>
import Header from "@/components/Header/Header";
export default {
  data() {
    return {
      title: "订单列表",
    };
  },

  components: {
    Header,
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less">
.order-bg  {
  width: 4.5rem;
  height: 6rem;
  position: fixed;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  div{
    padding: 10px 0;
    font-size: 17px;
    color: #6a6a6a;
    
  }
  button{
    background: #02a774;
    font-size: 14px;
    color: #fff;
    border: 0;
    outline: none;
    padding: 10px 20px;
    border-radius: 5px;
  }
}
img{ 
  height: 4.5rem;
}
</style>
