const {
    tab
} = require("../namespaces");

const {
    data: {
        feature,
        inspection,
    },
    action,
} = tab

const state = {
    data: {
        feature: "0",
        inspection: '0',
    }
};

const getters = {
    [feature]: (state) => {
        return state.data.feature
    },
    [inspection]: state => {
        return state.data.inspection
    },
};

const mutations = {
    [feature]: (state, data) => {
        state.data.feature = data
    },
    [inspection]: (state, data) => {
        state.data.inspection = data;
    },
};

const actions = {
    [action]: ({
        commit
    }, payload) => {

        switch (payload.type) {
            case 'feature':
                commit(feature, payload.data);
                break;
            case 'inspection':
                commit(inspection, payload.data);
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