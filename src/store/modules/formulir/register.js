const {
    register_karyawan
} = require("../../namespaces/index");

const {
    data: {
        form,
        password_confirmation,
    },
    action,
} = register_karyawan


const state = {
    data: {
        form: {
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

            photo_employee: "",

        },
        password_confirmation: {
            confirmation: "",
            visibility: false,
        },
    }
};

const getters = {
    [form]: (state) => {
        return state.data.form
    },
    [password_confirmation]: (state) => {
        return state.data.password_confirmation
    },
};

const mutations = {
    [form]: (state, data) => {
        state.data.form = data
    },
    [password_confirmation]: (state, data) => {
        state.data.password_confirmation = data
    },
};

const actions = {
    [action]: ({
        state,
        commit
    }, payload) => {

        switch (payload.type) {
            case 'form':
                commit(form, payload.data);
                break;
            case 'reset_form':
                state.data.update = false
                commit(password_confirmation, {
                    confirmation: "",
                    visibility: false,
                });
                commit(form, {
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
                    photo_employee: "",
                });
                break;
            case 'password_confirmation':
                commit(password_confirmation, payload.data);
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