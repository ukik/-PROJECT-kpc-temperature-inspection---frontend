const auth = require('./auth')
const tab = require('./tab')
const init = require('./init')
const notification = require('./notification')

const karyawan_biodata = require('./karyawan/biodata')

const karyawan_role = require('./karyawan/role')
const karyawan_role_edit = require('./karyawan/role-edit')

const aset_equipment = require('./library/equipment')
const aset_location = require('./library/location')
const aset_schedule = require('./library/schedule')

const inspeksi_temperatur = require('./inspeksi/temperatur')
const inspeksi_temperatur_panel_invalid = require('./inspeksi/temperatur-panel-invalid')
const inspeksi_temperatur_panel_valid = require('./inspeksi/temperatur-panel-valid')

const laporan_custom = require('./laporan/custom')

const formulir_inspeksi = require('./formulir/inspeksi')
const formulir_inspeksi_new = require('./formulir/inspeksi-new')
const formulir_karyawan = require('./formulir/karyawan')

const register_karyawan = require('./formulir/register')
const forget_karyawan = require('./formulir/forget')
const login_karyawan = require('./formulir/login')

module.exports = {
    auth,
    tab,
    init,
    notification,

    karyawan_biodata,

    karyawan_role,
    karyawan_role_edit,

    aset_equipment,
    aset_location,
    aset_schedule,

    inspeksi_temperatur,
    inspeksi_temperatur_panel_invalid,
    inspeksi_temperatur_panel_valid,

    laporan_custom,

    formulir_inspeksi,
    formulir_inspeksi_new,
    formulir_karyawan,

    register_karyawan,
    forget_karyawan,
    login_karyawan,
}

// only works without param in getters 
// inline access 
// this.$store.getters['status/REQUEST_STATUS'] // GETTERS
// this.$store.commit('yourModuleName/doSomething', {payload: data}) // MUTATIONS
// this.$store.dispatch('yourModuleName/doSomething', {payload: data}) // ACTION