<template>
<header class="sMainHead">
    <div class="left">
      <p class="iconfont icon-saoyisao"></p>
      <h3>扫一扫</h3>
    </div>
    <div class="mid">
        <span class="iconfont icon-sousuo "></span>
        <input type="text"  id="search" value="欢迎搜索宝贝" @click.prevent ="golist"> 
        <span class="iconfont icon-xiangji"></span>
    </div>
    <div class="right">
        <p class="iconfont icon-erweima"></p>
        <h3>会员码</h3>
    </div>
</header>
</template>

<script>
export default {
  name: 'indexHeader',
  methods:{
      golist:function(){
          this.$router.push({path:"/list"})
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
