const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    laporan_custom
} = require("../../namespaces");

const map_laporan_custom = {
    computed: {
        ...mapGetters({
            // static
            get_laporan_custom_columns: laporan_custom.config.static.columns,
            get_laporan_custom_selectedColumns: laporan_custom.config.static.selectedColumns,
            get_laporan_custom_displayColumns: laporan_custom.config.static.displayColumns,
            get_laporan_custom_separator: laporan_custom.config.dynamic.separator,
            get_laporan_custom_visibleColumns: laporan_custom.config.dynamic.visibleColumns,
            get_laporan_custom_selected: laporan_custom.config.dynamic.selected,
            get_laporan_custom_loading: laporan_custom.config.dynamic.loading,
            get_laporan_custom_equipmentColumns: laporan_custom.config.dynamic.equipmentColumns,
            get_laporan_custom_locationColumns: laporan_custom.config.dynamic.locationColumns,
            // dynamic
            get_laporan_custom_pagination: laporan_custom.data.pagination,
            get_laporan_custom_data: laporan_custom.data.payload.data,
            // get_laporan_custom_last_page: laporan_custom.data.payload.last_page,
            // get_laporan_custom_current_page: laporan_custom.data.payload.current_page,
            // detail
            get_laporan_custom_select: laporan_custom.data.detail.select,
        }),
    },
    methods: {
        ...mapActions({
            set_laporan_custom: laporan_custom.action,
        }),
    },
}

export default map_laporan_custom