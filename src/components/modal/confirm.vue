<template>
  <v-dialog
    v-model="visible"
    width="800px"
    overlay-color="#000"
    overlay-opacity="0.8"
  >
    <div class="confirm">
      <div class="top">
        <span class="text1">{{ text1 }}</span>
        <span class="text2">{{ text2 }}</span>
      </div>
      <div class="bottom">
        <v-btn outlined class="cancle" @click="open(false)">{{ cancle }}</v-btn>
        <v-btn outlined class="ok" @click="upDate()">{{ ok }}</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: ['text1', 'text2', 'ok', 'cancle'],
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    open(value) {
      this.visible = value;
    },
    upDate() {
      this.$emit('done');
      this.open(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.confirm {
  background: #fff;
  border-radius: 10px;
  font-size: 28px;

  .top {
    padding: 40px;

    span {
      display: block;
      font-size: 40px;
    }
    span.text1 {
      color: #0085de;
    }
    b {
      color: #0085de;
    }
  }
  .bottom {
    padding: 40px;
    text-align: right;

    .v-btn {
      height: 80px;
      font-size: 28px;
      margin-left: 20px;
      border: 2px solid #c2c2c2;
      border-radius: 10px;
      font-weight: 400;
    }

    .v-btn.ok {
      border-color: #0085de;
      color: #0085de;
    }
  }
}
</style>
