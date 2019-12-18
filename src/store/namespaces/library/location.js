const aset_location = {
    config: {
        static: {
            columns: 'aset_location/config/static/columns',
            selectedColumns: 'aset_location/config/static/selectedColumns',
            displayColumns: 'aset_location/config/static/displayColumns',
        },
        dynamic: {
            separator: 'aset_location/config/dynamic/separator',
            visibleColumns: 'aset_location/config/dynamic/visibleColumns',
            selected: 'aset_location/config/dynamic/selected',
            loading: 'aset_location/config/dynamic/loading',
        }
    },
    data: {
        pagination: 'aset_location/data/pagination',
        payload: {
            data: 'aset_location/data/payload/data',
            replace: 'aset_location/data/payload/replace',
            last_page: 'aset_location/data/payload/last_page',
            current_page: 'aset_location/data/payload/current_page',
        },
    },
    action: 'aset_location/action',
}

module.exports = aset_location