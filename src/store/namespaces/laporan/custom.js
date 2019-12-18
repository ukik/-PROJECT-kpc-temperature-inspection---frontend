const laporan_custom = {
    config: {
        static: {
            columns: 'laporan_custom/config/static/columns',
            selectedColumns: 'laporan_custom/config/static/selectedColumns',
            displayColumns: 'laporan_custom/config/static/displayColumns',
        },
        dynamic: {
            separator: 'laporan_custom/config/dynamic/separator',
            visibleColumns: 'laporan_custom/config/dynamic/visibleColumns',
            selected: 'laporan_custom/config/dynamic/selected',
            loading: 'laporan_custom/config/dynamic/loading',

            equipmentColumns: 'laporan_custom/config/dynamic/equipmentColumns',
            locationColumns: 'laporan_custom/config/dynamic/locationColumns',

            chartLabel: 'laporan_custom/config/dynamic/chartLabel',
            chartDataCondition: 'laporan_custom/config/dynamic/chartDataCondition',
            chartDataGreaseShoot: 'laporan_custom/config/dynamic/chartDataGreaseShoot',
            chartDataWeather: 'laporan_custom/config/dynamic/chartDataWeather',
            chartDataTemperature: 'laporan_custom/config/dynamic/chartDataTemperature',
            chartDataRain: 'laporan_custom/config/dynamic/chartDataRain',

        }
    },
    data: {
        pagination: 'laporan_custom/data/pagination',
        payload: {
            data: 'laporan_custom/data/payload/data',
        },
    },
    action: 'laporan_custom/action',
}

module.exports = laporan_custom