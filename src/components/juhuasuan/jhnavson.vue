<template>
    <li @click="rander">
  <!--<li>-->
      <img class="jh-Nav-Uls-pic" :src="p.imgsrc">
      <span class="jh-Nav-Uls-span">{{ p.title }}</span>
      <span class="jh-Nav-Uls-span1">新品精选</span>
      <span class="jh-Nav-Uls-span2">满减</span>
      <span class="jh-Nav-Uls-span3">￥{{ p.price }}</span>
      <div class="jh-Nav-UlsBox">
        <span class="jh-Nav-UlsBox-spa1"><b class="jh-Nav-UlsBox-b">￥</b>{{ p.price }}</span>
        <span class="jh-Nav-UlsBox-spa2">{{p.salecount}}件已售</span>
      </div>
    </li>
</template>

<script>

    export default {
        name: "jhnavson",
        props:['p','id'],
        created(){
          var s=this.p;
          // console.log(s.id);
        },
        methods:{
          rander(){
            this.$router.push({
              "path":"/goodinfo",
              "query":{gid:this.id}
            })
          }
        }

    }

</script>

<style scoped>

</style>
