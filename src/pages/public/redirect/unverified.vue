<template>
  <div :class="isMobileViewport ? 'fixed-center text-center' : 'text-center'">
    <q-toolbar style="padding:0px; margin-top:100px">
      <q-toolbar-title class="text-h5 text-grey">
        <strong>Akun Unverified</strong>
      </q-toolbar-title>
    </q-toolbar>
    <p>
      <q-icon name="no_encryption" color="orange" size="100px" />
    </p>
    <p class="text-faded">
      <strong class="text-h6">Perhatian!</strong>
      <br />Anda belum melakukan verifikasi akun
      <br />Silahkan melakukan verifikasi akun menggunakan tautan yang sudah dikirim ke email anda.
    </p>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="secondary"
        outline
        icon="mail"
        @click="requestAxios"
        label="kirim link verifikasi"
        :loading="loading"
      >
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />Wait...
        </template>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    /**
     * -------------------------------------------------------------
     * Axios Block
     * -------------------------------------------------------------
     */
    requestAxios: _.debounce(function(payload) {
      const vm = this;

      vm.loading = true;

      vm.$axios
        .get("/api/v1/login")
        .then(function(response) {
          // console.log("response", response.data.payload);

          vm.$q.notify({
            message: "Email verifikasi berhasil dikirim ke email anda.",
            color: "success"
          });

          vm.loading = false;
        })
        .catch(function(error) {
          vm.loading = false;
        });
    }, 250)
  }
};
</script>
