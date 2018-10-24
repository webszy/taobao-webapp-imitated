import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//以下为孙振宇的页面
import index from '../pages/index'
import favorite from '../pages/favorite'
import goodInfo from '../pages/goodInfo'
//以下是马龙的页面
import flypig from '../pages/fzHome.vue'
import flypigTick from '../pages/fztick.vue'
import juhuasuan from '../pages/jhsSy.vue'
//以下是肖洁萍的页面
import tbBuy from '../pages/tbBuy.vue'
import tbZong from '../pages/tbZong.vue'
import Test from '../pages/Test.vue'
//以下是高恩惠的页面
import My from '../pages/GehMyTaoBao.vue'
import Message from '../pages/GehMessage.vue'
import Cart from '../pages/GehGoShopCart.vue'
//以下是程春的页面
import list from '../pages/SpList.vue'
import movie from '../pages/TpMove.vue'
import skt from '../pages/YySkt.vue'

Vue.use(Router)

export default new Router({
  routes: [
    //孙振宇的页面
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: favorite
    },
    {
      path: '/goodinfo',
      name: 'goodinfo',
      component: goodInfo
    },
    //马龙的页面
    {
      path: '/flypig',
      name: 'flypig',
      component: flypig
    },
    {
      path: '/flypigTick',
      name: 'flypigTick',
      component: flypigTick
    },
    {
      path: '/juhuasuan',
      name: 'juhuasuan',
      component: juhuasuan
    },
     //肖洁萍的页面
     {
      path: '/tbBuy',
      name: 'tbBuy',
      component: tbBuy
    },
    {
      path: '/tbZong',
      name: 'tbZong',
      component: tbZong
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    //高恩惠的页面
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    //程春的页面
    {
      path: '/list',
    name: 'list',
    component: list

    },
    {
      path: '/movie',
    name: 'movie',
    component: movie

    },
    {
      path: '/skt',
    name: 'skt',
    component: skt

    }
  ]
})
