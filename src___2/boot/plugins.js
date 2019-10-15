import Vue from 'vue'
import {
    Plugin
} from 'vue-fragment'
Vue.use(Plugin)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

import zoom from 'vue-image-zoom';
import 'vue-image-zoom/dist/vue-image-zoom.css';

Vue.use(zoom);