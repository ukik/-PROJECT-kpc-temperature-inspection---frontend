const laporan_mingguan = {
    config: {
        static: {
            /*
             * reserve data-table
             */
            columns: 'laporan_mingguan/config/static/columns',
            selectedColumns: 'laporan_mingguan/config/static/selectedColumns',
            displayColumns: 'laporan_mingguan/config/static/displayColumns',
        },
        dynamic: {
            /*
             * reserve data-table
             */
            separator: 'laporan_mingguan/config/dynamic/separator',
            visibleColumns: 'laporan_mingguan/config/dynamic/visibleColumns',
            selected: 'laporan_mingguan/config/dynamic/selected',
            loading: 'laporan_mingguan/config/dynamic/loading',
            // operators: 'laporan_mingguan/config/dynamic/operators', 
            equipmentColumns: 'laporan_mingguan/config/dynamic/equipmentColumns',
            locationColumns: 'laporan_mingguan/config/dynamic/locationColumns',
        }
    },
    data: {
        pagination: 'laporan_mingguan/data/pagination',
        payload: {
            data: 'laporan_mingguan/data/payload/data',
            last_page: 'laporan_mingguan/data/payload/last_page',
            current_page: 'laporan_mingguan/data/payload/current_page',
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {
            select: 'laporan_mingguan/data/detail/select',
            splice: 'laporan_mingguan/data/detail/splice',
            update: 'laporan_mingguan/data/detail/update',
            delete: 'laporan_mingguan/data/detail/delete',
        },
        //

    },
    action: 'laporan_mingguan/action',
}

module.exports = laporan_mingguan