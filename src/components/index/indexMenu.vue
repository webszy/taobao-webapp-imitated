<template>
  <section class="sMainMenu">
    <div class="menuItem">
      <router-link to="skt">
        <img src="../../../static/images/index/menuItem/tmail.jpg" >
        <p>店铺</p>
      </router-link>
    </div>
    <div class="menuItem">
          <router-link to="juhuasuan">
        <img src="../../../static/images/index/menuItem/jhx.jpg" >
        <p>聚划算</p>
        </router-link>
      </div>
    <div class="menuItem">
        <router-link to="movie">
          <img src="../../../static/images/index/menuItem/taopp.jpg" >
          <p>淘票票</p>
        </router-link>
      </div>
      <div class="menuItem">
          <router-link to="flypig">
            <img src="../../../static/images/index/menuItem/lvxing.jpg" >
            <p>飞猪旅行</p>     
        </router-link>
      </div>
      <div class="menuItem">
        <img src="../../../static/images/index/menuItem/chaoshi.jpg" >
        <p>天猫超市</p>
      </div>
      <div class="menuItem">
        <img src="../../../static/images/index/menuItem/chong.jpg" >
        <p>充值中心</p>
      </div>
      <div class="menuItem">
        <router-link to="flypig">
            <img src="../../../static/images/index/menuItem/waimai.jpg" >
          <p>外卖 </p>    
        </router-link>
      </div>
      <div class="menuItem">
          <img src="../../../static/images/index/menuItem/jinbi.jpg" >
          <p>领金币</p>
      </div>
      <div class="menuItem">
          <img src="../../../static/images/index/menuItem/paimai.jpg" >
          <p>拍卖</p>
      </div>
      <div class="menuItem">
          <img src="../../../static/images/index/menuItem/fenlei.jpg" >
          <p>分类</p>
      </div>
  </section>
</template>

<script>
export default {
  name: 'indexMenu',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
