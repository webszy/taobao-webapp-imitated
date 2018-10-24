<template>
<section class="choose animated ">
  <i class="close iconfont  icon-guanbi" @click="closeit"></i>
  <div class="cgoodInfo">
    <img :src="item.defaultImg" class="cgoodPic">
    <div class="cgoodPrices">
      <p>￥<span>{{item.price}}</span></p>
      <p>库存 {{item.sku[0].stockSize}} 件</p>
      <p>已选 {{params.size}} ，{{params.color}}</p>
    </div>

  </div>
  <div class="suggest">
    <span>抱歉，当前宝贝暂无尺码推荐</span>
    <i>查看尺码</i>
    </div>
  <div class="colors">
    <h4 class="cgh4">颜色分类</h4>
    <ul class="showChoice">
      <li    @click="isSelected('color',$event)" v-for="color of item.colors" :key="color">{{color}}</li>
    </ul>
  </div>
  <div class="size">
      <h4 class="cgh4">尺寸</h4>
      <ul class="showChoice">
        <li  @click="isSelected('size',$event)" v-for="size of item.sizes" :key="size">{{size}}</li>
      </ul>
    </div>
  <div class="num">
    <h4 class="cgh4">购买数量</h4>
    <div class="qal">
      <button class="one" @click="sub">-</button>
      <input type="text"  v-model="params.num">
      <button @click="add">+</button>
    </div>
  </div>
  <div class="ok">
    <p @click="_sendData(item.useract)">确定</p> 
  </div>
</section>
</template>

<script>
import urls from '../../../static/apis/apiURLs.js'

