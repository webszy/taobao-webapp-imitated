<template>
<div class="textGellay">
  <div class="f-BeeTravel">
      <img class="f-BeeTravelPic" src="../../../static/images/index/hotTitle.webp" alt="">
      <div class="f-SwipreBox">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="f-SwipreBox-Carous">
                <div class="f-SwipreBoxCarousa_x">
                  <div class="f-SwipreBoxCarousa">
                    <span class="f-SwipreBox-CarousaB">美搭</span>
                    <span class="f-SwipreBox-CarousSpan">
                                                    今年“闺蜜袜”火了，快悄悄给闺蜜买双！
                                                </span>
                  </div>
                  <div class="f-SwipreBoxCarousa">
                    <span class="f-SwipreBox-CarousaB">旅行</span>
                    <span class="f-SwipreBox-CarousSpan">
                                                    实拍泰国"租妻"文化 价格公道提供发票
                                                </span>
                  </div>
                </div>
                <img class="f-SwipreBoxPic" src="../../../static/images/index/text1.jpg">
              </div>
            </div>

            <div class="swiper-slide">
              <div class="f-SwipreBox-Carous">
                <div class="f-SwipreBoxCarousa_x">
                  <div class="f-SwipreBoxCarousa">
                    <span class="f-SwipreBox-CarousaB">最新</span>
                    <span class="f-SwipreBox-CarousSpan">
                                                    【早报】小米MIX3将配10G内存
                                                </span>
                  </div>
                  <div class="f-SwipreBoxCarousa">
                    <span class="f-SwipreBox-CarousaB">旅行</span>
                    <span class="f-SwipreBox-CarousSpan">
                                                    在日本爆红的“假中国菜”，你吃过吗？
                                                </span>
                  </div>
                </div>
                <img class="f-SwipreBoxPic" src="../../../static/images/index/text2.jpg">
              </div>
            </div>
            <div class="swiper-slide">
              <div class="f-SwipreBox-Carous">
                <div class="f-SwipreBoxCarousa_x">
                  <div class="f-SwipreBoxCarousa">
                    <span class="f-SwipreBox-CarousaB">热门</span>
                    <span class="f-SwipreBox-CarousSpan">
                                                    俄罗斯世界杯观赛游 为阿根廷呐喊
                                                </span>
                  </div>
                  <div class="f-SwipreBoxCarousa">
                    <span class="f-SwipreBox-CarousaB">围观</span>
                    <span class="f-SwipreBox-CarousSpan">
                                                    变身“寿司之神”，带娃吃遍日本的网红寿司
                                                </span>
                  </div>
                </div>
                <img class="f-SwipreBoxPic" src="../../../static/images/index/text3.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../../../static/js/swiper.min.js'
export default {
  name: 'indexTextGellay',
  mounted() {
    new Swiper('.textGellay .swiper-container', {
            pagination: {
              el: '.swiper-pagination'
            },
            loop : true,
            direction: 'vertical',
            autoplay : {
              delay:1500
            },
            speed:1500,
          });
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
