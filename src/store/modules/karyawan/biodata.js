const {
    karyawan_biodata
} = require("../../namespaces/index");

const state = {
    config: {
        static: { // once
            /*
             * reserve data-table
             */
            columns: [{
                    name: "uuid",
                    label: "ID",
                    field: "uuid",
                    align: "left",
                    sortable: true
                },
                {
                    name: "name_employee",
                    label: "Nama",
                    field: "name_employee",
                    align: "center",
                    sortable: true,
                    required: true
                },
                {
                    name: "position_employee",
                    label: "Posisi",
                    field: "position_employee",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "nik_employee",
                    label: "NIK",
                    field: "nik_employee",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "telpon_employee",
                    label: "Telpon",
                    field: "telpon_employee",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "email_employee",
                    label: "Email",
                    field: "email_employee",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "birth_place_employee",
                    label: "Tempat Lahir",
                    field: "birth_place_employee",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "birth_date_employee",
                    label: "Tanggal Lahir",
                    field: "birth_date_employee",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "gender_employee",
                    label: "Gender",
                    field: "gender_employee",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "marital_employee",
                    label: "Pernikahan",
                    field: "marital_employee",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "address_employee",
                    label: "Alamat",
                    field: "address_employee",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "plain_password_employee",
                    label: "Password",
                    align: "left",
                    sortable: true
                },
                {
                    name: "photo_employee",
                    label: "Foto",
                    field: "photo_employee",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "verification_employee",
                    label: "Verifikasi",
                    field: "verification_employee",
                    sortable: true,
                    align: "left"
                },
                {
                    name: "disable_employee",
                    label: "Dikunci",
                    field: "disable_employee",
                    sortable: true,
                    align: "left"
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
            selectedColumns: [{
                    value: "uuid",
                    label: "ID"
                }, {

                    value: "name_employee",
                    label: "Name"
                },
                {
                    value: "position_employee",
                    label: "Posisi"
                },
                {
                    value: "nik_employee",
                    label: "NIK"
                },
                {
                    value: "telpon_employee",
                    label: "Telpon"
                },
                {
                    value: "email_employee",
                    label: "Email"
                },
                {
                    value: "birth_place_employee",
                    label: "Tempat Lahir"
                },
                {
                    value: "birth_date_employee",
                    label: "Tanggal Lahir"
                },
                {
                    value: "gender_employee",
                    label: "Gender"
                },
                {
                    value: "marital_employee",
                    label: "Pernikahan"
                },
                {
                    value: "address_employee",
                    label: "Alamat"
                },
                {
                    value: "plain_password_employee",
                    label: "Password"
                },
                {
                    value: "photo_employee",
                    label: "Foto"
                },
                {
                    value: "verification_employee",
                    label: "Verifikasi"
                },
                {
                    value: "disable_employee",
                    label: "Dikunci"
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
            displayColumns: [
                // {
                //     value: "uuid",
                //     label: "ID"
                // }, {

                //     value: "name_employee",
                //     label: "Name"
                // },
                {
                    value: "position_employee",
                    label: "Posisi"
                },
                {
                    value: "nik_employee",
                    label: "NIK"
                },
                {
                    value: "telpon_employee",
                    label: "Telpon"
                },
                {
                    value: "email_employee",
                    label: "Email"
                },
                {
                    value: "birth_place_employee",
                    label: "Tempat Lahir"
                },
                {
                    value: "birth_date_employee",
                    label: "Tanggal Lahir"
                },
                {
                    value: "gender_employee",
                    label: "Gender"
                },
                {
                    value: "marital_employee",
                    label: "Pernikahan"
                },
                {
                    value: "address_employee",
                    label: "Alamat"
                },
                {
                    value: "plain_password_employee",
                    label: "Password"
                },
                {
                    value: "photo_employee",
                    label: "Foto"
                },
                {
                    value: "verification_employee",
                    label: "Verifikasi"
                },
                {
                    value: "disable_employee",
                    label: "Dikunci"
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
                // "uuid",
                "name_employee",
                "position_employee",
                "nik_employee",
                "telpon_employee",
                "email_employee",
                "birth_place_employee",
                "birth_date_employee",
                "gender_employee",
                "marital_employee",
                "address_employee",
                "plain_password_employee",
                "photo_employee",
                "verification_employee",
                "disable_employee",
                "created_at",
                "updated_at"
            ],
            selected: [],
            loading: false,
        }
    },
    data: {
        pagination: {
            sortBy: "created_at",
            descending: false,
            page: 1,
            rowsPerPage: 25,
            rowsNumber: 1,
            // below is additional object
            column: "created_at",
            segment: "/employee",
            search_column: "created_at", // search_column:"" is sortBy: "",
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
    [karyawan_biodata.config.static.columns]: (state) => {
        return state.config.static.columns
    },
    [karyawan_biodata.config.static.selectedColumns]: (state) => {
        return state.config.static.selectedColumns
    },
    [karyawan_biodata.config.static.displayColumns]: (state) => {
        return state.config.static.displayColumns
    },
    [karyawan_biodata.config.dynamic.separator]: (state) => {
        return state.config.dynamic.separator
    },
    [karyawan_biodata.config.dynamic.visibleColumns]: (state) => {
        return state.config.dynamic.visibleColumns
    },
    [karyawan_biodata.config.dynamic.selected]: (state) => {
        return state.config.dynamic.selected
    },
    [karyawan_biodata.config.dynamic.loading]: (state) => {
        return state.config.dynamic.loading
    },
    /*
     * reserve data-table
     * data
     */
    [karyawan_biodata.data.pagination]: (state) => {
        return state.data.pagination
    },
    [karyawan_biodata.data.payload.data]: (state) => {
        return state.data.payload.data
    },
    [karyawan_biodata.data.payload.last_page]: (state) => {
        return state.data.payload.last_page
    },
    [karyawan_biodata.data.payload.current_page]: (state) => {
        return state.data.payload.current_page
    },
    /*
     * method data-table
     * data
     * master -> detail
     */
    [karyawan_biodata.data.detail.select]: (state) => {
        return state.data.detail
    },

};

const mutations = {
    /*
     * reserve data-table
     * config
     */
    [karyawan_biodata.config.dynamic.separator]: (state, data) => {
        state.config.dynamic.separator = data
    },
    [karyawan_biodata.config.dynamic.visibleColumns]: (state, data) => {
        state.config.dynamic.visibleColumns = data
    },
    [karyawan_biodata.config.dynamic.selected]: (state, data) => {
        state.config.dynamic.selected = data
    },
    [karyawan_biodata.config.dynamic.loading]: (state, data) => {
        state.config.dynamic.loading = data
    },
    /*
     * reserve data-table
     * data
     */
    [karyawan_biodata.data.pagination]: (state, data) => {
        state.data.pagination = data
    },
    [karyawan_biodata.data.payload.data]: (state, data) => {
        state.data.payload = data
    },
    /*
     * method data-table
     * master -> detail
     */
    [karyawan_biodata.data.detail.select]: (state, id) => {
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
    [karyawan_biodata.data.detail.splice]: (state, id) => {
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
    [karyawan_biodata.data.detail.update]: (state, data) => {
        state.data.detail = data
    },
    [karyawan_biodata.data.detail.delete]: (state) => {
        state.data.detail = {};
    },
};

const actions = {
    [karyawan_biodata.action]: ({
        commit
    }, payload) => {


        switch (payload.type) {
            case 'separator':
                commit(karyawan_biodata.config.dynamic.separator, payload.data);
                break;
            case 'visibleColumns':
                commit(karyawan_biodata.config.dynamic.visibleColumns, payload.data);
                break;
            case 'selected':
                commit(karyawan_biodata.config.dynamic.selected, payload.data);
                break;
            case 'loading':
                commit(karyawan_biodata.config.dynamic.loading, payload.data);
                break;

            case 'pagination':
                commit(karyawan_biodata.data.pagination, payload.data);
                break;
            case 'payload':
                commit(karyawan_biodata.data.payload.data, payload.data);
                break;

            case 'select':
                commit(karyawan_biodata.data.detail.select, payload.id);
                break;
            case 'splice':
                commit(karyawan_biodata.data.detail.splice, payload.id);
                break;
            case 'update':
                commit(karyawan_biodata.data.detail.update, payload.id);
                break;
            case 'delete':
                commit(karyawan_biodata.data.detail.delete);
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