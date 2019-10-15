const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    laporan_kuartal
} = require("../../namespaces");

const map_laporan_kuartal = {
    computed: {
        ...mapGetters({
            // static
            get_laporan_kuartal_columns: laporan_kuartal.config.static.columns,
            get_laporan_kuartal_selectedColumns: laporan_kuartal.config.static.selectedColumns,
            get_laporan_kuartal_displayColumns: laporan_kuartal.config.static.displayColumns,
            get_laporan_kuartal_separator: laporan_kuartal.config.dynamic.separator,
            get_laporan_kuartal_visibleColumns: laporan_kuartal.config.dynamic.visibleColumns,
            get_laporan_kuartal_selected: laporan_kuartal.config.dynamic.selected,
            get_laporan_kuartal_loading: laporan_kuartal.config.dynamic.loading,
            // dynamic
            get_laporan_kuartal_pagination: laporan_kuartal.data.pagination,
            get_laporan_kuartal_data: laporan_kuartal.data.payload.data,
            get_laporan_kuartal_last_page: laporan_kuartal.data.payload.last_page,
            get_laporan_kuartal_current_page: laporan_kuartal.data.payload.current_page,
            // detail
            get_laporan_kuartal_select: laporan_kuartal.data.detail.select,
        }),
    },
    methods: {
        ...mapActions({
            set_laporan_kuartal: laporan_kuartal.action,
        }),
    },
}

export default map_laporan_kuartal