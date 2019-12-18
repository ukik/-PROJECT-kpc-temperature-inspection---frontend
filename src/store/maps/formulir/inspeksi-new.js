const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    formulir_inspeksi_new
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
} = formulir_inspeksi_new

const map_formulir_inspeksi_new = {
    computed: {
        ...mapGetters({
            get_formulir_inspeksi_new_equipmentColumns: equipmentColumns,
            get_formulir_inspeksi_new_locationColumns: locationColumns,
            get_formulir_inspeksi_new_scheduleColumns: scheduleColumns,
            get_formulir_inspeksi_new_employeeColumns: employeeColumns,

            get_formulir_inspeksi_new_form: form,
            get_formulir_inspeksi_new_update: update,

        }),
    },
    methods: {
        ...mapActions({
            set_formulir_inspeksi_new: action,
        }),
    },
}

export default map_formulir_inspeksi_new