<template>
  <div :class="isMobileViewport ? 'fixed-center text-center' : 'text-center'">
    <q-toolbar style="padding:0px; margin-top:100px">
      <q-toolbar-title class="text-h5 text-grey">
        <strong>Akun Terkunci</strong>
      </q-toolbar-title>
    </q-toolbar>
    <p>
      <q-icon name="visibility_off" color="negative" size="100px" />
    </p>
    <p class="text-faded">
      <strong class="text-h6">Peringatan!</strong>
      <br />Akun anda terkunci dan belum diaktifkan oleh admin. Agar bisa digunakan segera hubungi admin. Terimakasih.
    </p>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        outline
        @click="$router.replace({ name: 'login' })"
        label="kembali"
      />
      <!-- <q-btn color="secondary" icon="phone" outline @click="onCall" label="telpon" /> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onCall() {
      window.open("tel:900300400");
    }
  }
};
</script>
