<template>
  <v-dialog
    v-model="visible"
    width="920px"
    overlay-color="#000"
    overlay-opacity="0.8"
    transition="slide-y-reverse-transition"
  >
    <div class="eventModal">
      <div class="eventHead">
        <h4>진행중인 이벤트를 확인해보세요!</h4>
      </div>
      <ul>
        <li class="tableHead">
          <span>요일</span>
          <span>시간</span>
          <span class="eventText">이벤트내용</span>
        </li>
        <li v-bind:class="{on:todayEvent}">
          <span>월요일</span>
          <span>09:00 ~ 12:00</span>
          <span class="eventText">결제시 최대 5% 적립</span>
        </li>
        <li v-for="item in 3" :key="item">
          <span>화요일</span>
          <span>24:00 ~ 08:00</span>
          <span class="eventText">결제시 최대 10% 적립</span>
        </li>
      </ul>

      <div class="eventBottom">
        <v-btn outlined @click="open(false)">닫기</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
      todayEvent:true,
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

.eventModal{
  background:#fff;
  border-radius:10px;
  font-size:24px;
  overflow:hidden;
  border:0px;

  .eventHead{
    display:flex;
    align-items: center;
    justify-content: center;
    background:#0085DE;
    height:120px;
    margin-top:-1px;

    h4{
      font-size:42px;
      font-weight:500;
      color:#fff;
    }
  }

  ul{
    padding:30px;
    max-height:1140px;
    overflow-y:auto;
  }
  
  li{
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-bottom:2px solid #e2e2e2;
    height:100px;

    span{
      flex:1;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size:24px;
      font-size:24px;
    }

    span.eventText{
      flex:2
    }
  }
  li.tableHead{
    height:60px;
    background:#f2f2f2;
    border-radius:10px;
    border:0px;
    span{font-size:22px}
  }
  li.on{
    span{color:#EE2073}
  }

  .eventBottom{
    text-align:center;
    border-top:2px solid #e2e2e2;
    padding:40px;

    .v-btn{
      height:80px;width:300px;
      border-radius:40px;
      border:0px;
      background:#EE2073;
      font-size:32px;
      color:#fff;
    }
  }

  li:last-child{
    border-bottom:0px;
  }
}

</style>