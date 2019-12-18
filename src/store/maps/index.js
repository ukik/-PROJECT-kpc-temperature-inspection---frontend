import Vue from 'vue'

import auth from './auth'
import tab from './tab'
import init from './init'
import notification from './notification'

import karyawan_biodata from './karyawan/biodata'
import karyawan_role from './karyawan/role'
import karyawan_role_edit from './karyawan/role-edit'

import aset_equipment from './library/equipment'
import aset_location from './library/location'
import aset_schedule from './library/schedule'

import inspeksi_temperatur from './inspeksi/temperatur'
import inspeksi_temperatur_panel_valid from './inspeksi/temperatur-panel-valid'
import inspeksi_temperatur_panel_invalid from './inspeksi/temperatur-panel-invalid'

import laporan_custom from './laporan/custom'

import formulir_inspeksi from './formulir/inspeksi'
import formulir_inspeksi_new from './formulir/inspeksi-new'
import formulir_karyawan from './formulir/karyawan'

import register_karyawan from './formulir/register'
import forget_karyawan from './formulir/forget'
import login_karyawan from './formulir/login'

Vue.mixin(auth)
Vue.mixin(tab)
Vue.mixin(init)
Vue.mixin(notification)

Vue.mixin(karyawan_biodata)

Vue.mixin(karyawan_role)
Vue.mixin(karyawan_role_edit)

Vue.mixin(aset_equipment)
Vue.mixin(aset_location)
Vue.mixin(aset_schedule)

Vue.mixin(inspeksi_temperatur)
Vue.mixin(inspeksi_temperatur_panel_valid)
Vue.mixin(inspeksi_temperatur_panel_invalid)

Vue.mixin(laporan_custom)

Vue.mixin(formulir_inspeksi)
Vue.mixin(formulir_inspeksi_new)
Vue.mixin(formulir_karyawan)

Vue.mixin(register_karyawan)
Vue.mixin(forget_karyawan)
Vue.mixin(login_karyawan)