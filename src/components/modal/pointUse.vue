<template>
  <v-dialog 
    v-model="visible" 
    width="800px"
    transition="slide-y-transition"
    overlay-opacity="0.8"
    overlay-color="#000"
  >
    <div class="pointUse">
      <div class="dialogHead">
        <span>포인트사용하기</span>
        <v-btn outlined @click="closeModal" width="100px" height="100px">
          <v-icon>fa-times</v-icon>
        </v-btn>
      </div>
      <div class="dialogBody">
        <dl class="myPoint">
          <dt>나의 포인트</dt>
          <dd>{{ myPointAmount | numeral('0,0')}} 포인트</dd>
        </dl>
        <dl class="usePoint">
          <dt>사용할 포인트</dt>
          <dd>{{ pointValue }} <span>포인트</span></dd>
        </dl>

        <div class="btns">
          <div class="pointBtn">
            <v-btn outlined @click="pointAdd(500)">500 추가</v-btn>
          </div>
          <div class="pointBtn">
            <v-btn @click="pointAdd(1000)" click="" outlined>1,000 추가</v-btn>
          </div>

          <v-btn width="150px" outlined @click="pointValue = 0" class="clearBtn"
            >초기화</v-btn
          >
        </div>

        <div class="divider"></div>

        <v-btn class="completeBtn" outlined @click="done">
          입력완료
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: ['min', 'max'],
  data() {
    return {
      visible: false,
      pointValue: 0,
      pointUseValue:0,
      myPoint: this.$store.state.user.point,
    };
  },

  computed:{
    myPointAmount(){
      return this.myPoint - this.pointValue
    }
  },

  methods: {
    pointAdd(value) {
      const totalUsePoint = this.pointValue + value;
      if (totalUsePoint > this.myPoint) return;
      if (totalUsePoint < this.max) {
        this.pointValue += value;
      }
    },
    open(state) {
      this.visible = state;
    },
    closeModal() {
      this.visible = !this.visible;
    },
    done() {
      this.$emit('update:usePoint', this.pointValue);
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.pointUse {
  border-radius: 10px;
  overflow: hidden;
}

.dialogHead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #0085de;
  height: 100px;
  overflow: hidden;

  span {
    font-size: 36px;
    color: #fff;
    padding-left: 40px;
  }
  .v-btn {
    border: 0px;
    color: #fff;
  }
  .v-icon {
    font-size: 36px;
  }
}

.dialogBody {
  padding: 40px;
  background: #fff;
  min-height: 200px;

  dl.myPoint {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    dt {
      font-size: 32px;
      color: #888;
    }
    dd {
      font-size: 32px;
      font-weight: 600;
    }
  }

  dl.usePoint {
    display: flex;
    align-items: center;
    border-bottom: 6px solid #0085de;
    flex-direction: column;
    padding-bottom: 10px;

    dt {
      text-align: left;
      width: 100%;
      font-size: 32px;
      color: #888;
    }
    dd {
      width: 100%;
      text-align: right;
      font-size: 54px;
      font-weight: 600;
      color: #0085de;

      span {
        font-size: 32px;
        color: #292929;
      }
    }
  }

  .btns {
    display: flex;
    align-items: center;
    margin: 30px 0;

    .pointBtn {
      flex: 1;
      margin-right: 20px;

      .v-btn {
        width: 100%;
        height: 80px;
        font-size: 32px;
        border-radius: 10px;
        border: 2px solid #0085de;
        color: #0085de;
      }
    }
    .pointBtn:last-child {
      margin-right: 0px;
    }

    .clearBtn {
      width: 150px;
      height: 80px;
      font-size: 32px;
      border-radius: 10px;
      border: 2px solid #c2c2c2;
    }
  }

  .v-btn.completeBtn {
    width: 100%;
    height: 90px;
    border: 0px;
    border-radius: 10px;
    background: #0085de;
    color: #fff;
    font-size: 32px;
  }

  .divider {
    height: 2px;
    background: #e2e2e2;
    margin: 40px 0;
  }
}
</style>
