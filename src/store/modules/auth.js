import sharedMutations from 'vuex-shared-mutations';

const {
    auth
} = require("../namespaces/index");

const {
    data: {
        credentials,
        credentials_update,
        logout,
        user,
    },
    action,
} = auth

const state = {
    data: {
        loading: false,
        credentials: {
            logged: false,
            token: null,
            role: null,
        },
        user: null,
    }
};

const getters = {
    [credentials]: (state) => {
        return state.data.credentials
    },
    [user]: state => {
        return state.data.user
    },
};

const mutations = {
    [credentials]: (state, data) => {
        state.data.credentials = data

        localStorage.setItem('token', data.token)
    },
    [credentials_update]: (state, data) => {
        state.data.credentials.logged = data.logged
        state.data.credentials.role = data.role
    },
    [logout]: (state) => {
        state.data.credentials = {
            logged: false,
            token: null,
            role: null,
        }
    },
    [user]: (state, data) => {
        state.data.user = data;
    },
};

const plugin = {
    plugins: [sharedMutations({
        predicate: [credentials, credentials_update, logout, user]
    })],
}

const actions = {
    [action]: ({
        commit
    }, payload) => {

        switch (payload.type) {
            case 'user':
                commit(user, payload.data);
                break;
            case 'credentials':
                commit(credentials, payload.data);
                break;
            case 'credentials_update':
                commit(credentials_update, payload.data);
                break;
            case 'logout':
                commit(logout);
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