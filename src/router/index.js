import Vue from 'vue'
import Router from 'vue-router'
import login from '@/proposal/login'
import home from '@/proposal/home'
import index from '@/proposal/index'
import customerService from '@/proposal/customerService/index'
import keyword from '@/proposal/keyword/index'
import keywordAdd from '@/proposal/keyword/add'
import keywordList from '@/proposal/keyword/list'
import lexicon from '@/proposal/keyword/lexicon'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: login
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [{
          // 首页
          path: '/',
          component: index
        }, {
          // 客服任务列表
          path: 'customerService',
          component: customerService
        },
        {
          // 选词人员任务列表
          path: 'keyword',
          component: keyword
        },
        {
          // 关键词管理
          path: 'keywordList',
          component: keywordList
        }, {
          // 新增关键词
          path: 'keywordAdd',
          component: keywordAdd
        }, {
          // 词库管理
          path: 'lexicon',
          component: lexicon
        },
      ]
    }
  ]
})
