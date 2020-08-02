<!-- 登录组件 -->
<template>
  <div class="login">
    <h1>美团外卖</h1>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">短信登录</mt-tab-item>
      <mt-tab-item id="2">密码登录</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-field
          v-model="username"
          class="inp-field"
          type="text"
          placeholder="手机号"
          @click.native="focuson"
          :class="{ 'selected-div': isShow }"
        >
          <a href="">获取验证码</a>
        </mt-field>
        <mt-field
          placeholder="验证码"
          v-model="username"
          type="text"
          class="inp-field"
        ></mt-field>
      </mt-tab-container-item>
      
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "tab-container1",
      isShow: false,
      username:''
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
  .inp-field {
    margin-bottom: 0.28rem;
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
  /deep/ .mint-cell-wrapper {
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .selected-div {
    border-color: #02a774!important;
  }
  /deep/ .mint-cell-value{
    height: 100%;
    width: 100%;
  }
  /deep/ .mint-cell-value input{
    display: block;
    height: 100%;
    width: 100%;
  }
}
</style>
