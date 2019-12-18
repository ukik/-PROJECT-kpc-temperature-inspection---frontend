const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    karyawan_role_edit
} = require("../../namespaces");

const {
    config: {
        static: {
            columns,
            selectedColumns,
            displayColumns,
        },
        dynamic: {
            separator,
            visibleColumns,
            selected,
            loading,
        }
    },
    data: {
        pagination,
        payload: {
            data,
            last_page,
            current_page,
        },
    },
    action,
} = karyawan_role_edit

const map_karyawan_role_edit = {
    computed: {
        ...mapGetters({
            get_karyawan_role_edit_columns: columns,
            get_karyawan_role_edit_selectedColumns: selectedColumns,
            get_karyawan_role_edit_displayColumns: displayColumns,
            get_karyawan_role_edit_separator: separator,
            get_karyawan_role_edit_visibleColumns: visibleColumns,
            get_karyawan_role_edit_selected: selected,
            get_karyawan_role_edit_loading: loading,

            get_karyawan_role_edit_pagination: pagination,
            get_karyawan_role_edit_data: data,
            get_karyawan_role_edit_last_page: last_page,
            get_karyawan_role_edit_current_page: current_page,
        }),
    },
    methods: {
        ...mapActions({
            set_karyawan_role_edit: action,
        }),
    },
}

export default map_karyawan_role_edit