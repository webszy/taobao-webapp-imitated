<template>

  <!--轮播图-->
  <div class="f-BeeCarous">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../../static/images/malong/bee1.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/images/malong/bee2.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/images/malong/bee3.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/images/malong/bee4.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/images/malong/bee5.jpg" alt=""></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination" id="swiperPag"></div>
    </div>
  </div>
</template>

<script>

    import Swiper from '../../../static/js/swiper.min.js'
    // import "swiper/dist/css/swiper.css"

    export default {
        name: "fznav_BeeCarous",
        mounted(){
          /* eslint-disable no-new */
          new Swiper('.f-BeeCarous .swiper-container', {
            pagination: {
              el: '.swiper-pagination'
            },
            loop : true,
            autoplay :
              {
              delay:1500
            },
            speed:1500,

          });
        },
    }
</script>

<style scoped>
  #swiperPag{
    position: absolute;
    bottom: -0.15rem;
  }
</style>
