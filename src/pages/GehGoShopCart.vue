<template>
<transition 
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
  >
    <div  class="app">
      <tb-go-shop-cart-cup :list="productLists" :num="totalQal" :adds="add" :minues="minus"></tb-go-shop-cart-cup>
      <tb-go-shop-cart-footer :addprice="totalMoney"></tb-go-shop-cart-footer>
    </div>
</transition>
</template>

<script>
  import TbGoShopCartCup from "../components/gehgoshopcart/TbGoShopCartCup"
  import TbGoShopCartFooter from "../components/gehgoshopcart/TbGoShopCartFooter"
  import '../../static/css/goshopcart.css'
    export default {
      components:{
        TbGoShopCartCup,
        TbGoShopCartFooter
      },
      name: "GehGoShopCart",
      data:function(){
        return {
          totalQuantity:0,
          totalQal:0,
          totalMoney:0,
          productLists:[]
        }
      },
      methods:{
        //ajax请求
        _goshopcart(){
          fetch("http://140.143.100.57:3008/user/getcart").then((res)=>{
            res.json().then((data)=>{
              // console.log("data",data);
              this.productLists = data
              localStorage.setItem("key",JSON.stringify(data))
              this._counteCarts(this.productLists)
              console.log("this.productLists",this.productLists);

            })
          })
        },
        //计算总件数
        _counteCarts(product){
          this.totalQal = 0
          this.totalMoney = 0
          product.forEach((item,index)=>{
            this.totalQal += parseInt(item.num)
            this.totalMoney += item.num * item.params.price
            console.log("this.totalQal",item.num)
          })
        },
        add(index){
          let num = parseInt(this.productLists[index].num)
          console.log("num",num);
          num++
          this.productLists[index].num = num
        },
        minus(index){
          let num = parseInt(this.productLists[index].num)
          if(num<=1){
            num = 1
            this.productLists[index].num = num
          }else{
            num--
            this.productLists[index].num = num
          }
        }
      },
      computed:{

      },
      created:function(){
        this.$loading.show('加载中'); //显示
        setTimeout(()=>{
          this._goshopcart();
          this.$loading.hide()
        },1000)
        
      }
    }
</script>

<style scoped>
</style>
