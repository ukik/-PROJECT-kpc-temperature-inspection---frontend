const {
    formulir_inspeksi
} = require("../../namespaces/index");

const state = {
    config: {
        dynamic: { // mutable
            equipmentColumns: [],
            locationColumns: [],      
            employeeColumns: [],      
        }    
    },
    data: {
        form: {
            // no:'',
            // uuid:'',
            uuid_tb_employee:'',
            // uuid_tb_inspection:'',
            uuid_tb_location:'',
            uuid_tb_equipment:'',
            // equipment_inspection:'', // kolom ini rencananya dibatalkan
            // location_inspection:'', // kolom ini rencananya dibatalkan
            place_inspection:'',
            condition_inspection:'1',
            grease_shoot_inspection:'1',
            weather_inspection:'1',
            temperature_inspection:'1',
            rain_inspection:'1',
            current_upnormal_inspection: '0',
            last_upnormal_inspection: '0',
            screenshoot_inspection:'1',
            // created_at:'',
            // updated_at:'',
            
            tb_mutation_inspection_information: [{
                // uuid:'',
                // uuid_tb_inspection:'', // from backend
                label_inspection_information:'',
                description_inspection_information:'',
                // created_at:'',
                // updated_at:'',
            }]
        },
        payload: {
            data: []
        },
    }
};

const getters = {
    [formulir_inspeksi.data.form]: (state) => {
        return state.data.form
    },
    [formulir_inspeksi.data.payload.data]: (state) => {
        return state.data.payload.data
    },

    [formulir_inspeksi.config.dynamic.equipmentColumns]: (state) => {
        return state.config.dynamic.equipmentColumns
    },
    [formulir_inspeksi.config.dynamic.locationColumns]: (state) => {
        return state.config.dynamic.locationColumns
    },    
    [formulir_inspeksi.config.dynamic.employeeColumns]: (state) => {
        return state.config.dynamic.employeeColumns
    },    
};

const mutations = {
    [formulir_inspeksi.data.form]: (state, data) => {
        state.data.form = data
    },
    [formulir_inspeksi.data.payload.data]: (state, data) => {
        state.data.payload = data
    },

    [formulir_inspeksi.config.dynamic.equipmentColumns]: (state, data) => {
        state.config.dynamic.equipmentColumns = data
    },
    [formulir_inspeksi.config.dynamic.locationColumns]: (state, data) => {
        state.config.dynamic.locationColumns = data
    },    
    [formulir_inspeksi.config.dynamic.employeeColumns]: (state, data) => {
        state.config.dynamic.employeeColumns = data
    },    
};

const actions = {
    [formulir_inspeksi.action]: ({
        commit
    }, payload) => {

        switch (payload.type) {
            case 'form':
                commit(formulir_inspeksi.data.form, payload.data);
                break;
            case 'payload':
                commit(formulir_inspeksi.data.payload.data, payload.data);
                break;
            case 'equipmentColumns':
                commit(formulir_inspeksi.config.dynamic.equipmentColumns, payload.data);
                break;
            case 'locationColumns':
                commit(formulir_inspeksi.config.dynamic.locationColumns, payload.data);
                break;               
            case 'employeeColumns':
                commit(formulir_inspeksi.config.dynamic.employeeColumns, payload.data);
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