const {
    formulir_karyawan
} = require("../../namespaces/index");

const state = {
    data: {
        form: {
            // no: "",
            // uuid: "",
            name_employee: "",
            position_employee: "",
            nik_employee: "",
            telpon_employee: "",
            email_employee: "",
            birth_place_employee: "",
            birth_date_employee: "",
            gender_employee: "",
            marital_employee: "",
            address_employee: "",
            password_employee: "",
            // plain_password_employee: "",
            photo_employee: "",
            // verification_employee: "",
            // disable_employee: "",
            // created_at: "",
            // updated_at: "",

            password_confirmation_employee: { // client only, not send to server
                confirmation: "",
                visibility: false,
            },        

        },
        payload: {
            data: []
        },
    }
};

const getters = {
    [formulir_karyawan.data.form]: (state) => {
        return state.data.form
    },
    [formulir_karyawan.data.payload.data]: (state) => {
        return state.data.payload.data
    },
};

const mutations = {
    [formulir_karyawan.data.form]: (state, data) => {
        state.data.form = data
    },
    [formulir_karyawan.data.payload.data]: (state, data) => {
        state.data.payload = data
    },
};

const actions = {
    [formulir_karyawan.action]: ({
        commit
    }, payload) => {

        switch (payload.type) {
            case 'form':
                commit(formulir_karyawan.data.form, payload.data);
                break;
            case 'payload':
                commit(formulir_karyawan.data.payload.data, payload.data);
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