<template>
  <aside class="tpAside">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="z of lbt" ><img :src="z"/></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </aside>
</template>
<script type="text/ecmascript-6">
  import Swiper from "../../../static/js/swiper.min.js"
  import {lbt} from "../../../static/js/lbt"
  // import "../../assets/css/swiper.min.css";
    export default {
      component:{},
      data(){
        return {
          lbt
        }
      },
      mounted(){
       var mySwiper =new Swiper('.tpAside .swiper-container', {
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            dynamicMainBullets: 2
          }
        })
        // console.log(lbt)
      }
    }
</script>

<style scoped>
  .swiper-wrapper img{
    display: block;
    height:100%;
    width:100%;
  }
/*@import "../../assets/css/swiper.min.css";*/
</style>
