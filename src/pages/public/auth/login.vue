<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="position: absolute; z-index: 2;"
  >
    <div class="column q-pa-lg">
      <q-form @submit="requestAxios">
        <div class="row">
          <q-card
            square
            class="shadow-5 q-pb-lg"
            :style="isMobileViewport ? 'width:310px; height:400px' : 'width:500px;height:400px'"
          >
            <q-card-section class="bg-blue">
              <div
                v-if="!loading"
                @click="$router.push({path:'register'})"
                class="absolute-bottom-right q-mr-md"
                style="transform: translateY(50%); position:absolute; z-index: 9"
              >
                <q-btn round size="18px" icon="face" color="blue-4">
                  <q-tooltip
                    content-style="font-size: 14px"
                    anchor="center left"
                    self="center right"
                  >Halaman Pendaftaran</q-tooltip>
                </q-btn>
              </div>

              <q-toolbar class="text-white">
                <!-- <q-avatar>
                  <img src="../../../assets/quasar-logo.svg" />
                </q-avatar>-->

                <q-toolbar-title>Login</q-toolbar-title>
              </q-toolbar>
            </q-card-section>
            <q-card-section>
              <div class="q-px-sm q-pt-xl">
                <q-input
                  ref="email_employee"
                  square
                  :disable="loading"
                  clearable
                  v-model="form.email_employee"
                  type="email"
                  label="Email"
                  :hint="isMobileViewport ? '' : 'Wajib: isi nama lengkap karyawan'"
                  lazy-rules
                  :rules="[
                    val => val && val.length > 0 || 'Required *',
                    val => val && val.length <= 50 || 'Maximal 50 char'
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <q-input
                  ref="password_employee"
                  square
                  :disable="loading"
                  clearable
                  v-model="form.password_employee"
                  type="password"
                  label="Password"
                  :hint="isMobileViewport ? '' : 'Wajib: isi nama lengkap karyawan'"
                  lazy-rules
                  :rules="[
                    val => val && val.length > 0 || 'Required *',
                    val => val && val.length <= 50 || 'Maximal 50 char'
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                </q-input>
              </div>
            </q-card-section>

            <q-card-actions class="q-px-lg">
              <q-btn
                unelevated
                size="md"
                color="purple-4"
                class="full-width text-white"
                label="Masuk"
                type="submit"
                :icon-right="isMobileViewport ? '':'send'"
                :loading="loading"
              >
                <template v-slot:loading>
                  <q-spinner-hourglass class="on-left" />Wait...
                </template>
              </q-btn>
            </q-card-actions>
            <q-card-section class="text-center q-pa-sm">
              <p
                class="text-grey-6"
                v-pointer
                @click="$router.push({path:'forget'})"
              >Forgot your password?</p>
            </q-card-section>
          </q-card>
        </div>
      </q-form>
      <div class="demo-ribbon"></div>
      <q-toolbar class="q-pt-md">
        <span
          style="text-align:center;width:100%"
          class="text-grey"
        >KPC@{{ new Date().getFullYear() }}</span>
      </q-toolbar>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  computed: {
    form() {
      return this["get_login_karyawan_form"];
    }
  },
  mounted() {
    // if (this.$route.name != "public-redirect-success") {
    //   this.$router.replace({
    //     name: "public-redirect-success",
    //     replace: true
    //   });
    // }
  },
  methods: {
    /**
     * -------------------------------------------------------------
     * Axios Block
     * -------------------------------------------------------------
     */
    requestAxios: _.debounce(function(payload) {
      const vm = this;

      let object = formName;

      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const element = object[key];
          // console.log(vm.$refs[key].hasError, element);

          if (vm.$refs[key] == undefined) {
            vm.$q.notify({
              color: "warning",
              message: `Perhatian! Element tidak tersedia, coba segarkan halaman`,
              icon: "report_problem",
              position: "bottom"
            });
            // return;
          }

          if (vm.$refs[key].hasError) {
            vm.$q.notify({
              color: "warning",
              message: `Perhatian! Kolom ${element} wajib diisi`,
              icon: "report_problem",
              position: "top",
              actions: [
                {
                  label: "Tutup",
                  color: "white",
                  handler: () => {
                    /* console.log('wooow') */
                  }
                }
              ]
            });
            return;
          }
        }
      }

      vm.loading = true;
      // console.log(payload);

      vm.$axios
        .post("/api/v1/login", {
          email_employee: vm.form.email_employee,
          password_employee: vm.form.password_employee
        })
        .then(function(response) {
          //console.log("response", response.data.payload);

          // reset biodata form siapa tau sempat diisi
          vm.vuexAction({
            data: null,
            type: "reset_form"
          });
        })
        .catch(function(error) {
          vm.loading = false;
        });
    }, 250)
  }
};

const formName = {
  email_employee: "email karyawan",
  password_employee: "password karyawan"
};
</script>
