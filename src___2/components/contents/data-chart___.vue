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
      hide-header
      hide-item
      hide-body
      hide-bottom
      hide-bottom-row
      hide-body-cell
      hide-top-row
      hide-pagination
    >
      <template v-slot:top="props">
        <div class="row full-width q-mb-sm">
          <div class="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
            <slot name="title">
              <!-- <q-toolbar style="padding:0px">
                <q-icon name="font_download" size="lg" />
                <q-toolbar-title>Data Table</q-toolbar-title>
              </q-toolbar>-->
            </slot>
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
                      <!-- <div class="text-bold q-mb-md">Kolom Data</div> -->
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
                class="col-6 col-md-5 col-lg-5 col-xl-5"
                style="justify-content: center; display: flex;"
              >
                <q-btn
                  class="glossy float-right btn-fixed-width"
                  color="primary"
                  label="saring"
                  style=" margin-right:8px;"
                  @click="fetchData"
                />
                <q-btn color="secondary" @click="toolbar = !toolbar; onEmitToolbar" class="glossy">
                  <q-icon name="keyboard_arrow_up" :class="toolbar ? 'rotate down' : 'rotate'" />
                </q-btn>
              </div>
            </div>
          </div>
        </div>

        <!-- <hr /> -->

        <q-space />
        <q-form ref="myForm" class="row full-width q-mb-sm">
          <div v-if="toolbar" class="row full-width q-mb-sm">
            <div class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <q-select
                ref="search_column"
                options-dense
                v-model="pagination.search_column"
                @input="onSelectHandler($event, 'search_column')"
                emit-value
                map-options
                :options="selectedColumns"
                option-value="value"
                label="Kolom pencarian"
                style="min-width: 100%;"
                class="float-left"
                :rules="[ myRule ]"
              />
            </div>
            <div class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <q-select
                v-if="pagination.search_column == 'week'"
                ref="search_interval"
                options-dense
                v-model="pagination.week"
                emit-value
                map-options
                :options="weekColumns"
                @input="onSelectHandler($event, 'search_interval')"
                option-value="value"
                label="Pilih Interval (Minggu)"
                style="min-width: 100%;"
                class="float-left"
                :rules="[ myRule ]"
              />
              <q-select
                v-if="pagination.search_column == 'month'"
                ref="search_interval"
                options-dense
                v-model="pagination.month"
                emit-value
                map-options
                :options="monthColumns"
                @input="onSelectHandler($event, 'search_interval')"
                option-value="value"
                label="Pilih Interval (Bulan)"
                style="min-width: 100%;"
                class="float-left"
                :rules="[ myRule ]"
              />
              <q-select
                v-if="pagination.search_column == 'quartal'"
                ref="search_interval"
                options-dense
                v-model="pagination.quartal"
                emit-value
                map-options
                :options="quartalColumns"
                @input="onSelectHandler($event, 'search_interval')"
                option-value="value"
                label="Pilih Interval (Kuartal)"
                style="min-width: 100%;"
                class="float-left"
                :rules="[ myRule ]"
              />
            </div>
            <div class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <q-input
                ref="year"
                type="number"
                min="2015"
                max="2099"
                step="1"
                v-model="pagination.year"
                @keydown="fetchData"
                @change="fetchData"
                label="Pilih Tahun"
                style="min-width: 100%;"
                stack-label
                class="float-right"
                :rules="[ myRule ]"
              />
            </div>
          </div>
          <q-space />
          <div v-if="toolbar" class="row full-width q-mb-sm">
            <div class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <q-select
                ref="equipment"
                options-dense
                emit-value
                map-options
                bottom-slots
                v-model="pagination.equipment"
                @input="onSelectHandler($event, 'equipment')"
                @filter="filterEquipment"
                @filter-abort="abortFilterFn"
                :options="equipmentColumns"
                option-value="value"
                label="Pilih Alat"
                style="min-width: 100%;"
                class="float-left"
                :rules="[ myRule ]"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">No results</q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>

            <div class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <q-select
                ref="location"
                options-dense
                emit-value
                map-options
                v-model="pagination.location"
                :options="locationColumns"
                @input="onSelectHandler($event, 'location')"
                :disable="pagination.equipment == '' ? true : false"
                option-value="value"
                label="Pilih Lokasi"
                style="min-width: 100%;"
                class="float-left"
                :rules="[ myRule ]"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">No results</q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
            <div class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <q-select
                ref="place"
                options-dense
                v-model="pagination.place"
                emit-value
                map-options
                :options="placeColumns"
                @input="onSelectHandler($event, 'place')"
                :disable="pagination.location == '' ? true : false"
                option-value="value"
                label="Pilih Letak"
                style="min-width: 100%;"
                class="float-left"
                :rules="[ myRule ]"
              />
            </div>
          </div>
        </q-form>

        <table-sample />
      </template>

      <!-- header -->
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
    </q-table>
  </div>
