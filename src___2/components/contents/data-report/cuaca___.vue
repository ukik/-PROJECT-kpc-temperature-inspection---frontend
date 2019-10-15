<template>
  <fragment>
    <q-table
      :data="data"
      :columns="columns"
      :pagination.sync="pagination"
      :loading="loading"
      @request="onRequest"
      binary-state-sort
      :separator="separator"
      selection="none"
      :selected.sync="selected"
      :class="$q.platform.is.mobile ? 'full-width q-mb-sm' : 'my-sticky-header-table my-sticky-column-table full-width q-mb-sm'"
      :visible-columns="visibleColumns"
      :rows-per-page-options="[1, 5, 10, 25, 50, 75, 100]"
      hide-bottom
    >
      <template v-slot:top="props">
        <div class="row full-width q-mb-sm">
          <div class="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
            <q-toolbar style="padding:0px">
              <q-icon name="font_download" size="lg" />
              <q-toolbar-title>Data Table</q-toolbar-title>
            </q-toolbar>
          </div>
        </div>
      </template>

      <!-- header -->
      <template v-slot:header-cell="props">
        <q-th :props="props">{{ props.col.label }}</q-th>
      </template>

      <!-- row -->
      <template v-slot:body="props">
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
    </q-table>
  </fragment>
</template>

<script>
import _ from "lodash";

