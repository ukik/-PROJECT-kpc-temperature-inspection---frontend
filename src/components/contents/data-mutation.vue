<template>
  <div class="q-pa-md">
    <q-table
      id="print"
      v-if="_store_module"
      :data="data"
      :columns="columns"
      :pagination.sync="pagination"
      :loading="loading"
      @request="onRequest"
      binary-state-sort
      :separator="separator"
      selection="none"
      :selected.sync="selected"
      :class="$q.platform.is.mobile ? '' : 'my-sticky-header-table my-sticky-column-table'"
      :visible-columns="visibleColumns"
      :rows-per-page-options="[1, 5, 10, 25, 50, 75, 100]"
    >
      <template v-slot:top="props">
        <div class="row full-width q-mb-sm">
          <div class="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
            <slot name="title" />
          </div>
          <div class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <div class="row" style="display: flex;justify-content: flex-end;">
              <div
                class="col-6 col-md-5 col-lg-5 col-xl-5 q-pr-sm"
                style="justify-content: center; display: flex;"
              >
                <q-btn-dropdown
                  class="glossy float-right btn-fixed-width"
                  color="purple"
                  label="Pilihan"
                >
                  <div class="row no-wrap">
                    <div class="column q-ma-md" style="margin-bottom:20px;">
                      <q-toggle
                        class="q-pr-md"
                        v-for="(column, index) in displayColumns"
                        v-model="visibleColumns"
                        :val="column.value"
                        :label="column.label"
                        :key="index"
                      />
                    </div>
                  </div>
                </q-btn-dropdown>
              </div>
              <div
                class="col-6 col-md-7 col-lg-7 col-xl-7"
                style="justify-content: center; display: flex;"
              >
                <q-btn
                  class="glossy float-right btn-fixed-width"
                  color="primary"
                  label="proses "
                  style=" margin-right:8px;"
                  @click="fetchData"
                  :loading="loading"
                >
                  <q-icon class="q-pl-sm" name="replay" />

                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-left" />
                    Wait...
                  </template>                  
                </q-btn>

                <q-btn color="secondary" @click="toolbar = !toolbar; onEmitToolbar" class="glossy">
                  <q-icon name="keyboard_arrow_up" :class="toolbar ? 'rotate down' : 'rotate'" />
                </q-btn>
              </div>
            </div>
          </div>
        </div>

        <q-space />

        <div v-if="toolbar" class="row full-width q-mb-sm">
          <div class="col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <q-select
              options-dense
              v-model="pagination.search_column"
              @input="onSelectHandler($event, 'sortBy')"
              emit-value
              map-options
              :options="selectedColumns"
              option-value="value"
              label="Kolom pencarian"
              style="min-width: 100%;"
              class="float-left"
            />
          </div>

          <div class="col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <q-select
              options-dense
              v-model="pagination.search_operator"
              emit-value
              map-options
              :options="operators"
              @input="onSelectHandler($event, 'search_operator')"
              option-value="value"
              label="Operasi pencarian"
              style="min-width: 100%;"
              class="float-left"
            />
          </div>

          <!-- <div
            v-datatable-toolbar="search_query_2"
            class="col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <q-input
              v-model="pagination.search_query_1"
              @keydown="fetchData"
              label="Pilih Bulan"
              stack-label
              placeholder="......."
              style="min-width: 100%;"
              class="float-right"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div> -->
          
          <div class="col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3">
              <q-select
                ref="month"
                options-dense
                v-model="pagination.month"
                emit-value
                map-options
                :options="monthColumns"
                @input="onSelectHandler($event, 'month')"
                option-value="value"
                label="Pilih Interval (Bulan)"
                style="min-width: 100%;"
                class="float-left"
                :rules="[ myRule ]"
              />
          </div>

          <div class="col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3">
              <q-input
                ref="year"
                type="number"
                min="2015"
                max="2099"
                step="1"
                v-model="pagination.year"
                label="Pilih Tahun"
                style="min-width: 100%;"
                stack-label
                class="float-right"
                :rules="[ myRule ]"
              />
          </div>

          <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <q-input
              ref="search_query_1"
              v-model="pagination.search_query_1"
              @keydown="fetchData"
              label="Kata kunci"
              stack-label
              placeholder="......."
              style="min-width: 100%;"
              class="float-right"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>          
        </div>
      </template>

      <template v-slot:header-cell="props">
        <q-th :props="props">{{ props.col.label }}</q-th>
      </template>

      <!-- row -->
      <template v-slot:body="props">
        <slot name="row" :props="props" :visibleColumns="visibleColumns"></slot>
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
          class="float-left q-pr-xl"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
