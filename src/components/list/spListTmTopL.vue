<template>
  <div class="xqTmDiv1" v-show="(say==1) && (sid==1)">
    <div  class="xqTmDiv01" v-for="s in list1" :key="s">
      <img class="xqTmImg2" :src="s.imageUrls[0]" >
      <div class="xqTmDiv02">
        <span  class="xqTmSpan1">{{s.title }}</span>
        <span  class="xqNavSpan2">新品</span>
        <p class="xqNavP1"><span class="xqNavSpan5">￥</span><span class="xqNavSpan3">{{s.price}}</span> <span class="xqNavSpan">{{s.monthSaleCount}}</span> </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props:["say","sid","list1"],
        name: ""
    }
</script>

<style scoped>

</style>
