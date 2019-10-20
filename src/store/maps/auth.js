const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    auth
} = require("../namespaces");

const map_auth = {
    computed: {
        ...mapGetters({
            get_is_logged_in: auth.is_logged_in,
        }),
    },
    methods: {
        ...mapActions({
            set_auth: auth.action,
        }),
    },
}

export default map_auth