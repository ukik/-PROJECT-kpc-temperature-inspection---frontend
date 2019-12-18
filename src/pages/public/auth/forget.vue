<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="position: absolute;
    z-index: 2;"
  >
    <div class="column q-pa-lg">
      <q-form @submit="requestAxios">
        <div class="row">
          <q-card
            square
            class="shadow-5 q-pb-lg"
            :style="isMobileViewport ? 'width:310px; height:400px' : 'width:500px; height:400px'"
          >
            <q-card-section class="bg-blue">
              <div
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

                <q-toolbar-title>Lupa Password</q-toolbar-title>
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
                >
                  <template v-slot:prepend>
                    <q-icon name="email" />
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
                label="Kirim"
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
              <p class="text-grey-6" v-pointer @click="$router.push({path:'login'})">Kembali</p>
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
      return this["get_forget_karyawan_form"];
    }
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

      vm.$axios
        .post("/api/v1/forget", {
          email_employee: vm.form.email_employee
        })
        .then(function(response) {
          // console.log("response", response.data.payload);

          vm.loading = false;

          if (response.data.status == "invalid_email") {
            vm.$q.notify({
              color: "red",
              message: "Maaf! Email tidak dikenali server... ",
              icon: "report_problem",
              html: true,
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

          vm.$q.notify({
            color: "green",
            message: "Terimakasih! Email verifikasi sudah dikirim... ",
            icon: "report_problem",
            html: true,
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
        })
        .catch(function(error) {
          vm.$q.notify({
            color: "red",
            message: "Maaf! Server tidak merespon... ",
            icon: "report_problem",
            html: true,
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

          vm.loading = false;
        });
    }, 250)
  }
};

const formName = {
  email_employee: "email karyawan"
};
</script>
