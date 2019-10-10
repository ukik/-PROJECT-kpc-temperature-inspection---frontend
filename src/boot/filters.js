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
        switch (Number(value)) {
            case 0:
                return '';
            case 1:
                return 'Kiri';
            case 2:
                return 'Kanan';
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
}