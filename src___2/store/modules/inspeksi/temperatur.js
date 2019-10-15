const {
    inspeksi_temperatur
} = require("../../namespaces/index");

const state = {
    config: {
        static: { // once
            /*
             * reserve data-table
             */
            columns: [{
                    name: "belong_employee.name_employee",
                    label: "Karyawan",
                    field: "belong_employee.name_employee",
                    align: "center",
                    sortable: true,
                    required: true,
                },


                // {
                //     name: "equipment_inspection",
                //     label: "Kode Alat",
                //     field: "equipment_inspection",
                //     align: "center",
                //     sortable: true,
                //     required: true,
                // },
                {
                    name: "belong_library_equipment.name_equipment",
                    label: "Alat",
                    field: "belong_library_equipment.name_equipment",
                    align: "center",
                    sortable: true,
                },

                // {
                //     name: "uuid",
                //     label: "ID",
                //     field: "uuid",
                //     sortable: true,
                //     align: "left"
                // },
                // {
                //     name: "uuid_tb_employee",
                //     label: "ID Karywan",
                //     field: "uuid_tb_employee",
                //     align: "left",
                //     sortable: true,
                // },
                // {
                //     name: "uuid_tb_inspection",
                //     label: "ID Inspeksi",
                //     field: "uuid_tb_inspection",
                //     align: "left",
                //     sortable: true,
                // },
                // {
                //     name: "equipment_inspection",
                //     label: "Alat",
                //     field: "equipment_inspection",
                //     align: "left",
                //     sortable: true,
                // },


                // {
                //     name: "location_inspection",
                //     label: "Kode Lokasi",
                //     field: "location_inspection",
                //     align: "left",
                //     sortable: true,
                // },
                {
                    name: "belong_library_location.name_location",
                    label: "Lokasi",
                    field: "belong_library_location.name_location",
                    align: "left",
                    sortable: true,
                },

                {
                    name: "place_inspection",
                    label: "Letak",
                    field: "place_inspection",
                    align: "left",
                    sortable: true,
                },

                {
                    name: "condition_inspection",
                    label: "Kondisi",
                    field: "condition_inspection",
                    align: "left",
                    sortable: true,
                },
                {
                    name: "grease_shoot_inspection",
                    label: "Grease Shoot",
                    field: "grease_shoot_inspection",
                    align: "left",
                    sortable: true,
                },
                {
                    name: "weather_inspection",
                    label: "Cuaca",
                    field: "weather_inspection",
                    align: "left",
                    sortable: true,
                },
                {
                    name: "temperature_inspection",
                    label: "Temperatur",
                    field: "temperature_inspection",
                    align: "left",
                    sortable: true,
                },
                {
                    name: "rain_inspection",
                    label: "Hujan",
                    field: "rain_inspection",
                    align: "left",
                    sortable: true,
                },
                {
                    name: "current_upnormal_inspection",
                    label: "Upnormal Sekarang",
                    field: "current_upnormal_inspection",
                    align: "left",
                    sortable: true,
                },
                {
                    name: "last_upnormal_inspection",
                    label: "Upnormal Sebelumnya",
                    field: "last_upnormal_inspection",
                    align: "left",
                    sortable: true,
                },
                {
                    name: "screenshoot_inspection",
                    label: "Screenshoot",
                    field: "screenshoot_inspection",
                    align: "left",
                    sortable: true,
                },
                {
                    name: "created_at",
                    label: "Dibuat",
                    field: "created_at",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "updated_at",
                    label: "Diperbarui",
                    field: "updated_at",
                    sortable: true,
                    align: "left"
                }
            ],
            // filter option
            selectedColumns: [
                // {
                //     value: "uuid",
                //     label: "ID Inspeksi",
                // },


                {
                    value: "uuid_tb_employee",
                    label: "ID Karywan",
                },
                {
                    value: "uuid_tb_inspection",
                    label: "ID Inspeksi",
                },
                {
                    value: "belong_employee.name_employee",
                    label: "Karyawan",
                },

                {
                    value: "belong_library_equipment.name_equipment",
                    label: "Alat",
                },
                // {
                //     value: "equipment_inspection",
                //     label: "Kode Alat",
                // },

                {
                    value: "belong_library_location.name_location",
                    label: "Lokasi",
                },
                // {
                //     value: "location_inspection",
                //     label: "Kode Lokasi",
                // },
                {
                    value: "place_inspection",
                    label: "Letak",
                },
                {
                    value: "condition_inspection",
                    label: "Kondisi",
                },
                {
                    value: "grease_shoot_inspection",
                    label: "Grease Shoot",
                },
                {
                    value: "weather_inspection",
                    label: "Cuaca",
                },
                {
                    value: "temperature_inspection",
                    label: "Temperatur",
                },
                {
                    value: "rain_inspection",
                    label: "Hujan",
                },
                {
                    value: "current_upnormal_inspection",
                    label: "Upnormal Sekarang",
                },
                {
                    value: "last_upnormal_inspection",
                    label: "Upnormal Sebelumnya",
                },
                {
                    value: "screenshoot_inspection",
                    label: "Screenshoot",
                },
                {
                    value: "created_at",
                    label: "Dibuat",
                },
                {
                    value: "updated_at",
                    label: "Diperbarui",
                }
            ],
            // kolom visibility dropdown
            displayColumns: [
                // {
                //     value: "uuid",
                //     label: "ID",
                // },
                // {
                //     value: "uuid_tb_employee",
                //     label: "ID Karywan",
                // },
                // {
                //     value: "uuid_tb_inspection",
                //     label: "ID Inspeksi",
                // },
                // {
                //     value: "equipment_inspection",
                //     label: "Alat",
                // },
                // {
                //     value: "belong_employee.name_employee",
                //     label: "Karyawan",
                // },

                {
                    value: "belong_library_equipment.name_equipment",
                    label: "Alat",
                },
                {
                    value: "belong_library_location.name_location",
                    label: "Lokasi",
                },
                // {
                //     value: "location_inspection",
                //     label: "Kode Lokasi",
                // },
                {
                    value: "place_inspection",
                    label: "Letak",
                },
                {
                    value: "condition_inspection",
                    label: "Kondisi",
                },
                {
                    value: "grease_shoot_inspection",
                    label: "Grease Shoot",
                },
                {
                    value: "weather_inspection",
                    label: "Cuaca",
                },
                {
                    value: "temperature_inspection",
                    label: "Temperatur",
                },
                {
                    value: "rain_inspection",
                    label: "Hujan",
                },
                {
                    value: "current_upnormal_inspection",
                    label: "Upnormal Sekarang",
                },
                {
                    value: "last_upnormal_inspection",
                    label: "Upnormal Sebelumnya",
                },
                {
                    value: "screenshoot_inspection",
                    label: "Screenshoot",
                },
                {
                    value: "created_at",
                    label: "Dibuat",
                },
                {
                    value: "updated_at",
                    label: "Diperbarui",
                }
            ],
        },
        dynamic: { // mutable
            /*
             * reserve data-table
             */
            separator: "horizontal",
            visibleColumns: [

                // 'uuid',
                // 'uuid_tb_employee',
                // 'uuid_tb_inspection',
                // 'equipment_inspection',
                // 'location_inspection',
                // "belong_employee.name_employee",
                "belong_library_equipment.name_equipment",
                "belong_library_location.name_location",
                'place_inspection',
                'condition_inspection',
                'grease_shoot_inspection',
                'weather_inspection',
                'temperature_inspection',
                'rain_inspection',
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
            sortBy: "created_at",
            descending: false,
            page: 1,
            rowsPerPage: 25,
            rowsNumber: 1,
            // below is additional object
            // column: "created_at",
            segment: "/mutation/inspection",
            search_column: "created_at", // search_column:"" is sortBy: "",
            search_operator: "*",
            search_query_1: "",
            search_query_2: "",
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
        detail: {}
    }
};

const getters = {
    /*
     * reserve data-table
     * config
     */
    [inspeksi_temperatur.config.static.columns]: (state) => {
        return state.config.static.columns
    },
    [inspeksi_temperatur.config.static.selectedColumns]: (state) => {
        return state.config.static.selectedColumns
    },
    [inspeksi_temperatur.config.static.displayColumns]: (state) => {
        return state.config.static.displayColumns
    },
    [inspeksi_temperatur.config.dynamic.separator]: (state) => {
        return state.config.dynamic.separator
    },
    [inspeksi_temperatur.config.dynamic.visibleColumns]: (state) => {
        return state.config.dynamic.visibleColumns
    },
    [inspeksi_temperatur.config.dynamic.selected]: (state) => {
        return state.config.dynamic.selected
    },
    [inspeksi_temperatur.config.dynamic.loading]: (state) => {
        return state.config.dynamic.loading
    },
    /*
     * reserve data-table
     * data
     */
    [inspeksi_temperatur.data.pagination]: (state) => {
        return state.data.pagination
    },
    [inspeksi_temperatur.data.payload.data]: (state) => {
        return state.data.payload.data
    },
    [inspeksi_temperatur.data.payload.last_page]: (state) => {
        return state.data.payload.last_page
    },
    [inspeksi_temperatur.data.payload.current_page]: (state) => {
        return state.data.payload.current_page
    },
    /*
     * method data-table
     * data
     * master -> detail
     */
    [inspeksi_temperatur.data.detail.select]: (state) => {
        return state.data.detail
    },

};

const mutations = {
    /*
     * reserve data-table
     * config
     */
    [inspeksi_temperatur.config.dynamic.separator]: (state, data) => {
        state.config.dynamic.separator = data
    },
    [inspeksi_temperatur.config.dynamic.visibleColumns]: (state, data) => {
        state.config.dynamic.visibleColumns = data
    },
    [inspeksi_temperatur.config.dynamic.selected]: (state, data) => {
        state.config.dynamic.selected = data
    },
    [inspeksi_temperatur.config.dynamic.loading]: (state, data) => {
        state.config.dynamic.loading = data
    },
    /*
     * reserve data-table
     * data
     */
    [inspeksi_temperatur.data.pagination]: (state, data) => {
        state.data.pagination = data
        console.log('inspeksi_temperatur.data.pagination', state.data.pagination);
    },
    [inspeksi_temperatur.data.payload.data]: (state, data) => {
        state.data.payload = data
        // console.log('mutation data', state.data.payload);

    },
    /*
     * method data-table
     * master -> detail
     */
    [inspeksi_temperatur.data.detail.select]: (state, id) => {
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
    [inspeksi_temperatur.data.detail.splice]: (state, id) => {
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
    [inspeksi_temperatur.data.detail.update]: (state, data) => {
        state.data.detail = data
    },
    [inspeksi_temperatur.data.detail.delete]: (state) => {
        state.data.detail = {};
    },
};

const actions = {
    [inspeksi_temperatur.action]: ({
        commit
    }, payload) => {

        switch (payload.type) {
            case 'separator':
                commit(inspeksi_temperatur.config.dynamic.separator, payload.data);
                break;
            case 'visibleColumns':
                commit(inspeksi_temperatur.config.dynamic.visibleColumns, payload.data);
                break;
            case 'selected':
                commit(inspeksi_temperatur.config.dynamic.selected, payload.data);
                break;
            case 'loading':
                commit(inspeksi_temperatur.config.dynamic.loading, payload.data);
                break;

            case 'pagination':
                commit(inspeksi_temperatur.data.pagination, payload.data);
                break;
            case 'payload':
                commit(inspeksi_temperatur.data.payload.data, payload.data);
                break;

            case 'select':
                commit(inspeksi_temperatur.data.detail.select, payload.id);
                break;
            case 'splice':
                commit(inspeksi_temperatur.data.detail.splice, payload.id);
                break;
            case 'update':
                commit(inspeksi_temperatur.data.detail.update, payload.id);
                break;
            case 'delete':
                commit(inspeksi_temperatur.data.detail.delete);
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