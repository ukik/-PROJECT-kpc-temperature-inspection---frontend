<template>
  <div class="q-pa-md">
    <q-table
      v-if="store_module"
      :data="data"
      :columns="columns"
      row-key="name_employee"
      :pagination.sync="pagination"
      :loading="loading"
      @request="onRequest"
      binary-state-sort
      :separator="separator"
      selection="single"
      :selected.sync="selected"
      class="my-sticky-header-table my-sticky-column-table"
      :visible-columns="visibleColumns"
      :rows-per-page-options="[1, 2, 5, 10, 25, 50, 75, 100]"
    >
      <template v-slot:top="props">
        <div class="row full-width q-mb-sm">
          <div class="col-8">
            <q-toolbar style="padding:0px">
              <q-icon name="font_download" size="lg" />
              <q-toolbar-title>Quasar Framework</q-toolbar-title>
            </q-toolbar>
          </div>
          <div class="col-4">
            <q-btn-dropdown class="glossy float-right" color="purple" label="Pilihan">
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <div class="text-bold q-mb-md">Kolom Data</div>
                  <q-toggle
                    v-for="(column, index) in selectedColumns"
                    v-model="visibleColumns"
                    :val="column.value"
                    :label="column.label"
                    :key="index"
                  />
                </div>
              </div>
            </q-btn-dropdown>
            <q-btn
              class="glossy float-right q-mr-sm"
              color="primary"
              label="proses"
              icon="refresh"
              @click="fetchData"
            />
          </div>
        </div>

        <hr />

        <q-space />
        <q-select
          options-dense
          v-model="pagination.search_column"
          @input="onSelectHandler($event, 'sortBy')"
          emit-value
          map-options
          :options="selectedColumns"
          option-value="value"
          label="Kolom pencarian"
          style="min-width: 250px;"
          class="q-mr-md"
        />

        <q-select
          options-dense
          v-model="pagination.search_operator"
          emit-value
          map-options
          :options="operators"
          @input="onSelectHandler($event, 'search_operator')"
          option-value="value"
          label="Operasi pencarian"
          style="min-width: 250px; "
          class="q-mr-md"
        />

        <q-input
          v-model="pagination.search_query_1"
          @keydown="fetchData"
          label="Kata kunci"
          stack-label
          placeholder="......."
          class="q-mr-md"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-input
          v-model="pagination.search_query_2"
          @keydown="fetchData"
          label="Kata kunci kedua"
          stack-label
          placeholder="......."
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-space />
      </template>

      <template v-slot:header-cell="props">
        <q-th :props="props">{{ props.col.label }}</q-th>
      </template>

      <!-- row -->
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>
            <q-btn-dropdown split class="glossy" color="red" label="Invalid">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-avatar icon="library_add" color="primary" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Follow-up</q-item-label>
                    <q-item-label caption>inspeksi ulang</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <!-- <q-icon name="info" color="amber" /> -->
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-avatar icon="delete_forever" color="red" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Hapus</q-item-label>
                    <q-item-label caption>hilang permanen</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <!-- <q-icon name="info" color="amber" /> -->
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-avatar icon="assignment_turned_in" color="secondary" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Validasi</q-item-label>
                    <q-item-label caption>mengunci data</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <!-- <q-icon name="info" color="amber" /> -->
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-td>

          <q-td
            key="name_employee"
            class="ellipsis"
            style="background:#c1f4cdd3; border-left:1px solid rgba(0, 0, 0, 0.12);border-right:1px solid rgba(0, 0, 0, 0.12);"
            :props="props"
          >{{ props.row.name_employee }}</q-td>
          <q-td key="position_employee" :props="props">{{ props.row.position_employee }}</q-td>
          <q-td key="nik_employee" :props="props">{{ props.row.nik_employee }}</q-td>
          <q-td key="telpon_employee" :props="props">{{ props.row.telpon_employee }}</q-td>
          <q-td key="email_employee" :props="props">{{ props.row.email_employee }}</q-td>
          <q-td key="birth_place_employee" :props="props">{{ props.row.birth_place_employee }}</q-td>
          <q-td key="birth_date_employee" :props="props">{{ props.row.birth_date_employee }}</q-td>
          <q-td key="gender_employee" :props="props">{{ props.row.gender_employee }}</q-td>
          <q-td key="marital_employee" :props="props">{{ props.row.marital_employee }}</q-td>
          <q-td key="address_employee" :props="props">{{ props.row.address_employee }}</q-td>
          <q-td key="photo_employee" :props="props">{{ props.row.photo_employee }}</q-td>
          <q-td key="verification_employee" :props="props">{{ props.row.verification_employee }}</q-td>
          <q-td key="disable_employee" :props="props">{{ props.row.disable_employee }}</q-td>
          <q-td key="created_at" :props="props">{{ props.row.created_at }}</q-td>
          <q-td key="updated_at" :props="props">{{ props.row.updated_at }}</q-td>
        </q-tr>
      </template>

      <!-- no data -->
      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm"></div>
      </template>

      <template v-slot:pagination>
        <q-pagination
          v-model="pagination.page"
          :max="last_page"
          :max-pages="current_page"
          :boundary-numbers="true"
          :input="true"
          @input="fetchData"
          input-class="text-orange-10"
          :direction-links="true"
          class="float-right"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    store_module: {
      default: null,
      type: String
    }
  },
  computed: {
    columns() {
      return this["get_" + this.store_module + "_columns"];
    },
    selectedColumns() {
      return this["get_" + this.store_module + "_selectedColumns"];
    },
    separator() {
      return this["get_" + this.store_module + "_separator"];
    },
    // visibleColumns() {
    //   return this.get_karyawan_biodata_visibleColumns;
    // },
    selected() {
      return this["get_" + this.store_module + "_selected"];
    },
    // loading() {
    //   return this.get_karyawan_biodata_loading;
    // },
    // pagination() {
    //   return this.get_karyawan_biodata_pagination;
    // },
    data() {
      return this["get_" + this.store_module + "_data"];
    },
    last_page() {
      return this["get_" + this.store_module + "_last_page"];
    },
    current_page() {
      return this["get_" + this.store_module + "_current_page"];
    }
  },
  watch: {
    loading: {
      handler: function(after, before) {
        var vm = this;

        let element = document.getElementsByClassName("q-table__bottom row")[0]
          .children[0];

        // console.log(after, before);

        if (!vm.loading) {
          if (vm.data !== undefined) {
            if (vm.data.length > 0) {
              element.innerHTML = `Halaman ${vm.pagination.page}`;
              return;
            }
          }

          element.innerHTML = `
              <div class="full-width row flex-center text-accent q-gutter-sm">
              <i aria-hidden="true" class="material-icons q-icon" style="font-size: 2em;">warning</i>
              <span>No matching records found ${vm.pagination.search_query_1} ${vm.pagination.search_query_2}</span>
              </div>`;
          return;
        } else {
          element.innerHTML = `
              <div class="full-width row flex-center text-accent q-gutter-sm">
              <i aria-hidden="true" class="material-icons q-icon" style="font-size: 2em;">warning</i>
              <span>Data sedang diproses ${vm.pagination.search_query_1} ${vm.pagination.search_query_2}</span>
              </div>`;
          return;
        }
      },
      deep: true
    },
    visibleColumns: {
      handler: function(after, before) {
        // console.log(after);/
        const vm = this;
        vm.onActionBiodata({
          data: vm.visibleColumns,
          type: "visibleColumns"
        });
      },
      deep: true
    },
    pagination: {
      handler: function(after, before) {
        // console.log(after);
        const vm = this;
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
      pagination: {},
      visibleColumns: [],
      operators: [
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
      ]
    };
  },
  mounted() {
    if (this.store_module) {
      this.pagination = this["get_" + this.store_module + "_pagination"];
      this.visibleColumns = this[
        "get_" + this.store_module + "_visibleColumns"
      ];

      // get initial data from server (1st page)
      this.onRequest({
        pagination: this.pagination,
        filter: undefined
      });
    }
  },
  methods: {
    onActionBiodata(payload) {
      this["set_" + this.store_module]({
        data: payload.data,
        type: payload.type
      });
    },
    onSelectHandler(data, type) {
      this.pagination[type] = data;

      this.fetchData();
    },
    fetchData: _.debounce(function() {
      var vm = this;
      // vm.setLoading(true);
      vm.loading = true;

      vm.$axios
        .get(vm.buildURL())
        .then(function(response) {
          // console.log(response);

          vm.loading = false;

          vm.onActionBiodata({
            data: response.data.payload,
            type: "payload"
          });
          // Vue.set(vm.$data, "model", response.data);
        })
        .catch(function(error) {
          vm.loading = false;
          // vm.setLoading(false);
          // console.log(error)
        });
    }, 1000),
    buildURL() {
      // error handler reset
      // this.$root.error.status = false;
      // this.$root.error.message = "";
      // this.$root.request = true; // membuka spinner ui

      const q = this.pagination;
      const q_direction = q.descending ? "desc" : "asc";
      const q_operator = q.search_operator === "*" ? "like" : q.search_operator;

      console.log(JSON.stringify(this.pagination));

      return `http://localhost:8000/api/v1${q.segment}?column=${q.sortBy}&direction=${q_direction}&per_page=${q.rowsPerPage}&page=${q.page}&search_column=${q.sortBy}&search_operator=${q_operator}&search_query_1=${q.search_query_1}&search_query_2=${q.search_query_2}`;
    },
    onRequest(props) {
      const vm = this;

      let {
        sortBy,
        descending,
        page,
        rowsPerPage,
        rowsNumber,
        segment,
        search_column,
        search_operator,
        search_query_1,
        search_query_2,
        last_page,
        current_page
      } = props.pagination;

      let filter = props.filter;

      // update rowsCount with appropriate value
      this.pagination.rowsNumber = this.getRowsNumberCount(filter);
      this.pagination.page = page;
      this.pagination.rowsPerPage = rowsPerPage;
      this.pagination.sortBy = sortBy;
      this.pagination.descending = descending;

      vm.fetchData();
    },

    // emulate 'SELECT count(*) FROM ...WHERE...'
    getRowsNumberCount(filter) {
      return 0;
    }
  }
};
</script>

<style>
.my-sticky-column-table {
  max-width: 100%;
}

.my-sticky-column-table thead tr:nth-child(1) th:nth-child(2) {
  left: 0;
  z-index: 3;
}
.my-sticky-column-table td:nth-child(2) {
  position: sticky;
  left: 0;
  z-index: 1;
}

.my-sticky-header-table .q-table__middle {
  max-height: 350px;
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
</style>