<template>
  <div class="GehSectionModules" >
    <div class="GehSectionStoreName">
      <h5><router-link to="/skt">{{list1.sellername}} </router-link></h5>
    </div>
    <div class="GehSectionProduct">
      <div class="GehSectionCheck" @click="checked(idx,$event)" style="background-color: transparent">✔</div>
      <div class="GehSectionProductLi">
        <a href="javascript:;" >
          <span @click="go"><img :src="list1.defaultImg"></span>
          <ul class="GehSectionProductLiUls">
            <li><h6>{{list1.title}}</h6></li>
            <li>{{list1.params.size,list1.params.color}}</li>
            <li>
              <p>￥<span class="aPrice">{{list1.params.price}}</span></p>
              <div>
                <span @click="minues(idx)">-</span>
                <span><input type="number" v-model="list1.num" ></span>
                <span @click="adds(idx)">+</span>
              </div>
            </li>
          </ul>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          isB:false,
          ischeck:[]
        }
      },
      methods: {
        go(){
          this.$router.push({
            path:'/goodinfo',
            query:{
              gid:this.list1.gid
            }
          })
        },
        
        // check() {
        //   let check = document.querySelectorAll(".GehSectionCheck")
        //   for (let i = 0; i < check.length; i++) {
        //     check[i].onclick = function () {
        //       if (this.style.background == "") {
        //         this.style.background = "#ff5400"
        //         this.style.borderColor = "#ff5400"
        //         this.isB = true
        //       } else {
        //         this.style.background = ""
        //         this.style.borderColor = "#c6c6c6"
        //         this.isB = false
        //       }
        //       // console.log("isB",this.isB)
        //     }
        //   }
        // },
        // save(index){
        //   if(this.isB = true){
        //
        //   }else{
        //
        //   }
        // },
        checked(i,e){
          // console.log(i,e)
          if (e.target.style.backgroundColor== "transparent") {
            e.target.style.backgroundColor = "#ff5400"
            e.target.style.borderColor = "#ff5400"
            this.isB = true
            let price=$(e.target).siblings().find(".aPrice").html()
            console.log(price)
            this.ischeck[i]=parseFloat(price)
          } else {
            e.target.style.backgroundColor = "transparent"
            e.target.style.borderColor = "#c6c6c6"
            this.isB = false
            this.ischeck[i]=0
          }
          this.$emit("sb",this.isB);
          // console.log(this.isB)
        },
        // money(){
        //   let lis=document.querySelectorAll(".GehSectionProduct")
        //   for(let i=0;i<this.list1.length;i++){
        //     if(this.isB == true){
        //       this.totalMoney += this.list1[i].params.price
        //       console.log("this.totalMoney",this.totalMoney)
        //     }
        //   }
        // }
      },
      // computed:{
      //   Money:function(){
      //       for(let i=0;i<this.list1.length;i++){
      //         var item = this.list1[i]
      //         if(this.isB == true){
      //             this.totalMoney += item.params.price
      //       }
      //       // for(let i of ){
      //       //   this.arr.push(this.list1.params.price)=
      //       // }
      //     }
      //     console.log("this.totalMoney",this.totalMoney)
      //   }
      // },
        name: "TbGoShopCartProduct",
        props: ["list1", "idx", "num", "adds", "minues"],
        created() {
          // this.check()
          // console.log(list1.num);
            if(this.ischeck.length>0){
              this.ischeck=[]
            }
            //将this.list1.length  用jquery dom循环
            for(let i=0;i<this.list1.length;i++){
              this.ischeck.push(0)
              console.log(this.ischeck)
            }
          },
        mounted() {
          // this.Money()
          // this.save()
          // this.check()
          // this.save()
          // this.c()
        },
      }

</script>

<style scoped>

</style>
