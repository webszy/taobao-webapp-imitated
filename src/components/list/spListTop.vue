<template>
  <div class="xqDiv101">
    <span b="0" @click="slick" :class="[sid==0?'xx':'']">全部</span>
    <span b="1" @click="slick" :class="[sid==1?'xx':'']">天猫</span>
    <span b="2" @click="slick" :class="[sid==2?'xx':'']">店铺</span>
    <span b="3" @click="slick" :class="[sid==3?'xx':'']">淘攻略</span>
    <span b="4" @click="slick" :class="[sid==4?'xx':'']">挑尖货</span>
  </div>
</template>

<script>
    export default {
        name: "",
      props:["sid"],
      methods:{
      slick(event){
      this.sid=event.target.getAttribute("b")
      console.log(event.target.getAttribute("b"));
      this.$emit("cdd1", this.sid)
    }
      }
    }
</script>

<style scoped>

</style>
