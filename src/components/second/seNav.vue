<template>
  <div class="scrlooBox">
    <div class="xaNav">
      <a href="javascript:void(0)"><i class="iconfont icon-dizhi"></i></a>
      <div class="homeAddr">
        <p>收货人：千峰教育<span>12312312312</span></p>
        <h2><span>收货地址：</span>陕西省西安市高新区高新六路立人科技园C座千峰二教室</h2>
        <h1>(收货不便时，可选择免费代收货服务)</h1>
      </div>
      <a href="javascript:void(0)" @click.prevent="goback"><i class="iconfont icon-zuojiantou"></i></a>
    </div>
    <img class="images" src="../../../static/images/xiao/li.jpg"/>
    <div>
      <div class="tmallTitle">
        <img src="../../../static/images/xiao/logo.jpg"/>
        <p>{{pro.sellername}}</p>
      </div>
      <div class="tShirt">
        <img :src="pro.defaultImg"/>
        <div class="tShirtMes">
          <!--{{list.title}}-->
          <p>{{pro.title}}</p>
          <h1>颜色分类：<span>{{gcolor}}</span>尺码：{{gsize}}<span></span></h1>
          <!--<h3 class="sevenBox">七天退换</h3>-->
          <div class="showPrice">
            <h2>￥<span>{{gprice}}</span></h2>
            <span class="showNum">x{{totalNum}}</span>
          </div>
        </div>

      </div>
      <div class="buyNum">
        <p>购买数量</p>
        <div class="clickNum">
          <button class="subBox" @click="sub(i)">-</button>
          <span class="Num">{{totalNum}}</span>
          <button class="addBox" @click="add(i)">+</button>
        </div>
      </div>
      <div class="buyProt">
        <p>报价险</p>
        <div class="buySend">
          <h2>卖家赠送，若十五天降价，保险赔偿差额 <a href="javascript:void(0)"><i class="iconfont icon-zuojiantou"></i></a></h2>
        </div>
      </div>
      <div class="buyProt">
        <p>店铺优惠</p>
        <div class="buySend">
          <h2>省17.8元，满件打折：聚划算品牌 <a href="javascript:void(0)"><i class="iconfont icon-zuojiantou"></i></a></h2>
        </div>
      </div>
      <div class="buyProt">
        <p>配送方式</p>
        <div class="buySend">
          <h2>EMS免邮 <a href="javascript:void(0)"><i class="iconfont icon-zuojiantou"></i></a></h2>
        </div>
      </div>
      <div class="griPro">
        <p>运费险</p>
        <input type="checkbox" class="checkBox" @click="go($event)"/>
        <h2 class="giveMon">确认收货前可赔付10元，￥7.2元 </h2>
      </div>
      <div class="griPro">
        <p>运费险投保须知</p>
        <h4>?</h4>
      </div>
      <div class="griPro">
        <p>买家留言：</p>
        <input class="conCheck" type="text" placeholder="选填，填写内容已经和商家确认"/>
      </div>
      <div class="calc">
        <!--{{total.num}}-->
        <p>共 {{totalNum}}件商品  小计：<span>￥{{this.totalMoney}}</span></p>
      </div>
      <div class="splitDate">
        <div class="dataWrite">
          <p>花呗分期</p>
          <h2>商品单价大于等于600.00才能使用分期</h2>
        </div>
        <input type="checkbox" class="chooseBox"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:["sub","add","i","pro","totalMoney","totalNum"],
    data(){
      return{
        // num:7.2,
        total:0,
        datas:{}
      }
    },
    beforeMount(){
      // this.calctotal()
    },
    created () {
      console.log("pro",this.pro)
  
    },
    methods:{
      go(e){
        // console.log(e.target.checked)
        this.$emit("dm",e.target.checked)
      },
      calctotal(){
        this.total=this.totalMoney
      },
      goback(){
        window.history.back(-1)
      }
    },
    computed: {
      gcolor(){
        return this.$route.query.color
      },
      gsize(){
         return this.$route.query.size
      },
      gnum(){
        return this.$route.query.num
      },
      gprice(){
        return this.$route.query.price
      }
    }
  }

</script>

<style scoped>

</style>
