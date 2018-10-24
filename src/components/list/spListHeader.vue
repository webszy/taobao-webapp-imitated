<template>
  <header class="xqHeader">
   <router-link :to="{path:'/',}" tag="div"><img class="xqHeaderImg1" src="../../../static/images/cheng/taopiao1.gif"></router-link>
    <div class="xqHeaderDiv1"><input class="xqHeaderInput1" type="text" value="优衣库"/><img class="xqHeaderImg3" src="../../../static/images/cheng/xiangqing1.gif"></div>
    <div @click="start"><span class="xqHeaderSpan1">2</span><img class="xqHeaderImg2" src="../../../static/images/cheng/taopiao3.gif"></div>
    <transition enter-active-class="animated zoomInUp"  leave-active-class="animated zoomOutLeft" >
      <sp-list-header-a  v-if="a" ></sp-list-header-a>
    </transition>
</header>
</template>

<script>
  import  SpListHeaderA from "./spListHeaderA"
    export default {
      components: {SpListHeaderA},
      data(){
        return{
          a:false
        }
      },
      methods:{
        start(){
         return  this.a=!this.a;
        }
      }
    }
</script>

<style scoped>

</style>
