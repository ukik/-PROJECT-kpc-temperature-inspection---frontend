const {
    auth
} = require("../namespaces/index");

const state = {
    is_logged_in: false
};

const getters = {
    [auth.is_logged_in]: (state) => {
        return state.is_logged_in
    },
};

const mutations = {
    [auth.is_logged_in]: (state, data) => {
        state.is_logged_in = data
    },
};

const actions = {
    [auth.action]: ({
        commit
    }, payload) => {

        switch (payload.type) {
            case 'is_logged_in':
                commit(auth.is_logged_in, payload.data);
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