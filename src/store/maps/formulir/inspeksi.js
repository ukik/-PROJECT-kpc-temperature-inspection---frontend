const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    formulir_inspeksi
} = require("../../namespaces");

const map_formulir_inspeksi = {   
    computed: {
        ...mapGetters({
            get_formulir_inspeksi_equipmentColumns: formulir_inspeksi.config.dynamic.equipmentColumns,
            get_formulir_inspeksi_locationColumns: formulir_inspeksi.config.dynamic.locationColumns,
            get_formulir_inspeksi_employeeColumns: formulir_inspeksi.config.dynamic.employeeColumns,

            get_formulir_inspeksi_form: formulir_inspeksi.data.form,
            get_formulir_inspeksi_data: formulir_inspeksi.data.payload.data,
        }),
    },
    methods: {
        ...mapActions({
            set_formulir_inspeksi: formulir_inspeksi.action,
        }),
    },
}

export default map_formulir_inspeksi