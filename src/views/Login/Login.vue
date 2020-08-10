<!-- 登录组件 -->
<template>
  <div class="login">
    <i class="iconfont iconzuojiantou" @click="$router.back()"></i>
    <h1>美团外卖</h1>
    <div class="tab-box">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">短信登录</mt-tab-item>
        <mt-tab-item id="2">密码登录</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1" class="tab-container">
          <input type="text" placeholder="手机号" v-model="phone" />
          <input type="text" placeholder="密码" />
          <!-- rightPhone的值为true还是false，可看手机号的验证是否正确，正则会返回一个true或者false，可将这个作为rightPhone的值，用计算属性 -->
          <button
            href="javascript:;"
            class="verify"
            :class="{ 'get-verification': rightPhone }"
            :disabled="!rightPhone"
            @click="getVerify"
          >
            获取验证码
          </button>

          <!-- <button>获取验证码</button> -->
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
            <input :type="this.value?'text':'password'" placeholder="密码" v-model="password"/>
            <mt-switch  class="switch" v-model="value" ></mt-switch>
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
      phone: "",
      isDisabled: true,
      timer:'',
      value:false,
      // 密码
      password:''
    };
  },

  components: {},

  computed: {
    // 结果为true或者false
    rightPhone() {
      return /^1[3|4|5|7|8][0-9]{9}$/.test(this.phone);
    },
  },

  mounted() {},

  methods: {
    focuson() {
      console.log(111);
      this.isShow = true;
    },
    // 点击按钮
    getVerify(e) {
      // this.timer存在的时候，直接退出函数，不执行以后的代码
      // this.timer不存在的时候，相当于没有定时器，点击按钮有效
      if(this.timer){
        return
      }
      let num = 20;
      this.timer = setInterval(() => {
        num--;
        if (num < 0) { 
        clearInterval(this.timer);
        e.target.innerHTML = `获取验证码`;
          return;
        }
        e.target.innerHTML = `已发送${num}s`;
      }, 1000);
    },
    
  },
};
</script>
<style lang="less">
.login {
  width: 6rem;
  margin: 1.2rem auto;
  margin-bottom: 0;
  position: relative;
  .iconzuojiantou {
    position: absolute;
    top: -43px;
    left: -28px;
    font-size: 0.74rem;
  }

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
    .verify {
      position: absolute;
      height: .96rem;
      line-height: .96rem;
      top: 0;
      right: 0.16rem;
      background-color: transparent;
      border: none;
      color: #999;
      font-size: 0.28rem;
      padding: 0;
      &.get-verification {
        color: #000;
      }
      &:focus {
        outline: none;
      }
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
    .switch {
      position: absolute;
      top: 1.42rem;
      right: 0.38rem;
    }
  }
}
</style>
