const {
    aset_equipment
} = require("../../namespaces/index");

const state = {
    config: {
        static: { // once
            /*
             * reserve data-table
             */
            columns: [{
                    name: "no",
                    label: "Nomor",
                    field: "no",
                    sortable: true,
                    align: "center",
                    required: true
                },
                {
                    name: "label_equipment",
                    label: "Label",
                    field: "label_equipment",
                    sortable: true,
                    align: "left",
                }, {
                    name: "name_equipment",
                    label: "Alat",
                    field: "name_equipment",
                    align: "left",
                    sortable: true,
                },
                {
                    name: "created_at",
                    label: "Dibuat",
                    field: "created_at",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "updated_at",
                    label: "Diperbarui",
                    field: "updated_at",
                    sortable: true,
                    align: "left"
                }
            ],
            // filter option         
            selectedColumns: [{
                    value: "no",
                    label: "Nomor"
                },
                {
                    value: "uuid",
                    label: "ID"
                },
                // {
                //     value: "label_equipment",
                //     label: "Label"
                // },
                {

                    value: "name_equipment",
                    label: "Alat"
                },

                {
                    value: "created_at",
                    label: "Dibuat"
                },
                {
                    value: "updated_at",
                    label: "Diperbarui"
                }
            ],
            // kolom visibility dropdown    
            displayColumns: [{
                    value: "no",
                    label: "Nomor"
                },
                // {
                //     value: "label_equipment",
                //     label: "Label"
                // },
                {
                    value: "name_equipment",
                    label: "Alat"
                },

                {
                    value: "created_at",
                    label: "Dibuat"
                },
                {
                    value: "updated_at",
                    label: "Diperbarui"
                }
            ],
        },
        dynamic: { // mutable
            /*
             * reserve data-table
             */
            separator: "horizontal",
            visibleColumns: [
                "no",
                "name_equipment",
                // "label_equipment",
                "created_at",
                "updated_at"
            ],
            selected: [],
            loading: false,
        }
    },
    data: {
        pagination: {
            sortBy: "no",
            descending: false,
            page: 1,
            rowsPerPage: 25,
            rowsNumber: 1,
            // below is additional object
            column: "no",
            segment: "/library/equipment",
            search_column: "no", // search_column:"" is sortBy: "",
            search_operator: "*",
            search_query_1: "",
            search_query_2: "",
        },
        payload: {
            last_page: 0,
            current_page: 0,
            data: []
        },
        /*
         * method data-table
         * master -> detail
         */
        detail: {}
    }
};

const getters = {
    /*
     * reserve data-table
     * config
     */
    [aset_equipment.config.static.columns]: (state) => {
        return state.config.static.columns
    },
    [aset_equipment.config.static.selectedColumns]: (state) => {
        return state.config.static.selectedColumns
    },
    [aset_equipment.config.static.displayColumns]: (state) => {
        return state.config.static.displayColumns
    },
    [aset_equipment.config.dynamic.separator]: (state) => {
        return state.config.dynamic.separator
    },
    [aset_equipment.config.dynamic.visibleColumns]: (state) => {
        return state.config.dynamic.visibleColumns
    },
    [aset_equipment.config.dynamic.selected]: (state) => {
        return state.config.dynamic.selected
    },
    [aset_equipment.config.dynamic.loading]: (state) => {
        return state.config.dynamic.loading
    },
    /*
     * reserve data-table
     * data
     */
    [aset_equipment.data.pagination]: (state) => {
        return state.data.pagination
    },
    [aset_equipment.data.payload.data]: (state) => {
        return state.data.payload.data
    },
    [aset_equipment.data.payload.last_page]: (state) => {
        return state.data.payload.last_page
    },
    [aset_equipment.data.payload.current_page]: (state) => {
        return state.data.payload.current_page
    },
    /*
     * method data-table
     * data
     * master -> detail
     */
    [aset_equipment.data.detail.select]: (state) => {
        return state.data.detail
    },

};

const mutations = {
    /*
     * reserve data-table
     * config
     */
    [aset_equipment.config.dynamic.separator]: (state, data) => {
        state.config.dynamic.separator = data
    },
    [aset_equipment.config.dynamic.visibleColumns]: (state, data) => {
        state.config.dynamic.visibleColumns = data
    },
    [aset_equipment.config.dynamic.selected]: (state, data) => {
        state.config.dynamic.selected = data
    },
    [aset_equipment.config.dynamic.loading]: (state, data) => {
        state.config.dynamic.loading = data
    },
    /*
     * reserve data-table
     * data
     */
    [aset_equipment.data.pagination]: (state, data) => {
        state.data.pagination = data
    },
    [aset_equipment.data.payload.data]: (state, data) => {
        state.data.payload = data
    },
    /*
     * method data-table
     * master -> detail
     */
    [aset_equipment.data.detail.select]: (state, id) => {
        const data = state.data.payload.data
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (id == element.uuid) {
                    state.data.detail = element;
                }
            }
        }
    },
    [aset_equipment.data.detail.splice]: (state, id) => {
        const data = state.data.payload.data
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (id == element.uuid) {
                    data.splice(i, 1)
                }
            }
        }
    },
    [aset_equipment.data.detail.update]: (state, data) => {
        state.data.detail = data
    },
    [aset_equipment.data.detail.delete]: (state) => {
        state.data.detail = {};
    },
};

const actions = {
    [aset_equipment.action]: ({
        commit
    }, payload) => {

        switch (payload.type) {
            case 'separator':
                commit(aset_equipment.config.dynamic.separator, payload.data);
                break;
            case 'visibleColumns':
                commit(aset_equipment.config.dynamic.visibleColumns, payload.data);
                break;
            case 'selected':
                commit(aset_equipment.config.dynamic.selected, payload.data);
                break;
            case 'loading':
                commit(aset_equipment.config.dynamic.loading, payload.data);
                break;

            case 'pagination':
                commit(aset_equipment.data.pagination, payload.data);
                break;
            case 'payload':
                commit(aset_equipment.data.payload.data, payload.data);
                break;

            case 'select':
                commit(aset_equipment.data.detail.select, payload.id);
                break;
            case 'splice':
                commit(aset_equipment.data.detail.splice, payload.id);
                break;
            case 'update':
                commit(aset_equipment.data.detail.update, payload.id);
                break;
            case 'delete':
                commit(aset_equipment.data.detail.delete);
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