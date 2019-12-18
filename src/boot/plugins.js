import Vue from 'vue'
import {
    Plugin
} from 'vue-fragment'
Vue.use(Plugin)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import VueLazyLoad from 'vue-lazyload'
// Vue.use(VueLazyLoad)

import zoom from 'vue-image-zoom';
import 'vue-image-zoom/dist/vue-image-zoom.css';
Vue.use(zoom);

import _ from "lodash";

// import LazyHydrate from 'vue-lazy-hydration';

import VuePageTransition from 'vue-page-transition'

import VueOffline from 'vue-offline'

var VueScrollTo = require('vue-scrollto');

// Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

export default ({
    // app,
    // router,
    // store,
    Vue
}) => {
    Vue.prototype._ = _;
    Vue.use(VueOffline, {
        mixin: true,
        storage: false,
    })

    Vue.use(VuePageTransition)
        // Vue.component('LazyHydrate', LazyHydrate);
}