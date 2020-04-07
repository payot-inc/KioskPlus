<template>
  <v-dialog
    v-model="visible"
    class="dialog"
    width="960px"
  >
    <div class="terms">
      <div class="termsHead">
        {{serviceTerms.title}}
      </div>

      <div class="termsBody" v-html="serviceTerms.body">

      </div>

      <div class="termsBottom">
        <v-btn outlined @click="open">닫기</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>

import { info, user as userInfo } from '@/assets/docs/terms';

export default {
  data(){
    return{
      visible:false,
      serviceTerms: {
        title: '개인정보취급방침',
        body: userInfo.replace(/\n/g, '<br />')
      },

      userTerms:{
        body: info.replace(/\n/g, '<br />')
      }
      

    }
  },
  methods:{
    open(){
      this.visible = !this.visible;
    }
  }
}
</script>


<style lang="scss" scoped>
.terms{
  
  background:#fff;
  border-radius:20px;
  overflow:hidden;
  

  .termsHead{
    display:flex;
    align-items: center;
    font-size:36px;
    font-weight:500;
    height:100px;
    padding:0 40px;
    border-bottom:2px solid #e2e2e2
  }

  .termsBody{
    height:1200px;
    padding:40px;
    overflow-y:auto;
    font-size:24px;

    iframe{
      border:0px;
      font-size:24px;
    }
  }

  .termsBottom{
    display:flex;
    justify-content: center;
    align-items:center;
    height:150px;
    border-top:2px solid #e2e2e2;

    .v-btn{
      font-size:32px;
      width:300px;
      height:80px;
      background:#292929;
      color:#fff;
      font-weight:500;
      border-radius:40px;
    }
  }
}

</style>