<template>
  <q-page>
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>
          <q-form @submit="onSubmitHandler">
            <!-- DESKTOP -->
            <div v-if="!isMobileViewport" class="row full-width q-mb-sm">
              <div class="col-12 col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
                <slot name="title" />
              </div>
              <div class="col-12 col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
                <div
                  class="row q-col-gutter-sm"
                  style="display: flex;justify-content: flex-end; margin-top: 0px;"
                >
                  <div class style="justify-content: center; display: flex;">
                    <q-btn
                      outline
                      class
                      color="primary"
                      label="proses "
                      style=" width:125px"
                      @click="onSubmitHandler"
                      :loading="loading"
                    >
                      <q-icon class="q-pl-sm" name="replay" />

                      <template v-slot:loading>
                        <q-spinner-hourglass class="on-left" />Wait...
                      </template>
                    </q-btn>
                  </div>

                  <div style="justify-content: center;">
                    <q-btn
                      style="width:40px"
                      color="secondary"
                      @click="toolbar = !toolbar; onEmitToolbarHandler"
                      outline
                      class
                    >
                      <q-icon name="keyboard_arrow_up" :class="toolbar ? 'rotate down' : 'rotate'" />
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>

            <!-- MOBILE -->
            <div v-else class="row full-width q-mb-sm">
              <div class="col-12 text-center">
                <slot name="title" />
              </div>
            </div>

            <q-space />
            <transition name="fade">
              <q-form ref="myForm" v-show="toolbar" class="row full-width">
                <div class="row full-width q-mb-sm">
                  <div class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <q-select
                      ref="search_column"
                      options-dense
                      v-model="pagination.search_column"
                      @input="onSelectHandler($event, 'search_column')"
                      emit-value
                      map-options
                      :disable="loading"
                      :options="selectedColumns"
                      option-value="value"
                      label="Pilih Waktu"
                      style="min-width: 100%;"
                      class="float-left"
                      :lazy-rules="false"
                      :rules="[ commonRule ]"
                    />
                  </div>
                  <div
                    :style="isMobileViewport ? 'margin-bottom:15px' : ''"
                    class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4"
                  >
                    <q-select
                      ref="search_interval"
                      options-dense
                      v-model="pagination.search_interval"
                      emit-value
                      map-options
                      :disable="loading"
                      :options="intervalColumns"
                      @input="onSelectHandler($event, 'search_interval')"
                      option-value="value"
                      label="Pilih Interval"
                      style="min-width: 100%;"
                      class="float-left"
                      :lazy-rules="false"
                      :rules="[ commonRule ]"
                    />
                  </div>
                  <div class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <q-input
                      ref="year"
                      type="number"
                      :min="minYear"
                      :max="maxYear"
                      step="1"
                      :disable="loading"
                      v-model="pagination.year"
                      label="Pilih Tahun"
                      style="min-width: 100%;"
                      stack-label
                      :hint="isMobileViewport ? '' : '* Required'"
                      class="float-right"
                      :lazy-rules="false"
                      :rules="[ commonRule ]"
                    />
                  </div>
                </div>
                <q-space />
                <div class="row full-width q-mb-sm">
                  <div
                    :style="isMobileViewport ? 'margin-bottom:15px' : ''"
                    class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4"
                  >
                    <q-select
                      ref="equipment"
                      options-dense
                      emit-value
                      map-options
                      bottom-slots
                      :disable="loading"
                      v-model="pagination.equipment"
                      @input="onSelectHandler($event, 'equipment')"
                      @filter="onFilterEquipmentHandler"
                      :options="equipmentColumns"
                      option-value="value"
                      label="Pilih Alat"
                      style="min-width: 100%;"
                      class="float-left"
                      :lazy-rules="false"
                      :rules="[ commonRule ]"
                    >
                      <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey">No results</q-item-section>
                        </q-item>
                      </template>
                    </q-select>
                  </div>

                  <div
                    :style="isMobileViewport ? 'margin-bottom:15px' : ''"
                    class="col-12 col-xs-2 col-sm-6 col-md-4 col-lg-4 col-xl-4"
                  >
                    <q-select
                      ref="location"
                      options-dense
                      emit-value
                      map-options
                      v-model="pagination.location"
                      :options="locationColumns"
                      @input="onSelectHandler($event, 'location')"
                      :disable="loading || pagination.equipment == '' ? true : false"
                      option-value="value"
                      label="Pilih Lokasi"
                      style="min-width: 100%;"
                      class="float-left"
                      :lazy-rules="false"
                      :rules="[ commonRule ]"
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
                      :disable="loading || pagination.location == '' ? true : false"
                      option-value="value"
                      label="Pilih Letak"
                      style="min-width: 100%;"
                      class="float-left"
                      :lazy-rules="false"
                      :rules="[ locationRule ]"
                    />
                  </div>
                </div>
              </q-form>
            </transition>

            <!-- MOBILE -->
            <div v-if="isMobileViewport" class="row full-width q-mb-sm">
              <div class="col-12">
                <div
                  class="row q-col-gutter-sm"
                  style="display: flex;justify-content: center;margin-top: 0px;"
                >
                  <div>
                    <q-btn
                      outline
                      class
                      color="primary"
                      label="proses "
                      @click="onSubmitHandler"
                      :loading="loading"
                    >
                      <q-icon class="q-pl-sm" name="replay" />

                      <template v-slot:loading>
                        <q-spinner-hourglass class="on-left" />Wait...
                      </template>
                    </q-btn>
                  </div>

                  <!-- <div>
                    <q-btn
                      color="secondary"
                      @click="toolbar = !toolbar; onEmitToolbarHandler"
                      outline
                      class
                    >
                      <q-icon name="keyboard_arrow_up" :class="toolbar ? 'rotate down' : 'rotate'" />
                    </q-btn>
                  </div>-->
                </div>
              </div>
            </div>

            <div v-if="initialSearched" class="row full-width">
              <q-intersection
                :once="once"
                transition="scale"
                class="row full-width intersection-child"
              >
                <!-- <transition name="fade"> -->
                <!-- Codition Inspection -->
                <chart-view
                  :_searchColumn="pagination.search_column"
                  :_chartData="get_laporan_custom_chartDataCondition"
                  _fieldInspection="condition"
                >
                  <q-toolbar-title
                    :class="isMobileViewport ? 'text-center' : ''"
                    style="font-size:18px"
                  >
                    Kondisi
                    <span
                      class="pull-right"
                    >({{ getCapitalize(pagination.search_column) }} {{ pagination.search_interval }} - {{ pagination.year }})</span>
                  </q-toolbar-title>
                </chart-view>
                <!-- </transition> -->
              </q-intersection>

              <q-intersection
                :once="once"
                transition="scale"
                class="row full-width intersection-child"
              >
                <!-- <transition name="fade"> -->
                <!-- Grease Shot Inspection -->
                <chart-view
                  :_searchColumn="pagination.search_column"
                  :_chartData="get_laporan_custom_chartDataGreaseShoot"
                  _fieldInspection="grease_shoot"
                >
                  <q-toolbar-title
                    :class="isMobileViewport ? 'text-center' : ''"
                    style="font-size:18px"
                  >
                    Grease Shoot
                    <span
                      class="pull-right"
                    >({{ getCapitalize(pagination.search_column) }} {{ pagination.search_interval }} - {{ pagination.year }})</span>
                  </q-toolbar-title>
                </chart-view>
                <!-- </transition> -->
              </q-intersection>

              <q-intersection
                :once="once"
                transition="scale"
                class="row full-width intersection-child"
              >
                <!-- <transition name="fade"> -->
                <!-- Weather Inspection -->
                <chart-view
                  :_searchColumn="pagination.search_column"
                  :_chartData="get_laporan_custom_chartDataWeather"
                  _fieldInspection="weather"
                >
                  <q-toolbar-title
                    :class="isMobileViewport ? 'text-center' : ''"
                    style="font-size:18px"
                  >
                    Cuaca
                    <span
                      class="pull-right"
                    >({{ getCapitalize(pagination.search_column) }} {{ pagination.search_interval }} - {{ pagination.year }})</span>
                  </q-toolbar-title>
                </chart-view>
                <!-- </transition> -->
              </q-intersection>

              <q-intersection
                :once="once"
                transition="scale"
                class="row full-width intersection-child"
              >
                <!-- <transition name="fade"> -->
                <!-- Temperature Inspection -->
                <chart-view
                  :_searchColumn="pagination.search_column"
                  :_chartData="get_laporan_custom_chartDataTemperature"
                  _fieldInspection="temperature"
                >
                  <q-toolbar-title
                    :class="isMobileViewport ? 'text-center' : ''"
                    style="font-size:18px"
                  >
                    Temperatur
                    <span
                      class="pull-right"
                    >({{ getCapitalize(pagination.search_column) }} {{ pagination.search_interval }} - {{ pagination.year }})</span>
                  </q-toolbar-title>
                </chart-view>
                <!-- </transition> -->
              </q-intersection>

              <q-intersection
                :once="once"
                transition="scale"
                class="row full-width intersection-child"
              >
                <!-- <transition name="fade"> -->
                <!-- Rain Inspection -->
                <chart-view
                  :_searchColumn="pagination.search_column"
                  :_chartData="get_laporan_custom_chartDataRain"
                  _fieldInspection="rain"
                >
                  <q-toolbar-title
                    :class="isMobileViewport ? 'text-center' : ''"
                    style="font-size:18px"
                  >
                    Curah Hujan
                    <span
                      class="pull-right"
                    >({{ getCapitalize(pagination.search_column) }} {{ pagination.search_interval }} - {{ pagination.year }})</span>
                  </q-toolbar-title>
                </chart-view>
                <!-- </transition>- -->
              </q-intersection>
            </div>
          </q-form>
        </q-card-section>

        <!-- no data -->
        <div id="footnote"></div>
      </q-card>

      <slot name="info" />
    </div>
  </q-page>
