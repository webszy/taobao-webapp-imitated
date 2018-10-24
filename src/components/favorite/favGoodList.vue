<template>
  <router-link :to="{path:'/goodInfo',query:{gid:item.gid}}" tag="li">
      <img :src="item.defaultImg">
      <div>
        <p>{{item.title}}</p>
        <p>{{item.collectcount}}人收藏</p>
        <p>￥<span>{{item.price}}</span></p>
        <p>找相似</p>
      </div>
    </router-link>

</template>

<script>
export default {
  name: 'favGoodList',
  props:["item"],

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
