<template>
  <div class="pageTitle">
    <v-btn
      width="100px"
      height="100px"
      color="rgba(255,255,255,0.2)"
      class="back"
      elevation="0"
      @click="backPage"
    >
      <v-icon size="60" color="#fff">fa-arrow-left</v-icon>
    </v-btn>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: ['title'],

  methods: {
    backPage() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.pageTitle {
  height: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 30px;

  h2 {
    font-size: 42px;
    color: #fff;
    font-weight: 500;
  }
  .back {
    border-radius: 50px;
    margin-right: 30px;
  }
}
</style>
