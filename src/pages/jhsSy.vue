<template>

<transition 
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
  >
  <keep-alive>
  <div class="box">
    <jhhome></jhhome>
    <jhnav :shoop="shooplist"></jhnav>
  </div>
  </keep-alive>
</transition>

</template>

<script>
    import Jhhome from "../components/juhuasuan/jhhome"
    import Jhnav from "../components/juhuasuan/jhnav"
    import '../../static/css/Jh-Kesalan.css'

    export default {
      name: "jhsSy",
      components: {Jhnav, Jhhome},
      data(){
        return {
          shooplist:[],
        }
      },
      created(){
        this.$loading.show('加载中'); //显示
        setTimeout(()=>{
          this.init()
          this.$loading.hide()
        },1000)
        
      },
      methods:{
        init(){
          fetch("http://140.143.100.57:3008/goods/page/1/20").then((res)=>{
            //console.log(tbJSON);
            res.json().then((data) => {
              // console.log(data);
               for (var i = 0; i < data.length; i++) {
                 this.shooplist.push({
                   "price": data[i].price,
                   "salecount": data[i].saleCount,
                   "imgsrc":data[i].imageUrls[0],
                   "title":data[i].title,
                    "id":data[i].id
                 })
               }

            })
          })
        }
      }












    }
</script>

<style scoped>
</style>
