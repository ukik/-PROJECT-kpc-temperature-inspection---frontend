import Vue from 'vue'

import zoom from './zoom'
import base64 from './base64'
import capitalize from './capitalize'
import ismobile from './ismobile'
import imageExist from './imageExist'
import avatarExist from './avatarExist'
// import globalImageURL from './globalImageURL'


// import role_auth from './role_auth'

Vue.mixin(zoom)
Vue.mixin(base64)
Vue.mixin(capitalize)
Vue.mixin(ismobile)
Vue.mixin(imageExist)
Vue.mixin(avatarExist)
    // Vue.mixin(globalImageURL)

// Vue.mixin(role_auth)