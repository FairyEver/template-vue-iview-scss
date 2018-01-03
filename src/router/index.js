import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      component: resolve => { require(['@/page/welcome.vue'], resolve) }
    },
    {
      path: '/',
      name: 'index',
      component: resolve => { require(['@/page/index.vue'], resolve) }
    }
  ]
})


