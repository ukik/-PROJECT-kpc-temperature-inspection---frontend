const laporan_custom = {
    config: {
        static: {
            /*
             * reserve data-table
             */
            columns: 'laporan_custom/config/static/columns',
            selectedColumns: 'laporan_custom/config/static/selectedColumns',
            displayColumns: 'laporan_custom/config/static/displayColumns',
        },
        dynamic: {
            /*
             * reserve data-table
             */
            separator: 'laporan_custom/config/dynamic/separator',
            visibleColumns: 'laporan_custom/config/dynamic/visibleColumns',
            selected: 'laporan_custom/config/dynamic/selected',
            loading: 'laporan_custom/config/dynamic/loading',
            // operators: 'laporan_custom/config/dynamic/operators', 
            equipmentColumns: 'laporan_custom/config/dynamic/equipmentColumns',
            locationColumns: 'laporan_custom/config/dynamic/locationColumns',
        }
    },
    data: {
        pagination: 'laporan_custom/data/pagination',
        payload: {
            data: 'laporan_custom/data/payload/data',
            last_page: 'laporan_custom/data/payload/last_page',
            current_page: 'laporan_custom/data/payload/current_page',
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {
            select: 'laporan_custom/data/detail/select',
            splice: 'laporan_custom/data/detail/splice',
            update: 'laporan_custom/data/detail/update',
            delete: 'laporan_custom/data/detail/delete',
        },
        //

    },
    action: 'laporan_custom/action',
}

module.exports = laporan_custom