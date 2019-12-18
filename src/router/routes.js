const routes = [{
        path: '/',
        component: () =>
            import ('../layouts/login.vue'),
        meta: {
            requiresAuth: false,
            roles: [],
        },
        children: [{
                path: '/',
                redirect: 'login',
                meta: {
                    requiresAuth: false,
                    roles: [],
                }
            },
            {
                path: 'login',
                name: 'login',
                component: () =>
                    import ('../pages/public/auth/login.vue'),
                meta: {
                    transition: 'fade',
                    requiresAuth: false,
                    roles: [],
                }
            },
            {
                path: 'forget',
                name: 'forget',
                component: () =>
                    import ('../pages/public/auth/forget.vue'),
                meta: {
                    requiresAuth: false,
                    roles: [],
                }
            },
            {
                path: 'register',
                name: 'register',
                component: () =>
                    import ('../pages/public/auth/register.vue'),
                meta: {
                    requiresAuth: false,
                    roles: [],
                }
            },

        ]
    },

    {
        path: '/private',
        component: () =>
            import ('../layouts/dashboard.vue'),
        meta: {
            requiresAuth: true,
            roles: [0, 1, 2],
        },
        // beforeEnter: checkAuth,
        children: [{
                path: 'library-equipment',
                name: 'library-equipment',
                component: () =>
                    import ('../pages/private/library/equipment.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0],
                }
            },
            {
                path: 'library-lokasi',
                name: 'library-lokasi',
                component: () =>
                    import ('../pages/private/library/lokasi.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0],
                }
            },
            {
                path: 'library-schedule',
                name: 'library-schedule',
                component: () =>
                    import ('../pages/private/library/schedule.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0],
                }
            },
            // {
            //     path: 'inspeksi-temperatur',
            //     name: 'inspeksi-temperatur',
            //     component: () =>
            //         import ('../pages/private/inspeksi/inspeksi-temperatur.vue'),
            //     meta: {
            //         requiresAuth: true,
            //         roles: [0, 1, 2],
            //     }
            // },
            {
                path: 'inspeksi-temperatur-panel',
                name: 'inspeksi-temperatur-panel',
                component: () =>
                    import ('../pages/private/inspeksi/panel.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0, 1, 2],
                }
            },
            {
                path: 'karyawan-biodata',
                name: 'karyawan-biodata',
                component: () =>
                    import ('../pages/private/karyawan/karyawan-biodata.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0, 1, 2],
                },
                // beforeEnter: (to, from, next) => {
                //     console.log(from)
                // }
            },
            {
                path: 'karyawan-role',
                name: 'karyawan-role',
                component: () =>
                    import ('../pages/private/karyawan/karyawan-role.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0],
                }
            },
            {
                path: 'karyawan-role-edit',
                name: 'karyawan-role-edit',
                component: () =>
                    import ('../pages/private/karyawan/karyawan-role-edit.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0],
                }
            },
            {
                path: 'laporan',
                name: 'laporan',
                component: () =>
                    import ('../pages/private/laporan/laporan.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0, 1, 2],
                }
            },
            {
                path: 'formulir-karyawan',
                name: 'formulir-karyawan',
                component: () =>
                    import ('../pages/private/formulir/karyawan.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0, 1, 2],
                }
            },
            {
                path: 'formulir-karyawan-detail',
                name: 'formulir-karyawan-detail',
                component: () =>
                    import ('../pages/private/formulir/karyawan-detail.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0, 1, 2],
                }
            },
            {
                path: 'formulir-inspeksi',
                name: 'formulir-inspeksi',
                component: () =>
                    import ('../pages/private/formulir/inspeksi.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0, 2],
                },
                props: (route) => ({
                    routeProps: route.query.routeProps,
                }),
            },
            {
                path: 'formulir-inspeksi-new',
                name: 'formulir-inspeksi-new',
                component: () =>
                    import ('../pages/private/formulir/inspeksi-new.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0, 2],
                },
                props: (route) => ({
                    routeProps: route.query.routeProps,
                }),
            },
            {
                path: 'formulir-inspeksi-detail',
                name: 'formulir-inspeksi-detail',
                component: () =>
                    import ('../pages/private/formulir/inspeksi-detail.vue'),
                meta: {
                    // body: 3,
                    requiresAuth: true,
                    roles: [0, 1, 2],
                },
                props: (route) => ({
                    routeProps: route.query.routeProps,
                }),
            },
            {
                path: 'help',
                name: 'help',
                component: () =>
                    import ('../pages/private/help/panel.vue'),
                meta: {
                    requiresAuth: true,
                    roles: [0, 1, 2],
                },
            },

            // akun yang dibuatkan oleh admin tidak perlu verifikasi & disable
            // {
            //     path: 'verified',
            //     name: 'verified',
            //     component: () =>
            //         import ('../pages/private/redirect/verified.vue'),
            //     meta: {
            //         requiresAuth: false,
            //         roles: [1, 2],
            //     }
            // },

            // akun yang dibuatkan oleh admin tidak perlu verifikasi & disable
            // {
            //     path: 'unverified',
            //     name: 'unverified',
            //     component: () =>
            //         import ('../pages/private/redirect/unverified.vue'),
            //     meta: {
            //         requiresAuth: false,
            //         roles: [1, 2],
            //     }
            // },

            {
                path: '404',
                name: '404',
                component: () =>
                    import ('../pages/private/redirect/404.vue'),
                meta: {
                    requiresAuth: false,
                    roles: [0, 1, 2],
                }
            },
            {
                path: 'success-karyawan',
                name: 'private-redirect-success-karyawan',
                component: () =>
                    import ('../pages/private/redirect/success-karyawan.vue'),
                meta: {
                    requiresAuth: false,
                    roles: [0, 2],
                }
            },
            {
                path: 'success-inspeksi',
                name: 'private-redirect-success-inspeksi',
                component: () =>
                    import ('../pages/private/redirect/success-inspeksi.vue'),
                meta: {
                    requiresAuth: false,
                    roles: [0, 2],
                }
            },
        ]
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    // routes.push({
    //     path: '/',
    //     // redirect: 'login',
    //     component: () =>
    //         import ('../pages/init.vue'),
    //     meta: {
    //         requiresAuth: false,
    //         roles: [],
    //     }
    // })
    routes.push({
        path: '*',
        component: () =>
            import ('../pages/public/redirect/404.vue')
    })
    routes.push({
        path: '/success',
        name: 'public-redirect-success',
        component: () =>
            import ('../pages/public/redirect/success.vue'),
    })
    routes.push({
        path: '/disabled',
        name: 'disabled',
        component: () =>
            import ('../pages/public/redirect/disabled.vue'),
    })

    // melalui blade
    /*
    routes.push({
        path: '/verified',
        name: 'verified',
        component: () =>
            import ('../pages/public/redirect/verified.vue'),
    })
    */

    routes.push({
        path: '/unverified',
        name: 'unverified',
        component: () =>
            import ('../pages/public/redirect/verified.vue'),
    })
}

export default routes