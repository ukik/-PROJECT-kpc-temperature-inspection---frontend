const {
    mapActions,
    mapGetters
} = require('vuex')

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

const map_tab = {
    computed: {
        ...mapGetters({
            get_feature_tab: feature,
            get_inspection_tab: inspection,
        }),
    },
    methods: {
        ...mapActions({
            set_tab: action,
        }),
    },
}

export default map_tab