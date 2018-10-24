<template>
    <div class="yyCup">
      <yy-skt-map> </yy-skt-map>
      <yy-skt-section> </yy-skt-section>
      <yy-skt-last> </yy-skt-last>
    </div>
</template>

<script>
  import  YySktMap from "./YySktMap"
  import  YySktSection from "./YySktSection"
  import  YySktLast from "./YySktLast"
    export default {

      components:{
        YySktMap,
        YySktSection,
        YySktLast
      }
    }
</script>

<style scoped>
.yyCup{
 flex: 1;
 overflow-y: auto ;
}
</style>
