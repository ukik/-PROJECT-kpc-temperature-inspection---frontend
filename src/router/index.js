import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

import JWT from 'jwt-client'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function ({ 
  store, 
  // ssrContext 
}) {

  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    let allowedToEnter = true
    to.matched.some((record) => {
        /**
        * PENTING!
        * jangan pasang next() diluar function ini
        * akan error: Maximum Callstack atau infinity loop
        */  
        
        
        // console.log(record, store, store.getters['auth/is_logged_in']);
        
        if(record.meta.requiresAuth) {
          console.log(record);
          next({
            path: 'home',
            replace: true
          })
        }


        // check if there is meta data
        let isLoggedIn = store.getters['auth/get_is_logged_in']

        if (!isLoggedIn && record.name === 'home') {
          next({
            path: '/sign-in',
            replace: true
          })
          return
        }

        next()
    })

  })

  return Router
}
