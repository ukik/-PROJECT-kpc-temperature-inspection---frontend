const inspeksi_temperatur = {
    config: {
        static: {
            /*
             * reserve data-table
             */
            columns: 'inspeksi_temperatur/config/static/columns',
            selectedColumns: 'inspeksi_temperatur/config/static/selectedColumns',
            displayColumns: 'inspeksi_temperatur/config/static/displayColumns',
        },
        dynamic: {
            /*
             * reserve data-table
             */
            separator: 'inspeksi_temperatur/config/dynamic/separator',
            visibleColumns: 'inspeksi_temperatur/config/dynamic/visibleColumns',
            selected: 'inspeksi_temperatur/config/dynamic/selected',
            loading: 'inspeksi_temperatur/config/dynamic/loading',
            // operators: 'inspeksi_temperatur/config/dynamic/operators',
        }
    },
    data: {
        pagination: 'inspeksi_temperatur/data/pagination',
        payload: {
            data: 'inspeksi_temperatur/data/payload/data',
            last_page: 'inspeksi_temperatur/data/payload/last_page',
            current_page: 'inspeksi_temperatur/data/payload/current_page',
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {
            select: 'inspeksi_temperatur/data/detail/select',
            splice: 'inspeksi_temperatur/data/detail/splice',
            update: 'inspeksi_temperatur/data/detail/update',
            delete: 'inspeksi_temperatur/data/detail/delete',
        }
    },
    action: 'inspeksi_temperatur/action',
}

module.exports = inspeksi_temperatur