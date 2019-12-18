const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    notification
} = require("../namespaces");

const {
    data: {
        unread,
        total_unread
    },
    action_notification,
} = notification

const map_notification = {
    computed: {
        ...mapGetters({
            get_unread_notification: unread,
            get_total_unread_notification: total_unread,
        }),
    },
    methods: {
        ...mapActions({
            set_notification: action_notification,
        }),
    },
}

export default map_notification