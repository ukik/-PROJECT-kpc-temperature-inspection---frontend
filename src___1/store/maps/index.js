import Vue from 'vue'

import karyawan_biodata from './karyawan/biodata'
import karyawan_role from './karyawan/role'
import karyawan_role_edit from './karyawan/role-edit'

import aset_equipment from './aset/equipment'
import aset_location from './aset/location'

import inspeksi_catatan from './inspeksi/catatan'
import inspeksi_temperatur from './inspeksi/temperatur'

import laporan_bulanan from './laporan/bulanan'
import laporan_kuartal from './laporan/kuartal'
import laporan_mingguan from './laporan/mingguan'

Vue.mixin(karyawan_biodata)
Vue.mixin(karyawan_role)
Vue.mixin(karyawan_role_edit)

Vue.mixin(aset_equipment)
Vue.mixin(aset_location)

Vue.mixin(inspeksi_catatan)
Vue.mixin(inspeksi_temperatur)

Vue.mixin(laporan_bulanan)
Vue.mixin(laporan_kuartal)
Vue.mixin(laporan_mingguan)