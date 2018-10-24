<template>
  <header class="tpHeader">
    <router-link  to="/"   tag="img" class="tpHeadersImg1" src="../../../static/images/cheng/taopiao1.gif"></router-link>
    <span class="tpHeadersSpan1">淘票票1</span>
    <div>
      <a href="#"><img class="tpHeadersImg2" src="../../../static/images/cheng/taobao6.gif"></a>
      <div class="tpHeadersDiv" >
        <span class="tpHeadersSpan2">8</span>
        <img class="tpHeadersImg3" @click="sta" src="../../../static/images/cheng/taobao7.gif">
      </div>
    </div>
    <transition enter-active-class="animated zoomInUp"  leave-active-class="animated zoomOutLeft" >
      <tp-move-header-a  v-if="isShow" ></tp-move-header-a>
    </transition>
  </header>

</template>

<script type="text/ecmascript-6">
  import TpMoveHeaderA from "./TpMoveHeaderA"
    export default {
      data(){
        return{
          isShow: false
        }
      },
      methods:{
        sta(){
          return this.isShow=!this.isShow
        }
      },
      components:{TpMoveHeaderA}
    }
</script>

<style scoped>

</style>
