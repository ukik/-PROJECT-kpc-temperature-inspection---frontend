const {
    inspeksi_catatan
} = require("../../namespaces/index");

const state = {
    config: {
        static: { // once
            /*
             * reserve data-table
             */
            columns: [{
                    name: "belong_employee.name_employee",
                    label: "Karyawan",
                    field: "belong_employee.name_employee",
                    align: "center",
                    sortable: true,
                    required: true,
                },

                // {
                //     name: "uuid",
                //     label: "ID",
                //     field: "uuid",
                //     sortable: true,
                //     align: "left"
                // },
                // {
                //     name: "uuid_tb_inspection",
                //     label: "ID Temperatur",
                //     field: "uuid_tb_inspection",
                //     align: "left",
                //     sortable: true,
                // },
                // {
                //     name: "belong_mutation_inspection.uuid_tb_employee",
                //     label: "ID Karyawan",
                //     field: "belong_mutation_inspection.uuid_tb_employee",
                //     align: "left",
                //     sortable: true,
                // },
                // {
                //     name: "belong_mutation_inspection.equipment_inspection",
                //     label: "Kode Alat",
                //     field: "belong_mutation_inspection.equipment_inspection",
                //     align: "left",
                //     sortable: true,
                //     required: true
                // },
                {
                    name: "belong_library_equipment.name_equipment",
                    label: "Alat",
                    field: "belong_library_equipment.name_equipment",
                    align: "center",
                    sortable: true,
                },
                // {
                //     name: "belong_mutation_inspection.location_inspection",
                //     label: "Kode Lokasi",
                //     field: "belong_mutation_inspection.location_inspection",
                //     align: "left",
                //     sortable: true,
                // },

                {
                    name: "belong_library_location.name_location",
                    label: "Lokasi",
                    field: "belong_library_location.name_location",
                    align: "left",
                    sortable: true,
                },

                {
                    name: "belong_mutation_inspection.place_inspection",
                    label: "Letak",
                    field: "belong_mutation_inspection.place_inspection",
                    align: "left",
                    sortable: true,
                },
                // {
                //     name: "label_inspection_information",
                //     label: "Label",
                //     field: "label_inspection_information",
                //     align: "left",
                //     sortable: true,
                // },
                {
                    name: "description_inspection_information",
                    label: "Deskripsi",
                    field: "description_inspection_information",
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
                    value: "uuid",
                    label: "ID Catatan",
                },
                {
                    value: "uuid_tb_inspection",
                    label: "ID Temperatur",
                },
                {
                    value: "belong_mutation_inspection.uuid_tb_employee",
                    label: "ID Karyawan",
                },

                {
                    value: "belong_employee.name_employee",
                    label: "Karyawan",
                },

                // {
                //     value: "belong_mutation_inspection.equipment_inspection",
                //     label: "Kode Alat",
                // },
                {
                    value: "belong_library_equipment.name_equipment",
                    label: "Alat",
                },
                // {
                //     value: "belong_mutation_inspection.location_inspection",
                //     label: "Kode Lokasi",
                // },
                {
                    value: "belong_library_location.name_location",
                    label: "Lokasi",
                },
                {
                    value: "belong_mutation_inspection.place_inspection",
                    label: "Letak",
                },
                {
                    value: "label_inspection_information",
                    label: "Label",
                },
                {
                    value: "description_inspection_information",
                    label: "Deskripsi",
                },
                {
                    value: "created_at",
                    label: "Dibuat",
                },
                {
                    value: "updated_at",
                    label: "Diperbarui",
                }
            ],
            // kolom visibility dropdown            
            displayColumns: [
                // {
                //     value: "uuid",
                //     label: "ID",
                // },
                // {
                //     value: "uuid_tb_inspection",
                //     label: "ID Temperatur",
                // },
                // {
                //     value: "belong_mutation_inspection.uuid_tb_employee",
                //     label: "ID Karyawan",
                // },
                // {
                //     value: "belong_mutation_inspection.equipment_inspection",
                //     label: "Kode Alat",
                // },
                {
                    value: "belong_employee.name_employee",
                    label: "Karyawan",
                },

                {
                    value: "belong_library_equipment.name_equipment",
                    label: "Alat",
                },
                // {
                //     value: "belong_mutation_inspection.location_inspection",
                //     label: "Kode Lokasi",
                // },
                {
                    value: "belong_library_location.name_location",
                    label: "Lokasi",
                },
                {
                    value: "belong_mutation_inspection.place_inspection",
                    label: "Letak",
                },
                // {
                //     value: "label_inspection_information",
                //     label: "Label",
                // },
                {
                    value: "description_inspection_information",
                    label: "Deskripsi",
                },
                {
                    value: "created_at",
                    label: "Dibuat",
                },
                {
                    value: "updated_at",
                    label: "Diperbarui",
                }
            ],
        },
        dynamic: { // mutable
            /*
             * reserve data-table
             */
            separator: "horizontal",
            visibleColumns: [
                "belong_employee.name_employee",
                "belong_library_equipment.name_equipment",
                "belong_library_location.name_location",
                "belong_mutation_inspection.place_inspection",
                "description_inspection_information",
                "created_at",
                "updated_at",

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
            // column: "created_at",
            segment: "/mutation/inspection-information",
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
    [inspeksi_catatan.config.static.columns]: (state) => {
        return state.config.static.columns
    },
    [inspeksi_catatan.config.static.selectedColumns]: (state) => {
        return state.config.static.selectedColumns
    },
    [inspeksi_catatan.config.static.displayColumns]: (state) => {
        return state.config.static.displayColumns
    },
    [inspeksi_catatan.config.dynamic.separator]: (state) => {
        return state.config.dynamic.separator
    },
    [inspeksi_catatan.config.dynamic.visibleColumns]: (state) => {
        return state.config.dynamic.visibleColumns
    },
    [inspeksi_catatan.config.dynamic.selected]: (state) => {
        return state.config.dynamic.selected
    },
    [inspeksi_catatan.config.dynamic.loading]: (state) => {
        return state.config.dynamic.loading
    },
    /*
     * reserve data-table
     * data
     */
    [inspeksi_catatan.data.pagination]: (state) => {
        return state.data.pagination
    },
    [inspeksi_catatan.data.payload.data]: (state) => {
        return state.data.payload.data
    },
    [inspeksi_catatan.data.payload.last_page]: (state) => {
        return state.data.payload.last_page
    },
    [inspeksi_catatan.data.payload.current_page]: (state) => {
        return state.data.payload.current_page
    },
    /*
     * method data-table
     * data
     * master -> detail
     */
    [inspeksi_catatan.data.detail.select]: (state) => {
        return state.data.detail
    },

};

const mutations = {
    /*
     * reserve data-table
     * config
     */
    [inspeksi_catatan.config.dynamic.separator]: (state, data) => {
        state.config.dynamic.separator = data
    },
    [inspeksi_catatan.config.dynamic.visibleColumns]: (state, data) => {
        state.config.dynamic.visibleColumns = data
    },
    [inspeksi_catatan.config.dynamic.selected]: (state, data) => {
        state.config.dynamic.selected = data
    },
    [inspeksi_catatan.config.dynamic.loading]: (state, data) => {
        state.config.dynamic.loading = data
    },
    /*
     * reserve data-table
     * data
     */
    [inspeksi_catatan.data.pagination]: (state, data) => {
        state.data.pagination = data
        console.log('inspeksi_catatan.data.pagination', state.data.pagination);

    },
    [inspeksi_catatan.data.payload.data]: (state, data) => {
        state.data.payload = data
    },
    /*
     * method data-table
     * master -> detail
     */
    [inspeksi_catatan.data.detail.select]: (state, id) => {
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
    [inspeksi_catatan.data.detail.splice]: (state, id) => {
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
    [inspeksi_catatan.data.detail.update]: (state, data) => {
        state.data.detail = data
    },
    [inspeksi_catatan.data.detail.delete]: (state) => {
        state.data.detail = {};
    },
};

const actions = {
    [inspeksi_catatan.action]: ({
        commit
    }, payload) => {

        switch (payload.type) {
            case 'separator':
                commit(inspeksi_catatan.config.dynamic.separator, payload.data);
                break;
            case 'visibleColumns':
                commit(inspeksi_catatan.config.dynamic.visibleColumns, payload.data);
                break;
            case 'selected':
                commit(inspeksi_catatan.config.dynamic.selected, payload.data);
                break;
            case 'loading':
                commit(inspeksi_catatan.config.dynamic.loading, payload.data);
                break;

            case 'pagination':
                commit(inspeksi_catatan.data.pagination, payload.data);
                break;
            case 'payload':
                commit(inspeksi_catatan.data.payload.data, payload.data);
                break;

            case 'select':
                commit(inspeksi_catatan.data.detail.select, payload.id);
                break;
            case 'splice':
                commit(inspeksi_catatan.data.detail.splice, payload.id);
                break;
            case 'update':
                commit(inspeksi_catatan.data.detail.update, payload.id);
                break;
            case 'delete':
                commit(inspeksi_catatan.data.detail.delete);
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