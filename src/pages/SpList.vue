<template>
  <transition enter-active-class="animated fadeIn" >
  <div class="spLIist">
<sp-list-header></sp-list-header>
    <div class="spCup">
    <div class="xqDiv1" id="xqDi  v1">
      <sp-list-top :sid="sid" @cdd1="pss1"></sp-list-top>
      <sp-list-name :sid="sid" :say="say" @cdd2="pss2"></sp-list-name>
      <sp-list-nav :sid="sid" :say="say" :list="list"></sp-list-nav>
      <sp-list-shu :sid="sid" :say="say" :list2="list2"></sp-list-shu>
    </div>
    <div v-show="sid==1" class="xqTm">
      <sp-list-tm-top :sid="sid" :say="say" @cdd3="pss3"></sp-list-tm-top>
      <sp-list-tm-top-l :sid="sid" :say="say" :list1="list1"></sp-list-tm-top-l>
    </div>
    </div>
    <span class="spMapA" @click="goTop"><img class="spImgMap" src="../../static/images/cheng/top.gif"></span>
  </div>
    </transition>
</template>
<script type="text/ecmascript-6">
  import  SpListHeader from  "../components/list/spListHeader"
  import SpListTop from  "./../components/list/spListTop"
  import SpListName from "./../components/list/spListName"
  import SpListNav from  "./../components/list/spListNav"
  import SpListShu from "./../components/list/spListShu"
  import SpListTmTop from "./../components/list/spListTmTop"
  import SpListTmTopL from  "./../components/list/spListTmTopL"
  import apis from '../../static/apis/apiURLs.js'
  import '../../static/css/xiangqing.css'
    export default {
      data() {
        return {
            sid:0,
            say:1,
            list:[],
          list1:[],
          list2:[]
        }
        },
      created(){
        fetch(apis.getGoodPage+"1/20").then(response=> {
            response.json().then(data=>{
              this.list=data
            })
        }),
        fetch(apis.getGoodPage+"2/20").then(response=> {
          response.json().then(data1=>{
            this.list1=data1
            console.log(this.list1)
          })
        }),
          fetch(apis.getGoodPage+"3/20").then(response=> {
            response.json().then(data2=>{
              this.list2=data2
              console.log(this.list1)
            })
          })

      },
      methods:{
        goTop(){
          console.log(1)
         let timer1=setInterval(()=>{
             let top=document.querySelectorAll(".spCup")[0].scrollTop;
             console.log(top)
            top=top-10;
            if(top<=0){
                clearInterval(timer1)
            }
            document.querySelectorAll(".spCup")[0].scrollTop =top;
          },1);
        },
        pss1(pay){
          this.sid= pay
        },
        pss2(pay2){
          this.say=pay2
          console.log(this.say)
        },
        pss3(pay3){
          this.say=pay3
        }
      },

      components:{
        SpListHeader,
        SpListTop,
        SpListName,
        SpListNav,
        SpListShu,
        SpListTmTop,
        SpListTmTopL
      }
    }
</script>

<style scoped>
  .spMapA{
    display: block;
    border: 1px solid #cccccc;
    border-radius: 50%;
    width: 0.3rem;
    position: fixed;
    z-index: 1001;
    bottom:0.4rem;
    right: 0.2rem;
    height: 0.3rem;
  }
  .spImgMap{
    display: block;
    height:0.23rem;
    width:0.21rem;
    position: fixed;
    z-index: 1001;
    bottom:0.43rem;
    right: 0.25rem;
  }

  .spCup{
    flex:1;
    overflow-y:auto;
  }
  .spLIist{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
