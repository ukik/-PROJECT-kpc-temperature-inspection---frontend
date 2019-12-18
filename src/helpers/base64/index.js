const no_image = require('./no-image');
const drawer_background = require('./drawer-background');
const poltak_sinaga = require('./poltak-sinaga');

const ukik = require('./ukik')
const ahmad = require('./ahmad')
const faza = require('./faza')
const fery = require('./fery')
const jordan = require('./jordan')

const avatar = require('./avatar')

module.exports = {
    data() {
        return {
            no_image_base64: no_image,
            drawer_background_base64: drawer_background,
            poltak_sinaga_base64: poltak_sinaga,
            ukik_base64: ukik,
            ahmad_base64: ahmad,
            faza_base64: faza,
            avatar_base64: avatar,
            jordan_base64: jordan,
            fery_base64: fery,
        }
    },
}