const karyawan_biodata = {
    config: {
        static: {
            columns: 'karyawan_biodata/config/static/columns',
            selectedColumns: 'karyawan_biodata/config/static/selectedColumns',
            displayColumns: 'karyawan_biodata/config/static/displayColumns',
        },
        dynamic: {
            separator: 'karyawan_biodata/config/dynamic/separator',
            visibleColumns: 'karyawan_biodata/config/dynamic/visibleColumns',
            selected: 'karyawan_biodata/config/dynamic/selected',
            loading: 'karyawan_biodata/config/dynamic/loading',
        }
    },
    data: {
        pagination: 'karyawan_biodata/data/pagination',
        payload: {
            data: 'karyawan_biodata/data/payload/data',
            replace: 'karyawan_biodata/data/payload/replace',
            last_page: 'karyawan_biodata/data/payload/last_page',
            current_page: 'karyawan_biodata/data/payload/current_page',
        },
    },
    action: 'karyawan_biodata/action',
}

module.exports = karyawan_biodata