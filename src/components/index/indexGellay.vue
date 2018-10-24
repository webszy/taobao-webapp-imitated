<template>
  <section class="sMainGellay">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../../static/images/index/lunbo1.jpg" ></div>
        <div class="swiper-slide"><img src="../../../static/images/index/lunbo2.jpg" ></div>
        <div class="swiper-slide"><img src="../../../static/images/index/lunbo3.jpg" ></div>
        <div class="swiper-slide"><img src="../../../static/images/index/lunbo4.jpg" ></div>
        <div class="swiper-slide"><img src="../../../static/images/index/lunbo5.jpg" ></div>
        <div class="swiper-slide"><img src="../../../static/images/index/lunbo6.jpg" ></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
    <div class="layer"></div>
  </section>
</template>

<script>
import Swiper from '../../../static/js/swiper.min.js'

export default {
  name: 'indexGellay',
  mounted() {
    this._IntiSwper();
  }, 
  methods: {
    _IntiSwper:function(){
      var swiper = new Swiper('.sMainGellay .swiper-container', {
        pagination: {
          el: '.sMainGellay .swiper-pagination',
              type: 'bullets',
        },
        autoplay:true,
        speed:800,
        loop:true,
        observe:true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