// import _ from "lodash";

export default {
  inheritAttrs: true,
  props: {
    _store_module: {
      default: null,
      type: String
    },
    _toolbar: {
      default: true
    }
  },
  computed: {
    monthColumns() {
      let data = [];
      for (let index = 1; index <= 12; index++) {
        const val = index <= 9 ? '0'+index : index
        data.push({
          label: MonthConverter(val),
          value: val,
          disable: false,
          required: index == 1 ? true : false,
          category: index
        });
      }
      // console.log(data);

      return data;
    },    
    columns() {
      return this["get_" + this._store_module + "_columns"];
    },
    selectedColumns() {
      return this["get_" + this._store_module + "_selectedColumns"];
    },
    displayColumns() {
      return this["get_" + this._store_module + "_displayColumns"];
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
    last_page() {
      return this["get_" + this._store_module + "_last_page"];
    },
    current_page() {
      return this["get_" + this._store_module + "_current_page"];
    },
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
    loading: {
      handler: function(after, before) {
        var vm = this;

        let element = document.getElementsByClassName("q-table__bottom row")[0]
          .children[0];

        console.log('watcher loading', element);
        

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
        const vm = this;
        vm.onAction({
          data: vm.visibleColumns,
          type: "visibleColumns"
        });
      },
      deep: true
    },
    pagination: {
      handler: function(after, before) {
        const vm = this;
        vm.onAction({
          data: vm.pagination,
          type: "pagination"
        });

        if (vm.pagination.search_operator === "between") {
          vm.search_query_2 = true;
        } else {
          vm.search_query_2 = false;
        }
      },
      deep: true
    }
  },
  data() {
    return {
      toolbar: this._toolbar,
      loading: false,
      search_query_2: false,
      pagination: {},
      visibleColumns: [],
      operators: operator,
    };
  },
  mounted() {
    if (this._store_module) {
      
      this.pagination = this["get_" + this._store_module + "_pagination"];

      this.visibleColumns = this[
        "get_" + this._store_module + "_visibleColumns"
      ];

      console.log(this.pagination);
      
      // get initial data from server (1st page)
      this.onRequest({
        pagination: this.pagination,
        filter: undefined
      });
    }
  },
  methods: {
    myRule(val) {
      // simulating a delay

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // call
          //  resolve(true)
          //     --> content is valid
          //  resolve(false)
          //     --> content is NOT valid, no error message
          //  resolve(error_message)
          //     --> content is NOT valid, we have error message

          // console.log(!!val, !!val.toString());
          resolve(!!val.toString() || "* Required"); // support numerice
          // resolve(!!val || "* Required");

          // calling reject(...) will also mark the input
          // as having an error, but there will not be any
          // error message displayed below the input
          // (only in browser console)
        }, 1000);
      });
    },    
    onEmitToolbar() {
      // emit dengan keyword "input" bisa di v-model oleh parent
      this.$emit("input", (toolbar = !toolbar));
    },
    onAction(payload) {
      this["set_" + this._store_module]({
        data: payload.data,
        type: payload.type
      });
    },
    onSelectHandler(data, type) {
      this.pagination[type] = data;

      // this.fetchData();
    },
    fetchData: _.debounce(function() {
      var vm = this;

      vm.loading = true;

      if (!vm.validateInput()) {
        return;
      }

      vm.$axios
        .get(vm.buildURL())
        .then(function(response) {
          // console.log(response.data);

          vm.loading = false;

          if (response.data.payload.data.length > 0) {

            // vm.$q.notify({
            //   color: "positive",
            //   message: "Success",
            //   actions: [
            //     {
            //       label: "Tutup",
            //       color: "white",
            //       handler: () => {
            //         /* console.log('wooow') */
            //       }
            //     }
            //   ]
            // });
            
            vm.onAction({
              data: response.data.payload,
              type: "payload"
            });

            return

          } else {

            vm.$q.notify({
              color: "warning",
              message: "Maaf! Tidak ada data yang ditemukan",
              icon: "report_problem",
              actions: [
                {
                  label: "Tutup",
                  color: "white",
                  handler: () => {
                    /* console.log('wooow') */
                  }
                }
              ]
            });

            return
          }

          // Vue.set(vm.$data, "model", response.data);
        })
        .catch(function(error) {
          vm.loading = false;

          vm.$q.notify({
            color: "negative",
            message: "Maaf! Server tidak merespon permintaan anda",
            icon: "report_problem",
            actions: [
              {
                label: "Tutup",
                color: "white",
                handler: () => {
                  /* console.log('wooow') */
                }
              }
            ]
          });          
        });
    }, 1000),
    buildURL() {

      let q = this.pagination;

      q.search_operator =
        q.search_operator === "*" ? "not_in" : q.search_operator;

      const route = this.$route.query;

      let local_paginate = {
        ...q,
        descending: q.descending ? "desc" : "asc",

        sortBy: q.sortBy,

        // column: route.search_column ? route.search_column : q.search_column,

        search_column: route.search_column
          ? route.search_column
          : q.search_column,

        search_operator: route.search_operator
          ? route.search_operator
          : q.search_operator,

        search_query_1: route.search_query_1
          ? route.search_query_1
          : q.search_query_1
      };

      q = local_paginate;

      console.log(JSON.stringify(local_paginate));

      return `${this.host}/api/v1${q.segment}?year=${q.year}&month=${q.month}&sortBy=${q.sortBy}&direction=${q.descending}&per_page=${q.rowsPerPage}&page=${q.page}&search_column=${q.search_column}&search_operator=${q.search_operator}&search_query_1=${q.search_query_1}&search_query_2=${q.search_query_2}`;
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

      // console.log("sortBy", sortBy);

      // update rowsCount with appropriate value
      this.pagination.rowsNumber = this.getRowsNumberCount(filter);
      this.pagination.page = page;
      this.pagination.rowsPerPage = rowsPerPage;
      this.pagination.sortBy = sortBy;
      this.pagination.descending = descending;

      vm.fetchData();
    },
    getRowsNumberCount(filter) {
      return 0;
    },
    validateInput() {
      const vm = this;
      const ref = vm.$refs;
      if (ref.year.hasError) {
        vm.$q.notify({
          color: "negative",
          message: "Perhatian! Kolom tahun wajib diisi",
          icon: "report_problem",
          position: "top",
          actions: [
            {
              label: "Tutup",
              color: "white",
              handler: () => {
                /* console.log('wooow') */
              }
            }
          ]
        });
        return false;
      }
      if (ref.month.hasError) {
        vm.$q.notify({
          color: "negative",
          message: "Perhatian! Kolom bulan wajib diisi",
          icon: "report_problem",
          position: "top",
          actions: [
            {
              label: "Tutup",
              color: "white",
              handler: () => {
                /* console.log('wooow') */
              }
            }
          ]
        });
        return false;
      }
      return true;
    },        
  }
};

