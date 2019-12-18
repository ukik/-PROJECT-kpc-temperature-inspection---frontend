const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    register_karyawan
} = require("../../namespaces");

const {
    data: {
        form,
        password_confirmation,
    },
    action,
} = register_karyawan

const map_register_karyawan = {
    computed: {
        ...mapGetters({
            get_register_karyawan_form: form,
            get_register_karyawan_password_confirmation: password_confirmation,
        }),
    },
    methods: {
        ...mapActions({
            set_register_karyawan: action,
        }),
    },
}

export default map_register_karyawan