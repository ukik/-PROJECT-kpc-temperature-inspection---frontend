import Vue from 'vue'
import axios from 'axios'
import { Platform } from 'quasar'

export default async ({
  app,
  // router,
  // store,
  Vue
}) => {

    // console.log(axios);
    
    const host = await function() {
      if (Platform.is.mobile) {
        return "http://172.16.210.123/[PROJECT] kpc temperatur inspection/public";
      } else {
        return "http://localhost:8000";
      }
    }    

    axios.defaults.baseURL = host();
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";

    axios.defaults.transformRequest = [await function (data, headers) {
        // Do whatever you want to transform the data
        return data;
    }];

    axios.interceptors.request.use(await function (config) {

        // override init every request
        // config.params = {};
        // config.params['signiture'] = app.$data.signiture;
        // config.headers.common['Authorization'] = 'Bearer ' + store.state.auth.credential.token;
        // config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

        // switch (config.method) {
        //   case "post":
        //   case "put":
        //   case "delete":
        //   default:
        //     break;
        // }

        return config;

    }, await function (error) {
        // Do something with response error
        return Promise.reject(error);
    });

    axios.interceptors.response.use(await function (response) {
        // Do something with response data
        // Loading.hide();
        return response;
    }, await function (error) {
        // Do something with response error
        return Promise.reject(error);
    });

    Vue.prototype.$axios = axios

}



// import { LocalStorage } from 'quasar'; // make sure you edit quasar.conf.js
// import axios from 'axios';

// export default ({ app, router, Vue }) => {
//     axios.defaults.baseURL = 'https://api.somewhere.com/';

//     // Add a response interceptor
//     axios.interceptors.response.use(await function (response) {
//         // Do something with response data
//         // Loading.hide();
//         return response;
//     }, await function (error) {
//         // Do something with response error
//         return Promise.reject(error);
//     });

//     axios.interceptors.request.use(await function (config) {
//         // default options
//         //  Loading.show();
//         return config;
//     });

//     axios.defaults.method = 'POST';

//     axios.defaults.transformRequest = [await function (data, headers) {
//         // Do whatever you want to transform the data
//         return data;
//     }];

//     // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//     axios.defaults.headers.post['Content-Type'] = 'application/json';
//     // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

//     Vue.prototype.$axios = axios;
//     // window.$axios = axios; super super super global : )
// };
