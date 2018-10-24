var express = require('express');
var router = express.Router();
var https =require("https")
var cityName=require("../json/CityName.json")
var porductActs=require("../common/ProductActions")
var UserActions=require("../common/UserActions")
var rec=require('../json/recivers.json')
var path=require('path')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '仅供后台访问' });
})
router.get('/test', function(req, res, next) {
    // res.header("Content-Type", "text/html;charset=utf-8");  
    res.sendFile(path.resolve(__dirname,'../','public/index.html'))
})
router.get('/test', function(req, res, next) {
    let obj=porductActs.transferData(goods);
    res.json(obj)
  })
/**商品接口 */
router.get('/goods/all', function(req, res, next) {
    porductActs.getAll().then(function(t){
        res.json(t)
    })
})
router.get('/goods/:id', function(req, res, next) {
    let gid=req.params.id;
    porductActs.getbyID(gid).then(function(t){
        res.json(t)
    })
})
router.get('/goods/page/:pages/:num', function(req, res, next) {
    let num=parseInt(req.params.num)
    ,pages=parseInt(req.params.pages)
    porductActs.getpage(pages,num).then(function(t){
        res.json(t)
    })
    // res.send(req.params)
})
router.get('/gid', function(req, res, next) {
    porductActs.getAllid().then(function(t){
        res.json(t)
    })
})
router.get('/gid/:pages', function(req, res, next) {
    let pages=req.params.pages
    porductActs.getOneId(pages).then(function(t){
        res.json(t)
    })
})
/**收藏夹接口 */
router.get('/user/getfav', function(req, res, next) {
    UserActions.getFavorite().then(function(t){
        res.json(t)
    })
})
router.get('/user/getfav/:id', function(req, res, next) {
    let id=req.params.id
    UserActions.getFavoritebyID(id).then(function(t){
        res.json(t)
    })
})
router.get('/user/addfav/:id', function(req, res, next) {
    let id=req.params.id
    porductActs.getbyID(id).then(function(t){
       let obj=t[0]

       let r=UserActions.transferFavData(obj)
       UserActions.insertFavorite(r).then(function(end){
        res.json(end)  
       })
       
    })
})
router.get('/user/delfav/:id', function(req, res, next) {
    let id=req.params.id
    UserActions.delFavorite(id).then(function(t){
        res.json(t)
    })
   
})
/**订单接口 */
router.get('/user/getord', function(req, res, next) {
    UserActions.getOrder().then(function(t){
        for(let item of t){
            let str=new String(item.title)
            item.title=str.substring(0,12)
        }
        res.json(t)
    })
})
router.get('/user/getordbyoid/:id', function(req, res, next) {
    let id=req.params.id
    UserActions.getOrderByoid(id).then(function(t){
        for(let item of t){
            let str=new String(item.title)
            item.title=str.substring(0,12)
        }
        res.json(t[0])
    })
})
router.get('/user/addorder', function(req, res, next) {
    let gid=req.query.gid,
        newoid=req.query.newoid,
        color=req.query.color,
        size=req.query.size,
        num=parseInt(req.query.num)
        
    
    porductActs.getbyID(gid).then(function(t){
        let obj=t[0]
        let r={}
        r.gid=gid
        r.oid=newoid
        r.warranties=obj.warranties
        r.sellername=obj.sellerScreenName
        r.recive=rec[parseInt(Math.random()*rec.length)]
        r.defaultImg=obj.skuOptions[0].imageUrls[0]
        r.title=obj.title
        r.subtitle=obj.subtitle
        r.num=num
        r.params={
          "color":color,
          "size":size,
          "price":obj.price,
          "num":num
        }
        UserActions.insertOrder(r)
        res.json({
            "code":"000",
            "msg":"成功"
        })
     })

})
/**购物车接口 */
router.get('/user/getcart', function(req, res, next) {
    UserActions.getCart().then(function(t){
        res.json(t)
    })
})
router.get('/user/getcart/:id', function(req, res, next) {
    let id=req.params.id
    UserActions.getCartByID(id).then(function(t){
        res.json(t)
    })
})
router.get('/user/updatecart/:id/:num', function(req, res, next) {
    let id=req.params.id, num=req.params.num
    UserActions.updateCartNum(id,num).then(function(t){
        res.json(t)
    })
})
router.get('/user/addcart', function(req, res, next) {
    let gid=req.query.gid,
        color=req.query.color,
        size=req.query.size,
        num=parseInt(req.query.num)
        
    
    porductActs.getbyID(gid).then(function(t){
        let obj=t[0]
        let r={}
        r.gid=gid
        r.cid=''
        r.sellername=obj.sellerScreenName
        r.defaultImg=obj.skuOptions[0].imageUrls[0]
        r.title=obj.title
        r.subtitle=obj.subtitle
        r.num=num
        r.params={
          "color":color,
          "size":size,
          "price":obj.price,
        }
        UserActions.insertCart(r)
        res.json({
            "code":"000",
            "msg":"成功"
        })
     })

})
/**电影接口 */
router.get('/movies/list', function(req, res, next) {
  let url = "https://api.douban.com/v2/movie/in_theaters"
    https.get(url,(response)=>{
        let datas= ""

        response.on("data",(chunck)=>{
            datas+=chunck
        })

        response.on("end",()=>{
            res.json(JSON.parse(datas))
        })
    })
})
router.get("/movies/detail/:id",(req,response)=>{
  let url = `https://api.douban.com/v2/movie/subject/${req.params.id}`
  https.get(url,(res)=>{
      let datas= ""
      res.on("data",(chunck)=>{
          datas+=chunck
      })

      res.on("end",()=>{
          response.json(JSON.parse(datas))
      })
  })
})
/**省市区联动 */
router.get('/city', function(req, res, next) {
    res.json(cityName)
});

module.exports = router;
