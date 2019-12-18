const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    inspeksi_temperatur
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
        }
    },
    data: {
        pagination,
        payload: {
            data,
            replace,
            remove,
            last_page,
            current_page,
        },
    },
    action
} = inspeksi_temperatur

const map_inspeksi_temperatur = {
    computed: {
        ...mapGetters({
            get_inspeksi_temperatur_columns: columns,
            get_inspeksi_temperatur_selectedColumns: selectedColumns,
            get_inspeksi_temperatur_displayColumns: displayColumns,
            get_inspeksi_temperatur_separator: separator,
            get_inspeksi_temperatur_visibleColumns: visibleColumns,
            get_inspeksi_temperatur_selected: selected,
            get_inspeksi_temperatur_loading: loading,

            get_inspeksi_temperatur_pagination: pagination,
            get_inspeksi_temperatur_data: data,
            get_inspeksi_temperatur_last_page: last_page,
            get_inspeksi_temperatur_current_page: current_page,
        }),
    },
    methods: {
        ...mapActions({
            set_inspeksi_temperatur: action,
        }),
    },
}

export default map_inspeksi_temperatur