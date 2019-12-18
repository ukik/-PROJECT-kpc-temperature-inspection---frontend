const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    inspeksi_temperatur_panel_valid
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
} = inspeksi_temperatur_panel_valid

const map_inspeksi_temperatur_panel_valid = {
    computed: {
        ...mapGetters({
            get_inspeksi_temperatur_panel_valid_columns: columns,
            get_inspeksi_temperatur_panel_valid_selectedColumns: selectedColumns,
            get_inspeksi_temperatur_panel_valid_displayColumns: displayColumns,
            get_inspeksi_temperatur_panel_valid_separator: separator,
            get_inspeksi_temperatur_panel_valid_visibleColumns: visibleColumns,
            get_inspeksi_temperatur_panel_valid_selected: selected,
            get_inspeksi_temperatur_panel_valid_loading: loading,
            get_inspeksi_temperatur_panel_valid_grid: grid,

            get_inspeksi_temperatur_panel_valid_pagination: pagination,
            get_inspeksi_temperatur_panel_valid_data: data,
            get_inspeksi_temperatur_panel_valid_last_page: last_page,
            get_inspeksi_temperatur_panel_valid_current_page: current_page,
        }),
    },
    methods: {
        ...mapActions({
            set_inspeksi_temperatur_panel_valid: action,
        }),
    },
}

export default map_inspeksi_temperatur_panel_valid