<template>
  <header class="sfavHead">
    <i class="iconfont icon-zuojiantou1" @click="goback"></i>
    <div class="sfavHeadItem">
      <span class="choicedItem">宝贝收藏</span>
      <span>内容收藏</span>
    </div>
    <i class="iconfont icon-sousuo"></i>
    <span class="sfavEdit">管理</span>
  </header>
</template>

<script>
export default {
  name: 'favHeader',
  methods:{
    goback:function(){
      window.history.back()
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
