const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    forget_karyawan
} = require("../../namespaces");

const {
    data: {
        form,
    },
    action,
} = forget_karyawan

const map_forget_karyawan = {
    computed: {
        ...mapGetters({
            get_forget_karyawan_form: form,
        }),
    },
    methods: {
        ...mapActions({
            set_forget_karyawan: action,
        }),
    },
}

export default map_forget_karyawan