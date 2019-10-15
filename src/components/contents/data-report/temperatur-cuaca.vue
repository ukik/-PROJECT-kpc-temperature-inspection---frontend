<template>
  <fragment>
    <q-table
      class="full-width q-mb-sm q-mt-sm"
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
      hide-bottom
    >
      <template v-slot:top="props">
        <div class="row full-width q-mb-sm">
          <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <q-toolbar style="padding:0px">
              <q-icon name="font_download" size="md" />
              <q-toolbar-title>Data Table</q-toolbar-title>
            </q-toolbar>
          </div>
        </div>

        <!-- <hr /> -->

        <q-space />

        <chart-bar class="row full-width q-mb-sm" />
      </template>
    </q-table>
  </fragment>
</template>

<script>
export default {
  computed: {
    columns() {
      return [
        {
          name: "avg_condition_inspection",
          label: "Kondisi (Average)",
          field: "avg_condition_inspection",
          align: "left",
          sortable: false,
          required: true,
          format: val => {
            switch (Number(val)) {
                case 1:
                    return val+' Noise'                
                case 2:
                    return val+' Dusty'                
                case 3:
                    return val+' Vibration'                
            }
          },
          classes: 'bg-grey-2 ellipsis',          
        },
        {
          name: "week",
          label: "Minggu",
          field: "week",
          align: "left",
          sortable: false
        },
        {
          name: "year",
          label: "Tahun",
          field: "year",
          align: "left",
          sortable: false
        },
        {
          name: "month",
          label: "Bulan",
          field: "month",
          align: "left",
          sortable: false
        },
        {
          name: "month_name",
          label: "Nama Bulan",
          field: "month_name",
          align: "left",
          sortable: false
        },
        {
          name: "day",
          label: "Hari",
          field: "day",
          align: "left",
          sortable: false
        },
        {
          name: "day_name",
          label: "Nama Hari",
          field: "day_name",
          align: "left",
          sortable: false
        },
        {
          name: "date",
          label: "Tanggal",
          field: "date",
          align: "left",
          sortable: false
        },
        {
          name: "time",
          label: "Waktu",
          field: "time",
          align: "left",
          sortable: false
        }
      ];
    },
    data() {
      return this["get_laporan_mingguan_data"];
    },
  },

};

</script>