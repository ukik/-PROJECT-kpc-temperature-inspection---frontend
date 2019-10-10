const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    aset_equipment
} = require("../../namespaces");

const map_aset_equipment = {
    computed: {
        ...mapGetters({
            // static
            get_aset_equipment_columns: aset_equipment.config.static.columns,
            get_aset_equipment_selectedColumns: aset_equipment.config.static.selectedColumns,
            get_aset_equipment_displayColumns: aset_equipment.config.static.displayColumns,
            get_aset_equipment_separator: aset_equipment.config.dynamic.separator,
            get_aset_equipment_visibleColumns: aset_equipment.config.dynamic.visibleColumns,
            get_aset_equipment_selected: aset_equipment.config.dynamic.selected,
            get_aset_equipment_loading: aset_equipment.config.dynamic.loading,
            // dynamic
            get_aset_equipment_pagination: aset_equipment.data.pagination,
            get_aset_equipment_data: aset_equipment.data.payload.data,
            get_aset_equipment_last_page: aset_equipment.data.payload.last_page,
            get_aset_equipment_current_page: aset_equipment.data.payload.current_page,
            // detail
            get_aset_equipment_select: aset_equipment.data.detail.select,
        }),
    },
    methods: {
        ...mapActions({
            set_aset_equipment: aset_equipment.action,
        }),
    },
}

export default map_aset_equipment