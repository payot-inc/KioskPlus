<template>
  <div id="container">
    <SubTitleBar title="결제방법 선택" />
    <UserInfo />

    <div id="contents">
      <dl class="visualTitle">
        <dt>포인트충전을 위한<br> 결제방법을 선택해주세요</dt>
        <dd>아래 버튼을 터치해주세요</dd>
      </dl>

      <div class="divider" />

      <div class="paymentBtns">
        <v-row>
          <v-col cols="6">
            <v-btn outlined height="640px" @click="nextPage('CoinChage')">
              <div class="btn">
                <div class="btnImg">
                  <img src="@/assets/img/coin.png" />
                </div>
                <dl>
                  <dt>현금(지폐)로 결제하기</dt>
                  <dd>포인트 추가적립 10%</dd>
                </dl>
              </div>
            </v-btn>
          </v-col>
          <v-col cols="6">
             <v-btn outlined height="640px" @click="nextPage('CardChage')">
              <div class="btn">
                <div class="btnImg">
                  <img src="@/assets/img/card.png" />
                </div>
                <dl>
                  <dt>신용카드로 결제하기</dt>
                  <dd>포인트 추가적립 5%</dd>
                </dl>
              </div>
            </v-btn>
          </v-col>
        </v-row>      
      </div>
    </div>
  </div>
</template>

<script>
import SubTitleBar from '@/components/subTitleBar.vue';
import UserInfo from '@/components/userInfo.vue';

export default {
  components:{
    SubTitleBar, UserInfo
  },

  methods:{
    nextPage(value){
      this.$router.push({name:value})
    }
  }
}
</script>

<style lang="scss" scoped>

.visualTitle{ color:#fff;
  dt{font-size:64px;font-weight:500;word-break: keep-all;}
  dd{font-size:36px;margin-top:20px;color:rgba(255,255,255,0.7)}
}

.divider{height:2px;background:#fff;margin:60px 0}

.paymentBtns{

  .btn{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height:100%;
    

    .btnImg{
      width:320px;height:320px;border-radius:50%;background: #eaeaea;

      img{width:100%;height:auto;}
    }

    dl{margin-top:60px;
      dt{font-size:36px;}
      dd{font-size:28px;margin-top:10px;color:#EE2073}
    }

  }

  .v-btn{
    width:100%;
    height:500px;
    background:#fff;
    border:0px;
    padding:40px;
    border-radius:10px;
    box-shadow:0 0 30px rgba(0,0,0,0.15);    
    
    }
}


</style>