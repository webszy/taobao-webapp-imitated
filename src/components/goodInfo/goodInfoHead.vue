<template>
  <header class="sgiHead">
        <i class="left iconfont icon-zuojiantou1" @click="goback"></i>
        <div class="right">
          <i class="iconfont icon-gouwuche1" @click="gocart"></i>
          <i class="iconfont icon-dian"></i>
        </div>
  </header>
</template>

<script>
export default {
  name: 'goodInfoHead',
  methods:{
    goback:function(){
     window.history.back();

    },
    gocart:function(){
      this.$router.push("/Cart")
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
