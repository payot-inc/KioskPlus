<template>
  <div id="container">
    <SubTitleBar title="결제확인" />

    <div id="contents" class="order">
     
      <div class="orderDetail">
         <div class="myPointBox">
          <div class="top">
            <span>내 포인트</span>
            <v-btn text>포인트충전</v-btn>
          </div>
          <div class="pointView">
            <span>{{myPoint | numeral('0,0')}}P</span>
            <v-btn outlined @click="$refs.pointUse.open(true)">포인트 사용하기</v-btn>
          </div>
          
          <p>사용하실 포인트가 없다면 바로 <b>결제버튼</b>을 터치해주세요</p>
        </div>  <!-- myPointBox -->
        
        <div class="orderInfo">
          <dl>
            <dt>내 번호</dt>
            <dd>{{ userPhone }}</dd>
          </dl>
          <dl>
            <dt>장비명</dt>
            <dd>{{ selectMachine.name }}</dd>
          </dl>
          <dl v-if="payAmount === 0">
            <dt>상품명</dt>
            <dd>{{ selectProduct.name }}</dd>
          </dl>
          <dl>
            <dt>투입 예정금액</dt>
            <dd v-if="payAmount !== 0">{{payAmount | numeral('0,0')}} 원</dd>
            <dd v-else>{{selectProduct.price | numeral('0,0')}} 원</dd>
          </dl>
          <div class="divider"></div>
          <dl class="pointUse">
            <dt>포인트사용</dt>
            <dd>{{- usePoint | numeral('0,0') }} Pt</dd>
          </dl>
          <div class="divider"></div>
          <dl>
            <dt>결제방법</dt>
            <dd>신용카드</dd>
          </dl>
          <dl class="lastPrice">
            <dt>최종결제금액</dt>
            <dd>{{totalAmount | numeral('0,0')}} 원</dd>
          </dl>
        </div> <!-- orderInfo -->

          
        <div class="orderBtn">
          <v-btn
            width="100%"
            height="100px"
            elevation="0"
            outlined
            @click="payment"
          >
            <span>{{totalAmount | numeral('0,0')}}원 결제하기</span>
            <v-icon>fa-angle-right</v-icon>
          </v-btn>
        </div> <!-- orderBtn -->
      </div> <!-- orderDetail -->
    </div> <!-- order -->
    
    <!-- contents -->

    <PointUse ref="pointUse" @update:usePoint="usePoint = $event" :min="0" :max="this.payAmount" />

    <CashModal ref="cashModal" :counter="this.modalCounter" />
    <CardModal ref="cardModal" :counter="this.modalCounter" />
    <Progress ref="loading" title="결제를 진행중입니다" />
    <CreditSelectModal />

    <!-- 포인트사용하기 모달 -->
  </div>
  <!-- container -->
</template>

<script>
import SubTitleBar from '@/components/subTitleBar.vue';
import PointUse from '@/components/modal/pointUse.vue';
import CashModal from '@/components/modal/cashModal.vue';
import CardModal from '@/components/modal/cardModal.vue';
import Progress from '@/components/modal/progress.vue';
import CreditSelectModal from '@/components/modal/creditSelect.vue'

export default {
  components: {
    SubTitleBar,
    PointUse,
    CashModal,
    CardModal,
    Progress,
    CreditSelectModal,
  },

  data() {
    return {
      usePoint: 0,
      payType: 'cash',
      payAmount: this.$store.state.user.payAmount,
      selectMachine: this.$store.state.user.machine,
      selectProduct: this.$store.state.user.product,
      modalCounter: 3,
      myPoint:this.$store.state.user.point,
      userPhone:this.$store.state.user.phone,
    };
  },
  computed: {
    totalAmount() {
      return this.payAmount - this.usePoint;
    },
  },
  methods: {
    payment() {
      if (this.payType === 'cash') {
        this.$refs.cashModal.open(true);

        setInterval(()=>{
          if(this.modalCounter > 0){
            this.modalCounter -= 1
          }else{
            clearInterval()
            this.$refs.cashModal.open(false)
            this.$refs.loading.open(true);
          }
        },1000)

        setTimeout(()=>{
          this.$router.push('finish');
        },6000)

      } else {
        this.$refs.cardModal.open(true);
      }
    }

  },
};
</script>

<style lang="scss" scoped>

#wrap #contents.order{
  padding:0 60px 60px 60px;
}
.orderDetail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border-radius: 10px;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0,0,0,0.2);


  .myPointBox{
    width:100%;
    display:flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    padding:40px;

    .top{
      display:flex;
      justify-content: space-between;
      align-items: center;

      span{
        font-size:32px;height:50px;
      }
      .v-btn{
        font-size:32px;color:#0085de;height:50px;
        border-radius:10px;
      }
    }

    .pointView{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top:20px;

      span{
        font-size:90px;
        font-weight:600;
        color:#0085de;
      }

      .v-btn{
        width:300px;
        height:80px;
        border-radius:40px;
        font-size:32px;
        color:#0085de;
        border:4px solid #0085de;
        margin-top:20px;
        animation: pointColor 0.8s ease-in-out forwards  ;
      }

      @keyframes pointColor {
        0%{
          opacity:0;
          transform: scale(2);
        }
        100%{
          opacity: 1;
          transform: scale(1);
        }
        
      }
    }

    p{
      text-align:center;font-size:28px;color:#888;margin-top:40px;
      b{color:#ee2073;font-weight:400}
    }

  } // myPointBox

  .orderInfo {
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px;
    background:#f8f8f8;

    dl {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height:70px;

      dt {
        font-size: 32px;
        color: #888;
      }

      dd{
        font-size: 32px;
        color: #292929;
      }
    }

    dl.pointUse{
      dd {
        color: #0085de;
        font-size: 42px;
        font-weight:500;
      }
    }

    dl.lastPrice {
      dd {
        font-size: 42px;
        font-weight: 600;
        color: #ee2073;
      }
    }
  }

  .divider {
    height: 2px;
    background: #e2e2e2;
    margin: 40px 0;
  }

  

  .pointUseBtn {
    border: 2px solid #0085de;
    border-radius: 10px;
    font-size: 32px;
    font-weight: 400;
    justify-content: space-between;
  }

  .orderBtn {
    padding:40px;

    .v-btn {
      border-radius: 10px;
      font-size: 36px;
      color: #fff;
      border: 0px;
      animation: point 0.6s infinite;

      .v-icon {
        margin-left: 20px;
        font-size: 36px;
      }
    }
  }

  @keyframes point {
    0% {
      background: #7d0032;
    }
    100% {
      background: #ee2073;
    }
  }
}
</style>
