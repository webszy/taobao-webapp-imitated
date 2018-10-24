<template>
  <div class="hello">
    <div  class="a" v-for="a in [1,2,3]" :key="a"> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello{
  width:100%;
  height:100%;
}
.a{
  width: 100%;
  height: 50px;
  background-color: red;
  display: block;
  margin-bottom: 10px;
}
</style>
