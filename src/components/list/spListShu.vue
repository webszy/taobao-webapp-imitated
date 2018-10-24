<template>
  <div v-show="(say==2) && (sid==0)">
    <div class="xqNav">
      <img class="xqNavImg1" :src="list2[16].imageUrls[0]" >
      <div class="xqNavDiv">
        <span class="xqNavSpan1"><img class="xqNavImg2" src="../../../static/images/cheng/xiangqing5.gif" >【新品上市】【单件】刘啦啦中长款豹纹外套女2018新款</span>
        <div>
          <span  class="xqNavSpan2">优购</span>
          <p class="xqNavP1"><span class="xqNavSpan5">￥</span><span class="xqNavSpan3">299</span> <span class="xqNavSpan">164人付款</span> <span class="xqNavSpan">上海</span></p>
          <p class="xqNavP2"><span class="xqNavSpan6">优衣库官方旗舰店</span> <span class="xqNavSpan4">进店 ></span> <span class="xqNavSpan4">···</span></p>
        </div>
      </div>
    </div>
    <div class="xqNav1">
      <img class="xqNav1Img1" src="../../../static/images/cheng/xiangqing6.gif">
      <div class="xqNav101">
        <span class="xqNav101Span1">优衣库女装</span>
        <span class="xqNav101Span2">高级轻型羽绒服</span>
        <span class="xqNav101Span3">查看全部</span>
      </div>
    </div>
    <div class="xqNav" v-for="m in list2">
      <img class="xqNavImg1" :src="m.imageUrls[0]" >
      <div class="xqNavDiv">
        <span class="xqNavSpan1"><img class="xqNavImg2" src="../../../static/images/cheng/xiangqing5.gif" >{{m.title}}</span>
        <div>
          <span  class="xqNavSpan2">优购</span>
          <p class="xqNavP1"><span class="xqNavSpan5">￥</span><span class="xqNavSpan3">{{m.skuOptions[0].price}}</span> <span class="xqNavSpan">{{m.saleCount}}人付款</span> <span class="xqNavSpan">{{m.storehouse}}</span></p>
          <p class="xqNavP2"><span class="xqNavSpan6">{{m.sellerScreenName}}</span> <span class="xqNavSpan4">进店 ></span> <span class="xqNavSpan4">···</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "",
      props:["sid","say","list2"]
    }
</script>

<style scoped>

</style>
