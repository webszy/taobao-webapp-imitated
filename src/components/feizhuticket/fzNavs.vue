<template>
  <div class="BeeDan">
    <ol class="BeeDan-Ols">
      <li @click="str=0" :class="{'ols_lis':str==0}">单程</li>
      <li @click="str=1" :class="{'ols_lis':str==1}">往返</li>
      <li @click="str=2" :class="{'ols_lis':str==2}">多程</li>
    </ol>
    <ul class="BeeUls">

      <li class="BeeUls_Lis" v-show="str===0">
        <div class="BeeUls-Box">
          <span class="BeeUls-Boxbei">北京</span>
          <img class="BeeUls-Boxpic" src="../../../static/images/malong/f-tub.png"/>
          <span class="BeeUls-Boxbei BeeUls-Boxhang">杭州</span>
        </div>
        <div class="BeeUls-Boxa" @click="show()">
          <span class="BeeUls-Boxyue">{{dates}}<span class="BeeUls-Ming">{{message}}</span></span>
          <span class="BeeUls-Boxjian"> > </span>
          <input class="inps" type="date" @change="hidd()" v-model="dates" v-show="flags"/>
        </div>
        <div class="BeeUls-Boxa">
          <div class="BeeUls-Boxb">
            <input type="checkbox" class="BeeUls-Boxb-ins">
            <span class="BeeUls-Boxyue">携带儿童<span class="BeeUls-Ming">2-12岁</span></span>
            <span class="BeeUls-Boxjian"></span>
          </div>
          <div class="BeeUls-Boxb">
            <input type="checkbox" class="BeeUls-Boxb-ins">
            <span class="BeeUls-Boxyue">携带婴儿<span class="BeeUls-Ming">14天-2岁</span></span>
            <span class="BeeUls-Boxjian"></span>
          </div>
        </div>
        <span class="BeeUls-Spans">搜索</span>
        <div class="BeeUls-P">
          <div class="BeeUls-Box-p">
            <img src="../../../static/images/malong/f-dow.png">
            <span class="BeeUls-Box-div">特价机票</span>
          </div>
          <div class="BeeUls-Box-right">
            <p>西安-昆明 单程<span class="BeeUls-Box-right-spa">￥185</span>起></p>
          </div>
        </div>
        <img class="BeeUls-Pic" src="../../../static/images/malong/f-dowe.png">
      </li>
      <li v-show="str===1" :style="'display:block'">
        <div class="BeeUls-Box">
          <span class="BeeUls-Boxbei">西安</span>
          <img class="BeeUls-Boxpic" src="../../../static/images/malong/f-tub.png"/>
          <span class="BeeUls-Boxbei BeeUls-Boxhang">青岛</span>
        </div>
        <div class="BeeUls-Boxa" @click="show()">
          <span class="BeeUls-Boxyue">{{dates}}<span class="BeeUls-Ming">{{message}}</span></span>
          <span class="BeeUls-Boxjian"> > </span>
          <input class="inps" type="date" @change="hidd()" v-model="dates" v-show="flags"/>
        </div>
        <div class="BeeUls-Boxa">
          <div class="BeeUls-Boxb">
            <input type="checkbox" class="BeeUls-Boxb-ins">
            <span class="BeeUls-Boxyue">携带儿童<span class="BeeUls-Ming">2-12岁</span></span>
            <span class="BeeUls-Boxjian"></span>
          </div>
          <div class="BeeUls-Boxb">
            <input type="checkbox" class="BeeUls-Boxb-ins">
            <span class="BeeUls-Boxyue">携带婴儿<span class="BeeUls-Ming">14天-2岁</span></span>
            <span class="BeeUls-Boxjian"></span>
          </div>
        </div>
        <span class="BeeUls-Spans">搜索</span>
        <div class="BeeUls-P">
          <div class="BeeUls-Box-p">
            <img src="../../../static/images/malong/f-dow.png" alt="">
            <span class="BeeUls-Box-div">特价机票</span>
          </div>
          <div class="BeeUls-Box-right">
            <p>西安-青岛 往返<span class="BeeUls-Box-right-spa">￥185</span>起></p>
          </div>
        </div>
        <img class="BeeUls-Pic" src="../../../static/images/malong/f-dowe.png" alt="">
      </li>
      <li v-show="str===2" :style="'display:block'">
        <div class="BeeUls-Box">
          <span class="BeeUls-Boxbei">北京</span>
          <img class="BeeUls-Boxpic" src="../../../static/images/malong/f-tub.png"/>
          <span class="BeeUls-Boxbei BeeUls-Boxhang">杭州</span>
        </div>
        <div class="BeeUls-Box">
          <span class="BeeUls-Boxbei">杭州</span>
          <img class="BeeUls-Boxpic" src="../../../static/images/malong/f-tub.png"/>
          <span class="BeeUls-Boxbei BeeUls-Boxhang">上海</span>
        </div>
        <div class="BeeUls-Boxa" @click="show()">
          <span class="BeeUls-Boxyue">{{dates}}<span class="BeeUls-Ming">{{message}}</span></span>
          <span class="BeeUls-Boxjian"> > </span>
          <input class="inpa" type="date" v-model="dates" v-show="flags" @change="hidd()"/>
        </div>
        <div class="BeeUls-Boxa">
          <div class="BeeUls-Boxb">
            <input type="checkbox" class="BeeUls-Boxb-ins">
            <span class="BeeUls-Boxyue">携带儿童<span class="BeeUls-Ming">2-12岁</span></span>
            <span class="BeeUls-Boxjian"></span>
          </div>
          <div class="BeeUls-Boxb">
            <input type="checkbox" class="BeeUls-Boxb-ins">
            <span class="BeeUls-Boxyue">携带婴儿<span class="BeeUls-Ming">14天-2岁</span></span>
            <span class="BeeUls-Boxjian"></span>
          </div>
        </div>
        <span class="BeeUls-Spans">搜索</span>
        <div class="BeeUls-P">
          <div class="BeeUls-Box-p">
            <img src="../../../static/images/malong/f-dow.png" alt="">
            <span class="BeeUls-Box-div">特价机票</span>
          </div>
          <div class="BeeUls-Box-right">
            <p>西安-昆明 多程<span class="BeeUls-Box-right-spa">￥185</span>起></p>
          </div>
        </div>
        <img class="BeeUls-Pic" src="../../../static/images/malong/f-dowe.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          str:0,
          dates:"",
          flags:false,
          message:"今天"
        }
      },
      created(){
        var now=new Date();
        var year = now.getFullYear();
        var month = (now.getMonth()+1);
        var date=now.getDate();
        this.dates=year+"-"+month + "-" + date;
      },
      methods:{
        show(){
          this.flags=true
        },
        hidd(){
          console.log("aaa")
          this.flags=false
        }
      }
    }
</script>

<style scoped>
  .inpa{
    display: block;
    width:90%;
    height:.5rem;
    position: fixed;
    left:0.2rem;
    top:2.7rem;
  }

</style>
