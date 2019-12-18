const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    formulir_inspeksi
} = require("../../namespaces");

const {
    config: {
        dynamic: {
            equipmentColumns,
            locationColumns,
            scheduleColumns,
            employeeColumns,
        }
    },
    data: {
        form,
        update,
    },
    action,
} = formulir_inspeksi

const map_formulir_inspeksi = {
    computed: {
        ...mapGetters({
            get_formulir_inspeksi_equipmentColumns: equipmentColumns,
            get_formulir_inspeksi_locationColumns: locationColumns,
            get_formulir_inspeksi_scheduleColumns: scheduleColumns,
            get_formulir_inspeksi_employeeColumns: employeeColumns,

            get_formulir_inspeksi_form: form,
            get_formulir_inspeksi_update: update,

        }),
    },
    methods: {
        ...mapActions({
            set_formulir_inspeksi: action,
        }),
    },
}

export default map_formulir_inspeksi