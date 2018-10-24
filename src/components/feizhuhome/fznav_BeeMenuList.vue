<template>
  <!--旅行头条选项-->


   <div class="f-BeeMenuList">
     <img class="f-beeimg" src="../../../static/images/malong/fbee.gif">
    <!--泰国一日游-->
    <ul class="f-BeeMenuListUls">

      <li class="f-BeeMenuListUls-lis" @click="go">
        <img class="f-BeeMenuListUls-pic" src="../../../static/images/malong/f-pic1(1).png">
        <a class="f-BeeMenuListUls-a" href="#">机票</a>
      </li>

      <li class="f-BeeMenuListUls-lis">
        <img class="f-BeeMenuListUls-pic" src="../../../static/images/malong/f-pic1(2).png">
        <a class="f-BeeMenuListUls-a" href="#">周边游</a>
      </li>
      <li class="f-BeeMenuListUls-lis">
        <img class="f-BeeMenuListUls-pic" src="../../../static/images/malong/f-pic1(10).png">
        <a class="f-BeeMenuListUls-a" href="#">酒店客栈</a>
      </li>
      <li class="f-BeeMenuListUls-lis">
        <img class="f-BeeMenuListUls-pic" src="../../../static/images/malong/f-pic1(9).png">
        <a class="f-BeeMenuListUls-a" href="#">用车</a>
      </li>
      <li class="f-BeeMenuListUls-lis">
        <img class="f-BeeMenuListUls-pic" src="../../../static/images/malong/f-pic1(5).png">
        <a class="f-BeeMenuListUls-a" href="#">旅游线路</a>
      </li>
      <li class="f-BeeMenuListUls-lis">
        <img class="f-BeeMenuListUls-pic" src="../../../static/images/malong/f-pic1(6).png">
        <a class="f-BeeMenuListUls-a" href="#">买火车票</a>
      </li>
      <li class="f-BeeMenuListUls-lis">
        <img class="f-BeeMenuListUls-pic" src="../../../static/images/malong/f-pic1(7).png">
        <a class="f-BeeMenuListUls-a" href="#">领里程</a>
      </li>
      <li class="f-BeeMenuListUls-lis">
        <img class="f-BeeMenuListUls-pic" src="../../../static/images/malong/f-pic1(8).png">
        <a class="f-BeeMenuListUls-a" href="#">汽车票</a>
      </li>
      <li class="f-BeeMenuListUls-lis f-BeeMenuListUls-lisa">
        <img class="f-BeeMenuListUls-pic" src="../../../static/images/malong/f-pic1(4).png">
        <a class="f-BeeMenuListUls-a" href="#">门票</a>
        <span class="f-BeeMenuListUls-span">限时抢购</span>
      </li>
      <li class="f-BeeMenuListUls-lis">
        <img class="f-BeeMenuListUls-pic" src="../../../static/images/malong/f-pic1(3).png">
        <a class="f-BeeMenuListUls-a" href="#">全部</a>
      </li>
    </ul>
    <!--旅行头条-->
    <div class="f-BeeTravel">
      <img class="f-BeeTravelPic" src="../../../static/images/malong/f-tra.png" alt="">
      <div class="f-SwipreBox">
        <div class="swiper-container">
          <div class="swiper-wrapper">
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
                <img class="f-SwipreBoxPic" src="../../../static/images/malong/f-tra1.jpg">
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
                <img class="f-SwipreBoxPic" src="../../../static/images/malong/f-tra2.jpg">
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
                <img class="f-SwipreBoxPic" src="../../../static/images/malong/f-tra3.jpg">
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
  // import "../../../node_modules/swiper/dist/css/swiper.css"
  // import '../../../node_modules/swiper/dist/js/swiper.js'


  export default {
        name: "fznav_BeeMenuList",
        mounted(){
          /* eslint-disable no-new */
          new Swiper('.f-SwipreBox .swiper-container', {
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
    methods:{
          go(){
            this.$router.push("/flypigTick")
          }
      }
    }
</script>

<style scoped>
  .f-beeimg{
    width:100%;
    height:1.5rem;
  }
</style>
