<template>
  <transition enter-active-class="animated fadeIn" >
     <div class="tpTemplateD">
     <tp-move-header></tp-move-header>
       <tp-move-cup  :list="moves"></tp-move-cup>
       <tp-move-footer></tp-move-footer>
     </div>
  </transition>
</template>

<script type="text/ecmascript-6">

  import TpMoveHeader from "../components/move/TpMoveHeader"
  import TpMoveCup from "../components/move/TpMoveCup"
  import TpMoveFooter from "../components/move/TpMoveFooter"
  import '../../static/css/piaopiao.css'
    export default {
        data(){
          return {
            moves: []
          }
        },
          props:[],
          created(){
            his.$loading.show('加载中'); //显示
            setTimeout(()=>{
            fetch("http://140.143.100.57:3008/movies/list").then(response=>{
              response.json().then(data=>{
                this.moves=data
                this.$loading.hide()
              })
            },1000)
            
      })

            },
      components: {
        TpMoveHeader,
        TpMoveFooter,
        TpMoveCup
     },

      }

</script>

<style scoped>
.tpTemplateD{
  display: -webkit-flex;
  flex-direction: column;
  justify-content:space-between;
  height: 100%;
}
</style>