</template>

<script>
import ChartView from "./data-table-report/chart-view";

export default {
  components: {
    ChartView
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
    intervalColumns() {
      switch (this.pagination.search_column) {
        case "week":
          return this.weekColumns;
          break;
        case "month":
          return this.monthColumns;
          break;
        case "quartal":
          return this.quartalColumns;
          break;
      }
    },
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
      return data;
    },
    quartalColumns() {
      let data = [];
      for (let index = 1; index <= 4; index++) {
        data.push({
          label: "Kuartal ke " + index,
          value: index,
          disable: false,
          required: index == 1 ? true : false,
          category: index
        });
      }
      return data;
    },
    monthColumns() {
      let data = [];
      for (let index = 1; index <= 12; index++) {
        const val = index <= 9 ? "0" + index : index;
        data.push({
          label: MonthConverter(val),
          value: val,
          disable: false,
          required: index == 1 ? true : false,
          category: index
        });
      }
      return data;
    },
    columns() {
      return [];
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
      return [];
    },
    separator() {
      return this["get_" + this._store_module + "_separator"];
    },
    selected() {
      return this["get_" + this._store_module + "_selected"];
    },
    data() {
      return this["get_" + this._store_module + "_data"];
    }
  },
  watch: {
    "$route.path": function() {
      // this.requestAxios();
    },
    "pagination.year": function(val) {
      //console.log(val);
      if (val > this.maxYear) {
        this.pagination.year = this.maxYear;
      }
      if (val < this.minYear) {
        this.pagination.year = this.minYear;
      }
    },
    equipmentColumns: {
      handler: function(after, before) {
        const vm = this;
        vm.equipmentColumns =
          vm["get_" + vm._store_module + "_equipmentColumns"];
      },
      deep: true
    },
    locationColumns: {
      handler: function(after, before) {
        const vm = this;
        vm.locationColumns = vm["get_" + vm._store_module + "_locationColumns"];
      },
      deep: true
    },

    visibleColumns: {
      handler: function(after, before) {
        const vm = this;
        vm.actionVuex({
          data: vm.visibleColumns,
          type: "visibleColumns"
        });
      },
      deep: true
    },
    loading: {
      handler: function(after, before) {
        var vm = this;

        try {
          let element = document.getElementById("footnote");

          //console.log("watcher loading", element);

          if (vm.loading) {
            element.innerHTML = `
              <div class="full-width row flex-center text-accent q-gutter-sm" style="padding-bottom: 10px;padding-top: 5px;margin-top: -20px; border-top:1px solid rgba(0, 0, 0, 0.12)">
              <i aria-hidden="true" class="material-icons q-icon" style="font-size: 2em;">warning</i>
              <span>Data sedang diproses</span>
              </div>`;
            return;
          } else {
            element.innerHTML = "";
            if (vm["get_" + vm._store_module + "_data"].length <= 0) {
              element.innerHTML = `
				  <div class="full-width row flex-center text-accent q-gutter-sm" style="padding-bottom: 10px;padding-top: 5px;margin-top: -20px; border-top:1px solid rgba(0, 0, 0, 0.12)">
				  <i aria-hidden="true" class="material-icons q-icon" style="font-size: 2em;">warning</i>
				  <span>Tidak ditemukan data yang relevan</span>
				  </div>`;
            }
          }
        } catch (error) {}
      },
      deep: true
    },
    // IMPORTANT
    // update vuex
    pagination: {
      handler: function(before, after) {
        const vm = this;

        vm.initialSearched = false;
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

            vm.actionVuex({
              data: locations,
              type: "locationColumns"
            });
          }
        }

        vm.actionVuex({
          data: vm.pagination,
          type: "pagination"
        });
      },
      deep: true
    }
  },
  data() {
    return {
      once: true,

      initialSearched: true, // true jika hasil pencarian tidak 0
      toolbar: this._toolbar, // show/hide toolbar
      loading: false, // loader atau spinner indicator

      pagination: {},
      visibleColumns: [],

      equipmentColumns: [],
      locationColumns: [],

      maxYear: new Date().getFullYear() + 1,
      minYear: 2017,

      placeColumns: [
        {
          label: "Tidak Ada",
          value: "",
          disable: false,
          category: "1"
        },
        {
          label: "Kanan",
          value: "A",
          disable: false,
          category: "1"
        },
        {
          label: "Kiri",
          value: "B",
          disable: false,
          category: "2"
        }
      ],

      operators: operator
    };
  },

  mounted() {
    const vm = this;

    if (vm._store_module) {
      vm.pagination = vm["get_" + vm._store_module + "_pagination"];

      vm.visibleColumns = vm["get_" + vm._store_module + "_visibleColumns"];

      vm.equipmentColumns = vm["get_" + vm._store_module + "_equipmentColumns"];

      vm.locationColumns = vm["get_" + vm._store_module + "_locationColumns"];

      new Promise(resolve => {
        resolve(
          vm.requestTransformAxios({
            url: `/api/v1/library/equipment?type=select`,
            key: "equipment"
          })
        );
      }).then(result => {
        vm.actionVuex({
          type: "equipmentColumns",
          data: result
        });
      });
    }
  },
  methods: {
    /**
     * -------------------------------------------------------------
     * Rule Block
     * -------------------------------------------------------------
     */
    locationRule(val) {
      const vm = this;

      return new Promise((resolve, reject) => {
        if (val && val.length > 0) {
          resolve(!!val.toString() || "* Required"); // support numerice
        }
        resolve(true);
      });
    },
    commonRule(val) {
      // simulating a delay
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(!!val.toString() || "* Required"); // support numerice
        }, 1000);
      });
    },

    /**
     * -------------------------------------------------------------
     * Handler Block
     * -------------------------------------------------------------
     */
    onSubmitHandler() {
      const object = formName;
      const vm = this;
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const element = object[key];
          // console.log(vm.$refs[key].hasError, element);

          if (vm.$refs[key].hasError) {
            vm.$q.notify({
              color: "negative",
              message: `Perhatian! Kolom ${element} wajib diisi`,
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
            return;
          }
        }
      }

      vm.requestAxios();
    },
    onFilterEquipmentHandler(val, update, abort) {
      var vm = this;

      vm.equipmentColumns = vm["get_" + vm._store_module + "_equipmentColumns"];

      if (vm.equipmentColumns.length > 0) {
        // already loaded
        update();
        return;
      }

      new Promise(resolve => {
        resolve(
          vm.requestTransformAxios({
            url: `/api/v1/library/equipment?type=select`,
            key: "equipment"
          })
        );
      }).then(result => {
        vm.equipmentColumns = vm.actionVuex({
          type: "equipmentColumns",
          data: result
        });

        // console.log("vm.equipmentColumns", vm.equipmentColumns);

        setTimeout(() => {
          update();
        }, 1000);
      });
    },
    onEmitToolbarHandler() {
      // emit dengan keyword "input" bisa di v-model oleh parent
      this.$emit("input", (toolbar = !toolbar));
    },
    onSelectHandler(data, type) {
      const vm = this;

      if (type == "search_column") {
        vm.pagination.search_interval = "";
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
                    value: "",
                    disable: false,
                    category: "1"
                  }
                ];
                vm.pagination.place = "";
                break;
              case 1:
                vm.placeColumns = [
                  {
                    label: "Kanan",
                    value: "A",
                    disable: false,
                    category: "1"
                  },
                  {
                    label: "Kiri",
                    value: "B",
                    disable: false,
                    category: "2"
                  }
                ];
                vm.pagination.place = "A";

                break;
            }
          }
        }
      }

      vm.pagination[type] = data;
      // vm.requestAxios();
    },

    /**
     * -------------------------------------------------------------
     * Axios Block
     * -------------------------------------------------------------
     */
    requestTransformAxios(type) {
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
      vm.actionVuex({
        data: options,
        type: type.key + "Columns"
      });
      return options;
    },
    requestAxios: _.debounce(function() {
      var vm = this;

      vm.loading = true;
      vm.initialSearched = false;

      vm.$axios
        .get(vm.buildURL())
        .then(function(response) {
          // console.log(response.data.payload);
          //console.log(response.data.payload.data.length);

          vm.loading = false;

          vm.initialSearched = true;

          vm.actionVuex({
            data: response.data.payload,
            type: "payload"
          });

          return;
        })
        .catch(function(error) {
          vm.loading = false;
        });
    }, 1000),

    /**
     * -------------------------------------------------------------
     * Vuex Block
     * -------------------------------------------------------------
     */
    actionVuex(payload) {
      this["set_" + this._store_module]({
        data: payload.data,
        type: payload.type
      });
    },

    /**
     * -------------------------------------------------------------
     * Miscelleneous Block
     * -------------------------------------------------------------
     */
    buildURL() {
      let q = this.pagination;

      let local_paginate = {
        ...q
      };

      q = local_paginate;

      // console.log(JSON.stringify(local_paginate));

      return `/api/v1${q.segment}?search_column=${q.search_column}&search_operator=${q.search_operator}&search_interval=${q.search_interval}&year=${q.year}&uuid_tb_equipment=${q.equipment}&uuid_tb_location=${q.location}&place_inspection=${q.place}`;
    }
  }
};

