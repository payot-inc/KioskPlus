<template>
  <v-dialog 
    v-model="visible"
    width="640px"
    overlay-opacity="0.8"
    overlay-color="#000"
    persistent
  >
    <div class="progressBox">
      <v-progress-circular 
        indeterminate
        color="#EE2073"
        :size="150"
        :width="15"
      />
      <dl>
        <dt>{{title}}</dt>
        <dd>잠시만 기다려 주세요</dd>
      </dl>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props:['title'],

  data(){
    return{
      visible:false
    }
  },

  methods: {
    open(value){
      this.visible = value
    },
  },
}
</script>

<style lang="scss">

.progressBox{
  background: #fff;
  border-radius: 20px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:60px;

  dl{text-align:center;margin-top:60px;
    dt{font-size:44px;font-weight:500;color:#292929}
    dd{font-size:32px;color:#888;}
  }
}
</style>
