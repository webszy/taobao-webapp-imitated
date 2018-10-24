<template>
  <section class="giImgs">
        <img :src="s" v-for=" s of imgsrc" :key="s">
      </section>
</template>

<script>
export default {
  name: 'goodInfoImgs',
  props:["imgsrc"]
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
