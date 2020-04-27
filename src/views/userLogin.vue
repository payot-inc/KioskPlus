<template>
  <div class="userLogin" id="container">

    <SubTitleBar title="전화번호 입력" />

    <div class="inner">
      <div class="introText">
        포인트적립을 위한 전화번호를 입력해주세요
      </div>

      <div class="loginBox">
        <div class="phoneNumber-view">
          <h4>전화번호입력(필수)<span>*</span></h4>
          <div class="number-view">
            <span class="number">{{ phone.first }}</span>
            <span class="bar">-</span>
            <span class="number">{{ phone.middle }}</span>
            <span class="bar">-</span>
            <span class="number">{{ phone.last }}</span>
          </div>
          <p>왼쪽 키패드에서 전화번호를 입력해주세요</p>
        </div>
        <div class="keypad">
          <div class="rowLine" v-for="row in 3" :key="row">
            <v-btn
              width="100px"
              height="100px"
              class="key"
              outlined
              v-for="col in 3"
              :key="col"
              @click="inputNumber((row - 1) * 3 + col)"
              >{{ (row - 1) * 3 + col }}</v-btn
            >
          </div>
          <div class="rowLine">
            <v-btn
              width="100px"
              height="100px"
              class="key del"
              outlined
              @click="removeSingleNumber"
            >
              <v-icon>fa-backspace</v-icon>
            </v-btn>
            <v-btn
              width="100px"
              height="100px"
              class="key"
              outlined
              @click="inputNumber(0)"
            >
              0
            </v-btn>
            <v-btn
              @click="allClear()"
              width="100px"
              height="100px"
              class="key re"
              outlined
              >다시입력</v-btn
            >
          </div>
        </div> <!-- keypad -->
      </div> <!-- loginBox -->

      <div class="guide">
        <h4>장비 사용방법</h4>
        <v-row>
          <v-col cols="3">
            <dl>
              <dt><img src="@/assets/img/guide-01.png"></dt>
              <dd>
                <strong>장비 확인 및 준비</strong>
                <span>사용하고자 하는 장비에서 코스를 선택 후 세탁물을 넣고 문을 닫아주세요</span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="3">
            <dl>
              <dt><img src="@/assets/img/guide-02.png"></dt>
              <dd>
                <strong>키오스크 사용</strong>
                <span>키오스크에서 사용하고자 하는 장비선택 후 투입금액을 설정합니다</span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="3">
            <dl>
              <dt><img src="@/assets/img/guide-03.png"></dt>
              <dd>
                <strong>포인트 사용 및 결제</strong>
                <span>사용할 포인트를 설정 후 신용카드 및 현금 중 결제방법을 선택하고 결제합니다</span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="3">
            <dl>
              <dt><img src="@/assets/img/guide-04.png"></dt>
              <dd>
                <strong>장비 사용</strong>
                <span>모든 과정이 완료되면 해당 장비로 돌아가 시작하기 버튼을 눌러줍니다</span>
              </dd>
            </dl>
          </v-col>
        </v-row>
      </div>

    </div> <!-- inner -->

    <JoinModal
      :phone="[phone.first, phone.middle, phone.last].join('-')"
      ref="joinModal"
    />
    <loginModal
      :phone="[phone.first, phone.middle, phone.last].join('-')"
      ref="loginModal"
    />
  </div> <!-- container -->
</template>

<script>
import JoinModal from '@/components/modal/joinModal.vue';
import LoginModal from '@/components/modal/loginModal.vue';
import SubTitleBar from '@/components/subTitleBar.vue';

export default {
  name: 'userLogin',
  components: {
    JoinModal,
    SubTitleBar,
    LoginModal,
  },
  data() {
    return {
      keyWidth: '120px',
      keyHeight: '120px',
      phone: {
        first: '010',
        middle: '',
        last: '',
      },
    };
  },

  watch: {
    setPhone(newValue) {
      if (newValue.length === 11) {
        this.PasswordModal();
      }
    },
  },

  computed: {
    setPhone() {
      return [this.phone.first, this.phone.middle, this.phone.last].join('');
    },
  },

  methods: {
    inputNumber(number) {
      const { first, middle, last } = this.phone;
      if (first.length < 3) {
        this.phone.first += number;
      } else if (middle.length < 4) {
        this.phone.middle += number;
      } else if (last.length < 4) {
        this.phone.last += number;
      }
    },
    removeSingleNumber() {
      const { middle, last } = this.phone;
      if (last.length !== 0) {
        this.phone.last = last.slice(0, last.length - 1);
      } else if (middle.length !== 0) {
        this.phone.middle = middle.slice(0, middle.length - 1);
      }
    },
    allClear() {
      this.phone.first = '010';
      this.phone.middle = '';
      this.phone.last = '';
    },

    PasswordModal() {
      if (this.setPhone === '01000000000') {
        this.$refs.loginModal.open(true);
      } else {
        this.$refs.joinModal.open(true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.userLogin {
  .inner {
    padding: 0 70px;

    .introText {
      font-size: 64px;
      line-height: 88px;
      color: #fff;
      word-break: keep-all;
      font-weight: 500;
      margin-bottom: 70px;
    }

    .loginBox {
      display: flex;
      width: 100%;
      flex-direction: row;
      background: #fff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);

      .phoneNumber-view {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 40px;
        overflow: hidden;
        background: #f8f8f8;
        h4 {
          font-weight: 500;
          font-size: 28px;
          color: #292929;
          span {
            color: #d22828;
            margin-left: 10px;
          }
        }

        .number-view {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          min-height: 100px;
          border-bottom: 4px solid #0085de;
          animation: numberViewLine 1.5s infinite;

          @keyframes numberViewLine {
            0% {
              border-bottom: 4px solid #f2f2f2;
            }
            100% {
              border-bottom: 4px solid #0085de;
            }
          }

          span.number {
            width: 120px;
            font-size: 40px;
            font-weight: 600;
            text-align: center;
          }
          span.bar {
            font-size: 32px;
            font-weight: 600;
            color: #c2c2c2;
          }
        }

        p {
          margin-top: 30px;
          word-break: keep-all;
          color: #888;
        }
      }

      .keypad {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        padding: 40px;
        .rowLine {
          margin-bottom: 20px;
        }
        .key {
          font-size: 32px;
          border-radius: 50px;
          background-color: #f2f2f2;
          border:0px;
          margin: 0 10px;
          overflow:hidden;
        }

        .key.re {
          font-size: 18px;
        }
      }
    }
  }

  .guide{

    margin-top:50px;

    h4{
      font-size:36px;
      color:#fff;
      font-weight:500;
    }


    dl{
      flex:1;margin-top:20px;

      dt{
        width:100%;
        height:240px;
        background:#fff;
        border-radius:10px;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        overflow:hidden;

        img{height:100%;}
      }
      dd{
        margin-top:30px;
        strong{display:block;color:#fff;font-weight:500;font-size:24px;text-align:center;}
        span{
          display:block;
          color:rgba(255,255,255,0.7);
          font-size:22px;
          font-weight:400;
          margin-top:10px;
          text-align:left;
        }
      }
    }

  }
}
</style>
