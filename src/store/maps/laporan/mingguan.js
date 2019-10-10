const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    laporan_mingguan
} = require("../../namespaces");

const map_laporan_mingguan = {
    computed: {
        ...mapGetters({
            // static
            get_laporan_mingguan_columns: laporan_mingguan.config.static.columns,
            get_laporan_mingguan_selectedColumns: laporan_mingguan.config.static.selectedColumns,
            get_laporan_mingguan_displayColumns: laporan_mingguan.config.static.displayColumns,
            get_laporan_mingguan_separator: laporan_mingguan.config.dynamic.separator,
            get_laporan_mingguan_visibleColumns: laporan_mingguan.config.dynamic.visibleColumns,
            get_laporan_mingguan_selected: laporan_mingguan.config.dynamic.selected,
            get_laporan_mingguan_loading: laporan_mingguan.config.dynamic.loading,
            get_laporan_mingguan_equipmentColumns: laporan_mingguan.config.dynamic.equipmentColumns,
            get_laporan_mingguan_locationColumns: laporan_mingguan.config.dynamic.locationColumns,
            // dynamic
            get_laporan_mingguan_pagination: laporan_mingguan.data.pagination,
            get_laporan_mingguan_data: laporan_mingguan.data.payload.data,
            get_laporan_mingguan_last_page: laporan_mingguan.data.payload.last_page,
            get_laporan_mingguan_current_page: laporan_mingguan.data.payload.current_page,
            // detail
            get_laporan_mingguan_select: laporan_mingguan.data.detail.select,
        }),
    },
    methods: {
        ...mapActions({
            set_laporan_mingguan: laporan_mingguan.action,
        }),
    },
}

export default map_laporan_mingguan