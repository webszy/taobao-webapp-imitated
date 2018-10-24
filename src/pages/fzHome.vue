<template>
<transition 
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
  >
    <div class="fzhome">
      <Fzhea></Fzhea>
      <fznav :travel="travel" :quan="quan"></fznav>
      <Fzboot></Fzboot>
    </div>
</transition>
</template>

<script>
    import Fzboot from "../components/feizhuhome/fz_footer";
    import Fzhea from "../components/feizhuhome/fz_hea";
    import Fznav from "../components/feizhuhome/fz_nav";
  import '../../static/css/bee-home.css'
    export default {
      name: "fzHome",
      components: {Fzboot, Fzhea, Fznav},
      data() {
        return {
          travel:[],
          quan:[]
        }
      },
      created() {
        this.init()
      },
      methods: {
        init() {
          fetch("static/jhsJson/jdjs.json").then((res) => {
            res.json().then((data) => {
              this.travel=data.s;
              this.quan=data.t;
              //console.log(this.travel);
            })
          })
        }
      }
    }
</script>

<style scoped>

</style>
