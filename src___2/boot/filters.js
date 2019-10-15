export default ({
    // app,
    // router,
    // store,
    Vue
}) => {

    Vue.filter('position', function (value, args) {
        switch (Number(value)) {
            case 0:
                return 'Super Admin';
            case 1:
                return 'Supervisor';
            case 2:
                return 'Temperature Man';
        }
    });

    Vue.filter('gender', function (value, args) {
        switch (Number(value)) {
            case 0:
                return 'Laki-laki';
            case 1:
                return 'Perempuan';

        }
    });

    Vue.filter('place', function (value, args) {
        switch (value) {
            case '':
                return '---';
            case 'A':
                return 'Kanan';
            case 'B':
                return 'Kiri';
        }
    });

    Vue.filter('marital', function (value, args) {
        switch (Number(value)) {
            case 0:
                return 'Lajang';
            case 1:
                return 'Menikah';

        }
    });

    Vue.filter('verification', function (value, args) {
        switch (Number(value)) {
            case 0:
                return 'Tidek Terverifikasi';
            case 1:
                return 'Terverifikasi';

        }
    });

    Vue.filter('disable', function (value, args) {
        switch (Number(value)) {
            case 0:
                return 'Tidak';
            case 1:
                return 'Terkunci';

        }
    });

    Vue.filter('condition', (value) => {
        switch (Number(value)) {
            case 1:
                return 'Noise'                
            case 2:
                return 'Dusty'                
            case 3:
                return 'Vibration'                
        }
    })

    Vue.filter('weather', (value) => {
        switch (Number(value)) {
            case 1:
                return 'Cerah'                
            case 2:
                return 'Mendung'                
            case 3:
                return 'Hujan'                
            case 4:
                return 'Kabut'                
            case 5:
                return 'Angin'                
            case 6:
                return 'Lainnya'                
        }
    })
}