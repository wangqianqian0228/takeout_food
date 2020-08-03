<!-- 登录组件 -->
<template>
  <div class="login">
    <h1>美团外卖</h1>
    <div class="tab-box">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">短信登录</mt-tab-item>
        <mt-tab-item id="2">密码登录</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1" class="tab-container">
          <input type="text" placeholder="手机号" />
          <input type="text" placeholder="密码" />
          <a href="javascript:;">获取验证码</a>
          <p class="tips">
            温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
            <span>《用户服务协议》</span>
          </p>
          <mt-button type="primary" class="login-btn">登录</mt-button>
          <div class="about-us">关于我们</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2" class="tab-container password">
          <input type="text" placeholder="手机/邮箱/用户名" />
          <div>
            <input type="password" placeholder="密码" />
            <mt-switch v-model="value" class="switch"></mt-switch>
          </div>

          <input type="text" placeholder="验证码" />
          <mt-button type="primary" class="login-btn">登录</mt-button>
          <div class="about-us">关于我们</div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
      isShow: false,
      username: "",
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    focuson() {
      console.log(111);
      this.isShow = true;
    },
  },
};
</script>
<style lang="less">
.login {
  width: 6rem;
  margin: 1.2rem auto;
  margin-bottom: 0;
  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #02a774;
    text-align: center;
  }
  /deep/ .mint-navbar {
    width: 70%;
    margin: 0.4rem auto;
    .mint-tab-item div {
      color: #333;
      font-size: 0.28rem;
      font-weight: 700;
    }
    .mint-tab-item.is-selected {
      border-bottom-color: #02a774 !important;
    }
    .mint-tab-item.is-selected .mint-tab-item-label {
      color: #02a774;
      font-size: 0.28rem;
      font-weight: 700;
    }
  }
  .selected-div {
    border-color: #02a774 !important;
  }
  .tab-container {
    font-size: 0.28rem;
    position: relative;
    input {
      border: 1px solid #ddd;
      margin-bottom: 0.32rem;
      width: 100%;
      height: 0.96rem;
      border-radius: 4px;
      padding: 0 0.2rem;
      position: relative;
      &:focus {
        outline: 1px solid #02a774;
      }
    }
    a {
      position: absolute;
      top: 0.34rem;
      right: 0.16rem;
    }
    .tips {
      color: #999;
      line-height: 20px;
      span {
        color: #02a774;
        font-weight: bold;
      }
    }
    .login-btn {
      margin-top: 0.6rem;
      width: 100%;
      background: #4cd96f;
    }
    .about-us {
      margin-top: 10px;

      text-align: center;
      color: #999;
    }
  }
  .password {
    .login-btn {
      margin-top: 0.3rem;
    }
    .switch{
      position: absolute;
      top: 1.42rem;
      right: .38rem;
      
    }
  }
}
</style>
