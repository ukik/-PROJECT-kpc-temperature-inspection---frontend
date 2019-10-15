<template>
  <fragment>
    <!-- <q-toolbar class="text-primary">
      <q-toolbar-title>Aset Equipement</q-toolbar-title>
    </q-toolbar>-->
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
      store_module: "laporan_mingguan" // lihat modules di store/index.js
    };
  }
  // computed: {
  //   route_employee_role() {
  //     return function(payload) {
  //       return {
  //         path: "karyawan-role-edit",
  //         query: {
  //           column: "uuid",
  //           search_column: "uuid",
  //           search_operator: "equal_to",
  //           search_query_1: payload.uuid
  //         }
  //       };
  //     };
  //   }
  // }
};
</script>