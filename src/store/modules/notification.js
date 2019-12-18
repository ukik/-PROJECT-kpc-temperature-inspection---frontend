import sharedMutations from 'vuex-shared-mutations';

const {
    notification
} = require("../namespaces");

const {
    data: {
        unread,
        total_unread,
    },
    action_notification,
} = notification


const state = {
    data: {
        notif: {
            'employee': 0,
            'inspection': 0,
        }
    }
};

const getters = {
    [unread]: (state) => {
        return state.data.notif
    },
    [total_unread]: (state) => {
        return Number(state.data.notif.employee) + Number(state.data.notif.inspection)
    },
};

const mutations = {
    [unread]: (state, data) => {
        state.data.notif = data
    },
};

const plugin = {
    plugins: [sharedMutations({
        predicate: [unread]
    })],
}

const actions = {
    [action_notification]: ({
        commit
    }, payload) => {

        switch (payload.type) {
            case 'update':
                commit(unread, payload.data);
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