export default {
  inheritAttrs: true,
  props: {
    _store_module: {
      default: null,
      type: String
    }
  },
  computed: {
    weekColumns() {
      let data = [];
      for (let index = 0; index <= 52; index++) {
        data.push({
          label: "Minggu ke " + index,
          value: index,
          disable: false,
          required: index == 1 ? true : false,
          category: index
        });
      }
      // console.log(data);

      return data;
    },
    quartalColumns() {
      let data = [];
      for (let index = 1; index <= 4; index++) {
        data.push({
          label: "Quartal ke " + index,
          value: index,
          disable: false,
          required: index == 1 ? true : false,
          category: index
        });
      }
      // console.log(data);

      return data;
    },
    monthColumns() {
      let data = [];
      for (let index = 1; index <= 12; index++) {
        data.push({
          label: MonthConverter(index),
          value: index,
          disable: false,
          required: index == 1 ? true : false,
          category: index
        });
      }
      // console.log(data);

      return data;
    },
    columns() {
      return [
        {
          name: "avg_condition_inspection",
          label: "Kondisi (Average)",
          field: "avg_condition_inspection",
          align: "left",
          sortable: false,
          required: true
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
    selectedColumns() {
      return [
        {
          value: "week",
          label: "Laporan Mingguan"
        },
        {
          value: "month",
          label: "Laporan Bulanan"
        },
        {
          value: "quartal",
          label: "Laporan Kuartal"
        }
      ];
    },
    displayColumns() {
      return [
        {
          value: "avg_condition_inspection",
          label: "Kondisi (Average)"
        },
        {
          value: "week",
          label: "Minggu"
        },
        {
          value: "year",
          label: "Tahun"
        },
        {
          value: "month",
          label: "Bulan"
        },
        {
          value: "month_name",
          label: "Nama Bulan"
        },
        {
          value: "day",
          label: "Hari"
        },
        {
          value: "day_name",
          label: "Nama Hari"
        },
        {
          value: "date",
          label: "Tanggal"
        },
        {
          value: "time",
          label: "Waktu"
        }
      ];
    },
    separator() {
      return this["get_" + this._store_module + "_separator"];
    },
    selected() {
      return this["get_" + this._store_module + "_selected"];
    },
    data() {
      return this["get_" + this._store_module + "_data"];
    },
    // last_page() {
    //   return this["get_" + this._store_module + "_last_page"];
    // },
    // current_page() {
    //   return this["get_" + this._store_module + "_current_page"];
    // },
    host() {
      if (this.$q.platform.is.mobile) {
        return "http://172.16.210.123/[PROJECT] kpc temperatur inspection/public";
      } else {
        return "http://localhost:8000";
      }
    }
  },
  watch: {
    "$route.path": function() {
      this.fetchData();
    },

    visibleColumns: {
      handler: function(after, before) {
        const vm = this;
        vm.onActionBiodata({
          data: vm.visibleColumns,
          type: "visibleColumns"
        });
      },
      deep: true
    },
    // update vuex
    pagination: {
      handler: function(before, after) {
        const vm = this;

        const store = vm["get_" + this._store_module + "_equipmentColumns"];

        let locations = [];

        // dipanggil untuk singkronisasi equipment dropdown (equipmentColumns)
        for (let index = 0; index < store.length; index++) {
          if (store[index].value == after.equipment) {
            // dipanggil untuk singkronisasi location dropdown (locationColumns)
            for (
              let index2 = 0;
              index2 < store[index].location.length;
              index2++
            ) {
              const element = store[index].location[index2];

              locations.push({
                label: element.name_location,
                value: element.uuid,
                uuid: element.uuid,
                disable: false,
                required: index2 == 0 ? true : false,
                category: index2,
                place: element.place
              });
            }

            vm.locationColumns = locations;

            vm.onActionBiodata({
              data: locations,
              type: "locationColumns"
            });
          }
        }

        vm.onActionBiodata({
          data: vm.pagination,
          type: "pagination"
        });
      },
      deep: true
    }
  },
  data() {
    return {
      loading: false,
      // search_query_2: false,
      pagination: {},
      visibleColumns: [],

      equipmentColumns: [],
      locationColumns: [],
      placeColumns: [
        {
          label: "Tidak Ada",
          value: "0",
          disable: false,
          category: "1"
        }
      ],

      operators: operator
    };
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  mounted() {
    const vm = this;

    if (vm._store_module) {
      vm.pagination = vm["get_" + vm._store_module + "_pagination"];

      vm.visibleColumns = vm["get_" + vm._store_module + "_visibleColumns"];

      vm.equipmentColumns = vm["get_" + vm._store_module + "_equipmentColumns"];

      vm.locationColumns = vm["get_" + vm._store_module + "_locationColumns"];

      // get initial data from server (1st page)
      // this.onRequest({
      //   pagination: this.pagination,
      //   filter: undefined
      // });
    }
  },
  methods: {
    onActionBiodata(payload) {
      this["set_" + this._store_module]({
        data: payload.data,
        type: payload.type
      });
    },
    onRequest() {}
  }
};

function MonthConverter(bulan) {
  switch (bulan) {
    case 1:
    case "1":
      return (bulan = "Januari");
      break;
    case 2:
    case "2":
      return (bulan = "Februari");
      break;
    case 3:
    case "3":
      return (bulan = "Maret");
      break;
    case 4:
    case "4":
      return (bulan = "April");
      break;
    case 5:
    case "5":
      return (bulan = "Mei");
      break;
    case 6:
    case "6":
      return (bulan = "Juni");
      break;
    case 7:
    case "7":
      return (bulan = "Juli");
      break;
    case 8:
    case "8":
      return (bulan = "Agustus");
      break;
    case 9:
    case "9":
      return (bulan = "September");
      break;
    case 10:
    case "10":
      return (bulan = "Oktober");
      break;
    case 11:
    case "11":
      return (bulan = "November");
      break;
    case 12:
    case "12":
      return (bulan = "Desember");
      break;
  }
}

const operator = [
  {
    label: "Pilih",
    value: "*",
    disable: true,
    required: true,
    category: "1"
  },
  {
    label: "EQUAL TO",
    value: "equal_to",
    disable: false,
    category: "1"
  },
  {
    label: "NOT EQUAL",
    value: "not_equal",
    disable: false,
    category: "1"
  },
  {
    label: "LESS THAN",
    value: "less_than",
    disable: false,
    category: "1"
  },
  {
    label: "GREATER THAN",
    value: "greater_than",
    disable: false,
    category: "1"
  },
  {
    label: "LESS THAN OR EQUAL TO",
    value: "less_than_or_equal_to",
    disable: false,
    category: "1"
  },
  {
    label: "GREATER THAN OR EQUAL TO",
    value: "greater_than_or_equal_to",
    disable: false,
    category: "1"
  },
  {
    label: "IN",
    value: "in",
    disable: false,
    category: "1"
  },
  {
    label: "NOT IN",
    value: "not_in",
    disable: false,
    category: "1"
  },
  {
    label: "LIKE",
    value: "like",
    disable: false,
    category: "1"
  },
  {
    label: "BETWEEN",
    value: "between",
    disable: false,
    category: "1"
  }
];
</script>

<style >
.my-sticky-column-table {
  max-width: 100%;
}

/* kolom yang ingin di sticky */
.my-sticky-column-table thead tr:nth-child(1) th:nth-child(1) {
  left: 0;
  z-index: 3;
}

/* kolom yang ingin di sticky */
.my-sticky-column-table td:nth-child(1) {
  position: sticky;
  left: 0;
  z-index: 1;
}

.my-sticky-header-table .q-table__middle {
  max-height: 420px;
}

.my-sticky-header-table thead tr:nth-child(1) th {
  position: sticky;
  top: 0;
  opacity: 1;
  z-index: 2;
  background-color: #c1f4cdd3;
}

.q-table__progress {
  z-index: 9 !important;
  position: sticky;
  top: 49px;
}

.btn-fixed-width {
  width: 200px;
}

.rotate {
  -moz-transition: all 0.1s linear;
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
}
.rotate.down {
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>