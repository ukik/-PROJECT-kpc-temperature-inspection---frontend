const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    inspeksi_temperatur
} = require("../../namespaces");

const map_inspeksi_temperatur = {
    computed: {
        ...mapGetters({
            // static
            get_inspeksi_temperatur_columns: inspeksi_temperatur.config.static.columns,
            get_inspeksi_temperatur_selectedColumns: inspeksi_temperatur.config.static.selectedColumns,
            get_inspeksi_temperatur_displayColumns: inspeksi_temperatur.config.static.displayColumns,
            get_inspeksi_temperatur_separator: inspeksi_temperatur.config.dynamic.separator,
            get_inspeksi_temperatur_visibleColumns: inspeksi_temperatur.config.dynamic.visibleColumns,
            get_inspeksi_temperatur_selected: inspeksi_temperatur.config.dynamic.selected,
            get_inspeksi_temperatur_loading: inspeksi_temperatur.config.dynamic.loading,
            // dynamic
            get_inspeksi_temperatur_pagination: inspeksi_temperatur.data.pagination,
            get_inspeksi_temperatur_data: inspeksi_temperatur.data.payload.data,
            get_inspeksi_temperatur_last_page: inspeksi_temperatur.data.payload.last_page,
            get_inspeksi_temperatur_current_page: inspeksi_temperatur.data.payload.current_page,
            // detail
            get_inspeksi_temperatur_select: inspeksi_temperatur.data.detail.select,
        }),
    },
    methods: {
        ...mapActions({
            set_inspeksi_temperatur: inspeksi_temperatur.action,
        }),
    },
}

export default map_inspeksi_temperatur