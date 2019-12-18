import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

import auth from './modules/auth'
import tab from './modules/tab'
import init from './modules/init'
import notification from './modules/notification'

import karyawan_biodata from './modules/karyawan/biodata'
import karyawan_role from './modules/karyawan/role'
import karyawan_role_edit from './modules/karyawan/role-edit'

import aset_equipment from './modules/library/equipment'
import aset_location from './modules/library/location'
import aset_schedule from './modules/library/schedule'

import inspeksi_temperatur from './modules/inspeksi/temperatur'
import inspeksi_temperatur_panel_valid from './modules/inspeksi/temperatur-panel-valid'
import inspeksi_temperatur_panel_invalid from './modules/inspeksi/temperatur-panel-invalid'

import laporan_custom from './modules/laporan/custom'

import formulir_inspeksi from './modules/formulir/inspeksi'
import formulir_inspeksi_new from './modules/formulir/inspeksi-new'
import formulir_karyawan from './modules/formulir/karyawan'

import register_karyawan from './modules/formulir/register'
import forget_karyawan from './modules/formulir/forget'
import login_karyawan from './modules/formulir/login'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */


export default function( /* { ssrContext } */ Vue) {
    const Store = new Vuex.Store({
        plugins: [
            createPersistedState({
                paths: ['auth', 'notification', 'login_karyawan'],
            }),
        ],
        modules: {
            auth,
            tab,
            init,
            notification,

            karyawan_biodata,
            karyawan_role,
            karyawan_role_edit,

            inspeksi_temperatur,
            inspeksi_temperatur_panel_valid,
            inspeksi_temperatur_panel_invalid,

            aset_equipment,
            aset_location,
            aset_schedule,

            laporan_custom,

            formulir_inspeksi,
            formulir_inspeksi_new,
            formulir_karyawan,

            register_karyawan,
            forget_karyawan,
            login_karyawan,
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        // strict: process.env.DEV
    })

    return Store
}