const temperatur_panel_valid = {
    config: {
        static: {
            columns: 'temperatur_panel_valid/config/static/columns',
            selectedColumns: 'temperatur_panel_valid/config/static/selectedColumns',
            displayColumns: 'temperatur_panel_valid/config/static/displayColumns',
        },
        dynamic: {
            separator: 'temperatur_panel_valid/config/dynamic/separator',
            visibleColumns: 'temperatur_panel_valid/config/dynamic/visibleColumns',
            selected: 'temperatur_panel_valid/config/dynamic/selected',
            loading: 'temperatur_panel_valid/config/dynamic/loading',
            grid: 'inspeksi_temperatur_valid/config/dynamic/grid',
        }
    },
    data: {
        pagination: 'temperatur_panel_valid/data/pagination',
        payload: {
            data: 'temperatur_panel_valid/data/payload/data',
            replace: 'temperatur_panel_valid/data/payload/replace',
            remove: 'temperatur_panel_valid/data/payload/remove',
            last_page: 'temperatur_panel_valid/data/payload/last_page',
            current_page: 'temperatur_panel_valid/data/payload/current_page',
        },
    },
    action: 'temperatur_panel_valid/action',
}

module.exports = temperatur_panel_valid