const formName = {
  search_column: "waktu",
  // search_operator: "",
  search_interval: "interval",
  equipment: "alat",
  location: "lokasi",
  place: "letak"
};

function MonthConverter(bulan) {
  // console.log(bulan);

  switch (bulan.toString()) {
    case "01":
      return (bulan = "Januari");
      break;
    case "02":
      return (bulan = "Februari");
      break;
    case "03":
      return (bulan = "Maret");
      break;
    case "04":
      return (bulan = "April");
      break;
    case "05":
      return (bulan = "Mei");
      break;
    case "06":
      return (bulan = "Juni");
      break;
    case "07":
      return (bulan = "Juli");
      break;
    case "08":
      return (bulan = "Agustus");
      break;
    case "09":
      return (bulan = "September");
      break;
    case "10":
      return (bulan = "Oktober");
      break;
    case "11":
      return (bulan = "November");
      break;
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
    category: "0"
  },
  {
    label: "Sama Dengan",
    value: "equal_to",
    disable: false,
    category: "1"
  },
  {
    label: "Tidak Sama",
    value: "not_equal",
    disable: false,
    category: "2"
  },
  {
    label: "Kurang Dari",
    value: "less_than",
    disable: false,
    category: "3"
  },
  {
    label: "Lebih Besar Dari",
    value: "greater_than",
    disable: false,
    category: "4"
  },
  {
    label: "Kurang Dari Atau Sama Dengan",
    value: "less_than_or_equal_to",
    disable: false,
    category: "5"
  },
  {
    label: "Lebih Dari Atau Sama Dengan",
    value: "greater_than_or_equal_to",
    disable: false,
    category: "6"
  },
  {
    label: "Di Dalam",
    value: "in",
    disable: false,
    category: "7"
  },
  {
    label: "Di Luar",
    value: "not_in",
    disable: false,
    category: "8"
  },
  {
    label: "Seperti",
    value: "like",
    disable: false,
    category: "9"
  }
  // {
  //   label: "BETWEEN",
  //   value: "between",
  //   disable: false,
  //   category: "1"
  // }
];
</script>

<style >
.intersection-child div {
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

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