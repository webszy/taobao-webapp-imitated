<template>
 <footer>
      <div class="left">
        <router-link to="/skt" tag="p">
          <i class="iconfont icon-dianpu "></i>
          店铺
        </router-link>
        <p>
          <i class="iconfont icon-kefu"></i>
          客服
        </p>
        <p>
          <i @click="shouchang()" class="iconfont icon-shoucang1" :style="favFontColor"></i>
          收藏
        </p>
      </div>
      <div class="buybutton">
        <p @click="useract('cart')">加入购物车</p>
        <p  @click="useract('buy')">立即购买</p>
      </div>
      <transition     
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown"
      >
        <good-info-choose v-if="isShwo" :item="froChoose" @closeit="IsClose" ></good-info-choose>
      </transition>
    </footer>
</template>

<script>

import goodInfoChoose from './goodInfoChoose'
export default {
  name: 'goodInfoFoot',
  props: ["datas","infav"],
  data(){
    return {
      isShwo:false,
      "act":''
    }
  },
  components: {
    goodInfoChoose
  },
  updated() {
    // console.log("isShwo",this.isShwo)
    // console.log("datas",this.datas.skuOptions)
  },
  computed: {
    froChoose(){
      let sku=this.datas.skuOptions
      let colors=[],sizes=[]
      for(let val of sku){
        let color=this.splitNaN(val.keyValues[0].value)
        let size=val.keyValues[1].value
        if(!colors.includes(color)){
          colors.push(color)
        }
        if(!sizes.includes(size)){
          sizes.push(size)
        } 
      }
      return {
        "defaultImg":this.datas.imageUrls,
        "sku":this.datas.skuOptions,
        "price":this.datas.price,
        "colors":colors,
        "sizes":sizes,
        "gid":this.datas.id,
        "useract":this.act
      }
    },
    favFontColor(){
      if(this.infav){
        return "color:#ff5000;"
      }
    }

  },
  methods: {
    IsClose:function(val){
      this.isShwo=val
    },
    splitNaN:function(val){
      let reg=/[0-9]|\s/g
      return val.replace(reg,'')
    },
    useract:function(name){
      this.isShwo=!this.isShwo
      this.act=name
    },
    shouchang:function(){
      this.$emit("favActs",!this.infav)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
