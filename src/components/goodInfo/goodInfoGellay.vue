<template>
    <section class="sgiImgs">
       <div class="swiper-container" style="z-index:0;">
          <div class="swiper-wrapper" >
            <div class="swiper-slide" v-for="s of imgs" :key='s'><img :src="s"></div>
        </div>
    <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    </section>
</template>

<script>
import Swiper from '../../../static/js/swiper.min.js'

export default {
  name: 'goodInfoGellay',
  props:["imgs"],
  mounted() {
    this._IntiSwper()
  },
  methods: {
    _IntiSwper:function(){
      var swiper = new Swiper('.sgiImgs .swiper-container', {
        pagination: {
          el: '.sgiImgs .swiper-pagination',
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        speed:1000,
        loop:true   
      })
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
