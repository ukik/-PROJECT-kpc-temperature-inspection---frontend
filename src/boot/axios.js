import Vue from 'vue'
import axios from 'axios'
import {
    Platform,
    Notify
} from 'quasar'

function Notif({
    message,
    theme
}) {
    Notify.create({
        color: theme,
        message: message, //"Maaf! Server tidak merespon... " + value,
        icon: "report_problem",
        html: true,
        actions: [{
            label: "Tutup",
            color: "white",
            handler: () => {
                /* console.log('wooow') */
            }
        }]
    });
}

const {
    auth,
    notification,
    init
} = require("../store/namespaces/index");

const {
    action,
} = auth

const {
    action_notification,
} = notification

const {
    data: {
        initialized
    },
} = init



export default async({
    app,
    router,
    store,
    Vue
}) => {
    const host = await

    function() {
        if (Platform.is.mobile) {
            return "https://kpc.labsnip.com";
            // return "http://localhost:8000"; // "https://kpc.labsnip.com" //
            // var person = prompt("Please enter your domain:", "");
            // return `http://${person}/[PROJECT] kpc temperatur inspection/public` // "https://kpc.labsnip.com" //
        } else {
            return "https://kpc.labsnip.com";
            // return "http://localhost:8000"; //  "https://kpc.labsnip.com" //
        }
    }

    function logoutByToken() {
        store.dispatch(action, {
            type: 'logout',
        })
        if (router.app._route.name != "login") {
            router.replace({
                name: 'login',
                replace: true
            })
        }

    }

    axios.defaults.baseURL = host();
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters[credentials].token;

    axios.interceptors.request.use(await
        function(config) {

            // override init every request
            // config.params = {};
            // config.params['signiture'] = app.$data.signiture;

            config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token') //store.getters[credentials].token;
            config.headers.post['Content-Type'] = 'application/json';
            config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

            // switch (config.method) {
            //   case "post":
            //   case "put":
            //   case "delete":
            //   default:
            //     break;
            // }

            return config;

        }, await
        function(error) {

            return Promise.reject(error);
        });

    axios.interceptors.response.use(await
        function(response) {
            //console.log(response);
            /**
             * -------------------------------------------------------------
             * Error Handler because CORS/CORB
             * -------------------------------------------------------------
             */
            switch (response.data.token) {
                case 'invalid_credentials':
                case 'token_not_provided':
                case 'could_not_create_token':
                    logoutByToken()
                    return response;
                case 'invalid_email':
                    Notif({
                        message: "Maaf! Server tidak merespon... <br>Email tidak terdaftar.",
                        theme: "negative"
                    })
                    return response;
            }

            // return response;
            /**
             * -------------------------------------------------------------
             * Logout Phase
             * -------------------------------------------------------------
             */

            // data sent was failed to validated by server
            if (response.data.status == "logout") {
                Notif({
                    message: "Akun anda berhasil logout, terimakasih",
                    theme: "success"
                })
                logoutByToken()
                return response;
            }

            /**
             * -------------------------------------------------------------
             * Vuex User Data (intercept), as long as not error, update Usar Data
             * -------------------------------------------------------------
             */

            store.dispatch(action, {
                type: 'user',
                data: response.data.user
            })

            // update notification badge
            store.dispatch(action_notification, {
                type: 'update',
                data: response.data.notifications
            })


            /**
             * -------------------------------------------------------------
             * Public Karyawan Registered Phase
             * -------------------------------------------------------------
             */

            // data sent was failed to validated by server
            // response from: src\pages\public\auth\register.vue
            if (response.data.status == "public-karyawan-registered") {
                // if (router.app._route.name != "public-redirect-success") {
                //     router.replace({
                //         name: 'public-redirect-success',
                //         replace: true
                //     })
                // }
                return response;
            }

            /**
             * -------------------------------------------------------------
             * Private Karyawan Registered Phase
             * -------------------------------------------------------------
             */

            // data sent was failed to validated by server
            // response from: src\pages\private\formulir\karyawan.vue
            if (response.data.status == "private-karyawan-registered") {
                // if (router.app._route.name != "private-redirect-success") {
                //     router.replace({
                //         name: 'private-redirect-success',
                //         replace: true
                //     })
                // }
                return response;
            }

            /**
             * -------------------------------------------------------------
             * Private Karyawan Updated Phase
             * -------------------------------------------------------------
             */

            // data sent was failed to validated by server
            // response from: src\pages\private\formulir\karyawan.vue
            if (response.data.status == "private-karyawan-updated") {
                // if (router.app._route.name != "private-redirect-success") {
                //     router.replace({
                //         name: 'private-redirect-success',
                //         replace: true
                //     })
                // }
                return response;
            }

            /**
             * -------------------------------------------------------------
             * Disable Phase
             * -------------------------------------------------------------
             */

            // data sent was failed to validated by server
            if (response.data.status == "disable") {
                Notif({
                    message: "Akun anda belum diaktifkan oleh admin, terimakasih",
                    theme: "warning"
                })

                if (router.app._route.name != "disabled") {
                    router.replace({
                        name: 'disabled',
                        replace: true
                    })
                }
                return response;
            }

            /**
             * -------------------------------------------------------------
             * Unverified Phase
             * -------------------------------------------------------------
             */

            // data sent was failed to validated by server
            if (response.data.status == "unverified") {
                Notif({
                    message: "Akun anda belum diaktifkan oleh admin, terimakasih",
                    theme: "warning"
                })

                if (router.app._route.name != "unverified") {
                    router.replace({
                        name: 'unverified',
                        replace: true
                    })
                }
                return response;
            }

            /**
             * -------------------------------------------------------------
             * Failed Validation Phase
             * -------------------------------------------------------------
             */

            // data sent was failed to validated by server
            if (response.data.status == "validation") {
                const object = response.data.payload
                let message = ""
                for (const key in object) {
                    if (object.hasOwnProperty(key)) {
                        const element = object[key];
                        message += "<br>" + element
                    }
                }
                Notif({
                    message: "Perhatian! Data yang dikirim tidak valid... " + message,
                    theme: "warning"
                })

                return response;
            }

            /**
             * -------------------------------------------------------------
             * Vuex Credentials
             * -------------------------------------------------------------
             */

            // update vuex store 
            if (router.app._route.name == "login") {
                store.dispatch(action, {
                    type: 'credentials',
                    data: response.data.credentials
                })
            } else {
                if (response.data.credentials != undefined) {}
                store.dispatch(action, {
                    type: 'credentials_update',
                    data: response.data.credentials
                })
            }

            /**
             * -------------------------------------------------------------
             * Auth Check
             * -------------------------------------------------------------
             */
            const {
                logged,
                role,
            } = response.data.credentials

            // redirect to 'login' page because response from server is unauthenticated anymore
            if (!logged) {
                if (router.app._route.name != "login") {
                    Notif({
                        message: "Akses anda tidak secure, silahkan login kembali",
                        theme: "warning"
                    })

                    router.replace({
                        name: 'login',

                    })
                }
            }

            // redirect to 'login' page because response from server is unauthorized anymore
            if (role == null) {
                if (router.app._route.name != "login") {
                    Notif({
                        message: "Akses anda tidak secure, silahkan login kembali",
                        theme: "warning"
                    })

                    router.replace({
                        name: 'login',

                    })
                }
            }

            // redirect to 'dashboard' page after successfully login
            if (logged) {
                if (router.app._route.name == "login") {
                    router.replace({
                        name: 'laporan',
                        replace: true
                    })
                }
            }

            return response;
        }, await
        function(error) {

            // console.log('xxx', store, store.getters[initialized])

            // once only page refreshed
            // berhasil atau gagal saat init, tidak perlu ada notif
            if (store.getters[initialized]) {
                logoutByToken()
                return Promise.reject(error);
            }

            if (!error.response) {
                // console.log("Please check your internet connection.");
                Notif({
                    message: "Maaf! Tidak ada koneksi internet...",
                    theme: "negative"
                })
                return
            }

            /**
             * -------------------------------------------------------------
             * Error Handler
             * -------------------------------------------------------------
             */
            switch (error.response.data.token) {
                case 'invalid_credentials':
                    Notif({
                        message: "Maaf! Server tidak merespon... <br>Data credential kamu salah.",
                        theme: "negative"
                    })
                    logoutByToken()
                    break;
                case 'token_not_provided':
                    Notif({
                        message: "Maaf! Server tidak merespon... <br>Token tidak tersedia.",
                        theme: "negative"
                    })
                    logoutByToken()
                    break;
                case 'could_not_create_token':
                    Notif({
                        message: "Maaf! Server tidak merespon... <br>Token gagal dibuat, silahkan login lagi.",
                        theme: "negative"
                    })
                    logoutByToken()
                    break;
                case 'token_expired':
                    Notif({
                        message: "Maaf! Server tidak merespon... <br>Token expired.",
                        theme: "negative"
                    })
                    logoutByToken()
                    break;
                case 'token_invalid':
                    Notif({
                        message: "Maaf! Server tidak merespon... <br>Token tidak valid.",
                        theme: "negative"
                    })
                    logoutByToken()
                    break;
                case 'token_absent':
                    Notif({
                        message: "Maaf! Server tidak merespon... <br>Token kosong.",
                        theme: "negative"
                    })
                    logoutByToken()
                    break;
                case 'invalid_email':
                    Notif({
                        message: "Maaf! Server tidak merespon... <br>Email tidak terdaftar.",
                        theme: "negative"
                    })
                    break;
                default:
                    Notif({
                        message: "Maaf! Server tidak merespon...",
                        theme: "negative"
                    })
                    break;
            }

            return Promise.reject(error);
        });

    Vue.prototype.$axios = axios

}