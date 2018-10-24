const mongoose=require("./connectMongoDB")
const recivers=require("../json/recivers.json")
let  Schema = mongoose.Schema
const table=["favorites","orders","carts"]
//收藏夹模型
let favoriteSchema = new Schema({
  gid:{type:String},
  defaultImg:{type:String},
  sellername:{type:String},
  title:{type:String},
  subtitle:{type:String},
  collectcount:{type:Number},
  saleCount:{type:Number},
  price:{type:Number}
})
//订单模型
let OrderSchema = new Schema({
  gid:{type:String},
  recive:Schema.Types.Mixed,
  defaultImg:{type:String},
  sellername:{type:String},
  title:{type:String},
  subtitle:{type:String},
  params:Schema.Types.Mixed,
  totalnum:{type:Number},
  totalmoney:{type:Number},
  warranties:[]

})
//购物车模型
let CartSchema = new Schema({
  gid:{type:String},
  defaultImg:{type:String},
  sellername:{type:String},
  title:{type:String},
  subtitle:{type:String},
  params:Schema.Types.Mixed
})
let FavModel = mongoose.model(table[0],favoriteSchema)
let OrderModel = mongoose.model(table[1],OrderSchema)
let CartModel = mongoose.model(table[2],CartSchema)

module.exports={
  insertFavorite:function(data){
    return new Promise((reslove,reject)=>{
      let newFavorite=new FavModel(data);
      newFavorite.save((error,res)=>{
        if(error!=null){
          reslove && reslove({
            "code":"111",
            "msg":"添加失败"
          })
        }else{
          reslove && reslove({
            "code":"000",
            "msg":"添加成功"
          })
        }
      })
    })
     
  },
  insertOrder:function(data){
    let newFavorite=new OrderModel(data);
    newFavorite.save((error,res)=>{
      console.log(error)
      // console.log(res)
    })
  },
  insertCart:function(data){
    let newFavorite=new CartModel(data);
    newFavorite.save((error,res)=>{
      console.log(error)
      // console.log(res)
    })
  },
  getFavorite: function(){
    return new Promise((reslove,reject)=>{
      FavModel.find({},(err,results)=>{
          if(results.length>0){
            reslove&& reslove(results)
          }else{
            reslove&& reslove({
              "error":"404",
              "msg":"Not Found"
            }) 
          }
          })
      })
  },
  getFavoritebyID: function(idval){
    return new Promise((reslove,reject)=>{
      FavModel.find({"gid":idval},(err,results)=>{
          if(results.length>0){
            reslove&& reslove({
              "code":"222",
              "msg":"该商品已收藏"
            })
          }else{
            reslove&& reslove({
              "code":"000",
              "msg":"该商品可以收藏"
            }) 
          }
          })
      })
  },
  delFavorite:function(idval){
    return new Promise((reslove,reject)=>{
      FavModel.remove({"gid":idval},(err,results)=>{
          if(err==null){
            reslove&& reslove({
              "code":"000",
              "msg":"取消收藏成功"
            }) 
          }else{
            reslove&& reslove({
              "code":"404",
              "msg":"Not Found"
            }) 
          }
          })
      })
  },
  getCart: function(){
    return new Promise((reslove,reject)=>{
      CartModel.find({},(err,results)=>{
          if(results.length>0){
            reslove&& reslove(results)
          }else{
            reslove&& reslove({
              "error":"404",
              "msg":"Not Found"
            }) 
          }
          })
      })
  },
  getCartByID:function(idval){
    return new Promise((reslove,reject)=>{
      CartModel.find({"gid":idval},(err,results)=>{
          if(results.length>0){
            reslove&& reslove({
              "code":"222",
              "msg":"该商品已在购物车内"
            })
          }else{
            reslove&& reslove({
              "code":"000",
              "msg":"该商品可以添加至购物车"
            }) 
          }
          })
      })
  },
  updateCartNum:function(idval,newNum){
    return new Promise((reslove,reject)=>{
      CartModel.updateOne({gid:idval},{$set:{num:newNum}},(err,results)=>{
          if(parseInt(results.nModified)>0){
            reslove&& reslove({
              "code":"000",
              "msg":"修改成功"
            })
          }else{
            reslove&& reslove({
              "code":"222",
              "msg":"修改失败"
            }) 
          }
          })
      })
  },
  getOrder: function(){
    return new Promise((reslove,reject)=>{
      OrderModel.find({},(err,results)=>{
          if(results.length>0){
            reslove&& reslove(results)
          }else{
            reslove&& reslove({
              "error":"404",
              "msg":"Not Found"
            }) 
          }
          })
      })
  },
  getOrderByoid: function(val){
    return new Promise((reslove,reject)=>{
      OrderModel.find({oid:val},(err,results)=>{
          if(results.length>0){
            reslove&& reslove(results)
          }else{
            reslove&& reslove({
              "error":"404",
              "msg":"Not Found"
            }) 
          }
          })
      })
  },
  transferFavData:function(obj){
    let r={}
    r.gid=obj.id
    r.sellername=obj.sellerScreenName
    r.defaultImg=obj.imageUrls[0]
    r.title=obj.title
    r.subtitle=obj.subtitle
    r.collectcount=obj.favoriteCount
    r.saleCount=obj.saleCount
    r.price=obj.price
    return r
  },
  transferOrderData:function(obj){
    let r={}
    let num=parseInt(recivers.length*Math.random())
    console.log(recivers.length)
    let num2=parseInt(obj.skuOptions.length*Math.random())
    r.gid=obj.id
    r.recive=recivers[num]
    r.sellername=obj.sellerScreenName
    r.defaultImg=obj.skuOptions[num2].imageUrls[0]
    r.title=obj.title.substring(0,12)
    r.subtitle=obj.subtitle
    r.warranties=obj.warranties
    let buynum= num==0?num+1:num;
    r.params={
      "color":obj.skuOptions[num2].keyValues[0].value,
      "size":obj.skuOptions[num2].keyValues[1].value,
      "price":obj.skuOptions[num2].price,
      "num":buynum
    }
    r.totalnum= buynum
    r.totalmoney=buynum*obj.skuOptions[num2].price
    return r
  },
  transferCartData:function(obj){
    let r={}
    console.log(recivers.length)
    let num2=parseInt(obj.skuOptions.length*Math.random())
    r.gid=obj.id
    r.cid=''
    r.sellername=obj.sellerScreenName
    r.defaultImg=obj.skuOptions[num2].imageUrls[0]
    r.title=obj.title
    r.subtitle=obj.subtitle
    let buynum= num==0?num+1:num;
    r.params={
      "color":obj.skuOptions[num2].keyValues[0].value,
      "size":obj.skuOptions[num2].keyValues[1].value,
      "price":obj.skuOptions[num2].price,
      "num":buynum
    }
    r.totalnum= buynum
    r.totalmoney=buynum*obj.skuOptions[num2].price
    return r
  }
}