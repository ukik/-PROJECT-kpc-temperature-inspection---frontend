// const LinierProgress = require('../components/progress/linear-progress');
const LinierProgress = resolve => {
  require.ensure(
    ['../components/widgets/linear-progress'],
    () => {
      resolve(require('../components/widgets/linear-progress'))
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

// const Editor = require('../components/editor')
const Editor = resolve => {
  require.ensure(
    ['../components/contents/editor'],
    () => {
      resolve(require('../components/contents/editor'))
    }, ''
  )
}

// const DataTable = require('../components/data-table')
const DataTable = resolve => {
  require.ensure(
    ['../components/contents/data-table'],
    () => {
      resolve(require('../components/contents/data-table'))
    }, ''
  )
}

const DataReport = resolve => {
  require.ensure(
    ['../components/contents/data-report'],
    () => {
      resolve(require('../components/contents/data-report'))
    }, ''
  )
}

const DrawerContent = resolve => {
  require.ensure(
    ['../components/layouts/drawer-content'],
    () => {
      resolve(require('../components/layouts/drawer-content'))
    }, ''
  )
}

const LayoutTab = resolve => {
  require.ensure(
    ['../components/layouts/layout-tab'],
    () => {
      resolve(require('../components/layouts/layout-tab'))
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

export default ({
  // app,
  // router,
  // store,
  Vue
}) => {

  Vue.component('Editor', Editor)
  Vue.component('LinierProgress', LinierProgress)
  Vue.component('DataTable', DataTable)
  Vue.component('DrawerContent', DrawerContent)
  Vue.component('LayoutTab', LayoutTab)
  Vue.component('InnerLoading', InnerLoading)
  Vue.component('ChartBar', ChartBar)
  Vue.component('DataReport', DataReport)

}