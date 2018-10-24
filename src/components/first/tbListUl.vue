<template>
  <ul class="shopList">
    <tb-nav-list :totalNum="totalNum" :totalPrice="totalPrice" :pro="pro" :oid="pro.oid" v-for="(pro , i) of list" :key="pro.gid" ></tb-nav-list>
  </ul>
</template>
<script>
  import tbNavList from "./tbNavList"
    export default {
      name: "tbListUl",
      components: {tbNavList},
      props:["totalNum","totalPrice","list"],

    }
</script>

<style scoped>

</style>
