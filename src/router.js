import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { home } from './names'

let temp = home

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "test" */ `./views/${home}.vue`)
    },
    {
      path: '/test-fixed',
      name: 'testFixed',
      component: () => import(/* webpackChunkName: "test" */ `./views/${temp}.vue`)
    }
  ]
})
