const {
    formulir_inspeksi_detail
} = require("../../namespaces/index");

const {
    config: {
        dynamic: {
            equipmentColumns,
            locationColumns,
            employeeColumns,
        }
    },
    data: {
        form,
    },
    action,
} = formulir_inspeksi_detail

const state = {
    config: {
        dynamic: {
            equipmentColumns: [],
            locationColumns: [],
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
            current_upnormal_inspection: '0',
            current_upnormal_description_inspection: null,
            last_upnormal_inspection: '0',
            last_upnormal_description_inspection: null,
            common_description_inspection: null,
            screenshoot_inspection: '1',
            valid_inspection: ""
        },
        payload: {
            data: []
        },
    }
};

const getters = {
    [form]: (state) => {
        return state.data.form
    },

    [equipmentColumns]: (state) => {
        return state.config.dynamic.equipmentColumns
    },
    [locationColumns]: (state) => {
        return state.config.dynamic.locationColumns
    },
    [employeeColumns]: (state) => {
        return state.config.dynamic.employeeColumns
    },
};

const mutations = {
    [form]: (state, data) => {
        state.data.form = data
    },

    [equipmentColumns]: (state, data) => {
        state.config.dynamic.equipmentColumns = data
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
                commit(form, {
                    uuid_tb_employee: '',
                    uuid_tb_schedule: '',
                    uuid_tb_location: '',
                    uuid_tb_equipment: '',
                    place_inspection: '',
                    condition_inspection: '',
                    grease_shoot_inspection: '',
                    weather_inspection: '',
                    temperature_inspection: '',
                    rain_inspection: '',
                    current_upnormal_inspection: '',
                    current_upnormal_description_inspection: '',
                    last_upnormal_inspection: '',
                    last_upnormal_description_inspection: '',
                    common_description_inspection: '',
                    screenshoot_inspection: '',
                    valid_inspection: ""
                });
                break;
            case 'equipmentColumns':
                commit(equipmentColumns, payload.data);
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