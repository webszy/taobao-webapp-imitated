<template>
  <section class="tpSection">
    <ul>

      <tp-move-list  :key="product.id" :data="product" v-for=" product in list.subjects"></tp-move-list>

    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  import TpMoveList from "./TpMoveList"
    export default {
        props:["list"],
        components:{
        TpMoveList
      }
    }
</script>

<style scoped>

</style>
