<template>
  <div class="userInfoWrap">
    <div class="userInfo">
      <div class="left">
        <div class="label">나의 보유 포인트</div>
        <div class="phone">010-8525-4561</div>
      </div>
      <div class="right">
        <div class="myPoint">{{this.myPoint | numeral('0,0')}} <span>포인트</span></div>
        <v-btn
          class="pointChageBtn"
          width="160px"
          height="80px"
          elevation="0"
          style="background:#fff;"
          >포인트충전</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myPoint:this.$store.state.user.point,
    }
  },
};
</script>

<style lang="scss" scoped>
.userInfoWrap {
  padding: 0 60px;
  width: 100%;
}
.userInfo {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.3);
  padding: 30px;
  color: #fff;
  border-radius: 10px;

  .left {
    .label {
      color: rgba(255, 255, 255, 0.7);
    }
    .phone {
      margin-top: 10px;
      color: #fff;
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    .myPoint {
      font-size: 42px;
      margin-right: 30px;
      font-weight: 500;
      span {
        font-size: 24px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.7);
      }
    }
    .pointChageBtn {
      font-size: 24px;
      background: #fff;
      border-radius: 10px;
      border: 0px;
    }
  }
}
</style>
