<template>
  <div class="f-GlobalGuo">
    <div class="f-GlobalGuoPi">
      <img class="f-GlobalGuoPic1" :src="t.imgs" alt="">
      <span class="f-GlobalGuoSpa">{{t.label}}</span>
    </div>
    <span class="f-GlobalGuoSpsa">{{t.one}}</span>
  </div>
</template>

<script>
    export default {
        name: "fznav_Global_jia",
        props:["t"]
    }
</script>

<style scoped>

</style>
