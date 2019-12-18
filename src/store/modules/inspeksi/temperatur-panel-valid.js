const {
    inspeksi_temperatur_panel_valid
} = require("../../namespaces/index");

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
            grid,
        }
    },
    data: {
        pagination,
        payload: {
            data,
            replace,
            remove,
            last_page,
            current_page,
        },
    },
    action
} = inspeksi_temperatur_panel_valid

const tableColumns = {
    uuid: {
        name: "uuid",
        label: "ID Inspeksi",
        field: "uuid",
        value: "uuid",
        align: "left",
        sortable: true,
        required: false,
    },
    uuid_tb_employee: {
        name: "uuid_tb_employee",
        label: "ID Karyawan",
        field: "uuid_tb_employee",
        value: "uuid_tb_employee",
        align: "left",
        sortable: true,
        required: false,
    },
    uuid_tb_location: {
        name: "uuid_tb_location",
        label: "ID Lokasi",
        field: "uuid_tb_location",
        value: "uuid_tb_location",
        align: "left",
        sortable: true,
        required: false,
    },
    uuid_tb_schedule: {
        name: "uuid_tb_schedule",
        label: "ID Jadwal",
        field: "uuid_tb_schedule",
        value: "uuid_tb_schedule",
        align: "left",
        sortable: true,
        required: false,
    },
    uuid_tb_equipment: {
        name: "uuid_tb_equipment",
        label: "ID Alat",
        field: "uuid_tb_equipment",
        value: "uuid_tb_equipment",
        align: "left",
        sortable: true,
        required: false,
    },
    place_inspection: {
        name: "place_inspection",
        label: "Letak",
        field: "place_inspection",
        value: "place_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    condition_inspection: {
        name: "condition_inspection",
        label: "Kondisi",
        field: "condition_inspection",
        value: "condition_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    grease_shoot_inspection: {
        name: "grease_shoot_inspection",
        label: "Grease Shoot",
        field: "grease_shoot_inspection",
        value: "grease_shoot_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    weather_inspection: {
        name: "weather_inspection",
        label: "Cuaca",
        field: "weather_inspection",
        value: "weather_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    temperature_inspection: {
        name: "temperature_inspection",
        label: "Temperatur",
        field: "temperature_inspection",
        value: "temperature_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    rain_inspection: {
        name: "rain_inspection",
        label: "Curah Hujan",
        field: "rain_inspection",
        value: "rain_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    current_upnormal_inspection: {
        name: "current_upnormal_inspection",
        label: "Upnormal Sekarang",
        field: "current_upnormal_inspection",
        value: "current_upnormal_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    current_upnormal_description_inspection: {
        name: "current_upnormal_description_inspection",
        label: "Deskripsi Upnormal Sekarang",
        field: "current_upnormal_description_inspection",
        value: "current_upnormal_description_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    last_upnormal_inspection: {
        name: "last_upnormal_inspection",
        label: "Upnormal Sebelumnya",
        field: "last_upnormal_inspection",
        value: "last_upnormal_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    last_upnormal_description_inspection: {
        name: "last_upnormal_description_inspection",
        label: "Deskripsi Upnormal Sebelumnya",
        field: "last_upnormal_description_inspection",
        value: "last_upnormal_description_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    common_description_inspection: {
        name: "common_description_inspection",
        label: "Deskripsi Tambahan",
        field: "common_description_inspection",
        value: "common_description_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    screenshoot_inspection: {
        name: "screenshoot_inspection",
        label: "Screenshoot",
        field: "screenshoot_inspection",
        value: "screenshoot_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    valid_inspection: {
        name: "valid_inspection",
        label: "Valid",
        field: "valid_inspection",
        value: "valid_inspection",
        align: "left",
        sortable: true,
        required: false,
    },
    created_at: {
        name: "created_at",
        label: "Dibuat",
        field: "created_at",
        value: "created_at",
        align: "left",
        sortable: true,
        required: false,
    },
    updated_at: {
        name: "updated_at",
        label: "Divalidasi",
        field: "updated_at",
        value: "updated_at",
        align: "left",
        sortable: true,
        required: false,
    },
    name_employee: {
        name: "name_employee",
        label: "Karyawan",
        field: "name_employee",
        value: "name_employee",
        align: "left",
        sortable: true,
        required: false,
    },
    label_equipment: {
        name: "label_equipment",
        label: "Label Alat",
        field: "label_equipment",
        value: "label_equipment",
        align: "left",
        sortable: true,
        required: false,
    },
    name_equipment: {
        name: "name_equipment",
        label: "Nama Alat",
        field: "name_equipment",
        value: "name_equipment",
        align: "left",
        sortable: true,
        required: false,
    },
    label_location: {
        name: "label_location",
        label: "Label Lokasi",
        field: "label_location",
        value: "label_location",
        align: "left",
        sortable: true,
        required: false,
    },
    name_location: {
        name: "name_location",
        label: "Lokasi",
        field: "name_location",
        value: "name_location",
        align: "left",
        sortable: true,
        required: false,
    },

    label_schedule: {
        name: "label_schedule",
        label: "Label Jadwal",
        field: "label_schedule",
        value: "label_schedule",
        align: "left",
        sortable: true,
        required: false,
    },
    starttime_schedule: {
        name: "starttime_schedule",
        label: "Waktu Masuk",
        field: "starttime_schedule",
        value: "starttime_schedule",
        align: "left",
        sortable: true,
        required: false,
    },
    endtime_schedule: {
        name: "endtime_schedule",
        label: "Waktu Keluar",
        field: "endtime_schedule",
        value: "endtime_schedule",
        align: "left",
        sortable: true,
        required: false,
    }
}

