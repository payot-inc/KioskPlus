<template>
  <div class="product" id="container">
    <SubTitleBar title="장비 및 상품선택" />
    <UserInfo />

    <div class="productTab">
      <div class="tabHead">
        <v-tabs
          height="120px"
          v-model="tab"
          dark
          hide-slider
          left
          background-color="#191919"
        >
          <v-tab style="color:#fff" active-class="tabTitle">세탁기</v-tab>
          <v-tab style="color:#fff" active-class="tabTitle">건조기</v-tab>
          <v-tab style="color:#fff" active-class="tabTitle">기타</v-tab>
        </v-tabs>
      </div>
      <v-tabs-items v-model="tab" light touchless>
        <v-tab-item class="tabContents">
          <div class="listWrap">
            <div class="eqList" :class="eqListMove">
              <div class="listTitle">
                <v-icon>fa-washer</v-icon>사용하실 장비를 선택해주세요
              </div>
              <div class="itemList">
                <v-list flat three-line>
                  <v-list-item-group>
                    <v-list-item
                      v-for="item in machines"
                      :key="item"
                      @click="nextList(item)"
                    >
                      <div class="eqItem">
                        <dl>
                          <dt>{{ item.name }}</dt>
                          <dd>용량 {{ item.size }}</dd>
                        </dl>
                        <v-icon size="40">fas fa-angle-right</v-icon>
                      </div>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
            </div>
            <!-- eqList -->

            <div class="goodsList" :class="goodsListMove">
              <div class="listTitle">
                <v-btn
                  width="100px"
                  height="100px"
                  elevation="0"
                  class="backBtn"
                  @click="backList"
                >
                  <v-icon size="40" color="#fff">fas fa-angle-left</v-icon>
                </v-btn>
                <dl>
                  <dt><span>{{ selectedMachine.name }}</span>(을)/를 선택하셨습니다</dt>
                  <dd>상품을 선택해주세요</dd>
                </dl>
              </div>
              <div class="itemList">
                <v-list flat three-line>
                  <v-list-item-group>
                    <v-list-item
                      v-for="item in selectedMachine.services"
                      :key="item"
                      @click="nextPage(item)"
                    >
                      <div class="goodsItem">
                        <dl>
                          <dt>{{ item.name }}</dt>
                          <dd>{{ item.notice }}</dd>
                        </dl>
                        <strong>{{ item.price | numeral('0,0') }}원</strong>
                      </div>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
            </div>
            <!-- goodsList -->
          </div>
          <!--listWrap -->
        </v-tab-item>
        <v-tab-item class="tabContents">
          <div class="listWrap">건조기장비 및 상품</div>
        </v-tab-item>
        <v-tab-item class="tabContents">
          기타장비 및 상품
        </v-tab-item>
      </v-tabs-items>
    </div>

    <OverlayGuide>
      <img src="@/assets/img/overlay_guide01.png" />
    </OverlayGuide>
  </div>
</template>

<script>
import SubTitleBar from '@/components/subTitleBar.vue';
import UserInfo from '@/components/userInfo.vue';
import OverlayGuide from '@/components/modal/overlayGuide.vue';

export default {
  name: 'userLogin',
  components: {
    SubTitleBar,
    UserInfo,
    OverlayGuide,
  },
  data() {
    return {
      tab: null,
      tabs: 3,
      eqListMove: '',
      goodsListMove: '',
      machines: [],
      selectedMachine: {},
    };
  },
  mounted() {
    this.getMachineList();
  },
  methods: {
    getMachineList() {
      const self = this;
      this.$axios.get('/company/18/machines').then(response => {
        self.machines = response.data;
        self.selectedMachine = response.data[0];
        console.log(response.data);
      });
    },
    nextList(machine) {
      this.selectedMachine = machine;
      this.eqListMove = 'off';
      this.goodsListMove = 'on';
    },
    backList() {
      this.eqListMove = 'on';
      this.goodsListMove = 'off';
    },
    nextPage(product) {
      this.$store.commit('setMachine', this.selectedMachine);
      this.$store.commit('setProduct', product);
      this.$router.push({ name: 'EqCoinPush' });
    },
  },
};
</script>

<style lang="scss" scoped>
.productTab {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 60px;
}
.tabHead {
  padding: 0 60px;
  background: #191919;
  position: relative;
  height: 118px;
  padding-top: 22px;
}
.v-tab {
  width: 280px;
  background: #292929;
  font-size: 36px;
  letter-spacing: 0;
  height: 100px;
  border-radius: 20px 20px 0 0;
}
.tabTitle {
  background: #fff;
  border-radius: 20px 20px 0 0;
  border: 0px;
  color: #292929 !important;
}
.v-tabs-items {
  flex: 1;
}
.tabContents {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
  padding: 60px;

  .listWrap {
    position: relative;
    height: 1100px;
    width: 100%;
    border: 2px solid #d2d2d2;
    border-radius: 10px;
    overflow: hidden;

    .eqList {
      position: absolute;
      width: 100%;
      top: 0px;
      display: flex;
      flex: 1;
      flex-direction: column;
      height: 100%;
      z-index: 10;
      border-right: 1px solid #e2e2e2;

      .listTitle {
        display: flex;
        font-size: 36px;
        height: 160px;
        background: #0085de;
        color: #fff;
        justify-content: center;
        align-items: center;
      }

      .itemList {
        display: flex;
        flex: 1;
        flex-direction: column;
        background: #f2f2f2;
        overflow-y: scroll;

        .eqItem {
          display: flex;
          justify-content: space-between;
          width: 100%;

          dl {
            dt {
              font-size: 36px;
            }
            dd {
              font-size: 28px;
              color: #888;
            }
          }
        }
      }
    }

    .goodsList {
      position: absolute;
      width: 100%;
      top: 0px;
      display: flex;
      flex: 1;
      flex-direction: column;
      height: 100%;

      .itemList {
        display: flex;
        flex: 1;
        flex-direction: column;
        background: #f2f2f2;
        overflow-y: scroll;
      }

      .listTitle {
        padding: 30px;
        height: 160px;
        display: flex;
        background: #0085de;
        color: #fff;
        align-items: center;

        dl {
          margin-left: 40px;

          dt {
            font-size: 42px;
            span {
              color: #fff500;
            }
          }
          dd {
            font-size: 26px;
            color: rgba(255, 255, 255, 0.8);
          }
        }

        .backBtn {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
      }

      .goodsItem {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        dl {
          display: flex;
          flex-direction: column;
          flex: 1;
          dt {
            font-size: 36px;
          }
          dd {
            font-size: 28px;
            color: #888;
          }
        }
        strong {
          display: block;
          width: 200px;
          text-align: right;
          font-size: 34px;
          font-weight: 600;
          color: #ee2073;
        }
      }
    }
  }
}

.v-list {
  padding: 0px;
}
.v-list-item {
  flex: 1;
  border-bottom: 2px solid #d2d2d2;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.v-overlay__content {
  width: 100%;
}

.eqList.on {
  animation: eqListMoveOn 0.3s forwards;
}
.eqList.off {
  animation: eqListMoveOff 0.3s forwards;
}
.goodsList.on {
  animation: goodsListMoveOn 0.3s forwards;
}
.goodsList.off {
  animation: goodsListMoveOff 0.3s forwards;
}

@keyframes eqListMoveOn {
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
}

@keyframes eqListMoveOff {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}

@keyframes goodsListMoveOn {
  0% {
    left: 100%;
  }
  100% {
    left: 0;
  }
}

@keyframes goodsListMoveOff {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}
</style>
