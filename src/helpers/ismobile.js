import {
    Platform
} from 'quasar'

const ismobile = {
    computed: {
        isMobileViewport() {
            if (Platform.is.mobile == undefined) {
                return false
            }
            return true
        }
    }
}


export default ismobile