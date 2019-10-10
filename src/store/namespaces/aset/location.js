const aset_location = {
    config: {
        static: {
            /*
             * reserve data-table
             */
            columns: 'aset_location/config/static/columns',
            selectedColumns: 'aset_location/config/static/selectedColumns',
            displayColumns: 'aset_location/config/static/displayColumns',
        },
        dynamic: {
            /*
             * reserve data-table
             */
            separator: 'aset_location/config/dynamic/separator',
            visibleColumns: 'aset_location/config/dynamic/visibleColumns',
            selected: 'aset_location/config/dynamic/selected',
            loading: 'aset_location/config/dynamic/loading',
            // operators: 'aset_location/config/dynamic/operators',
        }
    },
    data: {
        pagination: 'aset_location/data/pagination',
        payload: {
            data: 'aset_location/data/payload/data',
            last_page: 'aset_location/data/payload/last_page',
            current_page: 'aset_location/data/payload/current_page',
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {
            select: 'aset_location/data/detail/select',
            splice: 'aset_location/data/detail/splice',
            update: 'aset_location/data/detail/update',
            delete: 'aset_location/data/detail/delete',
        }
    },
    action: 'aset_location/action',
}

module.exports = aset_location