<template>

  <!--全球第一站-->
  <div class="f-Global">
    <i class="f-Global_i"></i>
    <div class="f-Leaves-left">
      <img class="f-Leaves-left-top1" src="../../../static/images/malong/f-qaub.png" alt="">
      <p class="f-Leaves-left-tp">更多</p>
    </div>
    <div class="f-GlobalTui">
      <div class="f-GlobalTuiBa">
        <p>推荐</p>
        <span>初到马尔代夫，享浪漫海边假期</span>
        <small></small>
        <em>18人说好</em>
      </div>
      <img class="f-GlobalTuiPic" src="../../../static/images/malong/f-tras.jpg" alt="">
    </div>
    <div class="f-GlobalGjia">

      <fznav_global_jia v-for="t in quan" :t="t" :key='t'></fznav_global_jia>


    </div>
    <i class="f-Global_i"></i>
  </div>

</template>

<script>

  import fznav_global_jia from "./fznav_Global_jia"

    export default {
        name: "fznav_Global",
        components:{
          fznav_global_jia
        },
      props:["quan"]



    }
</script>

<style scoped>

</style>
