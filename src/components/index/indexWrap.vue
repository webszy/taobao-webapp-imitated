<template>
  <div class="wrap">
    <index-gellay></index-gellay>
    <index-menu></index-menu>
    <index-text-gellay></index-text-gellay>
    <index-plane></index-plane>
    <index-area></index-area>
    <index-area></index-area>

  </div>
</template>

<script>
import indexMenu from '../index/indexMenu'
import indexGellay from '../index/indexGellay'
import indexTextGellay from '../index/indexTextGellay'
import indexPlane from '../index/indexPlane'
import indexArea from '../index/indexArea'

export default {
  name: 'indexWrap',
  components:{
    indexMenu,indexGellay,indexTextGellay,indexPlane,indexArea
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  flex: 1;
}
</style>
