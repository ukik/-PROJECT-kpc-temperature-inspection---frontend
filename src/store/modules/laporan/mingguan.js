const {
    laporan_mingguan
} = require("../../namespaces/index");

const state = {
    config: {
        static: { // once
            /*
             * reserve data-table
             */


            columns: [{
                    name: "week",
                    label: "Minggu",
                    field: "week",
                    align: "left",
                    sortable: false
                },
                {
                    name: "year",
                    label: "Tahun",
                    field: "year",
                    align: "left",
                    sortable: false
                },
                {
                    name: "month",
                    label: "Bulan",
                    field: "month",
                    align: "left",
                    sortable: false
                },
                {
                    name: "month_name",
                    label: "Nama Bulan",
                    field: "month_name",
                    align: "left",
                    sortable: false
                },
                {
                    name: "day",
                    label: "Hari",
                    field: "day",
                    align: "left",
                    sortable: false
                },
                {
                    name: "day_name",
                    label: "Nama Hari",
                    field: "day_name",
                    align: "left",
                    sortable: false
                },
                {
                    name: "date",
                    label: "Tanggal",
                    field: "date",
                    align: "left",
                    sortable: false
                },
                {
                    name: "time",
                    label: "Waktu",
                    field: "time",
                    align: "left",
                    sortable: false
                },
                {
                    name: "no",
                    label: "Nomor",
                    field: "no",
                    align: "left",
                    sortable: false
                },
                {
                    name: "uuid",
                    label: "ID",
                    field: "uuid",
                    align: "left",
                    sortable: false
                },
                {
                    name: "uuid_tb_employee",
                    label: "ID Karyawan",
                    field: "uuid_tb_employee",
                    align: "left",
                    sortable: false
                },
                {
                    name: "uuid_tb_inspection",
                    label: "ID Inspeksi",
                    field: "uuid_tb_inspection",
                    align: "left",
                    sortable: false
                },
                {
                    name: "uuid_tb_location",
                    label: "ID Lokasi",
                    field: "uuid_tb_location",
                    align: "left",
                    sortable: false
                },
                {
                    name: "uuid_tb_equipment",
                    label: "ID Alat",
                    field: "uuid_tb_equipment",
                    align: "left",
                    sortable: false
                },
                {
                    name: "uuid_tb_equipment",
                    label: "ID Alat",
                    field: "uuid_tb_equipment",
                    align: "left",
                    sortable: false
                },
                {
                    name: "place_inspection",
                    label: "Letak",
                    field: "place_inspection",
                    align: "left",
                    sortable: false
                },
                {
                    name: "avg_condition_inspection",
                    label: "Rata-rata Kondisi",
                    field: "avg_condition_inspection",
                    align: "left",
                    sortable: false
                },
                {
                    name: "avg_grease_shoot_inspection",
                    label: "Rata-rata Grease Shoot",
                    field: "avg_grease_shoot_inspection",
                    align: "left",
                    sortable: false
                },
                {
                    name: "avg_weather_inspection",
                    label: "Rata-rata Cuaca",
                    field: "avg_weather_inspection",
                    align: "left",
                    sortable: false
                },
                {
                    name: "avg_temperature_inspection",
                    label: "Rata-rata Temperatur",
                    field: "avg_temperature_inspection",
                    align: "left",
                    sortable: false
                },
                {
                    name: "avg_rain_inspection",
                    label: "Rata-rata Hujan",
                    field: "avg_rain_inspection",
                    align: "left",
                    sortable: false
                },
                {
                    name: "current_upnormal_inspection",
                    label: "Upnormal Sekarang",
                    field: "current_upnormal_inspection",
                    align: "left",
                    sortable: false
                },
                {
                    name: "last_upnormal_inspection",
                    label: "Upnormal Sebelumnya",
                    field: "last_upnormal_inspection",
                    align: "left",
                    sortable: false
                },
                {
                    name: "screenshoot_inspection",
                    label: "Screenshoot",
                    field: "screenshoot_inspection",
                    align: "left",
                    sortable: false
                },
                {
                    name: "created_at",
                    label: "Dibuat",
                    field: "created_at",
                    sortable: false,
                    align: "left"
                }, {
                    name: "updated_at",
                    label: "Diperbarui",
                    field: "updated_at",
                    sortable: false,
                    align: "left"
                }
            ],
            selectedColumns: [{
                value: "week",
                label: "Minggu",
            }, {
                value: "year",
                label: "Tahun",
            }, {
                value: "month",
                label: "Bulan",
            }, {
                value: "month_name",
                label: "Nama Bulan",
            }, {
                value: "day",
                label: "Hari",
            }, {
                value: "day_name",
                label: "Nama Hari",
            }, {
                value: "date",
                label: "Tanggal",
            }, {
                value: "time",
                label: "Waktu",
            }, {
                value: "no",
                label: "Nomor",
            }, {
                value: "uuid",
                label: "ID",
            }, {
                value: "uuid_tb_employee",
                label: "ID Karyawan",
            }, {
                value: "uuid_tb_inspection",
                label: "ID Inspeksi",
            }, {
                value: "uuid_tb_location",
                label: "ID Lokasi",
            }, {
                value: "uuid_tb_equipment",
                label: "ID Alat",
            }, {
                value: "uuid_tb_equipment",
                label: "ID Alat",
            }, {
                value: "place_inspection",
                label: "Letak",
            }, {
                value: "avg_condition_inspection",
                label: "Rata-rata Kondisi",
            }, {
                value: "avg_grease_shoot_inspection",
                label: "Rata-rata Grease Shoot",
            }, {
                value: "avg_weather_inspection",
                label: "Rata-rata Cuaca",
            }, {
                value: "avg_temperature_inspection",
                label: "Rata-rata Temperatur",
            }, {
                value: "avg_rain_inspection",
                label: "Rata-rata Hujan",
            }, {
                value: "current_upnormal_inspection",
                label: "Upnormal Sekarang",
            }, {
                value: "last_upnormal_inspection",
                label: "Upnormal Sebelumnya",
            }, {
                value: "screenshoot_inspection",
                label: "Screenshoot",
            }, {
                value: "created_at",
                label: "Dibuat",
            }, {
                value: "updated_at",
                label: "Diperbarui",
            }],
            displayColumns: [{
                value: "week",
                label: "Minggu",
            }, {
                value: "year",
                label: "Tahun",
            }, {
                value: "month",
                label: "Bulan",
            }, {
                value: "month_name",
                label: "Nama Bulan",
            }, {
                value: "day",
                label: "Hari",
            }, {
                value: "day_name",
                label: "Nama Hari",
            }, {
                value: "date",
                label: "Tanggal",
            }, {
                value: "time",
                label: "Waktu",
            }, {
                value: "no",
                label: "Nomor",
            }, {
                value: "uuid",
                label: "ID",
            }, {
                value: "uuid_tb_employee",
                label: "ID Karyawan",
            }, {
                value: "uuid_tb_inspection",
                label: "ID Inspeksi",
            }, {
                value: "uuid_tb_location",
                label: "ID Lokasi",
            }, {
                value: "uuid_tb_equipment",
                label: "ID Alat",
            }, {
                value: "uuid_tb_equipment",
                label: "ID Alat",
            }, {
                value: "place_inspection",
                label: "Letak",
            }, {
                value: "avg_condition_inspection",
                label: "Rata-rata Kondisi",
            }, {
                value: "avg_grease_shoot_inspection",
                label: "Rata-rata Grease Shoot",
            }, {
                value: "avg_weather_inspection",
                label: "Rata-rata Cuaca",
            }, {
                value: "avg_temperature_inspection",
                label: "Rata-rata Temperatur",
            }, {
                value: "avg_rain_inspection",
                label: "Rata-rata Hujan",
            }, {
                value: "current_upnormal_inspection",
                label: "Upnormal Sekarang",
            }, {
                value: "last_upnormal_inspection",
                label: "Upnormal Sebelumnya",
            }, {
                value: "screenshoot_inspection",
                label: "Screenshoot",
            }, {
                value: "created_at",
                label: "Dibuat",
            }, {
                value: "updated_at",
                label: "Diperbarui",
            }],
        },
        dynamic: { // mutable
            /*
             * reserve data-table
             */
            equipmentColumns: [],
            locationColumns: [],
            separator: "horizontal",
            visibleColumns: [
                // "uuid",
                'week',
                'year',
                'month',
                'month_name',
                'day',
                'day_name',
                'date',
                'time',
                'no',
                'uuid',
                'uuid_tb_employee',
                'uuid_tb_inspection',
                'uuid_tb_location',
                'uuid_tb_equipment',
                'place_inspection',
                'avg_condition_inspection',
                'avg_grease_shoot_inspection',
                'avg_weather_inspection',
                'avg_temperature_inspection',
                'avg_rain_inspection',
                'current_upnormal_inspection',
                'last_upnormal_inspection',
                'screenshoot_inspection',
                'created_at',
                'updated_at',
            ],
            selected: [],
            loading: false,
        }
    },
    data: {
        pagination: {
            sortBy: "week",
            descending: true,
            page: 1,
            rowsPerPage: 25,
            rowsNumber: 1,
            // below is additional object
            column: "week",
            segment: "/report/inspection",
            search_column: "week", // search_column:"" is sortBy: "",
            search_operator: "*",
            search_query_1: "",
            search_query_2: "",
            // addition
            place: "",
            week: 1,
            equipment: null,
            location: null,
        },
        payload: {
            last_page: 0,
            current_page: 0,
            data: []
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {},
        // addition report

    }
};

const getters = {
    /*
     * reserve data-table
     * config
     */
    [laporan_mingguan.config.static.columns]: (state) => {
        return state.config.static.columns
    },
    [laporan_mingguan.config.static.selectedColumns]: (state) => {
        return state.config.static.selectedColumns
    },
    [laporan_mingguan.config.static.displayColumns]: (state) => {
        return state.config.static.displayColumns
    },
    [laporan_mingguan.config.dynamic.separator]: (state) => {
        return state.config.dynamic.separator
    },
    [laporan_mingguan.config.dynamic.visibleColumns]: (state) => {
        return state.config.dynamic.visibleColumns
    },
    [laporan_mingguan.config.dynamic.selected]: (state) => {
        return state.config.dynamic.selected
    },
    [laporan_mingguan.config.dynamic.loading]: (state) => {
        return state.config.dynamic.loading
    },
    [laporan_mingguan.config.dynamic.equipmentColumns]: (state) => {
        return state.config.dynamic.equipmentColumns
    },
    [laporan_mingguan.config.dynamic.locationColumns]: (state) => {
        return state.config.dynamic.locationColumns
    },

    /*
     * reserve data-table
     * data
     */
    [laporan_mingguan.data.pagination]: (state) => {
        return state.data.pagination
    },
    [laporan_mingguan.data.payload.data]: (state) => {
        return state.data.payload.data
    },
    [laporan_mingguan.data.payload.last_page]: (state) => {
        return state.data.payload.last_page
    },
    [laporan_mingguan.data.payload.current_page]: (state) => {
        return state.data.payload.current_page
    },
    /*
     * method data-table
     * data
     * master -> detail
     */
    [laporan_mingguan.data.detail.select]: (state) => {
        return state.data.detail
    },

};

const mutations = {
    /*
     * reserve data-table
     * config
     */
    [laporan_mingguan.config.dynamic.separator]: (state, data) => {
        state.config.dynamic.separator = data
    },
    [laporan_mingguan.config.dynamic.visibleColumns]: (state, data) => {
        state.config.dynamic.visibleColumns = data
    },
    [laporan_mingguan.config.dynamic.selected]: (state, data) => {
        state.config.dynamic.selected = data
    },
    [laporan_mingguan.config.dynamic.loading]: (state, data) => {
        state.config.dynamic.loading = data
    },
    [laporan_mingguan.config.dynamic.equipmentColumns]: (state, data) => {
        state.config.dynamic.equipmentColumns = data
    },
    [laporan_mingguan.config.dynamic.locationColumns]: (state, data) => {
        state.config.dynamic.locationColumns = data
    },

    /*
     * reserve data-table
     * data
     */
    [laporan_mingguan.data.pagination]: (state, data) => {
        state.data.pagination = data
    },
    [laporan_mingguan.data.payload.data]: (state, data) => {
        state.data.payload = data
    },
    /*
     * method data-table
     * master -> detail
     */
    [laporan_mingguan.data.detail.select]: (state, id) => {
        const data = state.data.payload.data
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (id == element.uuid) {
                    state.data.detail = element;
                }
            }
        }
    },
    [laporan_mingguan.data.detail.splice]: (state, id) => {
        const data = state.data.payload.data
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (id == element.uuid) {
                    data.splice(i, 1)
                }
            }
        }
    },
    [laporan_mingguan.data.detail.update]: (state, data) => {
        state.data.detail = data
    },
    [laporan_mingguan.data.detail.delete]: (state) => {
        state.data.detail = {};
    },
};

