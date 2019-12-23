import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store';

import HomePag from '@/components/content/HomePag'
import Topic from '@/components/content/Topic'
import SmallVolumes from '@/components/content/SmallVolumes'
import Hot from '@/components/content/Hot'
import QueAndAns from '@/components/content/QueAndAns'
import WriteAnArticle from '@/components/content/WriteAnArticle'
import ShowArticle from '@/components/content/ShowArticle'
import userInfo from '@/components/content/userInfo'


Vue.use(Router)

let router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomePag',
      component: HomePag
    },
    {path:'/topic',name:'Topic',component:Topic},
    {path:'/smallVolumes',name:'SmallVolumes',component:SmallVolumes},
    {path:'/hot',name:'Hot',component:Hot},
    {path:'/queandans',name:'QueAndAns',component:QueAndAns},
    {path:'/writeanarticle',name:'WriteAnArticle',component:WriteAnArticle},
    {path:'/showarticle/:id',name:'ShowArticle',component:ShowArticle},
    {path:'/userInfo',name:'userInfo',component:userInfo},
    {redirect:'/',path:'*'},
  ]
})


//登录拦截
router.beforeEach((to,from,next) => {
  if(store.state.userToken){
    store.commit('isLogin',true);
  }else {
    store.commit('isLogin',false);
  }
  if(to.path == '/writeanarticle'){
    if(store.state.userToken){
      next()
    }else{
      store.commit('regOrLogin', 2);
      store.commit('flag', from.path);
    }
  }else{
    store.commit('flag', to.path);
    window.scrollTo(0,0);
    next();
  }
});

export default router;