function MonthConverter(bulan) {
  console.log(bulan);
  
  switch (bulan.toString()) {
    case '01':
      return (bulan = "Januari");
      break;
    case '02':
      return (bulan = "Februari");
      break;
    case '03':
      return (bulan = "Maret");
      break;
    case '04':
      return (bulan = "April");
      break;
    case '05':
      return (bulan = "Mei");
      break;
    case '06':
      return (bulan = "Juni");
      break;
    case '07':
      return (bulan = "Juli");
      break;
    case '08':
      return (bulan = "Agustus");
      break;
    case '09':
      return (bulan = "September");
      break;
    case '10':
      return (bulan = "Oktober");
      break;
    case '11':
      return (bulan = "November");
      break;
    case '12':
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
          category: "0"
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
          category: "2"
        },
        {
          label: "LESS THAN",
          value: "less_than",
          disable: false,
          category: "3"
        },
        {
          label: "GREATER THAN",
          value: "greater_than",
          disable: false,
          category: "4"
        },
        {
          label: "LESS THAN OR EQUAL TO",
          value: "less_than_or_equal_to",
          disable: false,
          category: "5"
        },
        {
          label: "GREATER THAN OR EQUAL TO",
          value: "greater_than_or_equal_to",
          disable: false,
          category: "6"
        },
        {
          label: "IN",
          value: "in",
          disable: false,
          category: "7"
        },
        {
          label: "NOT IN",
          value: "not_in",
          disable: false,
          category: "8"
        },
        {
          label: "LIKE",
          value: "like",
          disable: false,
          category: "9"
        },
        // {
        //   label: "BETWEEN",
        //   value: "between",
        //   disable: false,
        //   category: "1"
        // }
      ]
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