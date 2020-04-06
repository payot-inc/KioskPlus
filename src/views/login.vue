<template>
  <div class="login" id="wrap">
    <div class="contents">
      <div class="logo">
        <img src="@/assets/img/logo_w.png" />
      </div>

      <div class="loginBox">
        <label>페이오티 키오스크 로그인</label>
        <input type="text" class="textInput" placeholder="아이디" />
        <input type="password" class="textInput" placeholder="비밀번호" />
        <div class="checkLine">
          <input type="checkbox" class="check" />
          <p>자동로그인<span>(체크하시면 자동로그인 됩니다)</span></p>
        </div>
        <v-btn
          block
          height="90px"
          class="loginBtn"
          color="#2816A7"
          dark
          @click="loging"
          >로그인</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    loging() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
#wrap.login {
  padding: 120px;
}
.logo {
  margin-bottom: 60px;

  img {
    height: 210px;
  }
}

.loginBox {
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 50px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  color: #fff;

  label {
    display: block;
    font-size: 36px;
    margin-bottom: 30px;
  }

  .textInput {
    font-size: 32px;
    height: 90px;
    background: #fff;
    width: 100%;
    border-radius: 10px;
    color: #292929;
    padding: 0 20px;
    margin-bottom: 30px;
  }

  input:focus {
    outline: 0;
    border-radius: 10px;
  }

  .checkLine {
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .check {
      width: 34px;
      height: 34px;
      vertical-align: middle;
      padding: 0px;
      margin-right: 15px;
    }

    p {
      font-size: 28px;
      margin: 0px;
      span {
        font-size: 24px;
        color: #aaa;
        margin-left: 10px;
      }
    }
  }

  .loginBtn {
    font-size: 32px;
    border-radius: 10px;
    background: #2816a7;
  }
}
</style>
