// const LinierProgress = require('../components/progress/linear-progress');
const LinierProgress = resolve => {
  require.ensure(
    ['../components/progress/linear-progress'],
    () => {
      resolve(require('../components/progress/linear-progress'))
    }, ''
  )
}

// const Editor = require('../components/editor')
const Editor = resolve => {
  require.ensure(
    ['../components/content/editor'],
    () => {
      resolve(require('../components/content/editor'))
    }, ''
  )
}

// const DataTable = require('../components/data-table')
const DataTable = resolve => {
  require.ensure(
    ['../components/content/data-table'],
    () => {
      resolve(require('../components/content/data-table'))
    }, ''
  )
}

const DrawerContent = resolve => {
  require.ensure(
    ['../components/layout/drawer-content'],
    () => {
      resolve(require('../components/layout/drawer-content'))
    }, ''
  )
}

const LayoutTab = resolve => {
  require.ensure(
    ['../components/layout/layout-tab'],
    () => {
      resolve(require('../components/layout/layout-tab'))
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
}