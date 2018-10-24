<template>
<transition 
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
  >
  <div class="app">
    <tb-mess-cup></tb-mess-cup>
    <tb-my-tb-footer></tb-my-tb-footer>
  </div>
</transition>
</template>

<script>
  import TbMessCup from "../components/gehmessage/TbMessCup"
  import TbMyTbFooter from "../components/gehmytaobao/TbMyTbFooter"
  import '../../static/css/messages.css'
    export default {
    components:{
      TbMessCup,
      TbMyTbFooter
    },
        name: "GehMessage"
    }
</script>

<style scoped>
</style>
