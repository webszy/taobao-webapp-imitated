<template>
  <ul class="xqHeaderUl">
    <li class="firstLi"></li>
    <li><p><span>消息</span><span class="xqHeaderUlSpan">2</span></p></li>
    <router-link  :to="{path:'/skt',}" tag="li"><p><span>首页</span></p></router-link>
    <li><p><span>客服小秘</span></p></li>
    <router-link  :to="{path:'/movie',}" tag="li"><p><span>想看电影</span></p></router-link>
    <router-link  :to="{path:'/list',}" tag="li"><p><span>商品列表</span></p></router-link>
    <li><p><span>分享</span></p></li>
    <li><p><span>足迹</span></p></li>
  </ul>
</template>

<script>
    export default {
        name: "spListHeaderA"
    }
</script>

<style scoped>
  .xqHeaderUl{
    color: white;
    background:rgba(120,100,100,0.6);
  }
  .firstLi{
    position: fixed;
    left: 3.5rem;
    top:0.2rem;
    z-index: 1000;
    width: 0;
    height: 0;
    border: 0.1rem solid transparent;
    border-bottom-color:white ;

  }
</style>
