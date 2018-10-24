<template>
  <div class="f-Nav">
      <fznav_-bee-carous></fznav_-bee-carous>
      <fznav_-bee-menu-list></fznav_-bee-menu-list>
      <fznav_-special></fznav_-special>
      <fznav_-leaves></fznav_-leaves>
      <fznav_-global :quan="quan"></fznav_-global>
      <fznav_-rily :travel="travel"></fznav_-rily>
      <fznav_-footer></fznav_-footer>
  </div>
</template>

<script>

    import Fznav_BeeCarous from "./fznav_BeeCarous";
    import Fznav_BeeMenuList from "./fznav_BeeMenuList";
    import Fznav_Global from "./fznav_Global";
    import Fznav_Leaves from "./fznav_Leaves";
    import Fznav_Special from "./fznav_Special";
    import Fznav_Rily from "./fznav_Rily";
    import Fznav_Footer from "./fznav_Footer";

    export default {
      name: "feizhunav",
      props:["travel","quan"],
      components: {
        Fznav_Footer,
        Fznav_Rily,
        Fznav_Special,
        Fznav_Leaves,
        Fznav_Global,
        Fznav_BeeMenuList,
        Fznav_BeeCarous
      }
    }
</script>

<style scoped>

</style>
