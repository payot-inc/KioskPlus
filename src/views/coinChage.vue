<template>
  <div id="container">
    <SubTitleBar title="포인트충전(현금결제)" />

    <div class="pointChage">
      <dl class="visualTitle">
        <dt>충전하실 금액만큼 지폐를 넣어주세요</dt>
        <dd>※ 투입하신 금액만큼 포인트가 적립되며, <br>한번 넣은 금액은 반환되지 않습니다.</dd>
      </dl>

      <div class="chageBox">
        <div class="coinImg">
          <img src="@/assets/img/paymentCash.gif">
        </div>
        <div class="chageInfo">
          <dl>
            <dt>충전번호</dt>
            <dd>010-8525-*5*1</dd>
          </dl>
          <dl>
            <dt>현재 나의 포인트</dt>
            <dd>2,400</dd>
          </dl>
          <dl>
            <dt>투입된 금액</dt>
          </dl>
          <div class="getPrice">
            {{price | numeral('0,0') }} 원
          </div>
          <p>한번에 최대 5만원까지 충전이 가능합니다</p>
          <dl style="margin-top:40px;">
            <dt>추가적립 포인트</dt>
            <dd>0</dd>
          </dl>
          <dl>
            <dt>최종 나의 포인트</dt>
            <dd>2,400</dd>
          </dl>
          <v-btn outlined @click="setPrice">투입완료</v-btn>
        </div>
      </div>

      <div class="eventTable">
        <dl>
          <dt>구간별 추가적립 보너스</dt>
          <dd>
            <v-row>
              <v-col cols="4">
                <div class="eventItem active">
                  <span class="name">
                    1만원이하 결제시
                  </span>
                  <span class="cont">
                    1% 포인트적립
                  </span>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="eventItem">
                  <span class="name">
                    1만원 ~ 2만원 이하
                  </span>
                  <span class="cont">
                    2% 포인트적립
                  </span>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="eventItem">
                  <span class="name">
                    2만원 ~ 3만원 이하
                  </span>
                  <span class="cont">
                    3% 포인트적립
                  </span>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="eventItem">
                  <span class="name">
                    3만원 ~ 4만원 이하
                  </span>
                  <span class="cont">
                    4% 포인트적립
                  </span>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="eventItem">
                  <span class="name">
                    4만원 ~ 5만원 이하
                  </span>
                  <span class="cont">
                    5% 포인트적립
                  </span>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="eventItem">
                  <span class="name">
                    1만원 ~ 2만원 이하
                  </span>
                  <span class="cont">
                    5% 포인트적립
                  </span>
                </div>
              </v-col>
            </v-row>
          </dd>
        </dl>
      </div>
    </div>

    <Progress ref="progress"
      title="포인트를 적립 중 입니다"
    />
    <Massage
      ref="alert"
      title="투입된 금액이 0원 입니다. "
      description="충전하실 금액만큼 지폐투입기에 현금을 넣고 완료버튼을 눌러주세요"
      type="alert"
    />

    <div class="black-background" :class="black ? 'active': ''">
      <div class="back-text">
        <p><span>60</span>초 후 </p>
        <p>메인으로 이동합니다</p>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitleBar from '@/components/subTitleBar.vue';
import Progress from '@/components/modal/progress.vue';
import Massage from '@/components/modal/massage.vue';

export default {
  components:{
    SubTitleBar, Progress, Massage
  },
  data(){
    return{
      price:0,
      black:true,
    }
  },
  methods:{
    setPrice(){
      if(this.price === 0){
        this.$refs.alert.open(true);
      }else{
        this.$refs.progress.open(true);
        setTimeout(()=>{
          this.$router.push('finish');
        },5000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.pointChage{
  padding:0 60px 60px 60px;
  flex:1;
  width:100%;
  overflow:hidden;
}

.black-background{
  display:none;
  position:fixed;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.8);
  z-index:2;

  .back-text{
    position:absolute;
    padding:0 60px;
    width:100%;
    top:200px;
    left:0px;
    color:#fff;
    font-size:36px;

    p{
      margin-bottom:0px;
      span{font-size:64px;margin-right:10px;}
    }
  }
}
.black-background.active{
  display:none;
}

.visualTitle{
  color:#fff;

  dt{font-size:48px;font-weight:500;word-break: keep-all;}
  dd{font-size:32px;margin-top:20px;color:rgba(255,255,255,0.7)}
}

.chageBox{
  background:#fff;
  display:flex;
  border-radius:10px;
  margin-top:40px;
  overflow:hidden;
  box-shadow:0 0 30px rgba(0,0,0,0.2);
  position:relative;
  z-index:3;
  
  .coinImg{
  
    width:300px;
    background:#f2f2f2;
    min-height:600px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;;

    img{width:100%;}
  }

  .chageInfo{
    flex:1;
    padding:40px;

    dl{
      display:flex;
      justify-content: space-between;
      align-items: center;
      height:70px;
      
      dt{color:#888;font-size:28px;}
      dd{color:#292929;font-weight:500;font-size:32px;}
    }

    p{margin-top:40px;background:#FFF3F3;text-align:center;padding:10px 0;color:#EE2073}

    .getPrice{
      font-size:48px;
      border-bottom:4px solid #0085DE;
      padding-bottom:20px;
      margin-top:20px;
      text-align:right;
      font-weight:600;
      color:#0085DE
    }

    .v-btn{
      width:100%;height:80px;
      margin-top:40px;
      border-radius:10px;
      border:0px;
      color:#fff;
      font-size:32px;font-weight:400;
      animation: getBtn 0.5s ease infinite;
    }

    @keyframes getBtn {
      0%{
        background:#EE2073;
      }
      100%{
        background:#CC2073;
      }
    }
  }
}

.eventTable{
  position:relative;
  z-index:3;
  margin-top:40px;
  overflow:hidden;

  dl{
    overflow:hidden;

    dt{
      font-size:32px;
      font-weight:500;
      background:#292929;
      height:80px;
      display:flex;
      align-items: center;
      padding:0 40px;
      color:#fff;
      margin-top:-1px;
      border-radius:10px;
    }

    dd{
      overflow-y:auto;
      margin-top:15px;

      .eventItem{
        background:#fff;
        padding:20px;
        border-radius:10px;
        box-shadow: 0 0 20px rgba(0,0,0,0.20);
        text-align:center;

        span{display:block;}
        span.name{font-size:24px;color:#292929;}
        span.cont{font-size:28px;color:#EE2073;font-weight:500}
        
      }

      .eventItem.active{
        border:4px solid #EE2073;
        box-sizing: border-box;
      }

    }
  }
}


</style>