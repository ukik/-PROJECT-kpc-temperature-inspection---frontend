const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    formulir_karyawan
} = require("../../namespaces");

const {
    data: {
        form,
        password_confirmation,
        update,
    },
    action,
} = formulir_karyawan

const map_formulir_karyawan = {
    computed: {
        ...mapGetters({
            get_formulir_karyawan_form: form,
            get_formulir_karyawan_password_confirmation: password_confirmation,
            get_formulir_karyawan_update: update,
        }),
    },
    methods: {
        ...mapActions({
            set_formulir_karyawan: action,
        }),
    },
}

export default map_formulir_karyawan