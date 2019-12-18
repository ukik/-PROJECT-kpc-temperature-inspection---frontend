const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    aset_equipment
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
            last_page,
            current_page,
        },
    },
    action,
} = aset_equipment

const map_aset_equipment = {
    computed: {
        ...mapGetters({
            get_aset_equipment_columns: columns,
            get_aset_equipment_selectedColumns: selectedColumns,
            get_aset_equipment_displayColumns: displayColumns,
            get_aset_equipment_separator: separator,
            get_aset_equipment_visibleColumns: visibleColumns,
            get_aset_equipment_selected: selected,
            get_aset_equipment_loading: loading,

            get_aset_equipment_pagination: pagination,
            get_aset_equipment_data: data,
            get_aset_equipment_last_page: last_page,
            get_aset_equipment_current_page: current_page,
        }),
    },
    methods: {
        ...mapActions({
            set_aset_equipment: action,
        }),
    },
}

export default map_aset_equipment