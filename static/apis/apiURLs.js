//省市联动接口，无传入参数
 const getCityName='http://140.143.100.57:3008/city'
//电影列表，无传入参数
 const getMovieList='http://140.143.100.57:3008/movies/list'
//电影详细信息，须传入电影id
 const getMovieDetails='http://140.143.100.57:3008/movies/detail'
//获取全部商品，无传入参数
 const getAllGoods='http://140.143.100.57:3008/goods/all'
//获取商品详情，须传入商品id
 const getGoodDetail='http://140.143.100.57:3008/goods/'
//获取商品分页列表，须传入pages(页数)，num(每页多少条数据)
//http://140.143.100.57:3008/goods/page/pages/num
 const getGoodPage='http://140.143.100.57:3008/goods/page/'

// 添加到收藏夹，须传入商品id
 const addFavorites= 'http://140.143.100.57:3008/user/addfav/'
// 获取收藏夹
 const getFavorites='http://140.143.100.57:3008/user/getfav'
// 判断收藏夹是否收藏过该商品，须传入商品id
//code=000表示未收藏，code=222表示已收藏
 const IsFavorite= 'http://140.143.100.57:3008/user/getfav/'
//删除收藏夹内商品,须传入商品id
const delFavorite='http://140.143.100.57:3008/user/delfav/'

//获取全部订单
 const GetOrder='http://140.143.100.57:3008/user/getord'
 //通过订单编号获取订单数据，须传入oid
 const GetOrderByoid='http://140.143.100.57:3008/user/getordbyoid/'
//创建订单
//http://140.143.100.57:3008/user/addorder?&gid=XX&newoid=XX&color=XX&size=XX&num=XX
const addOrder='http://140.143.100.57:3008/user/addorder'
//获取购物车内全部商品
 const GetCart='http://140.143.100.57:3008/user/getcart'
 //查询购物车是否存在该商品，须传入商品id,返回code=000时表示没有，code=222表示存在
 const GetCartbyID='http://140.143.100.57:3008/user/getcart/'
 //修改购物车内商品数量
//须传入商品id和新水量
//例如http://140.143.100.57:3008/user/updatecart/商品id/数量
 const updateCartNum='http://140.143.100.57:3008/user/updatecart/'
 //添加到购物车，需要传入商品id和商品参数对象params通过JSON.Stringify
 //'http://140.143.100.57:3008/user/addcart/gid/JSON.Stringify(params)'
 const addCart='http://140.143.100.57:3008/user/addcart'
 
export default {
  getCityName,
  getMovieList,
  getMovieDetails,
  getAllGoods,
  getGoodDetail,
  getGoodPage,
  addFavorites,
  getFavorites,
  IsFavorite,
  delFavorite,
  GetOrder,
  GetOrderByoid,
  GetCart,
  GetCartbyID,
  updateCartNum,
  addCart,
  addOrder
}