const routes = [{
  path: '/',
  component: () => import('../layouts/MyLayout.vue'),
  children: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: 'home',
      component: () => import('../pages/Index.vue')
    },
    {
      path: 'table',
      component: () => import('../pages/data-table.vue'),

    },

    {
      path: 'aset-equipment',
      name: 'aset-equipment',
      component: () => import('../pages/aset/aset-equipment.vue'),
      meta: { 
          requiresAuth: true
      }
    },
    {
      path: 'aset-lokasi',
      name: 'aset-lokasi',
      component: () => import('../pages/aset/aset-lokasi.vue')
    },

    {
      path: 'inspeksi-catatan',
      name: 'inspeksi-catatan',
      component: () => import('../pages/inspeksi/inspeksi-catatan.vue')
    }, {
      path: 'inspeksi-temperatur',
      name: 'inspeksi-temperatur',
      component: () => import('../pages/inspeksi/inspeksi-temperatur.vue')
    },

    {
      path: 'karyawan-biodata',
      name: 'karyawan-biodata',
      component: () => import('../pages/karyawan/karyawan-biodata.vue')
    },
    {
      path: 'karyawan-role',
      name: 'karyawan-role',
      component: () => import('../pages/karyawan/karyawan-role.vue')
    },
    {
      path: 'karyawan-role-edit',
      name: 'karyawan-role-edit',
      component: () => import('../pages/karyawan/karyawan-role-edit.vue')
    },
    // {
    //   path: 'laporan-mingguan',
    //   name: 'laporan-mingguan',
    //   component: () => import('../pages/laporan/laporan-mingguan.vue')
    // }, 
    // {
    //   path: 'laporan-bulanan',
    //   name: 'laporan-bulanan',
    //   component: () => import('../pages/laporan/laporan-bulanan.vue')
    // }, 
    // {
    //   path: 'laporan-kuartal',
    //   name: 'laporan-kuartal',
    //   component: () => import('../pages/laporan/laporan-kuartal.vue')
    // },

    {
      path: 'formulir-karyawan',
      name: 'formulir-karyawan',
      component: () => import('../pages/formulir/karyawan.vue')
    },
    {
      path: 'formulir-inspeksi',
      name: 'formulir-inspeksi',
      component: () => import('../pages/formulir/inspeksi.vue')
    },
    {
      path: 'laporan',
      name: 'laporan',
      component: () => import('../pages/laporan/laporan.vue')
    },    
  ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../pages/Error404.vue')
  })
}

export default routes