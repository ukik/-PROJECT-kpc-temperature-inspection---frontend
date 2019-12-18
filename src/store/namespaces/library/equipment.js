const aset_equipment = {
    config: {
        static: {
            columns: 'aset_equipment/config/static/columns',
            selectedColumns: 'aset_equipment/config/static/selectedColumns',
            displayColumns: 'aset_equipment/config/static/displayColumns',
        },
        dynamic: {
            separator: 'aset_equipment/config/dynamic/separator',
            visibleColumns: 'aset_equipment/config/dynamic/visibleColumns',
            selected: 'aset_equipment/config/dynamic/selected',
            loading: 'aset_equipment/config/dynamic/loading',
        }
    },
    data: {
        pagination: 'aset_equipment/data/pagination',
        payload: {
            data: 'aset_equipment/data/payload/data',
            last_page: 'aset_equipment/data/payload/last_page',
            replace: 'aset_equipment/data/payload/replace',
            current_page: 'aset_equipment/data/payload/current_page',
        },
    },
    action: 'aset_equipment/action',
}

module.exports = aset_equipment