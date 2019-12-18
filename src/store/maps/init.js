const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    init
} = require("../namespaces");

const {
    data: {
        initialized,
    },
    action_init,
} = init

const map_init = {
    computed: {
        ...mapGetters({
            get_initialized_init: initialized,
        }),
    },
    methods: {
        ...mapActions({
            set_init: action_init,
        }),
    },
}

export default map_init