<template>
  <div class="xqDiv1" id="xqDiv1">
  <sp-list-top :sid="sid" ></sp-list-top>
  <sp-list-name :sid="sid" :say="say"></sp-list-name>
  <sp-list-nav></sp-list-nav>
  <sp-list-shu></sp-list-shu>
  <sp-list-tm :sid="sid" :say="say"></sp-list-tm>
   </div>
</template>

<script>
  import SpListTop from  "./spListTop"
  import SpListName from "./spListName"
  import SpListNav from  "./spListNav"
  import SpListShu from "./spListShu"
  import SpListTm from  "./spListTm"
    export default {
    props:["sid","say"],
    components: {
      SpListTop,
      SpListName,
      SpListNav,
      SpListShu,
      SpListTm
    }
    }
</script>

<style scoped>
.xqDiv1{
  flex: 1;
  overflow-y: auto;
}
</style>
