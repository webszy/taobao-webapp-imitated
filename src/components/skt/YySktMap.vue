<template>
  <nav class="yyNav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../../static/images/cheng/yy9.jpg"></div>
        <div class="swiper-slide"><img src="../../../static/images/cheng/yy10.jpg"></div>
        <div class="swiper-slide"><img src="../../../static/images/cheng/yy11.jpg"></div>
        <div class="swiper-slide"><img src="../../../static/images/cheng/yy12.jpg"></div>
        <div class="swiper-slide"><img src="../../../static/images/cheng/yy13.gif"></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </nav>
</template>

<script>
  import  Swiper1 from "../../../static/js/swiper.min.js";
    export default {
    mounted() {
      var Swiper = new Swiper1('.swiper-container', {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 2
        },
      });
    }
    }
</script>

<style scoped>

</style>
