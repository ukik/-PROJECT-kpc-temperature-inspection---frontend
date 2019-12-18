const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    login_karyawan
} = require("../../namespaces");

const {
    data: {
        form
    },
    action
} = login_karyawan

const map_login_karyawan = {
    computed: {
        ...mapGetters({
            get_login_karyawan_form: form,
        }),
    },
    methods: {
        ...mapActions({
            set_login_karyawan: action,
        }),
    },
}

export default map_login_karyawan