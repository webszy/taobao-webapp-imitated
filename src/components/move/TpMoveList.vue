<template>
  <li class="tpSectionLi" >
    <img class="tpSectionImg1"  :src="data.images.small">
    <div class="tpSectionDiv"> <span class="tpSectionSpan">{{data.title}} <img class="tpSectionImg3" src="../../../static/images/cheng/taopiao9.gif"></span>
      <span class="tpSectionSpan1">淘票票评分 {{data.rating.average}}</span>
      <span class="tpSectionSpan1">导演 ：{{data.directors[0].name}}</span>
      <span class="tpSectionSpan1"><span class="tpSectionSpan01">主演 ：</span><span class="tpSectionSpan01" v-for="p in data.casts">{{p.name}}</span></span>
      <img class="tpSectionImg2" src="../../../static/images/cheng/taopiao10.gif"/>
      <img class="tpSectionImg2" src="../../../static/images/cheng/taopiao11.gif"/>
    </div>
    <span class="tpSectionSpan2">购票</span>
  </li>
</template>

<script type="text/ecmascript-6">
    export default {
     props:["data"]
    }
</script>

<style scoped>

</style>
