import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Users/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: HelloWorld
    }
  ]
})
