const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    karyawan_role
} = require("../../namespaces");

const map_karyawan_role = {
    computed: {
        ...mapGetters({
            // static
            get_karyawan_role_columns: karyawan_role.config.static.columns,
            get_karyawan_role_selectedColumns: karyawan_role.config.static.selectedColumns,
            get_karyawan_role_displayColumns: karyawan_role.config.static.displayColumns,
            get_karyawan_role_separator: karyawan_role.config.dynamic.separator,
            get_karyawan_role_visibleColumns: karyawan_role.config.dynamic.visibleColumns,
            get_karyawan_role_selected: karyawan_role.config.dynamic.selected,
            get_karyawan_role_loading: karyawan_role.config.dynamic.loading,
            // dynamic
            get_karyawan_role_pagination: karyawan_role.data.pagination,
            get_karyawan_role_data: karyawan_role.data.payload.data,
            get_karyawan_role_last_page: karyawan_role.data.payload.last_page,
            get_karyawan_role_current_page: karyawan_role.data.payload.current_page,
            // detail
            get_karyawan_role_select: karyawan_role.data.detail.select,
        }),
    },
    methods: {
        ...mapActions({
            set_karyawan_role: karyawan_role.action,
        }),
    },
}

export default map_karyawan_role