import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

import karyawan_biodata from './modules/karyawan/biodata'
import karyawan_role from './modules/karyawan/role'
import karyawan_role_edit from './modules/karyawan/role-edit'



import aset_equipment from './modules/aset/equipment'
import aset_location from './modules/aset/location'


Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function ( /* { ssrContext } */ Vue) {
  const Store = new Vuex.Store({
    modules: {
      karyawan_biodata,
      karyawan_role,
      karyawan_role_edit,

      aset_equipment,
      aset_location,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    // strict: process.env.DEV
  })

  return Store
}