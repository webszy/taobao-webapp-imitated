<template>
  <section class="GehMessSection">
    <div class="GehSection"></div>
    <ul class="GehMessNav">
      <tb-mess-section-lis></tb-mess-section-lis>
    </ul>
  </section>
</template>

<script>
  import TbMessSectionLis from "./TbMessSectionLis"
    export default {
      components:{
        TbMessSectionLis
      },
        name: "TbMessSection"
    }
</script>

<style scoped>

</style>
