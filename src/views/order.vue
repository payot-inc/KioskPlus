<template>
  <div class="order" id="container">
    <SubTitleBar title="결제확인" />
    <UserInfo />

    <div id="contents">
      <div class="orderDetail">
        <div class="orderInfo">
          <dl>
            <dt>장비명</dt>
            <dd>{{ selectMachine.name }}</dd>
          </dl>
          <dl v-if="payAmount === 0">
            <dt>상품명</dt>
            <dd>{{ selectProduct.name }}</dd>
          </dl>
          <dl>
            <dt>투입금액</dt>
            <dd v-if="payAmount !== 0">{{payAmount | numeral('0,0')}} 원</dd>
            <dd v-else>{{selectProduct.price | numeral('0,0')}} 원</dd>
          </dl>
          <div class="divider"></div>
          <dl class="pointUseInfo">
            <dt>포인트사용</dt>
            <dd>{{- usePoint | numeral('0,0') }} Pt</dd>
          </dl>
          <v-btn
            width="100%"
            height="90px"
            color="#0085DE"
            outlined
            class="pointUseBtn"
            @click="$refs.pointUse.open(true)"
          >
            <span>포인트 사용하기</span>
            <v-icon size="36">fa-angle-right</v-icon>
          </v-btn>

          <div class="divider"></div>
          <dl class="lastPrice">
            <dt>최종결제금액</dt>
            <dd>{{totalAmount | numeral('0,0')}} 원</dd>
          </dl>
        </div>

        <div class="paymentBox">
          <div class="creditSelect">
            <h4>결제방법을 선택해주세요<span>*</span></h4>
            <v-row>
              <v-col cols="6">
                <v-btn
                  outlined
                  width="100%"
                  height="200px"
                  :class="{ active: payType === 'cash' }"
                  @click="payType = 'cash'"
                >
                  <div class="creditBtn">
                    <v-icon>fa-check-circle</v-icon>
                    <span>현금(지폐)으로<br />결제하기</span>
                  </div>
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  outlined
                  width="100%"
                  height="200px"
                  :class="{ active: payType === 'card' }"
                  @click="payType = 'card'"
                >
                  <div class="creditBtn">
                    <v-icon>fa-check-circle</v-icon>
                    <span>신용카드로<br />결제하기</span>
                  </div>
                </v-btn>
              </v-col>
            </v-row>
            <div class="guideText">
              <p v-if="payType === 'cash'">
                현금 결제시
                <span>결제금액 이상의 현금 투입시 나머지 잔액은 포인트</span>로
                적립됩니다
              </p>
              <p v-else>
                카드를 사용하시면 최종결제금액만큼 결제됩니다
              </p>
            </div>
          </div>
          <!-- credit_select -->
          <div class="orderBtn">
            <v-btn
              width="100%"
              height="100px"
              elevation="0"
              outlined
              @click="payment"
            >
              <span>3,000원 결제하기</span>
              <v-icon>fa-angle-right</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <!-- order_detail -->
    </div>
    <!-- contents -->

    <PointUse ref="pointUse" @update:usePoint="usePoint = $event" :min="0" :max="this.payAmount" />

    <CashModal ref="cashModal" :counter="this.modalCounter" />
    <CardModal ref="cardModal" :counter="this.modalCounter" />
    <Progress ref="loading" title="결제를 진행중입니다" />

    <!-- 포인트사용하기 모달 -->
  </div>
  <!-- container -->
</template>

<script>
import SubTitleBar from '@/components/subTitleBar.vue';
import UserInfo from '@/components/userInfo.vue';
import PointUse from '@/components/modal/pointUse.vue';
import CashModal from '@/components/modal/cashModal.vue';
import CardModal from '@/components/modal/cardModal.vue';
import Progress from '@/components/modal/progress.vue';

export default {
  components: {
    SubTitleBar,
    UserInfo,
    PointUse,
    CashModal,
    CardModal,
    Progress,
  },

  data() {
    return {
      usePoint: 0,
      payType: 'cash',
      payAmount: this.$store.state.user.payAmount,
      selectMachine: this.$store.state.user.machine,
      selectProduct: this.$store.state.user.product,
      modalCounter: 3
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
.orderDetail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border-radius: 10px;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0,0,0,0.2);

  .orderInfo {
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px;
  }
  

  dl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    dt {
      font-size: 32px;
      color: #888;
    }
    dd {
      font-size: 32px;
      color: #292929;
    }
  }
  dl:last-child {
    margin-bottom: 0px;
  }

  .divider {
    height: 2px;
    background: #e2e2e2;
    margin: 40px 0;
  }

  .pointUseInfo {
    dd {
      color: #0085de;
      font-size: 42px;
    }
  }

  .pointUseBtn {
    border: 2px solid #0085de;
    border-radius: 10px;
    font-size: 32px;
    font-weight: 400;
    justify-content: space-between;
  }

  .lastPrice {
    dd {
      font-size: 42px;
      font-weight: 600;
      color: #ee2073;
    }
  }

  .paymentBox {
    display:flex;
    flex:1;
    flex-direction: column;
    justify-content: space-between;
    background: #f2f2f2;
    padding:40px 40px;
  }

  .creditSelect {
    h4 {
      font-size: 30px;
      color: #292929;
      font-weight: 400;
      margin-bottom: 20px;
      span {
        color: #d22828;
        margin-left: 10px;
      }
    }

    .v-col {
      border: 1px solid #e2e2e2;
    }
    .v-btn {
      padding: 0;
      margin: 0;
      border-radius: 10px;
      border: 2px solid #c2c2c2;
      background: #e2e2e2;
    }
    .v-btn.active {
      border: 2px solid #ee2073;
      background: #fff;
      .v-icon {
        color: #ee2073;
      }
    }

    .creditBtn {
      height: 200px;
      padding: 20px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      .v-icon {
        font-size: 64px;
        color: #c2c2c2;
      }
      span {
        font-size: 36px;
        display: flex;
        flex-direction: column;
        text-align: right;
        justify-content: flex-end;
        align-items: flex-end;
        height: 100%;
      }
    }
    .guideText {
      height: 70px;
      display: flex;
      background: #e6e6e6;
      border-radius: 10px;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
      margin-bottom: 30px;

      p {
        margin: 0px;
        span {
          color: #d22828;
        }
      }
    }
  }

  .orderBtn {
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
