<template>
  <transition class="ante" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">

  <div class="box">
      <Header></Header>
      <Fznav></Fznav>
      <Bottom></Bottom>
    </div>
  </transition>
</template>

<script>

  import Bottom from '../components/feizhuticket/fzBottom'
  import Fznav from '../components/feizhuticket/fzNavs'
  import Header from '../components/feizhuticket/fzHeader'
  import '../../static/css/bee-ticket.css'

    export default {
      name:"fzSy",
      components:{
        Bottom,
        Header,
        Fznav

      },
    }
</script>

<style scoped>
.box{
  width: 100%;
  height: 100%;
}
.ante{
  animation-duration:5s;
}
</style>

