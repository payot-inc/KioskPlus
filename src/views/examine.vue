<template>
  <div class="examine">
    <v-icon>fa-lightbulb</v-icon>
    <dl>
      <dt>시스템 점검 중 입니다</dt>
      <dd>
        네트워크 문제로 인하여 지금은 사용할 수 없습니다
      </dd>
    </dl>
    
  </div>
</template>

<style lang="scss" scoped>

.examine{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex:1;

  .v-icon{
    font-size:150px;
    color:#fff;
    text-shadow: 0 5px 30px rgba(0,0,0,0.3);
  }

  dl{
    margin-top:60px;
    color:#fff;
    text-align:center;

    dt{font-size:72px;font-weight:500;text-shadow: 0 5px 30px rgba(0,0,0,0.3);}
    dd{
      font-size:36px;
      margin-top:20px;
      word-break: keep-all;
      color:#292929;
      background:#fff;
      padding:0 20px;
      border-radius:10px;
      
    }
  }
}

</style>