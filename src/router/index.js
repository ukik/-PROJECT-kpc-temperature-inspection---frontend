import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

// import JWT from 'jwt-client'

const {
    auth
} = require("../store/namespaces/index");

const {
    data: {
        credentials
    }
} = auth

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function({
    store,
    // ssrContext 
}) {

    const Router = new VueRouter({
        scrollBehavior: () => ({
            x: 0,
            y: 0
        }),
        routes,

        // Leave these as is and change from quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicname
        mode: process.env.VUE_ROUTER_MODE,
        base: process.env.VUE_ROUTER_BASE
    })

    Router.beforeEach((to, from, next) => {
        to.matched.some((record) => {
            /**
             * PENTING!
             * jangan pasang next() diluar function ini
             * akan error: Maximum Callstack atau infinity loop
             */

            // console.log('router index', Object.keys(record.meta).length);

            /**
             * -------------------------------------------------------------
             * Auth Check
             * -------------------------------------------------------------
             */

            if (store.getters[credentials] !== undefined) {
                // redirect to 'login' page because router meta requireAuth (true) while store logged (false)
                if (record.meta.requiresAuth && !store.getters[credentials].logged) {
                    // next();
                    if (record.name != "login") {
                        next({
                            name: 'login',
                            replace: true
                        })
                    }
                }

                // redirect to 'login' page because store logged (true) && store role was null
                if (store.getters[credentials].logged && store.getters[credentials].role == null) {
                    if (record.name != "login") {
                        next({
                            name: 'login',
                            replace: true
                        })
                    }
                }
            }
            next()
        })

    })

    return Router
}