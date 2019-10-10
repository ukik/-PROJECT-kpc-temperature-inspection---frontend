const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    aset_location
} = require("../../namespaces");

const map_aset_location = {
    computed: {
        ...mapGetters({
            // static
            get_aset_location_columns: aset_location.config.static.columns,
            get_aset_location_selectedColumns: aset_location.config.static.selectedColumns,
            get_aset_location_displayColumns: aset_location.config.static.displayColumns,
            get_aset_location_separator: aset_location.config.dynamic.separator,
            get_aset_location_visibleColumns: aset_location.config.dynamic.visibleColumns,
            get_aset_location_selected: aset_location.config.dynamic.selected,
            get_aset_location_loading: aset_location.config.dynamic.loading,
            // dynamic
            get_aset_location_pagination: aset_location.data.pagination,
            get_aset_location_data: aset_location.data.payload.data,
            get_aset_location_last_page: aset_location.data.payload.last_page,
            get_aset_location_current_page: aset_location.data.payload.current_page,
            // detail
            get_aset_location_select: aset_location.data.detail.select,
        }),
    },
    methods: {
        ...mapActions({
            set_aset_location: aset_location.action,
        }),
    },
}

export default map_aset_location