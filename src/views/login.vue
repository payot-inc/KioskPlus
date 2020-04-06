<template>
  <div class="login">
    <div class="contents">
      <div class="loginTitle">
        KIOSK <span>PRO</span>
      </div>

      <div class="loginBox">
        <label>키오스크 로그인</label>
        <input type="text" class="textInput" placeholder="아이디" />
        <input type="password" class="textInput" placeholder="비밀번호" />
        <v-btn
          block
          outlined
          height="90px"
          class="loginBtn"
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
.login {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px;
  height:100%;
}
.loginTitle {
  font-size:130px;
  line-height:110px;
  font-weight:700;
  color:#fff;
  margin-bottom:60px;
  text-align:center;
  text-shadow: 0 5px 30px rgba(0,0,0,0.3);
  vertical-align: middle;
  letter-spacing: 5px;

  display:flex;
  align-items: flex-end;
  justify-content: center;

  span{
    display:inline-block;
    height:78px;
    line-height:78px;
    font-size:54px;
    border-radius:10px;
    background:#fff;
    padding:0 20px;
    margin-left:20px;
    color:#393939;
    letter-spacing:0px;
    text-shadow: none;
    box-shadow: 0 0 30px rgba(0,0,0,0.3);
  }
}

.loginBox {
  width: 100%;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 60px;
  color: #fff;
  border-top:4px solid rgba(255,255,255,0.15);
  border-left:4px solid rgba(255,255,255,0.15);
  box-shadow: 0 0 60px rgba(255,255,255,0.08);

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
    background: #3F29D9;
    border:0px;
  }
}
</style>
