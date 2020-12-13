<!-- 登录组件 -->
<template>
  <div class="login">
    <i class="iconfont iconzuojiantou" @click="$router.back()"></i>
    <h1>美团外卖</h1>
    <form class="tab-box" @submit.prevent="login">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">短信登录</mt-tab-item>
        <mt-tab-item id="2">密码登录</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1" class="tab-container">
          <input type="text" placeholder="手机号" v-model="phone" />
          <input type="text" placeholder="密码" v-model="code" />
          <!-- rightPhone的值为true还是false，可看手机号的验证是否正确，正则会返回一个true或者false，可将这个作为rightPhone的值，用计算属性 -->
          <button
            type="button"
            class="verify"
            :class="{ 'get-verification': rightPhone }"
            :disabled="!rightPhone"
            @click.prevent="getVerify"
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
          <input type="text" placeholder="手机/邮箱/用户名" v-model="name" />
          <div>
            <input
              :type="this.value ? 'text' : 'password'"
              placeholder="密码"
              v-model="pwd"
            />
            <mt-switch class="switch" v-model="value"></mt-switch>
          </div>
          <div class="captcha-box">
            <input type="text" placeholder="验证码" v-model="captcha" />
            <img
              src="http://localhost:3000/captcha"
              alt=""
              @click="getCaptcha"
              ref="captcha"
            />
          </div>
          <mt-button type="primary" class="login-btn">登录</mt-button>
          <div class="about-us">关于我们</div>
        </mt-tab-container-item>
      </mt-tab-container>
    </form>
    <AlertTip
      :alertText="alertText"
      @closeTip="closeTip"
      v-show="showAlert"
    ></AlertTip>
  </div>
</template>

<script>
// 在login组件中发送请求，而不是在actions.js中发送请求
import {
  sendcaptcha, //发送短信验证码
  phoneLogin, //手机号验证码登陆
  loginUser, //用户名密码登录
} from "../../api/index";
import AlertTip from "@/components/AlertTip/AlertTip";
export default {
  data() {
    return {
      selected: "1", //默认选择哪个tab栏
      phone: "", //手机号
      code: "", //短信验证码
      timer: "", //获取验证码的定时器
      value: false, //密码登录时的切换开关的值
      name: "", //用户名
      pwd: "", //密码登录的密码
      captcha: "", //图片验证码
      alertText:'',
      showAlert:false,
    };
  },
  components: {
    AlertTip,
  },
  computed: {
    // 结果为true或者false
    rightPhone() {
      return /^1[3|4|5|7|8][0-9]{9}$/.test(this.phone);
    },
  },

  mounted() {},

  methods: {
    // 倒计时递减
    // 点击按钮
    async getVerify(e) {
      // this.timer存在的时候，直接退出函数，不执行以后的代码
      // this.timer不存在的时候，相当于没有定时器，点击按钮有效
      if (this.timer) {
        return;
      }
      let num = 30;
      this.timer = setInterval(() => {
        num--;
        if (num < 0) {
          clearInterval(this.timer);
          this.timer = undefined;
          e.target.innerHTML = `获取验证码`;
          return;
        }
        e.target.innerHTML = `已发送${num}s`;
      }, 1000);
      // 向后端发送ajax请求
      const result = await sendcaptcha(this.phone);
      // console.log(result);
      // 短信发送失败
      if (result.code === 1) {
        this.$toast({ message: `${result.msg}` });
        clearInterval(this.timer);
      } else {
        this.$toast({ message: `发送成功` });
      }
    },
    // 将弹框信息封装成公共方法
    alertTexts(text){
        this.showAlert = true;
        this.alertText = text;
    },
    async login() {
      // 进行表单信息的预验证
      if (this.selected == 1) {
        //  处于短信验证码tab
        if (!this.rightPhone ) {
          this.alertTexts('请输入正确的手机号')
          return;
        }
        // 没有手机号码错误的话，点击按钮预验证一条不通过，都不会执行发送异步请求
        // 所以，只有预验证通过了，才会发送登录请求
        // 短信验证码登录
        const { phone, code } = this;
        const result = await phoneLogin(phone, code);
        if (result.code === 1) {
          // 登录失败
          this.$toast({ message: `${result.msg}` });
          clearInterval(this.timer);
        } else {
          // 将result.data存放到state中
          const user = result.data;
          this.$store.dispatch("getUser", user);
          // 返回个人中心界面
          this.$toast({ message: `登录成功` });
          this.$router.replace("/personal");
        }
      } else {
        if (!this.name) {
          this.alertTexts('请输入用户名')
          return;
        }
        if (!this.pwd) {
          this.alertTexts('请输入密码')
          return;
        }
        if (!this.captcha) {
          this.alertTexts('请输入验证码')
          return;
        }
        const { name, pwd, captcha } = this;
        const result = await loginUser({ name, pwd, captcha });
        if (result.code === 1) {
          this.$toast({ message: `${result.msg}` });
          this.getCaptcha();
        } else {
          // 将result.data存放到state中
          const user = result.data;
          this.$store.dispatch("getUser", user);
          // 返回个人中心界面
          this.$toast({ message: `登录成功` });
          this.$router.replace("/personal");
          console.log(result);
        }
      }
    },
    // 关闭弹框
    closeTip(){
      this.showAlert = false
    },
    // 点击更换验证码图片
    getCaptcha() {
      // console.log(Date.now()) 获取现在的时间

      this.$refs.captcha.src = `http://localhost:3000/captcha/?time=${Date.now()}`;
      // var dom = document.getElementById('img_id')
      // console.dir(this.$refs.captcha)
      // console.log(dom.qqw)
      // console.dir(this.$refs.captcha)
      // console.log(this.$refs.captcha.qqw)
      // console.log(this.$refs.captcha.getAttribute('qqw'))
      // 路径点击一次不发生改变，是不会发送请求的，所以要保证每次点击时候的路径不一样
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
      height: 0.96rem;
      line-height: 0.96rem;
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
  .captcha-box {
    position: relative;
    img {
      height: 0.96rem;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
