const {
    forget_karyawan
} = require("../../namespaces/index");

const {
    data: {
        form,
    },
    action,
} = forget_karyawan

const state = {
    data: {
        form: {
            email_employee: "",
        },
    }
};

const getters = {
    [form]: (state) => {
        return state.data.form
    },
};

const mutations = {
    [form]: (state, data) => {
        state.data.form = data
    },
};

const actions = {
    [action]: ({
        commit
    }, payload) => {
        switch (payload.type) {
            case 'form':
                commit(form, payload.data);
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