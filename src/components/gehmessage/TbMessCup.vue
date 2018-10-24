<template>
    <div class="GehCup">
      <tb-mess-header></tb-mess-header>
      <tb-mess-nav></tb-mess-nav>
      <tb-mess-section></tb-mess-section>
    </div>
</template>

<script>
  import TbMessHeader from "./TbMessHeader"
  import TbMessNav from "./TbMessNav"
  import TbMessSection from "./TbMessSection"
    export default {
    components:{
      TbMessHeader,
      TbMessNav,
      TbMessSection
    },
        name: "TbMessCup"
    }
</script>

<style scoped>

</style>
