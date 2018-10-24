<template>
  <header class="GehMyTbHeader">
    <div class="GehHeader">
      <div class="GehHeadPortraits">
        <i><a href="javascript:;"><img src="../../../static/images/gao/myheadportrait.png"></a></i>
        <div class="GehID">
          <h5><a href="javascript:;">马云</a></h5>
          <p><a href="javascript:;">我的亲情账号<img src="../../../static/images/gao/myrightjiantou.png"></a></p>
        </div>
      </div>
      <p class="GehP"><a href="javascript:;">设置</a></p>
    </div>
    <div class="GehFooter">
      <div class="GehClassify">
        <router-link to="/favorite">
          <p>{{favnum}}</p>
          <p>收藏夹</p>
        </router-link>
      </div>
      <div class="GehClassify">
        <a href="javascript:;">
          <p>268</p>
          <p>关注店铺</p>
        </a>
      </div>
      <div class="GehClassify">
        <a href="javascript:;">
          <p>403</p>
          <p>足迹</p>
        </a>
      </div>
      <div class="GehClassify">
        <a href="javascript:;">
          <p>21</p>
          <p>红包卡卷</p>
        </a>
      </div>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">

    export default {
      props:["favnum"]
    }
</script>

<style scoped>

</style>
