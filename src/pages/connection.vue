<template>
  <div class="fixed-center text-center">
    <q-toolbar>
      <q-toolbar-title class="text-h5 text-grey">
        <strong>No Internet</strong>
      </q-toolbar-title>
    </q-toolbar>
    <p>
      <q-icon name="wifi_off" color="primary" size="100px" />
    </p>
    <p class="text-faded">
      <strong class="text-h6">Informasi</strong>
      <br />Jaringan internet terputus.
    </p>
    <!-- <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="secondary"
        icon="phone"
        outline
        style="width:200px;"
        @click="onCall"
        label="telpon"
      />
    </div>-->
  </div>
</template>

<script>
export default {};
</script>
