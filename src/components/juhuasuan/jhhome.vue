<template>
  <div class="jh-Header">
    <p class="jh-HeaderJh">聚划算</p>

    <ul class="jh-Header-Uls">
      <li>鞋包饰品</li>
      <li>女装</li>
      <li>母婴童装</li>
      <li>男装</li>
      <li>食品生鲜</li>
      <li>手机数码</li>

    </ul>

    <div class="jh-HeaderPic" @click="show()">
      <img src="../../../static/images/malong/jh-jt.png" alt="">
    </div>

    <!--蒙版效果-->
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="jh-meng" v-show="flage">
        <ul class="meng-uls">
          <li>鞋包饰品</li>
          <li>女装</li>
          <li>母婴童装</li>
          <li>男装</li>
          <li>家装家纺</li>
          <li>食品生鲜</li>
          <li>手机数码</li>
          <li>百货</li>
          <li>内衣</li>
          <li>运动户外</li>
          <li>美妆</li>
        </ul>
        <i class="meng-i">x</i>
      </div>
    </transition>

  </div>


</template>

<script>

    export default {
      name: "jhhome",
      data() {
        return {
          flage: false
        }
      },
      methods: {
        show(){
          this.flage = !this.flage
        }
      }
    }
</script>

<style scoped>

  /*.fade-leave-active{*/
    /*transition:all 3s;*/
    /*transform:translateY(0px);*/
  /*}*/
  /*.fade-enter, .fade-leave-to{*/
    /*transform:translateY(100px);*/
  /*transform:translateX(-200px);*/
    /*opacity:0;*/
  /*}*/

</style>
