<!-- 个人组件 -->
<template>
  <div>
    <Header>
      <span class="address ">
        {{ title }}
      </span>
    </Header>
    <router-link to="/login" class="user">
      <div class="user-bg"><i class="iconfont iconyonghu"></i></div>
      <div class="login-register">
        <div class="title">登录/注册</div>
        <div class="mobile">
          <i class="iconfont iconshouji54"></i>
          <span>暂无绑定手机号</span>
        </div>
      </div>
    </router-link>
    <!-- <div class="user">
      <div class="user-bg"><i class="iconfont iconyonghu"></i></div>
      <div class="login-register">
        <div class="title">登录/注册</div>
        <div class="mobile">
          <i class="iconfont iconshouji54"></i>
          <span>暂无绑定手机号</span>
        </div>
      </div>
    </div> -->
    <div class="remaining">
      <div>
        <p><span class="common number">0.00</span>元</p>
        <p>我的余额</p>
      </div>
      <div>
        <p><span class="common coupon">0</span>元</p>
        <p>我的优惠券</p>
      </div>
      <div>
       <p><span class="common credits">0</span>元</p>
        <p>我的积分</p>
      </div>
    </div>
    <div class="my-order">
      <ul>
        <li class="list-item"><i class="iconfont iconwode-dingdan"></i><span>我的订单</span></li>
        <li class="list-item"><i class="iconfont iconjifen"></i><span>积分商城</span></li>
        <li class="list-item"><i class="iconfont iconhuiyuan"></i><span>美团外卖会员卡</span></li>
        <li class="list-item"><i class="iconfont iconfuwuzhongxin"></i><span>服务中心</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
export default {
  data() {
    return {
      title: "我的",
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
@icon-color:#02a774;
.user {
  height: 2rem;
  padding: 0.4rem 0.2rem;
  background: @icon-color;
  display: flex;
  border-top:2px solid #fff;
  .user-bg {
    width: 1.38rem;
    height: 1.38rem;
    margin-right: 15px;
    i {
      font-size: 1.35rem;
      color: #fff;
    }
  }
  .login-register {
    flex: 1;
    color: #fff;
    position: relative;
    .title {
      font-size: 0.36rem;
      margin-bottom: 0.3rem;
    }

    .mobile {
      font-size: 0.28rem;
    }
    ::after {
      position: absolute;
      right: 0.2rem;
      top: 50%;
      bottom: 50%;
      content: "";
      width: 10px;
      height: 10px;
      border-top: 1px solid #fff;
      border-right: 1px solid #fff;
      transform: translateY(-50%) rotate(45deg);
    }
  }
}
.remaining {
  height: 1.6rem;
  display: flex;
  margin-bottom: 10px;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #666;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    .common {
      display: inline-block;
      font-size: 30px;
      font-weight: 700;
      line-height: 30px;
      margin-bottom: 10px;
    }
    .number {
      color: #f90;
    }
    .coupon {
      color: #ff5f3e;
    }
    .credits{
      color: #6ac20b;
    }
  }
  &:last-child{
    border-right-color: transparent;

  }
}
.my-order{
 font-size: .32rem;
 color: #333;
 .iconfont{
   font-size: .4rem;
   margin-right: 10px;
 }
}
.list-item{
  padding: 10px 8px;
  border-top: 1px solid #ddd;
  position: relative;
  &::after {
      position: absolute;
      right: 0.4rem;
      top: 50%;
      bottom: 50%;
      content: "";
      width: 10px;
      height: 10px;
      border-top: 1px solid #bbb;
      border-right: 1px solid #bbb;
      transform: translateY(-50%) rotate(45deg);
    }
  &:last-child{
    border-bottom: 1px solid #ddd;
  
  }
}
.iconwode-dingdan{
  color: @icon-color;
  
}
.iconjifen.iconfont{
  color:#ff5f3e;
  font-size: .6rem;
  margin-left: -.1rem;
  margin-right: 5px;
}
.iconhuiyuan{
  color: #f90;
}
.iconfuwuzhongxin{
  color: @icon-color;
}

</style>