const state = {
    config: {
        static: { // once
            columns: [
                tableColumns.name_employee,
                tableColumns.uuid,
                tableColumns.uuid_tb_employee,
                tableColumns.uuid_tb_location,
                tableColumns.uuid_tb_equipment,
                tableColumns.uuid_tb_schedule,

                tableColumns.created_at,
                tableColumns.updated_at,

                tableColumns.name_equipment,
                tableColumns.name_location,
                tableColumns.place_inspection,
                tableColumns.condition_inspection,
                tableColumns.grease_shoot_inspection,
                tableColumns.weather_inspection,
                tableColumns.temperature_inspection,
                tableColumns.rain_inspection,
                tableColumns.current_upnormal_inspection,
                tableColumns.last_upnormal_inspection,
                // tableColumns.screenshoot_inspection,
                tableColumns.label_schedule,
                tableColumns.starttime_schedule,
                tableColumns.endtime_schedule,
                tableColumns.valid_inspection,
            ],
            // filter option
            selectedColumns: [
                tableColumns.uuid,
                // tableColumns.uuid_tb_employee,
                // tableColumns.uuid_tb_location,
                // tableColumns.uuid_tb_equipment,
                // tableColumns.uuid_tb_schedule,
                tableColumns.name_employee,

                tableColumns.created_at,
                tableColumns.updated_at,

                tableColumns.name_equipment,
                tableColumns.name_location,
                tableColumns.place_inspection,
                tableColumns.condition_inspection,
                tableColumns.grease_shoot_inspection,
                tableColumns.weather_inspection,
                tableColumns.temperature_inspection,
                tableColumns.rain_inspection,
            ],
            // kolom visibility dropdown
            displayColumns: [
                // tableColumns.uuid,
                // tableColumns.uuid_tb_employee,
                // tableColumns.uuid_tb_location,
                // tableColumns.uuid_tb_equipment,
                // tableColumns.uuid_tb_schedule,
                tableColumns.name_equipment,
                tableColumns.name_location,
                tableColumns.place_inspection,
                tableColumns.condition_inspection,
                tableColumns.grease_shoot_inspection,
                tableColumns.weather_inspection,
                tableColumns.temperature_inspection,
                tableColumns.rain_inspection,
                tableColumns.created_at,
                tableColumns.updated_at,
            ],
        },
        dynamic: { // mutable
            separator: "horizontal",
            visibleColumns: [
                "name_employee",

                'created_at',
                'updated_at',

                "name_equipment",
                "name_location",
                'place_inspection',
                'condition_inspection',
                'grease_shoot_inspection',
                'weather_inspection',
                'temperature_inspection',
                'rain_inspection',
            ],
            selected: [],
            loading: false,
            grid: false,
        }
    },
    data: {
        pagination: {
            sortBy: "created_at",
            descending: true,
            page: 1,
            rowsPerPage: 25,
            rowsNumber: 1,
            segment: "/mutation/inspection",
            search_column: "created_at",
            search_operator: "*",
            search_query_1: "",
            search_query_2: "",
            month: function() {
                return '01'
                const month = new Date().getMonth()
                return (month <= 9 ? '0' + month : month).toString()
            }(),
            year: new Date().getFullYear(),
        },
        payload: {
            last_page: 0,
            current_page: 0,
            data: []
        },
    }
};

