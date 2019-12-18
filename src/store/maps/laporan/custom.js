const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    laporan_custom
} = require("../../namespaces");

const {
    config: {
        static: {
            columns,
            selectedColumns,
            displayColumns,
        },
        dynamic: {
            separator,
            visibleColumns,
            selected,
            loading,
            equipmentColumns,
            locationColumns,

            chartLabel,
            chartDataCondition,
            chartDataGreaseShoot,
            chartDataWeather,
            chartDataTemperature,
            chartDataRain,
        }
    },
    data: {
        pagination,
        payload: {
            data,
        },
    },
    action,
} = laporan_custom

const map_laporan_custom = {
    computed: {
        ...mapGetters({
            get_laporan_custom_columns: columns,
            get_laporan_custom_selectedColumns: selectedColumns,
            get_laporan_custom_displayColumns: displayColumns,

            get_laporan_custom_separator: separator,
            get_laporan_custom_visibleColumns: visibleColumns,
            get_laporan_custom_selected: selected,
            get_laporan_custom_loading: loading,
            get_laporan_custom_equipmentColumns: equipmentColumns,
            get_laporan_custom_locationColumns: locationColumns,

            get_laporan_custom_chartLabel: chartLabel,

            get_laporan_custom_chartDataCondition: chartDataCondition,
            get_laporan_custom_chartDataGreaseShoot: chartDataGreaseShoot,
            get_laporan_custom_chartDataWeather: chartDataWeather,
            get_laporan_custom_chartDataTemperature: chartDataTemperature,
            get_laporan_custom_chartDataRain: chartDataRain,

            get_laporan_custom_pagination: pagination,
            get_laporan_custom_data: data,
        }),
    },
    methods: {
        ...mapActions({
            set_laporan_custom: action,
        }),
    },
}

export default map_laporan_custom