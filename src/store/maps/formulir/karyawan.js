const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    formulir_karyawan
} = require("../../namespaces");

const map_formulir_karyawan = {
    computed: {
        ...mapGetters({
            get_formulir_karyawan_form: formulir_karyawan.data.form,
            get_formulir_karyawan_data: formulir_karyawan.data.payload.data,
        }),
    },
    methods: {
        ...mapActions({
            set_formulir_karyawan: formulir_karyawan.action,
        }),
    },
}

export default map_formulir_karyawan