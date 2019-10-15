const karyawan_role = {
    config: {
        static: {
            /*
             * reserve data-table
             */
            columns: 'karyawan_role/config/static/columns',
            selectedColumns: 'karyawan_role/config/static/selectedColumns',
            displayColumns: 'karyawan_role/config/static/displayColumns',
        },
        dynamic: {
            /*
             * reserve data-table
             */
            separator: 'karyawan_role/config/dynamic/separator',
            visibleColumns: 'karyawan_role/config/dynamic/visibleColumns',
            selected: 'karyawan_role/config/dynamic/selected',
            loading: 'karyawan_role/config/dynamic/loading',
            // operators: 'karyawan_role/config/dynamic/operators',
        }
    },
    data: {
        pagination: 'karyawan_role/data/pagination',
        payload: {
            data: 'karyawan_role/data/payload/data',
            last_page: 'karyawan_role/data/payload/last_page',
            current_page: 'karyawan_role/data/payload/current_page',
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {
            select: 'karyawan_role/data/detail/select',
            splice: 'karyawan_role/data/detail/splice',
            update: 'karyawan_role/data/detail/update',
            delete: 'karyawan_role/data/detail/delete',
        }
    },
    action: 'karyawan_role/action',
}

module.exports = karyawan_role