</template>

<script>
import _ from "lodash";

import TableSample from "./table-sample";

export default {
  components: {
    TableSample
  },
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
      // return this["get_" + this._store_module + "_columns"];
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
      return this["get_" + this._store_module + "_selectedColumns"];
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
        // var vm = this;
        // let element = document.getElementsByClassName("q-table__bottom row")[0]
        //   .children[0];
        // if (!vm.loading) {
        //   if (vm.data !== undefined) {
        //     if (vm.data.length > 0) {
        //       element.innerHTML = `Halaman ${vm.pagination.page}`;
        //       return;
        //     }
        //   }
        //   element.innerHTML = `
        //       <div class="full-width row flex-center text-accent q-gutter-sm">
        //       <i aria-hidden="true" class="material-icons q-icon" style="font-size: 2em;">warning</i>
        //       <span>No matching records found ${vm.pagination.search_interval} ${vm.pagination.search_query_2}</span>
        //       </div>`;
        //   return;
        // } else {
        //   element.innerHTML = `
        //       <div class="full-width row flex-center text-accent q-gutter-sm">
        //       <i aria-hidden="true" class="material-icons q-icon" style="font-size: 2em;">warning</i>
        //       <span>Data sedang diproses ${vm.pagination.search_interval} ${vm.pagination.search_query_2}</span>
        //       </div>`;
        //   return;
        // }
      },
      deep: true
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
      toolbar: this._toolbar,
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

      new Promise(resolve => {
        resolve(
          vm.onAxios({
            url: `${vm.host}/api/v1/library/equipment?type=select`,
            key: "equipment"
          })
        );
      }).then(result => {
        vm.equipmentColumns = result;
        // console.log("vm.equipmentColumns", vm.equipmentColumns);
      });
    }
  },
  methods: {
    onDatePicker(value, reason, details) {
      console.log(value, reason, details);

      //() => $refs.qDateProxy.hide();
    },
    filterEquipment(val, update, abort) {
      var vm = this;

      if (vm.equipmentColumns.length > 0) {
        // already loaded
        update();
        return;
      }

      new Promise(resolve => {
        resolve(
          vm.onAxios({
            url: `${vm.host}/api/v1/library/equipment?type=select`,
            key: "equipment"
          })
        );
      }).then(result => {
        vm.equipmentColumns = result;
        // console.log("vm.equipmentColumns", vm.equipmentColumns);

        setTimeout(() => {
          update();
        }, 1000);
      });
    },

    // filterLocation(val, update, abort) {
    //   var vm = this;

    //   if (vm.locationColumns.length > 0) {
    //     // already loaded
    //     update();
    //     return;
    //   }

    //   new Promise(resolve => {
    //     resolve(
    //       vm.onAxios({
    //         url: `${vm.host}/api/v1/library/location?type=select`,
    //         key: "location"
    //       })
    //     );
    //   }).then(result => {
    //     vm.locationColumns = result;
    //     setTimeout(() => {
    //       update();
    //     }, 500);
    //   });
    // },

    abortFilterFn() {
      // console.log('delayed filter aborted')
    },
    onAxios(type) {
      var vm = this;

      let options = [];

      vm.$axios
        .get(type.url)
        .then(function(response) {
          // console.log(response.data.payload);

          for (let index = 0; index < response.data.payload.length; index++) {
            options.push({
              label: response.data.payload[index]["name_" + type.key],
              value: response.data.payload[index].uuid,
              uuid: response.data.payload[index].uuid,
              disable: false,
              required: index == 0 ? true : false,
              category: index,
              location: response.data.payload[index].location
            });
          }

          // vm[type.key + "Columns"] = options;
          // Vue.set(vm.$data, "model", response.data);
        })
        .catch(function(error) {});
      vm.onActionBiodata({
        data: options,
        type: type.key + "Columns"
      });
      return options;
    },
    onEmitToolbar() {
      // emit dengan keyword "input" bisa di v-model oleh parent
      this.$emit("input", (toolbar = !toolbar));
    },
    onActionBiodata(payload) {
      this["set_" + this._store_module]({
        data: payload.data,
        type: payload.type
      });
    },
    onSelectHandler(data, type) {
      const vm = this;

      if (type == "search_column") {
        switch (data) {
          case "week":
            vm.pagination.search_interval = vm.pagination.week;
            break;
          case "month":
            vm.pagination.search_interval = vm.pagination.month;
            break;
          case "quartal":
            vm.pagination.search_interval = vm.pagination.quartal;
            break;
        }
      }

      if (type == "equipment") {
        vm.pagination.location = "";
        vm.pagination.place = "";
      }

      if (type == "location") {
        // dipanggil untuk singkronisasi place dropdown (placeColumns)
        for (let index = 0; index < vm.locationColumns.length; index++) {
          const element = vm.locationColumns[index];
          if (element.value == data) {
            switch (Number(element.place)) {
              case 0:
                vm.placeColumns = [
                  {
                    label: "Tidak Ada",
                    value: "0",
                    disable: false,
                    category: "1"
                  }
                ];
                vm.pagination.place = "0";
                break;
              case 1:
                vm.placeColumns = [
                  {
                    label: "Kanan & Kiri",
                    value: "0",
                    disable: false,
                    category: "0"
                  },
                  {
                    label: "Kanan",
                    value: "1",
                    disable: false,
                    category: "1"
                  },
                  {
                    label: "Kiri",
                    value: "2",
                    disable: false,
                    category: "2"
                  }
                ];
                vm.pagination.place = "0";

                break;
            }
          }
        }
      }

      vm.pagination[type] = data;

      // vm.fetchData();
    },
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
          resolve(!!val || "* Required");

          // calling reject(...) will also mark the input
          // as having an error, but there will not be any
          // error message displayed below the input
          // (only in browser console)
        }, 100);
      });
    },
    validateInput() {
      const vm = this;
      const ref = vm.$refs;
      if (ref.search_column.hasError) {
        vm.$q.notify({
          color: "negative",
          message: "Perhatian! Kolom pencarian wajib diisi",
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
        return false;
      }
      if (ref.search_interval.hasError) {
        vm.$q.notify({
          color: "negative",
          message: "Perhatian! Kolom interval wajib diisi",
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
        return false;
      }
      if (ref.year.hasError) {
        vm.$q.notify({
          color: "negative",
          message: "Perhatian! Kolom tahun wajib diisi",
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
        return false;
      }
      if (ref.equipment.hasError) {
        vm.$q.notify({
          color: "negative",
          message: "Perhatian! Kolom alat wajib diisi",
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
        return false;
      }
      if (ref.location.hasError) {
        vm.$q.notify({
          color: "negative",
          message: "Perhatian! Kolom lokasi wajib diisi",
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
        return false;
      }
      if (ref.place.hasError) {
        vm.$q.notify({
          color: "negative",
          message: "Perhatian! Kolom letak wajib diisi",
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
        return false;
      }
      return true;
    },
    fetchData: _.debounce(function() {
      var vm = this;

      if (!vm.validateInput()) {
        return;
      }

      vm.loading = true;

      vm.$axios
        .get(vm.buildURL())
        .then(function(response) {
          // console.log(response.data);

          vm.$q.notify({
            color: "positive",
            message: "Success",
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

          vm.loading = false;

          vm.onActionBiodata({
            data: response.data.payload,
            type: "payload"
          });
          // Vue.set(vm.$data, "model", response.data);
        })
        .catch(function(error) {
          vm.loading = false;
        });
    }, 1000),
    buildURL() {
      // error handler reset
      // this.$root.error.status = false;
      // this.$root.error.message = "";
      // this.$root.request = true; // membuka spinner ui

      let q = this.pagination;

      const route = this.$route.query;

      let local_paginate = {
        ...q
      };

      q = local_paginate;

      console.log(JSON.stringify(local_paginate));

      return `${this.host}/api/v1${q.segment}?search_column=${q.search_column}&search_operator=${q.search_operator}&search_interval=${q.search_interval}&year=${q.year}&uuid_tb_equipment=${q.equipment}&uuid_tb_location=${q.location}&place_inspection=${q.place}`;
    },
    onRequest(props) {
      return;
      // const vm = this;

      // let {
      //   sortBy,
      //   descending,
      //   page,
      //   rowsPerPage,
      //   rowsNumber,
      //   segment,
      //   search_column,
      //   search_operator,
      //   search_interval,
      //   search_query_2,
      //   last_page,
      //   current_page
      // } = props.pagination;

      // let filter = props.filter;

      // // console.log("sortBy", sortBy);

      // // update rowsCount with appropriate value
      // this.pagination.rowsNumber = this.getRowsNumberCount(filter);
      // this.pagination.page = page;
      // this.pagination.rowsPerPage = rowsPerPage;
      // this.pagination.sortBy = sortBy;
      // this.pagination.descending = descending;

      vm.fetchData();
    },
    getRowsNumberCount(filter) {
      return 0;
    }
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