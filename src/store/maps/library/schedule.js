const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    aset_schedule
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
} = aset_schedule

const map_aset_schedule = {
    computed: {
        ...mapGetters({
            get_aset_schedule_columns: columns,
            get_aset_schedule_selectedColumns: selectedColumns,
            get_aset_schedule_displayColumns: displayColumns,
            get_aset_schedule_separator: separator,
            get_aset_schedule_visibleColumns: visibleColumns,
            get_aset_schedule_selected: selected,
            get_aset_schedule_loading: loading,

            get_aset_schedule_pagination: pagination,
            get_aset_schedule_data: data,
            get_aset_schedule_last_page: last_page,
            get_aset_schedule_current_page: current_page,
        }),
    },
    methods: {
        ...mapActions({
            set_aset_schedule: action,
        }),
    },
}

export default map_aset_schedule