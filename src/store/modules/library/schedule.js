const {
    aset_schedule
} = require("../../namespaces/index");

const {
    config: {
        static: {
            columns,
            selectedColumns,
            displayColumns,
        },
        dynamic: {
            separator,
            visibleColumns,
            selected,
            loading,
        }
    },
    data: {
        pagination,
        payload: {
            data,
            replace,
            last_page,
            current_page,
        },
    },
    action,
} = aset_schedule

const tableColumns = {
    no: {
        name: "no",
        label: "Nomor",
        field: "no",
        value: "no",
        align: "left",
        sortable: true,
        required: false,
    },
    uuid: {
        name: "uuid",
        label: "ID Alat",
        field: "uuid",
        value: "uuid",
        align: "left",
        sortable: true,
        required: false,
    },
    label_schedule: {
        name: "label_schedule",
        label: "Label",
        field: "label_schedule",
        value: "label_schedule",
        align: "left",
        sortable: true,
        required: false,
    },
    starttime_schedule: {
        name: "starttime_schedule",
        label: "Masuk",
        field: "starttime_schedule",
        value: "starttime_schedule",
        align: "left",
        sortable: true,
        required: false,
    },
    endtime_schedule: {
        name: "endtime_schedule",
        label: "Keluar",
        field: "endtime_schedule",
        value: "endtime_schedule",
        align: "left",
        sortable: true,
        required: false,
    },
    created_at: {
        name: "created_at",
        label: "Dibuat",
        field: "created_at",
        value: "created_at",
        align: "left",
        sortable: true,
        required: false,
    },
    updated_at: {
        name: "updated_at",
        label: "Diperbarui",
        field: "updated_at",
        value: "updated_at",
        align: "left",
        sortable: true,
        required: false,
    },
}

const state = {
    config: {
        static: { // once
            columns: [
                tableColumns.no,
                tableColumns.uuid,
                tableColumns.label_schedule,
                tableColumns.starttime_schedule,
                tableColumns.endtime_schedule,
                tableColumns.created_at,
                tableColumns.updated_at,
            ],
            // filter option         
            selectedColumns: [
                tableColumns.no,
                tableColumns.uuid,
                tableColumns.label_schedule,
                tableColumns.starttime_schedule,
                tableColumns.endtime_schedule,
                tableColumns.created_at,
                tableColumns.updated_at,
            ],
            // kolom visibility dropdown    
            displayColumns: [
                tableColumns.label_schedule,
                tableColumns.starttime_schedule,
                tableColumns.endtime_schedule,
                tableColumns.created_at,
                tableColumns.updated_at,
            ],
        },
        dynamic: { // mutable
            separator: "horizontal",
            visibleColumns: [
                'no',
                'label_schedule',
                'starttime_schedule',
                'endtime_schedule',
                'created_at',
                'updated_at',
            ],
            selected: [],
            loading: false,
        }
    },
    data: {
        pagination: {
            sortBy: "no",
            descending: true,
            page: 1,
            rowsPerPage: 25,
            rowsNumber: 1,
            // below is additional object
            segment: "/library/schedule",
            search_column: "no",
            search_operator: "*",
            search_query_1: "",
            search_query_2: "",
        },
        payload: {
            last_page: 0,
            current_page: 0,
            data: []
        },
    }
};

const getters = {
    [columns]: (state) => {
        return state.config.static.columns
    },
    [selectedColumns]: (state) => {
        return state.config.static.selectedColumns
    },
    [displayColumns]: (state) => {
        return state.config.static.displayColumns
    },
    [separator]: (state) => {
        return state.config.dynamic.separator
    },
    [visibleColumns]: (state) => {
        return state.config.dynamic.visibleColumns
    },
    [selected]: (state) => {
        return state.config.dynamic.selected
    },
    [loading]: (state) => {
        return state.config.dynamic.loading
    },

    [pagination]: (state) => {
        return state.data.pagination
    },
    [data]: (state) => {

        try {
            let dataArray = [
                ...state.data.payload.data
            ];

            for (let i = 0; i < dataArray.length; i++) {
                dataArray[i]['__index'] = i
            }

            return dataArray
        } catch (error) {
            return state.data.payload.data == null ? [] : state.data.payload.data
        }
    },
    [last_page]: (state) => {
        return state.data.payload.last_page
    },
    [current_page]: (state) => {
        return state.data.payload.current_page
    },
};

const mutations = {
    [separator]: (state, data) => {
        state.config.dynamic.separator = data
    },
    [visibleColumns]: (state, data) => {
        state.config.dynamic.visibleColumns = data
    },
    [selected]: (state, data) => {
        state.config.dynamic.selected = data
    },
    [loading]: (state, data) => {
        state.config.dynamic.loading = data
    },

    [pagination]: (state, data) => {
        state.data.pagination = data
    },
    [data]: (state, data) => {
        state.data.payload = data
    },
    [replace]: (state, params) => {
        // me-replace data di payload.data[] setelah berhasil update oleh axios
        const data = state.data.payload.data;
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (params.uuid == element.uuid) {
                    data[i].updated_at = params.updated_at;
                }
            }
        }
        // console.log('replace', data);

    },
};

const actions = {
    [action]: ({
        commit
    }, payload) => {

        switch (payload.type) {
            case 'separator':
                commit(separator, payload.data);
                break;
            case 'visibleColumns':
                commit(visibleColumns, payload.data);
                break;
            case 'selected':
                commit(selected, payload.data);
                break;
            case 'loading':
                commit(loading, payload.data);
                break;

            case 'pagination':
                commit(pagination, payload.data);
                break;
            case 'payload':
                commit(data, payload.data);
                break;
            case 'replace':
                commit(replace, payload.data);
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