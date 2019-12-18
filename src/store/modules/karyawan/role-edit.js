const {
    karyawan_role_edit
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
} = karyawan_role_edit


function capitalize(str) {
    if (str == undefined)
        return str
    if (str == null)
        return str

    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
}

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
        label: "ID Inspeksi",
        field: "uuid",
        value: "uuid",
        align: "left",
        sortable: true,
        required: false,
    },
    name_employee: {
        name: "name_employee",
        label: "Nama",
        field: "name_employee",
        value: "name_employee",
        format: (val, row) => `${capitalize(val)}`,
        align: "center",
        sortable: true,
        required: false,
    },
    position_employee: {
        name: "position_employee",
        label: "Jabatan",
        field: "position_employee",
        value: "position_employee",
        align: "left",
        format: (val, row) => {
            switch (Number(val)) {
                case 0:
                    return "Super Admin";
                case 1:
                    return "Supervisor";
                case 2:
                    return "Temperature Man";
            }
        },
        sortable: true,
        required: false,
    },
    nik_employee: {
        name: "nik_employee",
        label: "KTP",
        field: "nik_employee",
        value: "nik_employee",
        align: "left",
        sortable: true,
        required: false,
    },
    telpon_employee: {
        name: "telpon_employee",
        label: "Telpon",
        field: "telpon_employee",
        value: "telpon_employee",
        align: "left",
        sortable: true,
        required: false,
    },
    email_employee: {
        name: "email_employee",
        label: "Email",
        field: "email_employee",
        value: "email_employee",
        align: "left",
        sortable: true,
        required: false,
    },
    birth_place_employee: {
        name: "birth_place_employee",
        label: "Tempat Lahir",
        field: "birth_place_employee",
        value: "birth_place_employee",
        format: (val, row) => `${capitalize(val)}`,
        align: "left",
        sortable: true,
        required: false,
    },
    birth_date_employee: {
        name: "birth_date_employee",
        label: "Tanggal Lahir",
        field: "birth_date_employee",
        value: "birth_date_employee",
        align: "left",
        sortable: true,
        required: false,
    },
    gender_employee: {
        name: "gender_employee",
        label: "Jenis Kelamin",
        field: "gender_employee",
        value: "gender_employee",
        format: (val, row) => {
            switch (Number(val)) {
                case 0:
                    return "Laki-laki";
                case 1:
                    return "Perempuan";
            }
        },
        align: "left",
        sortable: true,
        required: false,
    },
    marital_employee: {
        name: "marital_employee",
        label: "Status Perkawinan",
        field: "marital_employee",
        value: "marital_employee",
        format: (val, row) => {
            switch (Number(val)) {
                case 0:
                    return "Lajang";
                case 1:
                    return "Menikah";
            }
        },
        align: "left",
        sortable: true,
        required: false,
    },
    address_employee: {
        name: "address_employee",
        label: "Alamat",
        field: "address_employee",
        value: "address_employee",
        align: "left",
        sortable: true,
        required: false,
    },
    password_employee: {
        name: "password_employee",
        label: "Password",
        field: "password_employee",
        value: "password_employee",
        align: "left",
        sortable: true,
        required: false,
    },
    plain_password_employee: {
        name: "plain_password_employee",
        label: "Plain Password",
        field: "plain_password_employee",
        value: "plain_password_employee",
        align: "left",
        sortable: true,
        required: false,
    },
    photo_employee: {
        name: "photo_employee",
        label: "Foto",
        field: "photo_employee",
        value: "photo_employee",
        align: "left",
        sortable: true,
        required: false,
    },
    verification_employee: {
        name: "verification_employee",
        label: "Verifikasi",
        field: "verification_employee",
        value: "verification_employee",
        format: (val, row) => {
            switch (Number(val)) {
                case 0:
                    return "Tidak Terverifikasi";
                case 1:
                    return "Terverifikasi";
            }
        },
        align: "left",
        sortable: true,
        required: false,
    },
    disable_employee: {
        name: "disable_employee",
        label: "Diblokir",
        field: "disable_employee",
        value: "disable_employee",
        format: (val, row) => {
            return val ? "Ya" : "Tidak"
        },
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
                tableColumns.name_employee,
                tableColumns.position_employee,
                tableColumns.nik_employee,
                tableColumns.telpon_employee,
                tableColumns.email_employee,
                tableColumns.birth_place_employee,
                tableColumns.birth_date_employee,
                tableColumns.gender_employee,
                tableColumns.marital_employee,
                tableColumns.address_employee,
                tableColumns.plain_password_employee,
                tableColumns.photo_employee,
                tableColumns.verification_employee,
                tableColumns.disable_employee,
                tableColumns.created_at,
                tableColumns.updated_at,
            ],
            selectedColumns: [
                tableColumns.no,
                tableColumns.uuid,
                tableColumns.name_employee,
                tableColumns.position_employee,
                tableColumns.nik_employee,
                tableColumns.telpon_employee,
                tableColumns.email_employee,
                tableColumns.birth_place_employee,
                tableColumns.birth_date_employee,
                tableColumns.gender_employee,
                tableColumns.marital_employee,
                tableColumns.address_employee,
                tableColumns.plain_password_employee,
                tableColumns.photo_employee,
                tableColumns.verification_employee,
                tableColumns.disable_employee,
                tableColumns.created_at,
                tableColumns.updated_at,
            ],
            displayColumns: [
                tableColumns.position_employee,
                tableColumns.verification_employee,
                tableColumns.disable_employee,
            ],
        },
        dynamic: { // mutable
            separator: "horizontal",
            visibleColumns: [
                "name_employee",
                "position_employee",
                "verification_employee",
                "disable_employee",
            ],
            selected: [],
            loading: false,
        }
    },
    data: {
        pagination: {
            sortBy: "created_at",
            descending: true,
            page: 1,
            rowsPerPage: 25,
            rowsNumber: 1,
            segment: "/employee",
            search_column: "created_at",
            search_operator: "*",
            search_query_1: "",
            search_query_2: "",
            // month: "",
            // year: "",
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
            // console.log('data', state.data.payload);
    },

    [replace]: (state, params) => {
        // me-replace data di payload.data[] setelah berhasil update oleh axios
        const data = state.data.payload.data;
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (params.uuid == element.uuid) {
                    data[i] = params;
                    // state.data.payload.data[i] = params;
                }
            }
        }
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
                // console.log('pagination');
                commit(pagination, payload.data);
                break;
            case 'payload':
                // console.log('payload');
                commit(data, payload.data);
                break;
            case "replace":
                // console.log('replace');
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