<template>
  <div :class="isMobileViewport ? 'fixed-center text-center' : 'text-center'">
    <q-toolbar style="padding:0px; margin-top:100px">
      <q-toolbar-title class="text-h5 text-grey">
        <strong>Sukses</strong>
      </q-toolbar-title>
    </q-toolbar>
    <p>
      <q-icon name="touch_app" color="green" size="100px" />
    </p>
    <p class="text-faded">
      <strong class="text-h6">Informasi</strong>
      <br />Pendataan karyawan telah berhasil dilakukan. Terimakasih.
    </p>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        outline
        @click="$router.replace({ name: 'karyawan-biodata' })"
        label="selanjutnya"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
