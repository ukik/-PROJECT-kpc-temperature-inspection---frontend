const aset_schedule = {
    config: {
        static: {
            columns: 'aset_schedule/config/static/columns',
            selectedColumns: 'aset_schedule/config/static/selectedColumns',
            displayColumns: 'aset_schedule/config/static/displayColumns',
        },
        dynamic: {
            separator: 'aset_schedule/config/dynamic/separator',
            visibleColumns: 'aset_schedule/config/dynamic/visibleColumns',
            selected: 'aset_schedule/config/dynamic/selected',
            loading: 'aset_schedule/config/dynamic/loading',
        }
    },
    data: {
        pagination: 'aset_schedule/data/pagination',
        payload: {
            data: 'aset_schedule/data/payload/data',
            replace: 'aset_schedule/data/payload/replace',
            last_page: 'aset_schedule/data/payload/last_page',
            current_page: 'aset_schedule/data/payload/current_page',
        },
    },
    action: 'aset_schedule/action',
}

module.exports = aset_schedule