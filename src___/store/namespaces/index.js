const karyawan_biodata = require('./karywan/biodata')
const karyawan_role = require('./karywan/role')
const karyawan_role_edit = require('./karywan/role-edit')

const aset_equipment = require('./aset/equipment')
const aset_location = require('./aset/location')

const inspeksi_catatan = require('./inspeksi/catatan')
const inspeksi_temperatur = require('./inspeksi/temperatur')

const laporan_bulanan = require('./laporan/bulanan')
const laporan_kuartal = require('./laporan/kuartal')
const laporan_mingguan = require('./laporan/mingguan')

module.exports = {
    karyawan_biodata,
    karyawan_role,
    karyawan_role_edit,

    aset_equipment,
    aset_location,

    inspeksi_catatan,
    inspeksi_temperatur,

    laporan_bulanan,
    laporan_kuartal,
    laporan_mingguan,
}

// only works without param in getters 
// inline access 
// this.$store.getters['status/REQUEST_STATUS'] // GETTERS
// this.$store.commit('yourModuleName/doSomething', {payload: data}) // MUTATIONS
// this.$store.dispatch('yourModuleName/doSomething', {payload: data}) // ACTION