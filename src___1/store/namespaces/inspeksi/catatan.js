const inspeksi_catatan = {
    config: {
        static: {
            /*
             * reserve data-table
             */
            columns: 'inspeksi_catatan/config/static/columns',
            selectedColumns: 'inspeksi_catatan/config/static/selectedColumns',
            displayColumns: 'inspeksi_catatan/config/static/displayColumns',
        },
        dynamic: {
            /*
             * reserve data-table
             */
            separator: 'inspeksi_catatan/config/dynamic/separator',
            visibleColumns: 'inspeksi_catatan/config/dynamic/visibleColumns',
            selected: 'inspeksi_catatan/config/dynamic/selected',
            loading: 'inspeksi_catatan/config/dynamic/loading',
            // operators: 'inspeksi_catatan/config/dynamic/operators',
        }
    },
    data: {
        pagination: 'inspeksi_catatan/data/pagination',
        payload: {
            data: 'inspeksi_catatan/data/payload/data',
            last_page: 'inspeksi_catatan/data/payload/last_page',
            current_page: 'inspeksi_catatan/data/payload/current_page',
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {
            select: 'inspeksi_catatan/data/detail/select',
            splice: 'inspeksi_catatan/data/detail/splice',
            update: 'inspeksi_catatan/data/detail/update',
            delete: 'inspeksi_catatan/data/detail/delete',
        }
    },
    action: 'inspeksi_catatan/action',
}

module.exports = inspeksi_catatan