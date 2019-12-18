const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    karyawan_role
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
            replace,
            last_page,
            current_page,
        },
    },
    action,
} = karyawan_role

const map_karyawan_role = {
    computed: {
        ...mapGetters({
            get_karyawan_role_columns: columns,
            get_karyawan_role_selectedColumns: selectedColumns,
            get_karyawan_role_displayColumns: displayColumns,
            get_karyawan_role_separator: separator,
            get_karyawan_role_visibleColumns: visibleColumns,
            get_karyawan_role_selected: selected,
            get_karyawan_role_loading: loading,

            get_karyawan_role_pagination: pagination,
            get_karyawan_role_data: data,
            get_karyawan_role_last_page: last_page,
            get_karyawan_role_current_page: current_page,
        }),
    },
    methods: {
        ...mapActions({
            set_karyawan_role: action,
        }),
    },
}

export default map_karyawan_role