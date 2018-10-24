<template>
  <div class="xjpCen">
    <div class="xNav">
      <p> 卖家已发货 </p>
      <h2>还剩8天16时自动确认</h2>
    </div>
    <div class="xSection">
      <a href="javacript:void(0)" class="searcha" ><i class="iconfont icon-yunshu"></i></a>
      <div class="groriMes">
        <p>虎门转运中心 已发出 ，下一站西安转运中心</p>
        <span>2018-10-22</span>
      </div>
      <a href="javacript:void(0)" class="searcha" @click.prevent="goback"><i class="iconfont icon-zuojiantou"></i></a>
    </div>
    <div class="xaddr">
      <a href="javacript:void(0)" class="searcha" ><i class="iconfont icon-dizhi"></i></a>
      <div class="xaddrMes">
        <p><i>收货人：{{pro.recive.name}}</i><span>{{pro.recive.tel}}</span></p>
        <h1>{{pro.recive.addr}}</h1>
      </div>
    </div>
    <ul class="shopList">
      <li class="loaclShopList">
        <div class="loaclShop">
          <div class="loaclLogo">
            <img class="imgLogo" src="../../../static/images/xiao/logo.jpg"/>
            <!--{{shopName}}-->
            <span @click="goshop" class="shopName">{{pro.sellername}}</span>
            <a href="javacript:void(0)" class="leftDir">&gt;</a>
          </div>
          <p class="already">卖家已发货</p>
        </div>
        <div class="shopListMes" @click="goinfo">
          <!--{{list.pic}}-->
          <img class="listPic" :src="pro.defaultImg"/>
          <div class="listTitle">
            <!--{{list.title}}-->
            <p class="listTitleMes">{{pro.title}}</p>
            <div class="userMes">
              <!--{{list.color}}-->
              <span class="listShopColor">{{pro.params.color}}</span>
              <!--{{list.size}}-->
              <span class="listShopSize">{{pro.params.size}}</span>
            </div>
            <h1 class="sevenT">七天退换</h1>
          </div>
          <div class="listPrice">
            <!--{{list.price}}-->
            <p>￥<span>{{pro.params.price}}</span></p>
            <!--{{list.num}}-->
            <h2>X<span>{{pro.params.num}}</span></h2>
          </div>
        </div>
        <div class="stopShop">
          <p class="shopMes">退换</p>
        </div>
        <div class="protect">
          <p class="priceLogo">价</p>
          <div class="proPrice">
            <h2>报价险</h2>
            <p>有效期至2018年10月28日</p>
          </div>
          <h3>查看详情  <a href="javacript:void(0)"><i class="iconfont icon-zuojiantou"></i></a></h3>
        </div>
        <div class="protect">
          <p class="priceLogo">险</p>
          <div class="proPrice">
            <h2>保险服务</h2>
            <p>专享定制化购物保障</p>
          </div>
          <h3>查看详情  <a href="javacript:void(0)"><i class="iconfont icon-zuojiantou"></i></a></h3>
        </div>
        <div class="calcMon">
          <p>商品总价</p>
          <h1>￥{{pro.params.price*pro.params.num}}</h1>
        </div>
        <div class="calcMon">
          <p>订单总价</p>
          <h1>￥{{pro.params.price*pro.params.num}}</h1>
        </div>
        <div class="calcMon">
          <p>实付款</p>
          <h1 class="react">￥{{pro.params.price*pro.params.num}}</h1>
        </div>
        <div class="contect">
          <div class="connect">
            <img src="../../../static/images/xiao/mes.jpg"/>
            <p>联系卖家</p>
          </div>
          <span></span>
          <div class="connect">
            <img src="../../../static/images/xiao/phone.jpg"/>
            <p>联系卖家</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import apis from '../../../static/apis/apiURLs.js'
    export default {
        name: "xNav",
        data(){
          return{
            pro:{}
          }
        },
       created(){
         this.init();
       },
      methods:{
        // 初始化页面数据
        init(){
          let oid=this.$route.query.oid||'001'
          fetch(apis.GetOrderByoid+oid).then((res)=>{
            res.json().then((data)=>{
              this.pro = data;
              console.log(data);
              console.log( "buy",this.pro)
            })
          })
        },
        goinfo(){
          this.$router.push({
            path:'/goodinfo',
            query:{gid:this.pro.gid}
          })
        },
        goshop(){
          this.$router.push({
            path:'/skt'
          })
        },
        goback(){
          window.history.back(-1)
        }
      }

    }
</script>

<style scoped>

</style>
