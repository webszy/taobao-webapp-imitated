<template>
  <transition enter-active-class="animated fadeIn" >
  <div class="yyApp">
  <yy-skt-header></yy-skt-header>
  <yy-skt-cup></yy-skt-cup>
  <yy-skt-footer></yy-skt-footer>
  </div>
  </transition>
</template>

<script>
  import YySktHeader from "../components/skt/YySktHeader"
  import YySktCup  from "../components/skt/YySktCup"
  import YySktFooter from "../components/skt/YySktFooter"
  import '../../static/css/youyiku.css'
    export default {
      components:{
        YySktHeader,
        YySktCup,
        YySktFooter
      }
    }
</script>

<style scoped>
  .yyApp{
    height: 100%;
    display: flex;
    flex-direction:column;
  }
</style>
