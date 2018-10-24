<template>
  <div class="tpCup">
  <tp-move-nav></tp-move-nav>
  <tp-move-aside></tp-move-aside>
  <tp-move-add :list="list"></tp-move-add>
  </div>
</template>

<script type="text/ecmascript-6">
  import TpMoveNav from "./TPMoveNav"
  import TpMoveAside from "./TpMoveAside"
  import TpMoveAdd from "./TpMoveAdd"
    export default {
      props:["list"],
      components :{
        TpMoveNav,
        TpMoveAside,
        TpMoveAdd
      },

    }
</script>

<style scoped>
  .tpCup{
    flex: 1;
    overflow-y:auto;
  }
</style>
