const good=require("../json/product_taobao_simple.json")
const shop=require("../json/shop.json")
const axios=require('axios')
const process=require('process')
const url='https://api02.idataapi.cn/product/taobao?apikey=6USzDCz47nz2th1Z8nHYbE5qL85FWDPseXhPj8q2aMdvIrMpVg6xG5kpUiSprO4J&type=product&id='
const fav=require("../json/test-favorites.json")
const UserActions=require("../common/UserActions")
const GoodActions=require("../common/ProductActions")
const ord=require("../json/test-order.json")
const cart=require("../json/test-cart.json")

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
// for(let v of shop){
//     GoodActions.getbyID(v.id).then(function(t){
//     if(t.error=="404"){
//           axios.get(url+v.id).then(function(t){
//             if(t.data.retcode!="000000"){return}
//             let obj=ProductDetails.transferData(t.data);
//             GoodActions.insertGood(obj)
//           }).catch(function(){})
//     }
//   })
// }
// ProductDetails.getpage(2,10).then(function(t){
//  console.log(t.length) 
// })
// UserActions.insertCart(cart)


