<template>
  <div v-show="sid==0" class="xqDiv2">
    <span s="1" @click="slick1" :class="[say==1?'yy':'']">综合</span>
    <span s="2" @click="slick1" :class="[say==2?'yy':'']">销量</span>
    <span s="3" @click="slick1" :class="[say==3?'yy':'']">视频</span>
    <img  s="4" @click="slick1" :class="[say==4?'yy':'']" src="../../../static/images/cheng/xiangqing2.gif">
    <span s="5" class="xqDiv2Span1"></span>
    <span s="6" @click="slick1" :class="[say==5?'yy':'']">筛选</span>
  </div>
</template>

<script>
    export default {
        name: "",
      props:["sid","say"],
      methods:{
        slick1(event) {
          this.say=event.target.getAttribute("s");
          console.log(event.target.getAttribute("s"));
          console.log(this.say);
          console.log(this.mag);
          this.$emit("cdd2", this.say)
        }
      }
    }
</script>

<style scoped>

</style>
