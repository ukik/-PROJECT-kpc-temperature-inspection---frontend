const laporan_bulanan = {
    config: {
        static: {
            /*
             * reserve data-table
             */
            columns: 'laporan_bulanan/config/static/columns',
            selectedColumns: 'laporan_bulanan/config/static/selectedColumns',
            displayColumns: 'laporan_bulanan/config/static/displayColumns',
        },
        dynamic: {
            /*
             * reserve data-table
             */
            separator: 'laporan_bulanan/config/dynamic/separator',
            visibleColumns: 'laporan_bulanan/config/dynamic/visibleColumns',
            selected: 'laporan_bulanan/config/dynamic/selected',
            loading: 'laporan_bulanan/config/dynamic/loading',
            // operators: 'laporan_bulanan/config/dynamic/operators',
        }
    },
    data: {
        pagination: 'laporan_bulanan/data/pagination',
        payload: {
            data: 'laporan_bulanan/data/payload/data',
            last_page: 'laporan_bulanan/data/payload/last_page',
            current_page: 'laporan_bulanan/data/payload/current_page',
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {
            select: 'laporan_bulanan/data/detail/select',
            splice: 'laporan_bulanan/data/detail/splice',
            update: 'laporan_bulanan/data/detail/update',
            delete: 'laporan_bulanan/data/detail/delete',
        }
    },
    action: 'laporan_bulanan/action',
}

module.exports = laporan_bulanan