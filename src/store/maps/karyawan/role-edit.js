const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    karyawan_role_edit
} = require("../../namespaces");

const map_karyawan_role_edit = {
    computed: {
        ...mapGetters({
            // static
            get_karyawan_role_edit_columns: karyawan_role_edit.config.static.columns,
            get_karyawan_role_edit_selectedColumns: karyawan_role_edit.config.static.selectedColumns,
            get_karyawan_role_edit_displayColumns: karyawan_role_edit.config.static.displayColumns,
            get_karyawan_role_edit_separator: karyawan_role_edit.config.dynamic.separator,
            get_karyawan_role_edit_visibleColumns: karyawan_role_edit.config.dynamic.visibleColumns,
            get_karyawan_role_edit_selected: karyawan_role_edit.config.dynamic.selected,
            get_karyawan_role_edit_loading: karyawan_role_edit.config.dynamic.loading,
            // dynamic
            get_karyawan_role_edit_pagination: karyawan_role_edit.data.pagination,
            get_karyawan_role_edit_data: karyawan_role_edit.data.payload.data,
            get_karyawan_role_edit_last_page: karyawan_role_edit.data.payload.last_page,
            get_karyawan_role_edit_current_page: karyawan_role_edit.data.payload.current_page,
            // detail
            get_karyawan_role_edit_select: karyawan_role_edit.data.detail.select,
        }),
    },
    methods: {
        ...mapActions({
            set_karyawan_role_edit: karyawan_role_edit.action,
        }),
    },
}

export default map_karyawan_role_edit