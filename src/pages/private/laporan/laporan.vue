<template>
  <fragment>
    <q-page>
      <data-table-report :_store_module="store_module">
        <!-- TITLE -->
        <q-toolbar slot="title" style="padding:0px">
          <q-icon
            v-if="!isMobileViewport"
            name="keyboard_arrow_left"
            size="lg"
            v-pointer
            @click="$router.back()"
          >
            <q-tooltip
              content-style="font-size: 14px"
              anchor="center left"
              self="center right"
            >Kembali</q-tooltip>
          </q-icon>
          <q-toolbar-title>Laporan Conveyor</q-toolbar-title>
        </q-toolbar>
        <info-report slot="info" />
      </data-table-report>

      <!-- place QPageScroller at end of page -->
      <scroll-to-top />
    </q-page>
  </fragment>
</template>

<script>
import role_auth from "../../../helpers/role_auth";

export default {
  mixins: [role_auth],
  data() {
    return {
      store_module: "laporan_custom" // lihat modules di store/index.js
    };
  }
};
</script>