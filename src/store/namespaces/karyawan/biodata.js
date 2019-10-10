const karyawan_biodata = {
    config: {
        static: {
            /*
             * reserve data-table
             */
            columns: 'karyawan_biodata/config/static/columns',
            selectedColumns: 'karyawan_biodata/config/static/selectedColumns',
            displayColumns: 'karyawan_biodata/config/static/displayColumns',
        },
        dynamic: {
            /*
             * reserve data-table
             */
            separator: 'karyawan_biodata/config/dynamic/separator',
            visibleColumns: 'karyawan_biodata/config/dynamic/visibleColumns',
            selected: 'karyawan_biodata/config/dynamic/selected',
            loading: 'karyawan_biodata/config/dynamic/loading',
            // operators: 'karyawan_biodata/config/dynamic/operators',
        }
    },
    data: {
        pagination: 'karyawan_biodata/data/pagination',
        payload: {
            data: 'karyawan_biodata/data/payload/data',
            last_page: 'karyawan_biodata/data/payload/last_page',
            current_page: 'karyawan_biodata/data/payload/current_page',
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {
            select: 'karyawan_biodata/data/detail/select',
            splice: 'karyawan_biodata/data/detail/splice',
            update: 'karyawan_biodata/data/detail/update',
            delete: 'karyawan_biodata/data/detail/delete',
        }
    },
    action: 'karyawan_biodata/action',
}

module.exports = karyawan_biodata