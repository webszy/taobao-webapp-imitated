<template>
  <div class="wrap">
    <good-info-head></good-info-head>
    <good-info-gellay :imgs="datas.imageUrls"></good-info-gellay>
    <good-info-title :title="fortitle"></good-info-title>
    <good-info-parames></good-info-parames>
    <good-info-seller></good-info-seller>
    <good-info-imgs :imgsrc="datas.detailImageUrls"></good-info-imgs>
  </div>
</template>

<script>
import goodInfoHead from './goodInfoHead'
import goodInfoGellay from './goodInfoGellay'
import goodInfoTitle from './goodInfoTitle'
import goodInfoParames from './goodInfoParames'
import goodInfoSeller from './goodInfoSeller'
import goodInfoImgs from './goodInfoImgs'

export default {
  name: 'index',
  components: {
    goodInfoHead,goodInfoGellay,
    goodInfoTitle,goodInfoParames,
    goodInfoSeller,goodInfoImgs
  },
  props: ["datas"],
  computed: {
    fortitle:function(){
      return {
        title:this.datas.title,
        price:this.datas.price,
        salecount:this.datas.saleCount,
        chandi:this.datas.storehouse
      }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
