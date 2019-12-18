const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    karyawan_biodata
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
} = karyawan_biodata

const map_karyawan_biodata = {
    computed: {
        ...mapGetters({
            get_karyawan_biodata_columns: columns,
            get_karyawan_biodata_selectedColumns: selectedColumns,
            get_karyawan_biodata_displayColumns: displayColumns,
            get_karyawan_biodata_separator: separator,
            get_karyawan_biodata_visibleColumns: visibleColumns,
            get_karyawan_biodata_selected: selected,
            get_karyawan_biodata_loading: loading,

            get_karyawan_biodata_pagination: pagination,
            get_karyawan_biodata_data: data,
            get_karyawan_biodata_last_page: last_page,
            get_karyawan_biodata_current_page: current_page,
        }),
    },
    methods: {
        ...mapActions({
            set_karyawan_biodata: action,
        }),
    },
}

export default map_karyawan_biodata