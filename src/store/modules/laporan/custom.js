const {
    laporan_custom
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
            equipmentColumns,
            locationColumns,

            chartLabel,
            chartDataCondition,
            chartDataGreaseShoot,
            chartDataWeather,
            chartDataTemperature,
            chartDataRain,
        }
    },
    data: {
        pagination,
        payload: {
            data,
        },
    },
    action,
} = laporan_custom


function getCapitalize(str) {
    if (str == undefined)
        return str
    if (str == null)
        return str

    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
}

function getUpper(str) {
    if (str == undefined)
        return str
    if (str == null)
        return str

    return str.toUpperCase();
}

const tableColumns = {
    week: {
        name: "week",
        label: "Minggu",
        field: "week",
        value: "week",
        align: "left",
        sortable: false,
        required: false,
    },
    year: {
        name: "year",
        label: "Tahun",
        field: "year",
        value: "year",
        align: "left",
        sortable: false,
        required: false,
    },
    month: {
        name: "month",
        label: "Bulan",
        field: "month",
        value: "month",
        align: "left",
        sortable: false,
        required: false,
    },
    month_name: {
        name: "month_name",
        label: "Nama Bulan",
        field: "month_name",
        value: "month_name",
        align: "left",
        sortable: false,
        required: false,
    },
    day: {
        name: "day",
        label: "Hari",
        field: "day",
        value: "day",
        align: "left",
        sortable: false,
        required: false,
    },
    day_name: {
        name: "day_name",
        label: "Nama Hari",
        field: "day_name",
        value: "day_name",
        align: "left",
        sortable: false,
        required: false,
    },
    date: {
        name: "date",
        label: "Tanggal",
        field: "date",
        value: "date",
        align: "left",
        sortable: false,
        required: false,
    },
    time: {
        name: "time",
        label: "Waktu",
        field: "time",
        value: "time",
        align: "left",
        sortable: false,
        required: false,
    },
    uuid: {
        name: "uuid",
        label: "ID",
        field: "uuid",
        value: "uuid",
        align: "left",
        sortable: false,
        required: false,
    },
    uuid_tb_employee: {
        name: "uuid_tb_employee",
        label: "ID Karyawan",
        field: "uuid_tb_employee",
        value: "uuid_tb_employee",
        align: "left",
        sortable: false,
        required: false,
    },
    uuid_tb_inspection: {
        name: "uuid_tb_inspection",
        label: "ID Inspeksi",
        field: "uuid_tb_inspection",
        value: "uuid_tb_inspection",
        align: "left",
        sortable: false,
        required: false,
    },
    uuid_tb_location: {
        name: "uuid_tb_location",
        label: "ID Lokasi",
        field: "uuid_tb_location",
        value: "uuid_tb_location",
        align: "left",
        sortable: false,
        required: false,
    },
    uuid_tb_equipment: {
        name: "uuid_tb_equipment",
        label: "ID Alat",
        field: "uuid_tb_equipment",
        value: "uuid_tb_equipment",
        align: "left",
        sortable: false,
        required: false,
    },
    place_inspection: {
        name: "place_inspection",
        label: "Letak",
        field: "place_inspection",
        value: "place_inspection",
        align: "left",
        sortable: false,
        required: false,
    },
    avg_condition_inspection: {
        name: "avg_condition_inspection",
        label: "Rata-rata Kondisi",
        field: "avg_condition_inspection",
        value: "avg_condition_inspection",
        align: "left",
        sortable: false,
        required: false,
    },
    avg_grease_shoot_inspection: {
        name: "avg_grease_shoot_inspection",
        label: "Rata-rata Grease Shoot",
        field: "avg_grease_shoot_inspection",
        value: "avg_grease_shoot_inspection",
        align: "left",
        sortable: false,
        required: false,
    },
    avg_weather_inspection: {
        name: "avg_weather_inspection",
        label: "Rata-rata Cuaca",
        field: "avg_weather_inspection",
        value: "avg_weather_inspection",
        align: "left",
        sortable: false,
        required: false,
    },
    avg_temperature_inspection: {
        name: "avg_temperature_inspection",
        label: "Rata-rata Temperatur",
        field: "avg_temperature_inspection",
        value: "avg_temperature_inspection",
        align: "left",
        sortable: false,
        required: false,
    },
    avg_rain_inspection: {
        name: "avg_rain_inspection",
        label: "Rata-rata Hujan",
        field: "avg_rain_inspection",
        value: "avg_rain_inspection",
        align: "left",
        sortable: false,
        required: false,
    },
    current_upnormal_inspection: {
        name: "current_upnormal_inspection",
        label: "Upnormal Sekarang",
        field: "current_upnormal_inspection",
        value: "current_upnormal_inspection",
        align: "left",
        sortable: false,
        required: false,
    },
    last_upnormal_inspection: {
        name: "last_upnormal_inspection",
        label: "Upnormal Sebelumnya",
        field: "last_upnormal_inspection",
        value: "last_upnormal_inspection",
        align: "left",
        sortable: false,
        required: false,
    },
    screenshoot_inspection: {
        name: "screenshoot_inspection",
        label: "Screenshoot",
        field: "screenshoot_inspection",
        value: "screenshoot_inspection",
        align: "left",
        sortable: false,
        required: false,
    },
    created_at: {
        name: "created_at",
        label: "Dibuat",
        field: "created_at",
        value: "created_at",
        align: "left",
        sortable: false,
        required: false,
    },
    updated_at: {
        name: "updated_at",
        label: "Diperbarui",
        field: "updated_at",
        value: "updated_at",
        align: "left",
        sortable: false,
        required: false,
    },
}

