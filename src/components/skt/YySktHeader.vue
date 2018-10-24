<template>
  <header class="yyHeader">
    <div class="yyHeaderDiv1"><h3>优衣库官方旗舰店</h3> <span class="yyHeaderSpan1">关注</span> <span class="yyHeaderSpan2"><span class="yyHeaderSpan201" @click="skt">···</span>
            <img class="yyHeaderImg0"  src="../../../static/images/cheng/yy8.png" > 
            <router-link class="yyHeaderSpan202" to="/" tag="span">×</router-link>
            </span>
            </div>
    <div class="yyHeaderDiv2">
      <transition enter-active-class="animated zoomInUp"  leave-active-class="animated zoomOutLeft" >
        <yy-skt-header-a  v-if="isfa" ></yy-skt-header-a>
      </transition>
      <img class="yyHeaderImg1" src="../../../static/images/cheng/yy2.gif">
      <img class="yyHeaderImg2" src="../../../static/images/cheng/yy3.gif">
      <span class="yyHeaderSpan3">粉丝数1453万</span>
    </div>
    <div class="yyHeaderDiv3">
      <span class="yyHeaderSpan4 yyHeaderSpan5"> <img class="yyHeaderDiv3Img" src="../../../static/images/cheng/yy7.png"/><span class="yyHeaderSpan6">搜索</span></span>
      <span class="yyHeaderSpan4">首页</span>
      <span class="yyHeaderSpan4">宝贝</span>
      <span class="yyHeaderSpan4">新品</span>
      <span class="yyHeaderSpan4">活动</span>
      <span class="yyHeaderSpan4">视频</span>
    </div>
    <div class="yyHeaderDiv3">
      <img class="yyHeaderImg3" src="../../../static/images/cheng/yy4.gif">
      <img class="yyHeaderImg3" src="../../../static/images/cheng/yy5.gif">
    </div>
  </header>
</template>

<script>

      import YySktHeaderA from "./YySktHeaderA"
      export default {
        data(){
          return{
            isfa: false
          }
        },
        methods:{
          skt(){
            return this.isfa=!this.isfa
          }
        },
        components:{ YySktHeaderA}
      }

</script>

<style scoped>

</style>
