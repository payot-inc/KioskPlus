<template>
  <div id="container">
    <SubTitleBar title="포인트충전(카드결제)" />
    <UserInfo />

    <div id="contents">
      <div class="guideText">
        충전금액을 선택해주세요
      </div>

      <div class="pointItems fill-height">
        <v-row>
          <v-col cols="6" v-for="col in pointGoods" :key="col">
            <v-btn outlined width="100%" height="240px" class="pa-0" @click="$refs.cardModal.open(true)">
              <div class="pointItem">
                <div class="priceInfo">
                  <strong>{{col.name}}</strong>
                  <span>{{col.price | numeral('0,0')}} 원</span>
                </div>
                <div class="pointInfo">
                  <span>적립보너스</span>
                  <strong>+{{col.bonus | numeral('0,0')}}</strong>
                </div>
              </div>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>

    <CardModal ref="cardModal" />
  </div>
</template>

<script>
import SubTitleBar from '@/components/subTitleBar.vue';
import UserInfo from '@/components/userInfo.vue';
import CardModal from '@/components/modal/cardModal.vue';

export default {
  components:{
    SubTitleBar, UserInfo, CardModal
  },

  data(){
    return{
      pointGoods:[
        {
          name:'2,000 포인트',
          price:2000,
          bonus:500,
        },
        {
          name:'3,000 포인트',
          price:3000,
          bonus:500,
        },
        {
          name:'5,000 포인트',
          price:5000,
          bonus:500,
        },
        {
          name:'10,000 포인트',
          price:10000,
          bonus:500,
        },
        {
          name:'20,000 포인트',
          price:10000,
          bonus:500,
        },
        {
          name:'30,000 포인트',
          price:10000,
          bonus:500,
        },
        {
          name:'40,000 포인트',
          price:10000,
          bonus:500,
        },
        {
          name:'50,000 포인트',
          price:10000,
          bonus:500,
        },
     
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.guideText{
    font-size:36px;
    text-align:center;
    height:100px;
    line-height:100px;
    color:#fff;
    background: #292929;
    border-radius:10px 10px 0 0;
  }

  .v-btn{
      border:2px solid #d2d2d2;
      border-radius:10px;
      overflow:hidden;
      padding:0px;
      
    }

  .pointItems{
    flex-direction: column;
    background:#fff;
    border-radius:0 0 10px 10px;
    overflow-y:auto;
    height:100%;
    padding:40px;

    .pointItem{
      height:240px;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      width:100%;

      .priceInfo{
        flex:1;
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        width:100%;
        padding:20px;
        
        strong{
          display:block;
          text-align:left;
          font-size:36px;
        }
        span{
          display:block;
          text-align:left;
          font-size:26px;
          margin-top:10px;
          color:#EE2073;
          letter-spacing:1px;
        }

      }

      .pointInfo{
        height:80px;
        background:#f2f2f2;
        width:100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:0 20px;
        font-size:24px;
        
        strong{color:#0085DE}
      }
    }
  }



</style>