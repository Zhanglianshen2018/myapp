import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Application from '@/components/Application'
import Config from '@/components/Config'


Vue.use(Router)
Vue.config.productionTip = false


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },

    {
      path: '/index',
      //name: 'HelloWorld',
      component: Home},

    {
      path: '/application',
      //name: 'HelloWorld',
      component: Application
    },

    {
      path: '/config',
      //name: 'HelloWorld',
      component: Config
    },
  ]
})
