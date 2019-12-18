const inspeksi_temperatur = {
    config: {
        static: {
            columns: 'inspeksi_temperatur/config/static/columns',
            selectedColumns: 'inspeksi_temperatur/config/static/selectedColumns',
            displayColumns: 'inspeksi_temperatur/config/static/displayColumns',
        },
        dynamic: {
            separator: 'inspeksi_temperatur/config/dynamic/separator',
            visibleColumns: 'inspeksi_temperatur/config/dynamic/visibleColumns',
            selected: 'inspeksi_temperatur/config/dynamic/selected',
            loading: 'inspeksi_temperatur/config/dynamic/loading',
        }
    },
    data: {
        pagination: 'inspeksi_temperatur/data/pagination',
        payload: {
            data: 'inspeksi_temperatur/data/payload/data',
            replace: 'inspeksi_temperatur/data/payload/replace',
            remove: 'inspeksi_temperatur/data/payload/remove',
            last_page: 'inspeksi_temperatur/data/payload/last_page',
            current_page: 'inspeksi_temperatur/data/payload/current_page',
        },
    },
    action: 'inspeksi_temperatur/action',
}

module.exports = inspeksi_temperatur