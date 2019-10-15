const laporan_kuartal = {
    config: {
        static: {
            /*
             * reserve data-table
             */
            columns: 'laporan_kuartal/config/static/columns',
            selectedColumns: 'laporan_kuartal/config/static/selectedColumns',
            displayColumns: 'laporan_kuartal/config/static/displayColumns',
        },
        dynamic: {
            /*
             * reserve data-table
             */
            separator: 'laporan_kuartal/config/dynamic/separator',
            visibleColumns: 'laporan_kuartal/config/dynamic/visibleColumns',
            selected: 'laporan_kuartal/config/dynamic/selected',
            loading: 'laporan_kuartal/config/dynamic/loading',
            // operators: 'laporan_kuartal/config/dynamic/operators',
        }
    },
    data: {
        pagination: 'laporan_kuartal/data/pagination',
        payload: {
            data: 'laporan_kuartal/data/payload/data',
            last_page: 'laporan_kuartal/data/payload/last_page',
            current_page: 'laporan_kuartal/data/payload/current_page',
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {
            select: 'laporan_kuartal/data/detail/select',
            splice: 'laporan_kuartal/data/detail/splice',
            update: 'laporan_kuartal/data/detail/update',
            delete: 'laporan_kuartal/data/detail/delete',
        }
    },
    action: 'laporan_kuartal/action',
}

module.exports = laporan_kuartal