const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    inspeksi_temperatur_panel_invalid
} = require("../../namespaces");

const {
    config: {
        static: {
            columns,
            selectedColumns,
            displayColumns,
        },
        dynamic: {
            separator,
            visibleColumns,
            selected,
            loading,
            grid,
        }
    },
    data: {
        pagination,
        payload: {
            data,

            last_page,
            current_page,
        },
    },
    action
} = inspeksi_temperatur_panel_invalid

const map_inspeksi_temperatur_panel_invalid = {
    computed: {
        ...mapGetters({
            get_inspeksi_temperatur_panel_invalid_columns: columns,
            get_inspeksi_temperatur_panel_invalid_selectedColumns: selectedColumns,
            get_inspeksi_temperatur_panel_invalid_displayColumns: displayColumns,
            get_inspeksi_temperatur_panel_invalid_separator: separator,
            get_inspeksi_temperatur_panel_invalid_visibleColumns: visibleColumns,
            get_inspeksi_temperatur_panel_invalid_selected: selected,
            get_inspeksi_temperatur_panel_invalid_loading: loading,
            get_inspeksi_temperatur_panel_invalid_grid: grid,

            get_inspeksi_temperatur_panel_invalid_pagination: pagination,
            get_inspeksi_temperatur_panel_invalid_data: data,
            get_inspeksi_temperatur_panel_invalid_last_page: last_page,
            get_inspeksi_temperatur_panel_invalid_current_page: current_page,
        }),
    },
    methods: {
        ...mapActions({
            set_inspeksi_temperatur_panel_invalid: action,
        }),
    },
}

export default map_inspeksi_temperatur_panel_invalid