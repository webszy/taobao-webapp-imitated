<template>
    <div v-show="sid==1" class="xqTm">
        <sp-list-tm-top :sid="sid" :say="say" ></sp-list-tm-top>
        <sp-list-tm-top-l :sid="sid" :say="say"></sp-list-tm-top-l>
    </div>
</template>

<script>
  import SpListTmTop from "./spListTmTop"
  import SpListTmTopL from  "./spListTmTopL"
    export default {
    props:["sid","say"],
        components:{
          SpListTmTop,
          SpListTmTopL
        },

    }
</script>

<style scoped>

</style>
