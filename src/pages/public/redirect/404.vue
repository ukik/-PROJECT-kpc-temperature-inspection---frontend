<template>
  <div :class="isMobileViewport ? 'fixed-center text-center' : 'text-center'">
    <q-toolbar style="padding:0px; margin-top:100px">
      <q-toolbar-title class="text-h5 text-grey">
        <strong>No Page</strong>
      </q-toolbar-title>
    </q-toolbar>
    <p>
      <q-icon name="directions_bike" color="accent" size="100px" />
    </p>
    <p class="text-faded">
      <strong class="text-h6">Informasi</strong>
      <br />Halaman yang anda telusuri tidak tersedia.
    </p>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        outline
        @click="$router.back()"
        label="go back"
      />
      <q-btn
        color="secondary"
        icon="home"
        outline
        @click="$router.replace({ name: 'login' })"
        label="go home"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
