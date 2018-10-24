<template>
  <div>
    <div class="GehSubOrd">
      <div class="GehSubOrdLeft">
        <!--<div class="GehSectionCheck GehSectionAll">-->
          <!--<input type="checkbox">-->
        <!--</div>-->
        <!--<p>全选</p>-->
      </div>
      <div class="GehSubOrdRight">
        <h4>合计：<p>￥<span></span></p></h4>
        <router-link to=""><b>结算（0）</b></router-link>
      </div>
    </div>
    <tb-my-tb-footer></tb-my-tb-footer>
  </div>
</template>

<script>
  import TbMyTbFooter from "../gehmytaobao/TbMyTbFooter"
    export default {
      components:{
        TbMyTbFooter
      },
        name: "TbGoShopCartFooter",

    }
</script>

<style scoped>

</style>
