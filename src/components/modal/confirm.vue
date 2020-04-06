<template>
  <v-dialog
    v-model="visible"
    overlay-color="#000"
    overlay-opacity="0.8"
    persistent
  >
    <div class="confirm">
      
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:true
    }
  },
  methods:{
    open(value){
      this.visible = value;
    }
  }  
}
</script>

<style lang="scss" scoped>

</style>