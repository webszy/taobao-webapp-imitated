<template>
  <header class="GehGoShopheader">
    <div class="GehHeaderTitle">
      <h3>购物车</h3>
      <p>共{{num}}件宝贝</p>
    </div>
    <p>管理</p>
  </header>
</template>

<script>
    export default {
      props:["list","num"],
      created() {
        console.log(this.num)
      },
    }
</script>

<style scoped>

</style>
