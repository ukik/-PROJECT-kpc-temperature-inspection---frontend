<template>
  <fragment>
    <q-page>
      <data-report :_store_module="store_module">
        <!-- TITLE -->
        <q-toolbar slot="title" style="padding:0px">
          <q-icon name="font_download" size="lg" />
          <q-toolbar-title>Laporan Mingguan</q-toolbar-title>
        </q-toolbar>
      </data-report>
    </q-page>
  </fragment>
</template>

<script>
export default {
  data() {
    return {
      store_module: "laporan_custom" // lihat modules di store/index.js
    };
  }
};
</script>