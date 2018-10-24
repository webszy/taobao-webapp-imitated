<template>
    <div v-show="sid==1" class="xqDiv2">
      <span s="1" @click="slick2" :class="[say==1?'yy':'']">综合</span>
      <span s="2" @click="slick2" :class="[say==2?'yy':'']">销量</span>
      <img  s="3" @click="slick2" :class="[say==4?'yy':'']" src="../../../static/images/cheng/xiangqing2.gif">
      <span s="4" class="xqDiv2Span1"></span>
      <span s="5" @click="slick2" :class="[say==5?'yy':'']">筛选</span>
    </div>
</template>

<script>
    export default {
        name: "",
      props:["sid","say"],

      methods:{
          slick2(event){
            this.say=event.target.getAttribute("s")
            this.$emit("cdd3",this.say)
        }
      }
    }
</script>

<style scoped>

</style>
