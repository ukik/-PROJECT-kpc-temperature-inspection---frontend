<template>
  <fragment>
    <!-- <q-toolbar class="text-primary">
      <q-toolbar-title>Aset Equipement</q-toolbar-title>
    </q-toolbar>-->
    <q-page>
      <data-chart :_store_module="store_module">
        <!-- TITLE -->
        <q-toolbar slot="title" style="padding:0px">
          <q-icon name="font_download" size="lg" />
          <q-toolbar-title>Laporan Mingguan</q-toolbar-title>
        </q-toolbar>

        <!-- ROW -->
        <template slot="row" slot-scope="props">
          <q-tr>
            <q-td
              key="avg_condition_inspection"
              class="ellipsis"
              style="background:#c1f4cdd3; padding: 0px;"
              :props="props.props"
              v-row-color="{val: props.visibleColumns, oldColor: '#c1f4cdd3', newColor: '#fff'}"
            >
              <q-item style="padding: 0px;">
                <q-item-section
                  class="q-pa-md"
                  style="text-align: left;border-left: 1px solid rgba(0, 0, 0, 0.12);border-right: 1px solid rgba(0, 0, 0, 0.12);"
                >{{ props.props.row.avg_condition_inspection }}</q-item-section>
              </q-item>
            </q-td>
            <q-td key="week" :props="props.props">{{ props.props.row.week }}</q-td>
            <q-td key="year" :props="props.props">{{ props.props.row.year }}</q-td>
            <q-td key="month" :props="props.props">{{ props.props.row.month }}</q-td>
            <q-td key="month_name" :props="props.props">{{ props.props.row.month_name }}</q-td>
            <q-td key="day" :props="props.props">{{ props.props.row.day }}</q-td>
            <q-td key="day_name" :props="props.props">{{ props.props.row.day_name }}</q-td>
            <q-td key="date" :props="props.props">{{ props.props.row.date }}</q-td>
            <q-td key="time" :props="props.props">{{ props.props.row.time }}</q-td>
          </q-tr>
        </template>
      </data-chart>
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