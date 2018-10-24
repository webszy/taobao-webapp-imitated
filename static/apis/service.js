import {SHOPCARTSAJAXURL} from "../configs/configs"

export default class serviceapi {
  /**
   * 根据用户编号获取carts信息
   * @param cb
   */
  static getShopCartsByUserId(cb){
    fetch(SHOPCARTSAJAXURL).then((res)=>{
      res.json().then((data)=>{
        // console.log(data);
        cb(data)
      })
    })
  }
}

