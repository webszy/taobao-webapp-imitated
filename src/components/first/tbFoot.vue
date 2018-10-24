<template>
  <div class="xjpSection">
    <tb-list-ul :totalNum="totalNum" :totalPrice="totalPrice" :list="list"></tb-list-ul>
  </div>
</template>

<script>
  import TbListUl from "./tbListUl";
  export default {
    components: {TbListUl},
    props:["totalNum","totalPrice","list"]
  }
</script>

<style scoped>

</style>
