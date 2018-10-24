<template>

  <!--旅行任意门-->
  <div class="f-Rily">
    <div class="f-Leaves-left">
      <img class="f-Leaves-left-top1" src="../../../static/images/malong/f-ren.png" alt="">
      <p class="f-Leaves-left-tp">更多</p>
    </div>
    <ul class="f-RilyUls" :travel="travel">
      <fznav_rily_sun v-for="t in travel" :t="t" :key='t'></fznav_rily_sun>
    </ul>
  </div>

</template>

<script>
    import fznav_rily_sun from "./fznav_Rily_sun"
    export default {
        name: "fznav_Rily",
        components:{
          fznav_rily_sun
        },
      props:["travel"]
    }
</script>

<style scoped>

</style>
