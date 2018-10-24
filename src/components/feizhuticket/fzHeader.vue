<template>
  <div class="BeeCarous">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../../static/images/malong/f-ticket1.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../../static/images/malong/f-ticket2.jpg" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from '../../../static/js/swiper.min.js'
  // import "../../../node_modules/swiper/dist/css/swiper.css"
  // import '../../../node_modules/swiper/dist/js/swiper.js'

  export default {
    data(){
      return{
        timer: null, //定时器
        mark: 0, //比对图片索引的变量
      }
    },
      mounted(){
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {

          loop : true,
          autoplay : {
            delay:1000
          },
          speed:1000,

        });
      },

  }

</script>

<style scoped>

</style>
