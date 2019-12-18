const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    auth
} = require("../namespaces");

const {
    data: {
        credentials,
        user,
    },
    action,
} = auth

const map_auth = {
    computed: {
        ...mapGetters({
            get_credentials: credentials,
            get_user: user,
        }),
    },
    methods: {
        ...mapActions({
            set_auth: action,
        }),
    },
}

export default map_auth