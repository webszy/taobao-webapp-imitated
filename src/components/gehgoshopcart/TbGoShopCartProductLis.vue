<template>
  <div>
  <section class="GehGoShopSection" v-for="(p,index) in list" :key="index">
      <tb-go-shop-cart-product :isB="isB" :list1="p" :idx="index" :num="num" :adds="adds" :minues="minues" @sb="sos"></tb-go-shop-cart-product>
  </section>
  </div>
</template>

<script>
  import TbGoShopCartProduct from "./TbGoShopCartProduct"
    export default {
      components:{
        TbGoShopCartProduct
      },
      data(){
        return {
          isB:false,
          totalMoney:0,
          totalQal:0,
          arr:[]
        }
      },
      name: "TbGoShopCartProductLis",
      props:["list","idx","num","adds","minues"],
      methods:{
        sos(pag){
          this.isB=pag;
          // console.log(this.isB)
        },
        money(){

        //   for(let i=0;i<this.list.length;i++){
        //     console.log(this.isB);
        //     if(this.isB == true){
        //       console.log("this.isB",this.isB);
        //       this.totalMoney += this.list[i].params.price
        //       console.log("this.totalMoney",this.totalMoney)
        //     }else{
        //       return;
        //     }
        //   }
        }
      },
      updated(){
        this.money()
      }
    }
</script>

<style scoped>

</style>