export default {
  name: 'goodInfoChoose',
  props:["item"],
  data(){
      return {
          show:false,
          params:{
              color:'',
              size:'',
              num:this.item.sku[0].stockSize==0?0:1
          }
      }
  },
  created() {
    //   console.log(this.item)
  },
  methods: {
      closeit:function(){
          this.$emit("closeit",this.show)
      },
      isSelected:function(name,e){
            let lis=e.path[1].children
            for(let li of lis){
                li.className=''
            }
            e.target.className='selected'
          if(name=="color"){
              this.params.color=e.target.innerHTML
          }else{
              this.params.size=e.target.innerHTML
          }
      },
      _sendData:function(act){
          let stock=parseInt(this.item.sku[0].stockSize)
          let options = {
                position: 'bottom',
                duration: '1500'
                }
          if(stock==0){
            this.$toast('库存不足，无法购买', options);
            return
            }
          if(act=="cart"){
            let gid=this.item.gid
            let query=`?gid=${gid}&color=${this.params.color}&size=${this.params.size}&num=${this.params.num}`
            // console.log('http://localhost:3008/user/addcart'+query)
            fetch(apiURLs.addCart+query).then(res=>{
                res.json().then(data=>{
                    console.log(data)
                    this.$toast('已添加至购物车', options);

                })
            })
          }
          if(act=="buy"){
              //跳转到提交订单，并传入商品id和parmas
              this.$router.push(
                {
                    path:"/Test",
                    query:{
                        gid:this.item.gid,
                        color:this.params.color,
                        size:this.params.size,
                        num:this.params.num,
                        price:this.item.price
                    }
                }
              )
          }
      },
      add:function(){
          let stock=parseInt(this.item.sku[0].stockSize)
          if(this.params.num<stock){
              this.params.num++
          }else{
              this.params.num=stock
          }
      },
      sub:function(){
        let stock=parseInt(this.item.sku[0].stockSize)
          if(this.params.num>=2){
              this.params.num--
          }else{
              this.params.num= stock>=1?1:stock
          }
      }
	}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@function pxTorem($px){
    @return $px / 200  * 1rem; 
}
@mixin intiBox($width,$height){
    @if $width == 0 {
        width: 100%;
    }
    @else if $width='auto'{
       
    }@else{
        width: pxTorem($width);
    }
    @if $height == 0{
        height: auto;
    }@else if $height == a{
      height: 100%;
    }@else{
        height: pxTorem($height);
    }
}
@mixin bgColor {
    background-color: white;
}

.choose{
    @include intiBox(0,4.95 * 200);
    @include bgColor();
    border-top-left-radius: pxTorem(30);
    border-top-right-radius: pxTorem(30);
    box-sizing: border-box;
    padding-top: pxTorem(20);
    padding-bottom: pxTorem(15);
    position: absolute;
    left: 0;
    bottom: pxTorem(0.54 * 200); 
    z-index:9999; 
    transition: all 0.6s;
    animation-duration: 0.6s;
    .icon-guanbi{
        font-size: pxTorem(60);
    }
}
.cgoodInfo{
    @include intiBox(0,220);
    margin-bottom: pxTorem(40);
    padding-left: pxTorem(20);
    padding-right: pxTorem(20);
    box-sizing: border-box;
    img{
        float: left;        
        @include intiBox(220,220);
    } 
}
.close{
    display: block;
    @include intiBox(37,37 );
    border-radius: 50%;
    position: absolute;
    right: pxTorem(20);
    top: pxTorem(20);
    
}

.cgoodPrices{
    @include intiBox(auto,111);
    float: left;
    padding-top: pxTorem(100);
    margin-left: pxTorem(23);
    p{
        font-size: pxTorem(26);
        color: #333;
        line-height: pxTorem(26);
    }
    p:first-child{
        font-size: pxTorem(36);
        color: #ff5000; 
        margin-bottom: pxTorem(18);
        span{
            text-indent: pxTorem(10);
        }
    }
    p:nth-child(2){
        margin-bottom:  pxTorem(15);

    }
}
.suggest{
    @include intiBox(0,72);
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-between;
    background-image: url('../../../static/images/goodInfo/rightArrowOrange.jpg');
    background-repeat: no-repeat;
    background-size: .07rem .115rem;
    background-position: 3.545rem center;
    margin-bottom: pxTorem(27);
    span{
        line-height: pxTorem(72);
        font-size: pxTorem(26);
        color: #838383;
        margin-left: pxTorem(20);
    }
    i{
        line-height: pxTorem(72);
        font-size: pxTorem(26);
        color: #ff5c12; 
        margin-right: pxTorem(53);
        font-style: normal;
    } 
}
.colors{
    width: 100%;
    padding-left: pxTorem(20);
    padding-right: pxTorem(20);
    box-sizing: border-box;
    overflow: hidden;

   
}
.cgh4{

        font-size: pxTorem(26);
        font-weight: 100;
        color: #333;
    
}
.showChoice{
    width: 100%;
    // overflow: hidden;
    padding: 0;
    padding-top: pxTorem(28);
    padding-bottom: pxTorem(23);
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li{
        height: pxTorem(56);
        padding-left:pxTorem(15);
        padding-right:pxTorem(15);
        font-size: pxTorem(22);
        border-radius: pxTorem(56 / 2);
        line-height: pxTorem(56);
        text-align: center;
        color: #333;
        margin-right: pxTorem(14);
        margin-bottom: pxTorem(12);
        background: #f5f5f5;
    } 
    .selected{
        background: linear-gradient(to right,#fe9502,#ff5101);
        color: white;
    }
}
.size{
    @extend .colors ;
    padding-top: pxTorem(28);
}
.num{
    padding-top: pxTorem(18);
    padding-left: pxTorem(20);
    padding-right: pxTorem(20);

    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    h4{
        float: left;
        padding-top: pxTorem(10);
    }

}
.qal{
    overflow: hidden;
    float: right;
    button,input{
        display: block;
        @include intiBox(66, 61);
        border:none;
        float: left;
        text-align: center;
        background: #f5f5f5;
        font-size: pxTorem(30);
    }    
    input{
        width: pxTorem(76);
        color:#3d4245;

    }
    button{
        color:#333;
    }
    .one{
        background: #fbfbfb;
    }
}
.ok{
    width: 100%;
    padding-left: pxTorem(30);
    padding-right: pxTorem(30);
    box-sizing:border-box;

    p{
        @include intiBox(0,79);
        font-size: pxTorem(28);
        line-height: pxTorem(79);
        text-align: center;
        color: white;
        border-radius: pxTorem(79 / 2);
        margin:  0 auto;
        background: linear-gradient(to right,#ff7800,#ff4900);
        margin-top: pxTorem(20);

    }
}
</style>
