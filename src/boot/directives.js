export default async ({
    // app,
    // router,
    // store,
    Vue

}) => {

    Vue.directive('row-color', {
        inserted(el, binding, vnode) {
            // console.log(binding.value)
            if (binding.value.val.length <= 1) {
                el.style.background = binding.value.newColor;
            } else {
                el.style.background = binding.value.oldColor;
            }
        },
        update(el, binding, vnode) {
            // console.log(binding.value)
            if (binding.value.val.length <= 1) {
                el.style.background = binding.value.newColor;
            } else {
                el.style.background = binding.value.oldColor;
            }
        },
    })

    Vue.directive('text-color', {
        inserted(el, binding, vnode) {
            console.log(binding.value)
            for (let index = 0; index < binding.value.colors.length; index++) {
                if (binding.value.val == index) {
                    // console.log(binding.value.colors[binding.value.val])
                    el.style.color = binding.value.colors[binding.value.val];
                    break
                }
            }
        },
        update(el, binding, vnode) {
            console.log(binding.value)
            for (let index = 0; index < binding.value.colors.length; index++) {
                if (binding.value.val == index) {
                    el.style.color = binding.value.colors[binding.value.val];
                    break
                }
            }
        },
    })

    // not used yet
    Vue.directive('text-color-screenshoot', {
        inserted(el, binding, vnode) {
            // console.log(binding.value)
            if (!binding.value.val) {
                el.style.color = binding.value.nothing;
                return
            }

            if (binding.value.val.length <= 1) {
                el.style.color = binding.value.nothing;
            } else {
                el.style.color = binding.value.exist;
            }
        },
        update(el, binding, vnode) {
            // console.log(binding.value)
            if (!binding.value.val) {
                el.style.color = binding.value.nothing;
                return
            }

            if (binding.value.val.length <= 1) {
                el.style.color = binding.value.nothing;
            } else {
                el.style.color = binding.value.exist;
            }
        },
    })

    Vue.directive('datatable-toolbar', {
        inserted(el, binding, vnode) {
            // console.log(binding.value)
            if (binding.value) {
                el.className = "col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3";
            } else {
                el.className = "col-12 col-xs-2 col-sm-6 col-md-6 col-lg-6 col-xl-6";
            }
        },
        update(el, binding, vnode) {
            // console.log(binding.value)
            if (binding.value) {
                el.className = "col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3";
            } else {
                el.className = "col-12 col-xs-2 col-sm-6 col-md-6 col-lg-6 col-xl-6";
            }
        },
    })

    // not used
    Vue.directive('date-watch', {
        inserted(el, binding, vnode) {
            console.log(binding.value)
        },
        update(el, binding, vnode) {
            console.log(binding.value)
        },
    })

    Vue.directive('column-visible', {
        update(el, binding, vnode) {
            const width = window.screen.width * window.devicePixelRatio
            const height = window.screen.height * window.devicePixelRatio

            // console.log("Your screen resolution is: " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio);

            if (width <= 850) {
                el.style.height = 'height: 250 px;'
                el.style.width = 'width: 265 px;'
            } else {
                el.style.height = 'auto;'
                el.style.width = 'auto'
            }
        },
    })

    Vue.directive('pointer', {
        inserted(el, binding, vnode) {
            el.style.cursor = "pointer"
        },
    })



}