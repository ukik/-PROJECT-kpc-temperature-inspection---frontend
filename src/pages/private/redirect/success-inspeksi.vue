<template>
  <div :class="isMobileViewport ? 'fixed-center text-center' : 'text-center'">
    <q-toolbar style="padding:0px; margin-top:100px">
      <q-toolbar-title class="text-h5 text-grey">
        <strong>Input Berhasil</strong>
      </q-toolbar-title>
    </q-toolbar>
    <p>
      <q-icon name="input" color="green" size="100px" />
    </p>
    <p class="text-faded">
      <strong class="text-h6">Informasi</strong>
      <br />Data inspeksi conveyor berhasil masuk ke database. Anda masih bisa melakukan perubahan/menghapus data sebelum divalidasi oleh admin. Terimakasih.
    </p>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        outline
        @click="$router.replace({ name: 'inspeksi-temperatur-panel' })"
        label="Kembali"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
