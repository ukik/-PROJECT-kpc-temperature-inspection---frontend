const LinierProgress = resolve => {
    require.ensure(
        ['../components/widgets/linear-progress'],
        () => {
            resolve(require('../components/widgets/linear-progress'))
        }, ''
    )
}

const ScrollToTop = resolve => {
    require.ensure(
        ['../components/widgets/scroll-to-top'],
        () => {
            resolve(require('../components/widgets/scroll-to-top'))
        }, ''
    )
}


const InnerLoading = resolve => {
    require.ensure(
        ['../components/widgets/inner-loading'],
        () => {
            resolve(require('../components/widgets/inner-loading'))
        }, ''
    )
}

const InfoInspeksi = resolve => {
    require.ensure(
        ['../components/widgets/card-info/info-inspeksi'],
        () => {
            resolve(require('../components/widgets/card-info/info-inspeksi'))
        }, ''
    )
}

const InfoKaryawan = resolve => {
    require.ensure(
        ['../components/widgets/card-info/info-karyawan'],
        () => {
            resolve(require('../components/widgets/card-info/info-karyawan'))
        }, ''
    )
}

const InfoLibraryAlat = resolve => {
    require.ensure(
        ['../components/widgets/card-info/info-library-alat'],
        () => {
            resolve(require('../components/widgets/card-info/info-library-alat'))
        }, ''
    )
}

const InfoLibraryLokasi = resolve => {
    require.ensure(
        ['../components/widgets/card-info/info-library-lokasi'],
        () => {
            resolve(require('../components/widgets/card-info/info-library-lokasi'))
        }, ''
    )
}

const InfoLibrarySchedule = resolve => {
    require.ensure(
        ['../components/widgets/card-info/info-library-schedule'],
        () => {
            resolve(require('../components/widgets/card-info/info-library-schedule'))
        }, ''
    )
}

const InfoReport = resolve => {
    require.ensure(
        ['../components/widgets/card-info/info-report'],
        () => {
            resolve(require('../components/widgets/card-info/info-report'))
        }, ''
    )
}

const InfoValidation = resolve => {
    require.ensure(
        ['../components/widgets/card-info/info-validation'],
        () => {
            resolve(require('../components/widgets/card-info/info-validation'))
        }, ''
    )
}

const ContentDrawer = resolve => {
    require.ensure(
        ['../components/drawer/content-drawer'],
        () => {
            resolve(require('../components/drawer/content-drawer'))
        }, ''
    )
}

const ChartBar = resolve => {
    require.ensure(
        ['../components/charts/chart-bar'],
        () => {
            resolve(require('../components/charts/chart-bar'))
        }, ''
    )
}

const DropdownItem = resolve => {
    require.ensure(
        ['../components/widgets/btn-dropdown/dropdown-item'],
        () => {
            resolve(require('../components/widgets/btn-dropdown/dropdown-item'))
        }, ''
    )
}

// const DataTableInspeksi = resolve => {
//     require.ensure(
//         ['../components/contents/data-table-inspeksi'],
//         () => {
//             resolve(require('../components/contents/data-table-inspeksi'))
//         }, ''
//     )
// }

const DataTablePanelInvalidInspeksi = resolve => {
    require.ensure(
        ['../components/contents/data-table-panel-invalid-inspeksi'],
        () => {
            resolve(require('../components/contents/data-table-panel-invalid-inspeksi'))
        }, ''
    )
}

const DataTablePanelValidInspeksi = resolve => {
    require.ensure(
        ['../components/contents/data-table-panel-valid-inspeksi'],
        () => {
            resolve(require('../components/contents/data-table-panel-valid-inspeksi'))
        }, ''
    )
}

const DataTableReport = resolve => {
    require.ensure(
        ['../components/contents/data-table-report'],
        () => {
            resolve(require('../components/contents/data-table-report'))
        }, ''
    )
}

const DataTableKaryawan = resolve => {
    require.ensure(
        ['../components/contents/data-table-karyawan'],
        () => {
            resolve(require('../components/contents/data-table-karyawan'))
        }, ''
    )
}

const DataTableKaryawanRole = resolve => {
    require.ensure(
        ['../components/contents/data-table-karyawan-role'],
        () => {
            resolve(require('../components/contents/data-table-karyawan-role'))
        }, ''
    )
}

const DataTableLibrary = resolve => {
    require.ensure(
        ['../components/contents/data-table-library'],
        () => {
            resolve(require('../components/contents/data-table-library'))
        }, ''
    )
}

export default ({
    // app,
    // router,
    // store,
    Vue
}) => {

    Vue.component('ScrollToTop', ScrollToTop)
    Vue.component('LinierProgress', LinierProgress)
        // Vue.component('ContentDrawer', ContentDrawer)
    Vue.component('InnerLoading', InnerLoading)
    Vue.component('ChartBar', ChartBar)

    Vue.component('DataTableLibrary', DataTableLibrary)
    Vue.component('DataTableKaryawan', DataTableKaryawan)
    Vue.component('DataTableKaryawanRole', DataTableKaryawanRole)
    Vue.component('DataTableReport', DataTableReport)
        // Vue.component('DataTableInspeksi', DataTableInspeksi)

    Vue.component('DataTablePanelInvalidInspeksi', DataTablePanelInvalidInspeksi)
    Vue.component('DataTablePanelValidInspeksi', DataTablePanelValidInspeksi)

    Vue.component('InfoInspeksi', InfoInspeksi)
    Vue.component('InfoKaryawan', InfoKaryawan)
    Vue.component('InfoLibraryAlat', InfoLibraryAlat)
    Vue.component('InfoLibraryLokasi', InfoLibraryLokasi)
    Vue.component('InfoLibrarySchedule', InfoLibrarySchedule)
    Vue.component('InfoReport', InfoReport)
    Vue.component('InfoValidation', InfoValidation)

    Vue.component('DropdownItem', DropdownItem)

}