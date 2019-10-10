const aset_equipment = {
    config: {
        static: {
            /*
             * reserve data-table
             */
            columns: 'aset_equipment/config/static/columns',
            selectedColumns: 'aset_equipment/config/static/selectedColumns',
            displayColumns: 'aset_equipment/config/static/displayColumns',
        },
        dynamic: {
            /*
             * reserve data-table
             */
            separator: 'aset_equipment/config/dynamic/separator',
            visibleColumns: 'aset_equipment/config/dynamic/visibleColumns',
            selected: 'aset_equipment/config/dynamic/selected',
            loading: 'aset_equipment/config/dynamic/loading',
            // operators: 'aset_equipment/config/dynamic/operators',
        }
    },
    data: {
        pagination: 'aset_equipment/data/pagination',
        payload: {
            data: 'aset_equipment/data/payload/data',
            last_page: 'aset_equipment/data/payload/last_page',
            current_page: 'aset_equipment/data/payload/current_page',
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {
            select: 'aset_equipment/data/detail/select',
            splice: 'aset_equipment/data/detail/splice',
            update: 'aset_equipment/data/detail/update',
            delete: 'aset_equipment/data/detail/delete',
        }
    },
    action: 'aset_equipment/action',
}

module.exports = aset_equipment