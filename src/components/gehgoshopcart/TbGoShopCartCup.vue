<template>
    <div  class="GehCup">
      <tb-go-shop-cart-header :list="list" :num="num"></tb-go-shop-cart-header>
      <tb-go-shop-cart-product-lis :list="list" :adds="adds" :minues="minues" ></tb-go-shop-cart-product-lis>
    </div>
</template>

<script>
  import TbGoShopCartHeader from "./TbGoShopCartHeader"
  import TbGoShopCartProductLis from "./TbGoShopCartProductLis"
    export default {
      components:{
        TbGoShopCartHeader,
        TbGoShopCartProductLis
      },
      name: "TbGoShopCartCup",
      props:["list","num","adds","minues"],
      created(){
        console.log(list);
      }
    }
</script>

<style scoped>

</style>
