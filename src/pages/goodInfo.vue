<template>
<transition 
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
  >
  <div>
    <good-info-wrap :datas="gooddatas"></good-info-wrap>
    <good-info-foot :datas="gooddatas" :infav="hasfav" @favActs="_favacts"></good-info-foot>
  </div>
</transition>
</template>

<script>
import goodInfoWrap from '../components/goodInfo/goodInfoWrap'
import goodInfoFoot from '../components/goodInfo/goodInfoFoot'
import goodInfoChoose from '../components/goodInfo/goodInfoChoose'
import urls from "../../static/apis/apiURLs.js"
import "../../static/scss/goodInfo.scss"

export default {
  name: 'goodInfo',
  components: {
    goodInfoWrap,goodInfoFoot  
  },
  data:function(){
   return{
      gooddatas:{},
      hasfav:false,
      gid:this.$route.query.gid
   } 
  },
  created() {
      this.$loading.show('加载中'); //显示
        setTimeout(()=>{
          this._getData();
          this.$loading.hide()
        },1000)
    
    this._isfav();
  },
  methods: {
    _getData:function(){//获取商品数据
      if(this.gid!=''&&this.gid!=undefined){
          fetch(urls.getGoodDetail+this.gid).then((res)=>{
              res.json().then((data)=>{
                  this.gooddatas=data[0]
                  console.log("gooddatas",this.gooddatas)
                  
              })
          })
      }else{
        fetch(urls.getGoodDetail+"572175546620").then((res)=>{
            res.json().then((data)=>{
              this.gooddatas=data[0]
            })
        })
      }
      
    },
    _isfav:function(){//判断是否已收藏,222是已收藏
      fetch(urls.IsFavorite+this.gid).then(res=>{
        res.json().then(data=>{
          // console.log("isfav",data)
          this.hasfav= data.code=='222'
        })
      })
    },
    _favacts:function(addFav){//添加或取消收藏，传入true时收藏，false取消收藏
      // console.log(addFav)
      let options = {
                position: 'bottom',
                duration: '1500'
                }
      if(addFav){
        fetch(urls.addFavorites+this.gid).then(res=>{
          res.json().then(data=>{
              console.log(data)
              if(data.code=='000'){
                this.hasfav=true
                this.$toast('添加收藏成功', options)

              }
          })
        })
      }else{
        fetch(urls.delFavorite+this.gid).then(res=>{
          res.json().then(data=>{
            // console.log(data)
           if(data.code=='000'){
                this.hasfav=false
                this.$toast('取消收藏成功', options)
              }
          })
        })
      }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
