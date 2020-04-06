<template>
  <div class="passwordModal">
    <v-dialog
      v-model="visible"
      width="100%"
      transition="dialog-bottom-transition"
      style="overflow:none"
      @input="onDismiss($event)"
      overlay-opacity="0.8"
      overlay-color="#000"
      persistent
    >
      <div class="modalBody" ref="body">
        <v-btn
          @click="modalClose"
          width="140px"
          height="140px"
          class="closeBtn"
          elevation="0"
          style="background:#fff"
        >
          <v-icon size="80">fas fa-times-circle</v-icon>
        </v-btn>
        <div class="head">
          <dl>
            <dt>
              <span>{{ phone }}</span> 님,
            </dt>
            <dd v-if="type === 'normal'">비밀번호를 입력해주세요</dd>
            <dd v-else-if="type === 'error'" class="red--text">
              비밀번호를 틀리셨습니다 <br />다시 입력해주세요
            </dd>
          </dl>
          <v-btn outlined @click="$refs.confirm.open(true)">
            <span>비밀번호가 생각나지 않습니다</span>
            <v-icon>fa-angle-right</v-icon>
          </v-btn>
        </div>

        <div class="bottom">
          <div class="passwordView">
            <div class="label">
              <v-icon color="#aaa" size="30">fas fa-unlock</v-icon>
              <span>비밀번호</span>
            </div>
            <div class="password">
              <span
                v-for="num in 4"
                :key="num"
                :class="{ active: password.length >= num }"
              ></span>
            </div>
          </div>
          <div class="keypad">
            <div class="rowLine" v-for="row in 3" :key="row">
              <v-btn
                width="180px"
                height="90px"
                class="number"
                elevation="0"
                v-for="col in 3"
                :key="col"
                @click="inputPassword((row - 1) * 3 + col)"
                >{{ (row - 1) * 3 + col }}</v-btn
              >
            </div>
            <div class="rowLine">
              <v-btn
                width="180px"
                height="90px"
                class="number del"
                elevation="0"
                @click="removePassword"
              >
                <v-icon size="40">fa-backspace</v-icon>
              </v-btn>
              <v-btn
                width="180px"
                height="90px"
                class="number"
                elevation="0"
                @click="inputPassword(0)"
                >0</v-btn
              >
              <v-btn
                @click="clearPassword"
                width="180px"
                height="90px"
                class="number all"
                elevation="0"
                >다시입력</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-dialog>

    <Progress ref="loading" title="사용자정보를 확인중입니다" />

    <PassFind ref="passFind" />

    <MassageModal
      ref="massage"
      type="pass"
      description="휴대폰의 문자메세지를 확인해주세요"
      @done="$refs.passFind.open(true)"
    >
      <span style="color:#0085DE">{{ phone }}</span> 님의 번호로 임시비밀번호를
      발송하였습니다
    </MassageModal>

    <ConfirmModal
      text1="010-8525-4651 으로 "
      text2="임시비밀번호를 발송할까요?"
      ok="네 발송합니다"
      cancle="아니오"
      @done="$refs.massage.open(true)"
      ref="confirm"
    />


    <PassFind ref="passFind" />
  </div>
</template>

<script>
import Progress from '@/components/modal/progress.vue';
import MassageModal from '@/components/modal/massage.vue';
import PassFind from '@/components/modal/passFind.vue';
import ConfirmModal from '@/components/modal/confirm.vue';

export default {
  props: ['phone', 'title', 'messasge'],

  components: {
    Progress,
    MassageModal,
    PassFind,
    ConfirmModal
  },

  data() {
    return {
      visible: false,
      password: '',
      type: 'normal',
      passFindState: '',
    };
  },

  watch: {
    password(newValue) {
      if (newValue === '0000' && newValue.length === 4) {
        this.$refs.loading.open(true);
        setTimeout(() => {
          this.$router.push('payment');
        }, 3000);
      } else if (newValue.length === 4) {
        this.type = 'error';
        this.password = '';
      } else if (newValue.length > 0) {
        this.type = 'normal';
      }
    },

    visible(newValue) {
      this.onDismiss(newValue);
    },
  },

  methods: {
    open(state) {
      this.visible = state;
    },
    modalClose() {
      this.visible = !this.visible;
    },
    // 비밀번호 입력
    inputPassword(number) {
      this.password += number.toString();
    },
    // 비밀번호 하나 지우기
    removePassword() {
      if (this.password.length !== 0) {
        this.password = this.password.slice(0, -1);
      }
    },
    // 모달이 꺼질때
    onDismiss(state) {
      if (!state) {
        this.password = '';
      }
    },
    // 모두 지우기
    clearPassword() {
      this.password = '';
    },
    // 다음으로
    nextPage() {
      this.$router.push({ name: 'Product' });
    },

    parents(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.modalBody {
  border-radius: 60px 60px 0 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  position: relative;

  .closeBtn {
    position: absolute;
    background: #fff;
    border-radius: 70px;
    top: -70px;
    z-index: 10;
  }

  .head {
    width: 100%;
    padding: 120px 60px 60px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    dl {
      font-size: 46px;
      font-weight: 500;
      margin-bottom: 30px;

      dt {
        span {
          color: #0085de;
          font-weight: 600;
        }
      }
    }

    .v-btn {
      height: 70px;
      border-radius: 35px;
      font-size: 28px;
      font-weight: 400;
      padding: 0 40px;
      border: 2px solid #c2c2c2;
      background: #fff;
      overflow: hidden;

      span {
        margin-right: 20px;
      }
      .v-icon {
        font-size: 36px;
        color: #888;
      }
    }
  }

  .bottom {
    width: 100%;
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 120px 0;

    .passwordView {
      width: 560px;
      height: 120px;
      border-bottom: 4px solid #0085de;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;

      .label {
        span {
          color: #292929;
          display: inline-block;
          margin-left: 20px;
          vertical-align: middle;
          font-size: 28px;
          font-family: 'SCDream';
        }
      }

      .password {
        span {
          display: inline-block;
          vertical-align: middle;
          width: 30px;
          height: 30px;
          line-height: 40px;
          background: #aaa;
          border-radius: 15px;
          margin-left: 15px;
        }

        span.active {
          background: #0085de;
        }
      }
    }

    .keypad {
      .rowLine {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .number {
          font-size: 42px;
          margin: 5px;
          border-radius: 10px;
          background: #fff;
          border: 2px solid #c2c2c2;
        }
        .number.all {
          font-size: 28px;
        }
      }
    }
  }
}

.v-dialog__content {
  align-items: flex-end;
}

.v-dialog {
  overflow-y: initial;
}
</style>