const actions = {
    [laporan_mingguan.action]: ({
        commit
    }, payload) => {


        switch (payload.type) {
            case 'separator':
                commit(laporan_mingguan.config.dynamic.separator, payload.data);
                break;
            case 'visibleColumns':
                commit(laporan_mingguan.config.dynamic.visibleColumns, payload.data);
                break;
            case 'selected':
                commit(laporan_mingguan.config.dynamic.selected, payload.data);
                break;
            case 'loading':
                commit(laporan_mingguan.config.dynamic.loading, payload.data);
                break;
            case 'equipmentColumns':
                commit(laporan_mingguan.config.dynamic.equipmentColumns, payload.data);
                break;
            case 'locationColumns':
                commit(laporan_mingguan.config.dynamic.locationColumns, payload.data);
                break;

            case 'pagination':
                commit(laporan_mingguan.data.pagination, payload.data);
                break;
            case 'payload':
                commit(laporan_mingguan.data.payload.data, payload.data);
                break;

            case 'select':
                commit(laporan_mingguan.data.detail.select, payload.id);
                break;
            case 'splice':
                commit(laporan_mingguan.data.detail.splice, payload.id);
                break;
            case 'update':
                commit(laporan_mingguan.data.detail.update, payload.id);
                break;
            case 'delete':
                commit(laporan_mingguan.data.detail.delete);
                break;
        }
    },

};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}