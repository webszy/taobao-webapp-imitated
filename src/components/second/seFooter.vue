<template>
  <div class="xafooter" >
    <!--{{total.pri}}-->
    <h2 class="subList" @click="send">提交订单</h2>
    <p class="totalPri">合计金额：<span>￥{{totalMoney}}</span></p>
  </div>
</template>

<script>
  export default ({
    props:["totalMoney","send"]
  })
</script>

<style scoped>

</style>
