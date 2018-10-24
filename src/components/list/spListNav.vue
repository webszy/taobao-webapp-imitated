<template>
  <nav v-show="(say==1) && (sid==0)" >
    <router-link class="xqNav" :to="{path:'/goodinfo',query:{gid:'575323379383'}}" tag="div">
      <img class="xqNavImg1" :src="list[15].imageUrls[0]" >
      <div class="xqNavDiv">
        <span class="xqNavSpan1"><img class="xqNavImg2" src="../../../static/images/cheng/xiangqing5.gif" >【设计师合作款】女装 提花 针织衫（长袖）412399 优衣库U</span>
        <div>
          <span  class="xqNavSpan2">新品</span>
          <p class="xqNavP1"><span class="xqNavSpan5">￥</span><span class="xqNavSpan3">299</span> <span class="xqNavSpan">164人付款</span> <span class="xqNavSpan">上海</span></p>
          <p class="xqNavP2"><span class="xqNavSpan6">优衣库官方旗舰店</span> <span class="xqNavSpan4">进店 ></span> <span class="xqNavSpan4">···</span></p>
        </div>
      </div>
    </router-link>
    <div class="xqNav1">
      <img class="xqNav1Img1" src="../../../static/images/cheng/xiangqing6.gif">
      <div class="xqNav101">
        <span class="xqNav101Span1">优衣库女装</span>
        <span class="xqNav101Span2">高级轻型羽绒服</span>
        <router-link :to="{path:'/skt'} " class="xqNav101Span3" tag="span">查看全部</router-link>
      </div>
    </div>
    <router-link class="xqNav" :to="{path:'/goodinfo',query:{gid:p.id}}" v-for="p in list" :key="p.id" tag="div">      
      <img class="xqNavImg1" :src="p.imageUrls[0]" >
      <div class="xqNavDiv">
        <span class="xqNavSpan1"><img class="xqNavImg2" src="../../../static/images/cheng/xiangqing5.gif" >{{p.title}}</span>
        <div>
          <span  class="xqNavSpan2">新品</span>
          <p class="xqNavP1"><span class="xqNavSpan5">￥</span><span class="xqNavSpan3">{{p.skuOptions[0].price}}</span> <span class="xqNavSpan">{{p.saleCount}}人付款</span> <span class="xqNavSpan">{{p.storehouse}}</span></p>
          <p class="xqNavP2"><span class="xqNavSpan6">{{p.sellerScreenName}}</span> <span class="xqNavSpan4">进店 ></span> <span class="xqNavSpan4">···</span></p>
        </div>
      </div>
      </router-link>
    
  </nav>
</template>

<script>
    export default {
        name: "",
      props:["sid","say","list"]
      
    }
</script>

<style scoped>

</style>
