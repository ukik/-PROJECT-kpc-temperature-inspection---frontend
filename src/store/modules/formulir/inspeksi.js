const {
    formulir_inspeksi
} = require("../../namespaces/index");

const {
    config: {
        dynamic: {
            equipmentColumns,
            locationColumns,
            scheduleColumns,
            employeeColumns,
        }
    },
    data: {
        form,
        update,
    },
    action,
} = formulir_inspeksi

const state = {
    config: {
        dynamic: { // mutable
            equipmentColumns: [],
            locationColumns: [],
            scheduleColumns: [],
            employeeColumns: [],
        }
    },
    data: {
        form: {
            uuid_tb_employee: '',

            uuid_tb_schedule: '',
            uuid_tb_location: '',
            uuid_tb_equipment: '',
            place_inspection: '',
            condition_inspection: '1',
            grease_shoot_inspection: '1',
            weather_inspection: '1',
            temperature_inspection: '1',
            rain_inspection: '1',
            current_upnormal_inspection: '0', // defaul 0
            current_upnormal_description_inspection: null,
            last_upnormal_inspection: '0', // defaul 0
            last_upnormal_description_inspection: null,
            common_description_inspection: null,
            year: new Date().getFullYear(),
            month: null,
            valid_inspection: ""
        },
        update: false, // true = update yang belum selesai   
    }
};

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

const getters = {
    [form]: (state) => {
        let data = state.data.form

        switch (data['current_upnormal_inspection']) {
            case "ada":
                data['current_upnormal_inspection'] = "1"
                break
            default:
                data['current_upnormal_inspection'] = "0"
                break
        }

        switch (data['last_upnormal_inspection']) {
            case "ada":
                data['last_upnormal_inspection'] = "1"
                break
            default:
                data['last_upnormal_inspection'] = "0"
                break
        }

        switch (data['condition_inspection']) {
            case "noise":
                data['condition_inspection'] = "1"
                break
            case "dusty":
                data['condition_inspection'] = "2"
                break
            case 'vibration':
                data['condition_inspection'] = "3"
                break
        }

        switch (data['weather_inspection']) {
            case "cerah":
                data['weather_inspection'] = "1"
                break
            case "mendung":
                data['weather_inspection'] = "2"
                break
            case 'hujan':
                data['weather_inspection'] = "3"
                break
            case "kabut":
                data['weather_inspection'] = "4"
                break
            case "angin":
                data['weather_inspection'] = "5"
                break
            case 'lainnya':
                data['weather_inspection'] = "6"
                break
        }

        data['place_inspection'] = getCapitalize(data['place_inspection'])

        return data
    },
    [update]: (state) => {
        return state.data.update
    },

    [equipmentColumns]: (state) => {
        let data = state.config.dynamic.equipmentColumns
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.label = getUpper(element.label)
        }
        return data
    },
    [locationColumns]: (state) => {
        let data = state.config.dynamic.locationColumns
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.label = getCapitalize(element.label)
        }
        // console.log(data);

        return data
    },
    [scheduleColumns]: (state) => {
        let data = state.config.dynamic.scheduleColumns
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.label = getUpper(element.label)
        }
        return data
    },
    [employeeColumns]: (state) => {
        let data = state.config.dynamic.employeeColumns
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            element.label = getCapitalize(element.label)
        }
        return data
    },
};

const mutations = {
    [form]: (state, data) => {
        state.data.form = data
    },

    [equipmentColumns]: (state, data) => {
        state.config.dynamic.equipmentColumns = data
    },
    [scheduleColumns]: (state, data) => {
        state.config.dynamic.scheduleColumns = data
    },
    [locationColumns]: (state, data) => {
        state.config.dynamic.locationColumns = data
    },
    [employeeColumns]: (state, data) => {
        state.config.dynamic.employeeColumns = data
    },
};

const actions = {
    [action]: ({
        commit,
        state
    }, payload) => {

        switch (payload.type) {
            case 'form':
                commit(form, payload.data);
                break;
            case 'update_form':
                state.data.update = true
                commit(form, payload.data);
                break;
            case 'reset_form':
                state.data.update = false
                state.data.form = {

                    uuid_tb_employee: '',

                    uuid_tb_schedule: '',
                    uuid_tb_location: '',
                    uuid_tb_equipment: '',
                    place_inspection: '',
                    condition_inspection: '1',
                    grease_shoot_inspection: '1',
                    weather_inspection: '1',
                    temperature_inspection: '1',
                    rain_inspection: '1',
                    current_upnormal_inspection: '0', // defaul 0
                    current_upnormal_description_inspection: null,
                    last_upnormal_inspection: '0', // defaul 0
                    last_upnormal_description_inspection: null,
                    common_description_inspection: null,
                    year: new Date().getFullYear(),
                    month: null,
                    valid_inspection: ""

                    // uuid_tb_employee: '',
                    // uuid_tb_schedule: '',
                    // uuid_tb_location: '',
                    // uuid_tb_equipment: '',
                    // place_inspection: '',
                    // condition_inspection: '',
                    // grease_shoot_inspection: '',
                    // weather_inspection: '',
                    // temperature_inspection: '',
                    // rain_inspection: '',
                    // current_upnormal_inspection: '',
                    // current_upnormal_description_inspection: '',
                    // last_upnormal_inspection: '',
                    // last_upnormal_description_inspection: '',
                    // common_description_inspection: '',
                    // screenshoot_inspection: '',
                    // valid_inspection: ""
                }
                break;
            case 'empty_form':
                state.data.form = {
                    uuid_tb_employee: '',

                    uuid_tb_schedule: '',
                    uuid_tb_location: '',
                    uuid_tb_equipment: '',
                    place_inspection: '',
                    condition_inspection: '1',
                    grease_shoot_inspection: '1',
                    weather_inspection: '1',
                    temperature_inspection: '1',
                    rain_inspection: '1',
                    current_upnormal_inspection: '0', // defaul 0
                    current_upnormal_description_inspection: null,
                    last_upnormal_inspection: '0', // defaul 0
                    last_upnormal_description_inspection: null,
                    common_description_inspection: null,
                    year: new Date().getFullYear(),
                    month: null,
                    valid_inspection: ""
                }
                break;
            case 'equipmentColumns':
                commit(equipmentColumns, payload.data);
                break;
            case 'scheduleColumns':
                commit(scheduleColumns, payload.data);
                break;
            case 'locationColumns':
                commit(locationColumns, payload.data);
                break;
            case 'employeeColumns':
                commit(employeeColumns, payload.data);
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