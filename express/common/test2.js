const goodActs=require("./ProductActions")
const UserActions=require("./UserActions")
const ord=require("../json/test-order.json")
const fav=require("../json/test-favorites.json")
const recivers=require("../json/recivers.json")

const mongoose=require("./connectMongoDB")
let  Schema = mongoose.Schema
let CartSchema = new Schema({
  gid:{type:String},
  defaultImg:{type:String},
  sellername:{type:String},
  title:{type:String},
  subtitle:{type:String},
  params:Schema.Types.Mixed
})
let CartModel = mongoose.model('carts',CartSchema)
// let aModel=mongoose.model("gids",a)
// 随机gid,生成购物车、订单、收藏夹数据
/* 
function getgid(){
  let num=parseInt(Math.random()*111-1)
  let gid=''
  goodActs.getAllid().then(function(t){
    let obj=t[num]
    goodActs.getbyID(obj.gid).then(function(t){
      let obj=t[0]
      let r=UserActions.transferFavData(obj);
      console.log(r)
      UserActions.insertFavorite(r)
    })
  })
}
for(let i=0;i<10;i++){
  getgid()
}
*/


