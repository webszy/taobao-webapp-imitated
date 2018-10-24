<template>
<transition 
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
  >
  <div>
    <fav-header></fav-header>
    <fav-want-list></fav-want-list>
    <fav-title></fav-title>
    <fav-goods :list="fav"></fav-goods>
  </div>
</transition>
</template>

<script>
import '../../static/scss/favorites.scss'
import favHeader from '../components/favorite/favHeader'
import favTitle from '../components/favorite/favTitle'
import favWantList from '../components/favorite/favWantList'
import favGoods from '../components/favorite/favGoods'
import urls from '../../static/apis/apiURLs.js'

export default {
  name: 'favorite',
  components:{
    favHeader,favTitle,favWantList,
    favGoods
  },
  data(){
    return{
      fav:[]
    }
  },
  created () {
    this._GetData()
  },
  methods: {
    _GetData:function(){
      this.$loading.show('加载中'); //显示
      setTimeout(()=>{
          fetch(urls.getFavorites).then((res)=>{
          res.json().then((data)=>{
            this.fav=data;
            this.$loading.hide()
                // console.log(this.fav)
          })
        })
      },1000)
      
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
