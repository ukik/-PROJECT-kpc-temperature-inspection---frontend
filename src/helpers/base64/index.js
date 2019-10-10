const no_image = require('./no-image');
const drawer_background = require('./drawer-background');

module.exports = {
    data() {
        return {
            no_image_base64: no_image,
            drawer_background_base64: drawer_background
        }
    }
}