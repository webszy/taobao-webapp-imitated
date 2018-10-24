<template>
  <div class="GehCup">
    <tb-my-tb-header :favnum="num"></tb-my-tb-header>
    <tb-my-tb-center></tb-my-tb-center>
  </div>
</template>

<script type="text/ecmascript-6">
  import TbMyTbHeader from "./TbMyTbHeader"
  import TbMyTbCenter from "./TbMyTbCenter"
    export default {
      components:{
        TbMyTbHeader,
        TbMyTbCenter
      },
      props: ["num"]
    }
</script>

<style scoped>

</style>
