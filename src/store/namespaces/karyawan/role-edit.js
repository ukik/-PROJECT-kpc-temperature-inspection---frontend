const karyawan_role_edit = {
    config: {
        static: {
            columns: 'karyawan_role_edit/config/static/columns',
            selectedColumns: 'karyawan_role_edit/config/static/selectedColumns',
            displayColumns: 'karyawan_role_edit/config/static/displayColumns',
        },
        dynamic: {
            separator: 'karyawan_role_edit/config/dynamic/separator',
            visibleColumns: 'karyawan_role_edit/config/dynamic/visibleColumns',
            selected: 'karyawan_role_edit/config/dynamic/selected',
            loading: 'karyawan_role_edit/config/dynamic/loading',
        }
    },
    data: {
        pagination: 'karyawan_role_edit/data/pagination',
        payload: {
            data: 'karyawan_role_edit/data/payload/data',
            replace: 'karyawan_role_edit/data/payload/replace',
            last_page: 'karyawan_role_edit/data/payload/last_page',
            current_page: 'karyawan_role_edit/data/payload/current_page',
        },
    },
    action: 'karyawan_role_edit/action',
}

module.exports = karyawan_role_edit