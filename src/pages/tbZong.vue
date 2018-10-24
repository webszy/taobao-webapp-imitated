<template>
    <div class="tbzong">
       <tbhead></tbhead>
       <tbNav></tbNav>
      <tbFoot :totalNum="totalNum" :totalPrice="totalPrice" :list="goodslist"></tbFoot>
    </div>
</template>
<script>
    import serviceapi from "../../static/apis/service";
    import tbhead from '../components/first/tbHea'
    import tbNav from '../components/first/tbNav'
    import tbFoot from '../components/first/tbFoot'
    export default {
        name: "tbZong",
        components:{
          tbhead,tbNav,tbFoot
        },
      data(){
        return {
          totalNum:0,
          totalPrice:0, //总价格
          goodslist:[], //商品列表
        }
      },
      created(){
        this.init();
      },
      methods:{
          // 初始化页面数据
        init(){
          serviceapi.getShopCartsByUserId((data)=>{
            this.goodslist=data;
            console.log(data);
            this.totaldata(data);
            data.forEach((val,item)=>{
              console.log(data[item].oid);
            })
          })


        },
        totaldata(product){
          this.totalNum=0;
          this.totalPrice=0;
          // console.log(product);
          product.forEach((item)=>{
            this.totalNum=item.params.num;
            this.totalPrice=item.params.price*item.params.num;
          });
          }
        }
    }
</script>

<style scoped>
  /*@import "../assets/css/index.css";*/
  .tbzong{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
