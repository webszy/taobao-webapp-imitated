
<template>

  <div class="jh-Nav">
    <!--轮播图-->
    <div class="jh-BeeCarous">
      <div class="swiper-container">
        <div class="swiper-wrapper">
         <!--<div class="swiper-slide" v-for="s of list"><img :src="s">-->
         <div class="swiper-slide"><img src="../../../static/images/malong/bee1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../../static/images/malong/bee2.jpg" alt=""></div>
         <div class="swiper-slide"><img src="../../../static/images/malong/bee3.jpg" alt=""></div>
         <div class="swiper-slide"><img src="../../../static/images/malong/bee4.jpg" alt=""></div>
         <div class="swiper-slide"><img src="../../../static/images/malong/bee5.jpg" alt=""></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="jh-navBox">
      <i></i>
      <h6 class="jh-navBox-h6">热卖推荐</h6>
      <i></i>
    </div>

    <ul class="jh-Nav-Uls" ref="foodwrapper">
     <!--// <ul class="jh-Nav-Uls">-->
      <jhnavson v-for="p of shoop" :p="p" :id="p.id" :key="p.id"></jhnavson>
    </ul>

    <a class="jh-foota" href="#">
      <img src="../../../static/images/malong/jh-peo.png">
    </a>

    <a class="jh-footb" href="#">
      <img src="../../../static/images/malong/jh-jian.png">
    </a>

  </div>
</template>

<script>
  import Swiper from '../../../static/js/swiper.min.js'
  import Jhnavson from "./jhnavson"


  export default {
    name: "jhnav",
    components: {Jhnavson},
    props:['shoop'],
    data(){
      return {
        timer: null, //定时器
        mark: 0, //比对图片索引的变量
        list:[]
      }

    },
    mounted(){
      new Swiper('.jh-BeeCarous .swiper-container', {
         loop : true,
          autoplay:true,
        speed:1500,
         pagination: {
           el: '.swiper-pagination'
         },

      });
    },
  }



</script>



<style scoped>

</style>
