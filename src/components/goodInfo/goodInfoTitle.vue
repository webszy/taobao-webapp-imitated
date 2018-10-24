<template>
   <div>
        <section class="sgiPrices">
          <div class="left">
            <p class="nowPrice">￥<span> {{title.price}}</span></p>
            <p class="soldcount">
              <span>￥{{title.price + 44}}</span>
              <span>{{title.salecount}}件已售</span>
            </p>
          </div>
          <div class="right">
            <p>距离结束还有</p>
            <div class="timeBox">
              <i id="hour">12</i>:<i id="minute">12</i>:<i id="second">12</i>.<i id="ms">12</i>
            </div>
          </div>
        </section>
        <section class="sgiTitle"> 
          <span class="giIcon">天猫</span>
          <p>{{title.title}}</p>
        </section>
        <section class="giTitAdd">
          <p>快递包邮</p>
          <p>月销量{{title.salecount}}件</p>
          <p>{{title.chandi}}</p>
        </section>
      </div>
</template>

<script>
export default {
  name: 'goodInfoTitle',
  props: ["title"],
  mounted () {
    this._timeon();
  },
  methods:{
    _timeon:function(){
      let hour=document.getElementById("hour");
      let minute=document.getElementById("minute");
      let second=document.getElementById("second");
      let ms=document.getElementById("ms");
     var Timer=setInterval(function(){
         var msVal=parseInt(ms.innerHTML);
          msVal--;
          ms.innerHTML=msVal;
          if(msVal<=0){
            ms.innerHTML='100';
            var secondVal=parseInt(second.innerHTML);
            secondVal--;
            second.innerHTML=secondVal;
            if(secondVal<=0){
              second.innerHTML='59'
              var minuteVal=parseInt(minute.innerHTML);
              minuteVal--;
              minute.innerHTML=minuteVal;
              if(minuteVal<=0){
                minute.innerHTML='59'
                var hourVal=parseInt(hour.innerHTML);
                hourVal--;
                hour.innerHTML=hourVal;
                if(hourVal<=0){
                  clearInterval(Timer);
                  ms.innerHTML="0";
                  second.innerHTML="0";
                  minute.innerHTML="0";
                  hour.innerHTML="0";
                }
              }
            }
          }
      },10)
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
