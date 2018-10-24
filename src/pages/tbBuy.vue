<template>
  <div id="app">
    <x-header></x-header>
    <x-nav></x-nav>
    <x-footer></x-footer>
  </div>
</template>
<script>
    import XHeader from "../components/third/xHeader";
    import XNav from "../components/third/xNav";
    import XFooter from "../components/third/xFooter";
    export default {
        name: "tbBuy",
        components: {XFooter, XNav, XHeader},
    }
</script>

<style scoped>
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
