const mongoose=require("./connectMongoDB")
let  Schema = mongoose.Schema

let ProductDetailSchema = new Schema({
  "sellerId":{type:String},
  "id":{type:String},
  "url":{type:String},
  "brandName":{type:String},
  "promotions":[String],
  "favoriteCount":{type:Number},
  "userId":{type:String},
  "monthSaleCount":{type:Number},
  "userScreenName":{type:String},
  "skuOptions":Schema.Types.Mixed,
  "keyValues":Schema.Types.Mixed,
  "servRating":{type:Number},
  "descRating":{type:Number},
  "logiRating":{type:Number},
  "rating":{type:Number},
  "price":{type:Number},
  "title":{type:String},
  "detailImageUrls":[],
  "commentCount":{type:Number},
  "warranties":[],
  "storehouse":{type:String},
  "imageUrls":[],
  "saleCount":{type:Number},
  "sellerScreenName":{type:String},
  "subtitle":{type:String},
  "openDate":{type:String}
})
let GIDSchema = new Schema({
  gid:{type:String}
})
let PAModel = mongoose.model("goods",ProductDetailSchema)
let GIDModel= mongoose.model("gids",GIDSchema)
module.exports={
  getAll:  function(){
    return new Promise((reslove,reject)=>{
      PAModel.find({},(err,results)=>{
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
  getbyID:function(idVal){
    return new Promise((reslove,reject)=>{
      PAModel.find({"id":idVal},(err,results)=>{
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
  getpage:function(pages,num){
    pages=pages-1<=0?0:pages-1;
    return new Promise((reslove,reject)=>{
      PAModel.find({}).skip(pages*num).limit(num).exec((err,results)=>{
          reslove && reslove(results)
      })
    })
  },
  insertGood:function(data){
    let newGood=new PAModel(data);
    newGood.save((error,res)=>{
      // console.log(error)
      // console.log(res)
    })
  },
  transferData:function(s){
    let val=s['data'][0];
    let obj={};
      for (var item in val) {
          if (val[item] != null) {
              obj[item] = val[item];
          }
      }
      return obj;
  },PAModel,GIDModel,
  getAllid:  function(){
    return new Promise((reslove,reject)=>{
      GIDModel.find({},(err,results)=>{
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
  getOneId:function(pages){
    return new Promise((reslove,reject)=>{
      GIDModel.find({}).skip(pages).limit(1).exec((err,results)=>{
          reslove && reslove(results)
      })
    })
  }
}

