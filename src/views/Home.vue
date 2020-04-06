<template>
  <div class="home" id="container">

    <MainModal />

    <div class="main">

      <div class="eventBoard">
        <h4><v-icon>fa-gifts</v-icon>공지사항</h4>
        <div class="eventView">
          <marquee scrollamount="10px">
            지금 결제하시면 최대 10% 추가적립 해 드립니다
          </marquee>
        </div>
        <div class="eventBtns">
          <v-btn outlined @click="$refs.eventModal.open(true)">
            이벤트 전체보기 <v-icon>fa-chevron-circle-down</v-icon>
          </v-btn>
        </div>
      </div>

      <div class="main-title">
        <div class="title">
          <p>안녕하세요</p>
          <p>페이오티 금정점입니다</p>
        </div>
        <div class="description">
          <p>키오스크로 간편하게 사용해보세요</p>
          <span></span>
        </div>
      </div>

      <div class="mainBtns">
        <v-card class="mainBtn01" outlined @click="nextPage">
          <div class="image"><img src="@/assets/img/main_img01.png" /></div>
          <dl>
            <dt>
              <span>이용하기</span
              ><v-icon large color="#EE2073">fa-arrow-circle-right</v-icon>
            </dt>
            <dd>충전없이 장비를 사용하시려면 이 버튼을 터치해주세요</dd>
          </dl>
        </v-card>
        <v-card class="mainBtn02"  outlined @click="nextPage">
          <div class="image"><img src="@/assets/img/main_img02.png" /></div>
          <dl>
            <dt>
              <span>충전하기</span
              ><v-icon large color="#EE2073">fa-arrow-circle-right</v-icon>
            </dt>
            <dd>미리 금액을 충전하시면 추가 보너스 적립금을 드립니다</dd>
          </dl>
        </v-card>
      </div>

      <div class="mainBottom">
        <span>
          <v-icon color="#fff" size="32">fa-hand-pointer</v-icon>필요하신 서비스를 선택해주세요
        </span>
      </div>

    </div>
    <!-- contents -->

    <EventModal ref="eventModal"/>
  </div>
</template>

<script>
import MainModal from '@/components/modal/mainModal.vue';
import EventModal from '@/components/modal/eventModal.vue';

export default {
  name: 'Home',
  components: {
    MainModal, EventModal
  },
  methods: {
    nextPage() {
      this.$router.push({ name: 'UserLogin' });
    },
    LoginPage() {
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style lang="scss">

.home {
  padding: 60px 80px;
  z-index: 99;

  .main{
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .eventBoard{
    display:flex;
    flex-direction:column;
    justify-content: center;
    margin-top:-60px;
    position:relative;

    h4{
      color:#fff;
      font-size:32px;font-weight:400;
      text-shadow: 0 0 10px rgba(0,0,0,0.5);
      height:80px;
      display:flex;
      align-items: center;

      .v-icon{color:#fff;margin-right:20px;font-size:32px;}
    }

    .eventView{
      background:rgba(0,0,0,0.6);
      display:flex;
      justify-content: space-around;
      align-items: center;
      color:#fff;
      text-align:center;
      border-radius:10px 10px 0 10px;
      height:110px;
      border:2px solid rgba(0,0,0,0.5);
      color:#00FFFF;
      font-size:40px;
    }

    .eventBtns{
      width:100%;
      position:absolute;
      text-align:right;
      top:190px;

      .v-btn{
        margin-right:0px;
        background:rgba(0,0,0,0.68);
        border:0px;
        color:#fff;
        font-size:24px;
        font-weight:400;
        padding:0 30px;
        height:70px;
        margin-top:-1px;
        border-radius:0 0 10px 10px;
        border:2px solid rgba(0,0,0,0.8);
        border-top:0px;
      }
      .v-icon{margin-left:20px;}
    }
  }

  .main-title {
    text-align: left;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;

    .title {
      p {
        font-size: 76px;
        line-height: 86px;
        color: #fff;
        font-family: 'SCDream';
        text-shadow: 0 0 30px rgba(0,0,0,0.2);
      }
    }
    .description {
      display: flex;
      margin-top: 40px;
      p {
        flex: 1;
        font-size: 42px;
        color: rgba(255, 255, 255, 0.7);
        word-break: keep-all;
      }
      span {
        flex: 1;
        border-top: 5px solid rgba(255, 255, 255, 0.35);
        margin-top: 28px;
      }
    }
  }
}

.mainBtns {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .mainBtn01 {
    margin-right: 20px;
    box-shadow: 0 0 30px rgba(0,0,0,0.2);
  }
  .mainBtn02 {
    margin-left: 20px;
    box-shadow: 0 0 30px rgba(0,0,0,0.2);
  }

  .image {
    margin: 40px 0;
    text-align: center;
  }
  .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 20px;
  }
  .v-card {
    display: block;
    background: #fff;
    padding: 40px;
    border-radius: 20px;
    color: #292929;

    dl {
      dt {
        font-size: 42px;
        font-weight: 500;
        letter-spacing: -2px;
        span {
          margin-right: 10px;
          display: inline-block;
          vertical-align: middle;
        }
      }
      dd {
        margin-top: 10px;
        font-size: 28px;
        color: #797979;
        word-break: keep-all;
      }
    }
  }

  .mainBtn03 {
    margin-top: 20px;
    dd span {
      color: #ee2073;

      
    }
  }
}

.mainBottom {
  display:flex;
  align-items: center;
  justify-content: center;
  font-size:28px;
  color:#fff;

  span{
    background:rgba(0,0,0,0.2);
    padding:0 40px;
    border-radius:40px;
    height:60px;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  .v-icon{margin-right:30px}
}

</style>
