<template>
  <section class="sfavGoods">
    <ul class="sfavGoodList" v-for="item of list" :key="item.gid">
     <fav-good-list :item="item"></fav-good-list>
    </ul>
  </section>
</template>

<script>
import favGoodList from './favGoodList'

export default {
  name: 'favGoods',
  components: {
    favGoodList
  },
  props: ["list"]
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