const state = {
    config: {
        static: { // once
            /*
             * reserve data-table
             */
            columns: [
                tableColumns.week,
                tableColumns.year,
                tableColumns.month,
                tableColumns.month_name,
                tableColumns.day,
                tableColumns.day_name,
                tableColumns.date,
                tableColumns.time,
                tableColumns.uuid,
                tableColumns.uuid_tb_employee,
                tableColumns.uuid_tb_inspection,
                tableColumns.uuid_tb_location,
                tableColumns.uuid_tb_equipment,
                tableColumns.place_inspection,
                tableColumns.avg_condition_inspection,
                tableColumns.avg_grease_shoot_inspection,
                tableColumns.avg_weather_inspection,
                tableColumns.avg_temperature_inspection,
                tableColumns.avg_rain_inspection,
                tableColumns.current_upnormal_inspection,
                tableColumns.last_upnormal_inspection,
                tableColumns.screenshoot_inspection,
                tableColumns.created_at,
                tableColumns.updated_at,
            ],
            selectedColumns: [{
                    value: "mingguan",
                    label: "Laporan Mingguan"
                },
                {
                    value: "bulanan",
                    label: "Laporan Bulanan"
                },
                {
                    value: "kuartal",
                    label: "Laporan Kuartal"
                },
            ],
            displayColumns: [
                tableColumns.week,
                tableColumns.year,
                tableColumns.month,
                tableColumns.month_name,
                tableColumns.day,
                tableColumns.day_name,
                tableColumns.date,
                tableColumns.time,
                tableColumns.uuid,
                tableColumns.uuid_tb_employee,
                tableColumns.uuid_tb_inspection,
                tableColumns.uuid_tb_location,
                tableColumns.uuid_tb_equipment,
                tableColumns.place_inspection,
                tableColumns.avg_condition_inspection,
                tableColumns.avg_grease_shoot_inspection,
                tableColumns.avg_weather_inspection,
                tableColumns.avg_temperature_inspection,
                tableColumns.avg_rain_inspection,
                tableColumns.current_upnormal_inspection,
                tableColumns.last_upnormal_inspection,
                tableColumns.screenshoot_inspection,
                tableColumns.created_at,
                tableColumns.updated_at,
            ],
        },
        dynamic: { // mutable
            equipmentColumns: [],
            locationColumns: [],
            separator: "horizontal",
            visibleColumns: [
                'week',
                'year',
                'month',
                'month_name',
                'day',
                'day_name',
                'date',
                'time',
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
            segment: "/report/inspection",
            search_column: "week",
            search_operator: "equal_to",
            search_interval: "",
            equipment: "",
            location: "",
            year: new Date().getFullYear(),
            place: "",
            // addition
            week: "",
            month: "",
            quartal: "",
        },
        payload: {
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
    [equipmentColumns]: (state) => {
        // return state.config.dynamic.equipmentColumns
        let data = state.config.dynamic.equipmentColumns
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.label = getUpper(element.label)
        }
        return data
    },
    [locationColumns]: (state) => {
        // return state.config.dynamic.locationColumns
        let data = state.config.dynamic.locationColumns
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.label = getCapitalize(element.label)
        }
        return data
    },

    [chartLabel]: (state) => (label) => {
        // return state.config.dynamic.locationColumns
        let data = state.data.payload.data
            // console.log('vuex custom', data);

        let container = []
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            container.push(element[label])
        }

        return container
    },
    [chartDataCondition]: (state) => {
        // return state.config.dynamic.locationColumns
        let data = state.data.payload.data
            // console.log('vuex custom', data);

        let container = []
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            container.push(Math.round(element.avg_condition_inspection))
        }
        return container
    },
    [chartDataGreaseShoot]: (state) => {
        // return state.config.dynamic.locationColumns
        let data = state.data.payload.data
            // console.log('vuex custom', data);

        let container = []
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            container.push(Math.round(element.avg_grease_shoot_inspection))
        }
        return container
    },
    [chartDataWeather]: (state) => {
        // return state.config.dynamic.locationColumns
        let data = state.data.payload.data
            // console.log('vuex custom', data);

        let container = []
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            container.push(Math.round(element.avg_weather_inspection))
        }
        return container
    },
    [chartDataTemperature]: (state) => {
        // return state.config.dynamic.locationColumns
        let data = state.data.payload.data
            // console.log('vuex custom', data);

        let container = []
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            container.push(Math.round(element.avg_temperature_inspection))
        }
        return container
    },
    [chartDataRain]: (state) => {
        // return state.config.dynamic.locationColumns
        let data = state.data.payload.data
            // console.log('vuex custom', data);

        let container = []
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            container.push(Math.round(element.avg_rain_inspection))
        }
        return container
    },
    [pagination]: (state) => {
        return state.data.pagination
    },
    [data]: (state) => {
        return state.data.payload.data
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
    [equipmentColumns]: (state, data) => {
        state.config.dynamic.equipmentColumns = data
    },
    [locationColumns]: (state, data) => {
        state.config.dynamic.locationColumns = data
    },

    [pagination]: (state, data) => {
        state.data.pagination = data
    },
    [data]: (state, data) => {
        state.data.payload.data = data
    },
};

const actions = {
    [action]: ({
        commit
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
            case 'equipmentColumns':
                commit(equipmentColumns, payload.data);
                break;
            case 'locationColumns':
                commit(locationColumns, payload.data);
                break;

            case 'pagination':
                commit(pagination, payload.data);
                break;
            case 'payload':
                commit(data, payload.data);
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