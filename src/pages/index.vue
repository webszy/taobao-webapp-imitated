<template>
<transition 
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
  >
<div id="index">
  <index-header></index-header>
  <index-wrap></index-wrap>
  <index-foot></index-foot>
</div>
</transition>
</template>

<script>
import "../../static/scss/index.scss"
import indexHeader from "../components/index/indexHeader"
import indexWrap from "../components/index/indexWrap"
import indexFoot from "../components/gehmytaobao/TbMyTbFooter"

export default {
  name: 'index',
  components: {
    indexHeader,indexWrap,indexFoot
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#index{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
