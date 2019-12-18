const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    aset_location
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
} = aset_location

const map_aset_location = {
    computed: {
        ...mapGetters({
            get_aset_location_columns: columns,
            get_aset_location_selectedColumns: selectedColumns,
            get_aset_location_displayColumns: displayColumns,
            get_aset_location_separator: separator,
            get_aset_location_visibleColumns: visibleColumns,
            get_aset_location_selected: selected,
            get_aset_location_loading: loading,

            get_aset_location_pagination: pagination,
            get_aset_location_data: data,
            get_aset_location_last_page: last_page,
            get_aset_location_current_page: current_page,
        }),
    },
    methods: {
        ...mapActions({
            set_aset_location: action,
        }),
    },
}

export default map_aset_location