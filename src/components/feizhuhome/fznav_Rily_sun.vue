<template>
  <li class="f-RilyUlsLis">
    <img class="f-RilyUlsPic" :src="t.img">
    <h6 class="h6">{{t.title}}</h6>
    <span class="f-RilyUlsSpa">{{t.explain}}</span>
    </li>
    </template>

                              <script>
    export default {
      name: "fznav_Special_list",
      props:["t"]
    }
</script>

<style scoped>
  .f-RilyUlsLis{
    margin-top:0.1rem;
  }
  .f-RilyUlsLis img{
    width:98%;
    height:2rem;
  }
</style>