const getters = {
    [columns]: (state) => {
        return state.config.static.columns
    },
    [selectedColumns]: (state) => {
        return state.config.static.selectedColumns
    },
    [displayColumns]: (state) => {
        return state.config.static.displayColumns
    },
    [separator]: (state) => {
        return state.config.dynamic.separator
    },
    [visibleColumns]: (state) => {
        return state.config.dynamic.visibleColumns
    },
    [selected]: (state) => {
        return state.config.dynamic.selected
    },
    [loading]: (state) => {
        return state.config.dynamic.loading
    },
    [grid]: (state) => {
        return state.config.dynamic.grid
    },

    [pagination]: (state) => {
        return state.data.pagination
    },
    [data]: (state) => {
        try {
            let dataArray = [
                ...state.data.payload.data
            ];

            for (let i = 0; i < dataArray.length; i++) {
                dataArray[i]['__index'] = i
            }

            return dataArray

        } catch (error) {
            return state.data.payload.data == null ? [] : state.data.payload.data
        }
    },
    [last_page]: (state) => {
        return state.data.payload.last_page
    },
    [current_page]: (state) => {
        return state.data.payload.current_page
    },
};

const mutations = {
    [separator]: (state, data) => {
        state.config.dynamic.separator = data
    },
    [visibleColumns]: (state, data) => {
        state.config.dynamic.visibleColumns = data
    },
    [selected]: (state, data) => {
        state.config.dynamic.selected = data
    },
    [loading]: (state, data) => {
        state.config.dynamic.loading = data
    },
    [grid]: (state) => {
        state.config.dynamic.grid = !state.config.dynamic.grid
    },

    [pagination]: (state, data) => {
        state.data.pagination = data
            // console.log('inspeksi_temperatur_panel_valid.data.pagination', state.data.pagination);
    },
    [data]: (state, data) => {
        state.data.payload = data
            // console.log('mutation data', state.data.payload);

    },
    [replace]: (state, params) => {
        // me-replace data di payload.data[] setelah berhasil update oleh axios

        const data = state.data.payload.data
        if (data.length > 0) {
            // console.log('mutation modules/inspeksi/temperatur_panel_valid.js ', params);
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                // console.log(element.uuid);
                if (params.uuid == element.uuid) {
                    state.data.payload.data[i].uuid_tb_employee = params.uuid_tb_employee;
                    state.data.payload.data[i].uuid_tb_schedule = params.uuid_tb_schedule;
                    state.data.payload.data[i].uuid_tb_location = params.uuid_tb_location;
                    state.data.payload.data[i].uuid_tb_equipment = params.uuid_tb_equipment;
                    state.data.payload.data[i].uuid_tb_equipment = params.uuid_tb_equipment;
                    state.data.payload.data[i].place_inspection = params.place_inspection;
                    state.data.payload.data[i].condition_inspection = params.condition_inspection;
                    state.data.payload.data[i].grease_shoot_inspection = params.grease_shoot_inspection;
                    state.data.payload.data[i].weather_inspection = params.weather_inspection;
                    state.data.payload.data[i].temperature_inspection = params.temperature_inspection;
                    state.data.payload.data[i].rain_inspection = params.rain_inspection;
                    state.data.payload.data[i].valid_inspection = params.valid_inspection;
                    state.data.payload.data[i].current_upnormal_inspection = params.current_upnormal_inspection;
                    state.data.payload.data[i].current_upnormal_description_inspection = params.current_upnormal_description_inspection;
                    state.data.payload.data[i].last_upnormal_inspection = params.last_upnormal_inspection;
                    state.data.payload.data[i].last_upnormal_description_inspection = params.last_upnormal_description_inspection;
                    state.data.payload.data[i].common_description_inspection = params.common_description_inspection;
                    state.data.payload.data[i].created_at = params.created_at;
                    state.data.payload.data[i].updated_at = params.updated_at;
                }
            }
        }
    },
    [remove]: (state, params) => {
        const data = state.data.payload.data
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (params.uuid == element.uuid) {
                    state.data.payload.data[i].splice(i, 1)
                }
            }
        }
    },
};

const actions = {
    [action]: ({
        commit,
        state
    }, payload) => {

        switch (payload.type) {
            case 'separator':
                commit(separator, payload.data);
                break;
            case 'visibleColumns':
                commit(visibleColumns, payload.data);
                break;
            case 'selected':
                commit(selected, payload.data);
                break;
            case 'loading':
                commit(loading, payload.data);
                break;
            case 'grid':
                commit(grid);
                break;

            case 'pagination':
                commit(pagination, payload.data);
                break;
            case 'payload':
                commit(data, payload.data);
                break;
            case "replace":
                commit(replace, payload.data);
                break;
            case "add":
                state.data.payload.data.push(payload.data)
                break;
            case "add_valid":
                let data_valid = {
                    ...payload.data
                }
                data_valid['valid_inspection'] = true
                state.data.payload.data.push(data_valid)
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