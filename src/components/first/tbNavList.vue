<template>
  <li @click="rander" class="loaclShopList">
    <div class="loaclShop">
      <div class="loaclLogo">
        <img class="imgLogo" src="../../../static/images/xiao/logo.jpg"/>
        <!--{{shopName}}-->
        <span class="shopName">{{pro.sellername}}</span>
        <a href="#" class="leftDir">&gt;</a>
      </div>
      <p class="already">卖家已发货</p>
    </div>
    <div class="shopListMes" @click="go">
      <!--{{list.pic}}-->
      <img class="listPic" :src="pro.defaultImg"/>
      <div class="listTitle">
        <!--{{list.title}}-->
        <p class="listTitleMes">{{pro.title}}</p>
        <div class="userMes">
          <!--{{list.color}}{{pro.key}}-->
          <span class="listShopColor">{{pro.params.color}}</span>
          <!--{{list.size}}  {{pro.value}}-->
          <span class="listShopSize">{{pro.params.size}}</span>
        </div>
        <h1 class="sevenT">{{pro.warranties[0]}}</h1>
      </div>
      <div class="listPrice">
        <!--{{list.price}}-->
        <p>￥<span>{{pro.params.price}}</span></p>
        <!--{{list.num}}-->
        <h2>X<span>{{pro.params.num}}</span></h2>
      </div>
    </div>
    <div class="protect">
      <p class="priceLogo">价</p>
      <div class="proPrice">
        <h2>报价险</h2>
        <p>有效期至2018年10月28日</p>
      </div>
      <h3>查看详情</h3>
    </div>
    <div class="protect">
      <p class="priceLogo">险</p>
      <div class="proPrice">
        <h2>保险服务</h2>
        <p>专享定制化购物保障</p>
      </div>
      <h3 class="spNum">x<span>1</span></h3>
    </div>
    <div class="totalShop">
      <!--{{totalNum}}-->
      <!--{{totalPrice}}-->
      <p class="totalNum">共 {{pro.params.num}} 件商品 合计：￥<span> {{pro.params.price*pro.params.num}}</span></p>
    </div>
    <div class="lookLogistics">
      <p class="logistics" @click="look()">查看物流</p>
      <p class="long" @click="extend()">延长收货</p>
      <p>确认收货</p>
    </div>

</li>
</template>
<script>
    export default {
        name: "tbNavList",
        props:["pro","totalNum","totalPrice","oid"],
         methods:{
          rander(){
            this.$router.push({"path":"/tbBuy",
              "query":{oid:this.oid}});
          },
          go(){
            this.$router.push({"path":"/goodinfo",
              "query":{gid:this.pro.gid}});
          }
        },
      created(){
        console.log(this.oid);
      }
     
    }
</script>

<style scoped>
/*.xbox{*/
  /*width:100%;*/
  /*height:100%;*/
  /*opacity: 0.3;*/
  /*background-color: #333333;*/
/*}*/
  /*.xhide{*/
    /*width:.4rem;*/
    /*height: .35rem;*/
    /*background-color: #FFFFFF;*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*margin: auto;*/
  /*}*/

</style>
