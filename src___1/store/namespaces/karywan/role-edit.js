const karyawan_role_edit = {
    config: {
        static: {
            /*
             * reserve data-table
             */
            columns: 'karyawan_role_edit/config/static/columns',
            selectedColumns: 'karyawan_role_edit/config/static/selectedColumns',
            displayColumns: 'karyawan_role_edit/config/static/displayColumns',
        },
        dynamic: {
            /*
             * reserve data-table
             */
            separator: 'karyawan_role_edit/config/dynamic/separator',
            visibleColumns: 'karyawan_role_edit/config/dynamic/visibleColumns',
            selected: 'karyawan_role_edit/config/dynamic/selected',
            loading: 'karyawan_role_edit/config/dynamic/loading',
            // operators: 'karyawan_role_edit/config/dynamic/operators',
        }
    },
    data: {
        pagination: 'karyawan_role_edit/data/pagination',
        payload: {
            data: 'karyawan_role_edit/data/payload/data',
            last_page: 'karyawan_role_edit/data/payload/last_page',
            current_page: 'karyawan_role_edit/data/payload/current_page',
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {
            select: 'karyawan_role_edit/data/detail/select',
            splice: 'karyawan_role_edit/data/detail/splice',
            update: 'karyawan_role_edit/data/detail/update',
            delete: 'karyawan_role_edit/data/detail/delete',
        }
    },
    action: 'karyawan_role_edit/action',
}

module.exports = karyawan_role_edit