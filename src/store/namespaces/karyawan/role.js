const karyawan_role = {
    config: {
        static: {
            columns: 'karyawan_role/config/static/columns',
            selectedColumns: 'karyawan_role/config/static/selectedColumns',
            displayColumns: 'karyawan_role/config/static/displayColumns',
        },
        dynamic: {
            separator: 'karyawan_role/config/dynamic/separator',
            visibleColumns: 'karyawan_role/config/dynamic/visibleColumns',
            selected: 'karyawan_role/config/dynamic/selected',
            loading: 'karyawan_role/config/dynamic/loading',
        }
    },
    data: {
        pagination: 'karyawan_role/data/pagination',
        payload: {
            data: 'karyawan_role/data/payload/data',
            replace: 'karyawan_role/data/payload/replace',
            last_page: 'karyawan_role/data/payload/last_page',
            current_page: 'karyawan_role/data/payload/current_page',
        },
    },
    action: 'karyawan_role/action',
}

module.exports = karyawan_role