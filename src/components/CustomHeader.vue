<template>
  <div class="header">
    <div class="date_time">
      <div class="time">
        {{nowTime}}
      </div>
      <div class="date_wrap">
        <div class="date">{{ nowDate }}</div>
        <div class="shop_name">{{ company.name }}</div>
      </div>
    </div>
    <div class="right-cont">
      <div class="prograss">
        <v-progress-linear
          color="white accent-4"
          value="30"
          rounded
          height="14"
          style="border-radius:7px;overflow:hidden"
        ></v-progress-linear>
        <span><b>30%</b> 다운로드 중</span>
      </div>
      <v-btn
        class="home_btn"
        color="rgba(0,0,0,0.3)"
        width="140px"
        height="140px"
        text-color="#fff"
        @click="goToHome"
      >
        <v-icon size="60">mdi-home</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment';

export default {
  data() {
    return {
      companyName: this.$store.state.company.name,
    }
  },
  computed: {
    ...mapState(['company']),
    nowDate() {
      return moment().format('YYYY-MM-DD');
    },
    nowTime(){
      return moment().format('HH:mm');
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 140px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  overflow: hidden;
  z-index: 9;
  position: relative;

  .date_time {
    display: flex;
    flex-direction: row;
    padding-left: 30px;

    .time {
      font-family: 'SCDream';
      font-weight: 700;
      font-size: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      
    }
    .date_wrap {
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: 'SCDream';
      font-weight: 400;
      font-size: 24px;
      color: rgba(255, 255, 255, 0.6);

      .shop_name {
        color: #fff;
      }
    }
  }

  .right-cont{
    display:flex;
    align-items: center;;
    .prograss{
      width:240px;
      margin-right:30px;

      span{
        display:block;
        margin-top:15px;
        text-align:right;
        color:rgba(255, 255, 255, 0.6);

        b{color:#fff;font-weight:normal}
      
      }
    }

    .home_btn {
      color: #fff;
      border-radius: 0px;
    }
  }
}
</style>
