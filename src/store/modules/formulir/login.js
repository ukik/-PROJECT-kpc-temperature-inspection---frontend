import sharedMutations from 'vuex-shared-mutations';

const {
    login_karyawan
} = require("../../namespaces/index");

const {
    data: {
        form
    },
    action
} = login_karyawan

const state = {
    data: {
        form: {
            email_employee: "",
            password_employee: "",
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

const plugin = {
    plugins: [sharedMutations({
        predicate: [form]
    })],
}

const actions = {
    [action]: ({
        commit
    }, payload) => {

        switch (payload.type) {
            case 'form':
                commit(login_karyawan.data.form, payload.data);
                break;
        }
    },

};

// export this module.
export default {
    plugin,
    state,
    mutations,
    getters,
    actions,
}