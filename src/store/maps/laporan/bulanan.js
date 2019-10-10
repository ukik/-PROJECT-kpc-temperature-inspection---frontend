const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    laporan_bulanan
} = require("../../namespaces");

const map_laporan_bulanan = {
    computed: {
        ...mapGetters({
            // static
            get_laporan_bulanan_columns: laporan_bulanan.config.static.columns,
            get_laporan_bulanan_selectedColumns: laporan_bulanan.config.static.selectedColumns,
            get_laporan_bulanan_displayColumns: laporan_bulanan.config.static.displayColumns,
            get_laporan_bulanan_separator: laporan_bulanan.config.dynamic.separator,
            get_laporan_bulanan_visibleColumns: laporan_bulanan.config.dynamic.visibleColumns,
            get_laporan_bulanan_selected: laporan_bulanan.config.dynamic.selected,
            get_laporan_bulanan_loading: laporan_bulanan.config.dynamic.loading,
            // dynamic
            get_laporan_bulanan_pagination: laporan_bulanan.data.pagination,
            get_laporan_bulanan_data: laporan_bulanan.data.payload.data,
            get_laporan_bulanan_last_page: laporan_bulanan.data.payload.last_page,
            get_laporan_bulanan_current_page: laporan_bulanan.data.payload.current_page,
            // detail
            get_laporan_bulanan_select: laporan_bulanan.data.detail.select,
        }),
    },
    methods: {
        ...mapActions({
            set_laporan_bulanan: laporan_bulanan.action,
        }),
    },
}

export default map_laporan_bulanan