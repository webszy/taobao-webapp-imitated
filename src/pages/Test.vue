<template>
  <div class="seco">
    <seHeader></seHeader>
    <seNav :add="add" :sub="sub" :pro="pro" :totalMoney="totalMoney" @dm="addNum" :totalNum="totalNum" ></seNav>
    <seFooter :totalMoney="totalMoney" :send="_sendData"></seFooter>
  </div>
</template>
  <script>
  import serviceapi from "../../static/apis/service"
  import apis from "../../static/apis/apiURLs.js"
  import seHeader from "../components/second/seHeader"
  import seFooter from "../components/second/seFooter"
  import seNav from "../components/second/seNav"
  import rec from '../../static/recivers.json'
    export default {
        components:{ seHeader,seFooter,seNav},
        data(){
          return {
            pro:{},
            totalPrice:0,
            totalMoney:0,
            totalNum:0,
            isaddnum:false,
            newoid:''
          }
        },
      created(){
          this.init();
          // this.calc();
          this.getordid();
      },
      methods: {
        init() {
          let q=this.$route.query
          if(q.oid!=undefined){
            fetch(apis.GetOrderByoid+q.oid).then((res)=>{
              res.json().then((data)=>{
                //console.log("001",data);
                //console.log(data.defaultImg);
                this.pro = data;
                this.calc();
              })
            }) 
          }else{
            fetch(apis.getGoodDetail+q.gid).then(res=>{
              res.json().then(data=>{
                let detail=data[0]
                this.pro.gid=q.gid
                this.pro.sellername=detail.sellerScreenName
                this.pro.defaultImg=detail.imageUrls[0]
                this.pro.title=detail.title
                this.pro.recive=rec[parseInt(Math.random()*rec.length)]
                this.pro.params={
                  color:q.color,
                  size:q.size,
                  num:q.num,
                  price:q.price
                }
                this.totalMoney=parseInt(this.pro.params.num)*parseFloat(this.pro.params.price)
                this.totalNum=q.num
                // this.calc();
                
              })
            })
          }
        },
        _sendData(){
          console.log(this.pro,this.totalNum,this.totalMoney,this.newoid)
          //组装数据
            this.$loading.show('正在提交订单'); //显示
            setTimeout(()=>{
              let q=this.$route.query
              let query=`?gid=${this.pro.gid}&newoid=${this.newoid}&color=${q.color}&size=${q.size}&num=${this.totalNum}`
              fetch(apis.addOrder+query).then(res=>{
                  res.json().then(data=>{
                    if(data.code=='000'){
                        this.$loading.hide()
                        let options = {
                        position: 'bottom',
                        duration: '1000'
                        }
                      this.$toast('购买成功', options);
                    }
                  })
          })
            },1000)
          

        },
        getordid(){
          fetch(apis.GetOrder).then(res=>{
            res.json().then(data=>{
              let maxoid=parseInt(data[data.length-1].oid)
              for(let k of data){
                if (parseInt(k.oid)>maxoid){
                  maxoid=parseInt(k.oid)
                }
              }
              maxoid++
              if(maxoid<10){
                this.newoid='00'+maxoid
              }else if(maxoid<=99){
                this.newoid='0'+maxoid
              }else{
                this.newoid=''+maxoid
              }
              console.log(this.newoid)
            })
          })
        },
        add(i) {
          let num= this.isaddnum?7.2:0
          this.totalNum++        
          this.totalMoney = this.totalNum * parseFloat(this.pro.params.price)+num;
        },
        sub(i) {
          let num= this.isaddnum?7.2:0
          if (this.totalNum <= 1) {
            this.totalNum = 1;
            this.totalMoney = this.totalNum * parseFloat(this.pro.params.price) + num;
          } else {
            this.totalNum--;
            this.totalMoney = this.totalNum * parseFloat(this.pro.params.price) + num;
          }
        },
        calc() {
          if (this.pro.totalmoney != parseInt(this.totalNum) * parseInt(this.pro.params.price)) {
            this.totalMoney = parseInt(this.totalNum) * parseInt(this.pro.param.price)
          } else {
            this.totalMoney = this.pro.totalmoney
          }
        },
        addNum(isadd){
          this.isaddnum=isadd;
          if(isadd){
            this.totalMoney+=7.2
          }else{
            this.totalMoney-=7.2
          }
        }
      }
  }
</script>

<style scoped>
  .seco{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
