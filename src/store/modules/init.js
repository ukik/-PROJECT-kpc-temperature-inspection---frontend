import sharedMutations from 'vuex-shared-mutations';


const {
    init
} = require("../namespaces");

const {
    data: {
        initialized,
    },
    action_init,
} = init

const state = {
    data: {
        initialized: true,
    }
};

const getters = {
    [initialized]: (state) => {
        return state.data.initialized
    },
};

const mutations = {
    [initialized]: (state, data) => {
        state.data.initialized = data
    },
};

const plugin = {
    plugins: [sharedMutations({
        predicate: [initialized]
    })],
}

const actions = {
    [action_init]: ({
        commit
    }, payload) => {

        switch (payload.type) {
            case 'initialized':
                commit(initialized, payload.data);
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