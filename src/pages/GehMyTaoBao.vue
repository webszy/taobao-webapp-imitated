<template>
<transition 
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
  >
  <div class="app">
    <tb-my-tb-cup :num="favnum"></tb-my-tb-cup>
    <tb-my-tb-footer></tb-my-tb-footer>
  </div>
</transition>
</template>

<script type="text/ecmascript-6">
  import TbMyTbCup from "../components/gehmytaobao/TbMyTbCup"
  import TbMyTbFooter from "../components/gehmytaobao/TbMyTbFooter"
  import '../../static/css/mytaobao.css'
    export default {
      components:{
        TbMyTbCup,
        TbMyTbFooter
      },
      data(){
        return{
          favnum:0
        }
      },
      created () {
        this.getFavNum();
      },
      methods: {
        getFavNum(){
          fetch('http://140.143.100.57:3008/user/getfav').then(res=>{
            res.json().then(data=>{
              this.favnum=data.length
            })
          })
        }
      }
    }
</script>

<style scoped>
</style>
