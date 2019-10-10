const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    inspeksi_catatan
} = require("../../namespaces");

const map_inspeksi_catatan = {
    computed: {
        ...mapGetters({
            // static
            get_inspeksi_catatan_columns: inspeksi_catatan.config.static.columns,
            get_inspeksi_catatan_selectedColumns: inspeksi_catatan.config.static.selectedColumns,
            get_inspeksi_catatan_displayColumns: inspeksi_catatan.config.static.displayColumns,
            get_inspeksi_catatan_separator: inspeksi_catatan.config.dynamic.separator,
            get_inspeksi_catatan_visibleColumns: inspeksi_catatan.config.dynamic.visibleColumns,
            get_inspeksi_catatan_selected: inspeksi_catatan.config.dynamic.selected,
            get_inspeksi_catatan_loading: inspeksi_catatan.config.dynamic.loading,
            // dynamic
            get_inspeksi_catatan_pagination: inspeksi_catatan.data.pagination,
            get_inspeksi_catatan_data: inspeksi_catatan.data.payload.data,
            get_inspeksi_catatan_last_page: inspeksi_catatan.data.payload.last_page,
            get_inspeksi_catatan_current_page: inspeksi_catatan.data.payload.current_page,
            // detail
            get_inspeksi_catatan_select: inspeksi_catatan.data.detail.select,
        }),
    },
    methods: {
        ...mapActions({
            set_inspeksi_catatan: inspeksi_catatan.action,
        }),
    },
}

export default map_inspeksi_catatan