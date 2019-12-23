import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Login from '@/components/login/Login'
import store from "../store";

//二级路由
import WebInformation from '@/components/management/WebInformation'
import Article from '@/components/management/ContentMana/Article'
import LeaveMessage from '@/components/management/ContentMana/LeaveMessage'
import Programa from '@/components/management/ContentMana/Programa'

import SlideShow from '@/components/management/webMana/SlideShow'
import AsideInfo from '@/components/management/webMana/AsideInfo'
import Adver from '@/components/management/webMana/Adver'
import OtherMana from '@/components/management/webMana/OtherMana'

import userInfo from '@/components/management/usermanage/userInfo'
import adminInfo from '@/components/management/usermanage/adminInfo'


Vue.use(Router)

let router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Content',
      components: {       //路由复用的方法
        default:Content,
        'WebInformation':WebInformation,
        'Article':Article,
        'LeaveMessage':LeaveMessage,
        'Programa':Programa,
        'SlideShow':SlideShow,
        'AsideInfo':AsideInfo,
        'Adver':Adver,
        'OtherMana':OtherMana
      },
      redirect:'/webInformation',
      children:[
        {
          path: '/webinformation',
          name: 'WebInformation',
          component: WebInformation
        },
        {
          path: '/article',
          name: 'Article',
          component: Article
        },
        {
          path: '/leaveMessage',
          name: 'LeaveMessage',
          component: LeaveMessage
        },
        {
          path: '/programa',
          name: 'Programa',
          component: Programa
        },
        {
          path: '/slideShow',
          name: 'SlideShow',
          component: SlideShow
        },
        {
          path: '/asideInfo',
          name: 'AsideInfo',
          component: AsideInfo
        },
        {
          path: '/adver',
          name: 'Adver',
          component: Adver
        },
        {
          path: '/otherMana',
          name: 'OtherMana',
          component: OtherMana
        },
        {
          path: '/userInfo',
          name: 'userInfo',
          component: userInfo
        },
        {
          path: '/adminInfo',
          name: 'adminInfo',
          component: adminInfo
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    
  ]
})

//登录拦截
router.beforeEach((to,from,next) => {
  if(to.path != '/login'){
    if(store.state.adminToken){
      next()
    }else{
      next({
        path: '/login'
      })
    }
  }else{
    next();
  }
});


export default router;