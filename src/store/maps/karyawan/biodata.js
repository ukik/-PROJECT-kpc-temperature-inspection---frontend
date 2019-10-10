const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    karyawan_biodata
} = require("../../namespaces");

const map_karyawan_biodata = {
    computed: {
        ...mapGetters({
            // static
            get_karyawan_biodata_columns: karyawan_biodata.config.static.columns,
            get_karyawan_biodata_selectedColumns: karyawan_biodata.config.static.selectedColumns,
            get_karyawan_biodata_displayColumns: karyawan_biodata.config.static.displayColumns,
            get_karyawan_biodata_separator: karyawan_biodata.config.dynamic.separator,
            get_karyawan_biodata_visibleColumns: karyawan_biodata.config.dynamic.visibleColumns,
            get_karyawan_biodata_selected: karyawan_biodata.config.dynamic.selected,
            get_karyawan_biodata_loading: karyawan_biodata.config.dynamic.loading,
            // dynamic
            get_karyawan_biodata_pagination: karyawan_biodata.data.pagination,
            get_karyawan_biodata_data: karyawan_biodata.data.payload.data,
            get_karyawan_biodata_last_page: karyawan_biodata.data.payload.last_page,
            get_karyawan_biodata_current_page: karyawan_biodata.data.payload.current_page,
            // detail
            get_karyawan_biodata_select: karyawan_biodata.data.detail.select,
        }),
    },
    methods: {
        ...mapActions({
            set_karyawan_biodata: karyawan_biodata.action,
        }),
    },
}

export default map_karyawan_biodata