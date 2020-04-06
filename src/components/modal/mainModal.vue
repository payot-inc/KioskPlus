<template>
  <div class="mainModal">
    <v-dialog 
      v-model="visible" 
      width="100%" 
      transition="slide-y-transition"
      overlay-opacity="0.8"
      overlay-color="#000"
    >
      <div class="modalBody">
        <div class="contents">
          <img src="@/assets/img/main_modal.png" />
        </div>
        <v-btn
          @click="modalClose"
          width="380px"
          height="90px"
          class="btn"
          elevation="0"
          color="#EE2073"
          >확인완료
        </v-btn>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    modalClose() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="scss" scoped>
.modalBody {
  background: #fff;
  border-radius: 0 0 60px 60px;
  text-align: center;
  padding: 70px 0;

  .contents {
    text-align: center;
  }

  .btn {
    border-radius: 45px;
    font-size: 36px;
    color: #fff;
    margin-top: 70px;
  }
}

.v-dialog__content {
  align-items: flex-start;
}

</style>
