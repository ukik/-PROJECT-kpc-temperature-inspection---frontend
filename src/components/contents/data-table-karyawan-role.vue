<template>
  <div class="q-pa-md">
    <q-table
      id="print"
      v-if="_store_module"
      :data="data"
      :columns="columns"
      :pagination.sync="pagination"
      :loading="loading"
      @request="onTableHandler"
      binary-state-sort
      :separator="separator"
      selection="none"
      :selected.sync="selected"
      :class="
        $q.platform.is.mobile
          ? ''
          : 'my-sticky-header-table my-sticky-column-table'
      "
      :visible-columns="visibleColumns"
      :rows-per-page-options="[1, 5, 10, 25, 50]"
      :hide-header="false"
      :hide-bottom="false"
      :hide-header-cell="false"
    >
      <template v-slot:top="props">
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
                  @click="requestAxios"
                  :loading="loading"
                >
                  <q-icon class="q-pl-sm" name="replay" />

                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-left" />Wait...
                  </template>
                </q-btn>
              </div>

              <div
                v-if="visibleColumnStatus"
                class
                style="justify-content: center; display: flex;"
              >
                <q-btn-dropdown
                  outline
                  class
                  color="purple"
                  label
                  icon="toc"
                  style="width:75px"
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
                style="justify-content: center;"
                v-if="get_credentials.role == 0"
              >
                <q-btn
                  outline
                  style="width:40px"
                  color="secondary"
                  @click="
                    toolbar = !toolbar;
                    onEmitToolbarHandler;
                  "
                  class
                >
                  <q-icon
                    name="keyboard_arrow_up"
                    :class="toolbar ? 'rotate down' : 'rotate'"
                  />
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
          <div class="col-12">
            <div
              class="row q-col-gutter-sm"
              style="display: flex; justify-content: center; margin-top: 0px;"
            >
              <div>
                <q-btn
                  outline
                  class
                  color="primary"
                  label="proses "
                  @click="requestAxios"
                  :loading="loading"
                >
                  <q-icon class="q-pl-sm" name="replay" />

                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-left" />Wait...
                  </template>
                </q-btn>
              </div>

              <div v-if="visibleColumnStatus">
                <q-btn-dropdown outline color="purple" label icon="toc">
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

              <div v-if="get_credentials.role == 0">
                <q-btn
                  outline
                  color="secondary"
                  @click="
                    toolbar = !toolbar;
                    onEmitToolbarHandler;
                  "
                  class
                >
                  <q-icon
                    name="keyboard_arrow_up"
                    :class="toolbar ? 'rotate down' : 'rotate'"
                  />
                </q-btn>
              </div>
            </div>
          </div>
        </div>
        <q-space />

        <transition name="fade">
          <div v-show="toolbar" class="row full-width q-mb-sm">
            <div class="col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3">
              <q-select
                options-dense
                v-model="pagination.search_column"
                @input="onSelectHandler($event, 'search_column')"
                emit-value
                :disable="loading"
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
                :disable="loading"
                :options="operators"
                @input="onSelectHandler($event, 'search_operator')"
                option-value="value"
                label="Operasi pencarian"
                style="min-width: 100%;"
                class="float-left"
              />
            </div>

            <div
              v-datatable-toolbar="search_query_2"
              class="col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3"
            >
              <q-input
                v-model="pagination.search_query_1"
                clearable
                :disable="loading"
                @keydown="requestAxios"
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

            <div
              v-if="search_query_2"
              class="col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3"
            >
              <q-input
                v-model="pagination.search_query_2"
                clearable
                :disable="loading"
                @keydown="requestAxios"
                label="Kata kunci kedua"
                style="min-width: 100%;"
                stack-label
                placeholder="......."
                class="float-right"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
          </div>
        </transition>
      </template>

      <template v-slot:header-cell="props">
        <q-th :props="props">{{ props.col.label }}</q-th>
      </template>

      <!-- row -->
      <template v-slot:body="props">
        <!-- <transition name="fade">
          <slot name="row" :props="props" :visibleColumns="visibleColumns"></slot>
        </transition> -->

        <slot
          v-if="isMobileViewport"
          name="grid"
          :props="props"
          :visibleColumns="visibleColumns"
        ></slot>
        <slot
          v-if="
            !isMobileViewport || (isMobileViewport && get_credentials.role == 0)
          "
          name="row"
          :props="props"
          :visibleColumns="visibleColumns"
        ></slot>
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
          @input="requestAxios"
          input-class="text-orange-10"
          :direction-links="true"
          class="float-left q-pr-xl"
        />
      </template>
    </q-table>

    <slot name="info" />
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
      default: false
    },
    _visibleColumnStatus: {
      default: true
    }
  },
  computed: {
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
      const data = this["get_" + this._store_module + "_data"];
      if (data == undefined) {
        return [];
      }
      return data;
    },
    last_page() {
      return this["get_" + this._store_module + "_last_page"];
    },
    current_page() {
      return this["get_" + this._store_module + "_current_page"];
    }
  },
  watch: {
    "$route.path": function() {
      // this.requestAxios();
    },
    loading: {
      handler: function(after, before) {
        var vm = this;

        try {
          let element = document.getElementsByClassName(
            "q-table__bottom row"
          )[0].children[0];

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
        } catch (error) {}
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
    pagination: {
      handler: function(after, before) {
        // console.log("data-table paginate");

        const vm = this;
        vm.actionVuex({
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
      // componentReady: false,

      visibleColumnStatus: this._visibleColumnStatus,
      toolbar: this._toolbar,
      loading: false,
      search_query_2: false,
      pagination: {},
      visibleColumns: [],
      operators: operator
    };
  },
  mounted() {
    this.requestAxios();

    if (this._store_module) {
      // setTimeout(() => {
      //   // this.componentReady = true;
      // }, 250);

      this.pagination = this["get_" + this._store_module + "_pagination"];

      this.visibleColumns = this[
        "get_" + this._store_module + "_visibleColumns"
      ];

      if (this.data.length <= 0) {
        // get initial data from server (1st page)
        this.onTableHandler({
          pagination: this.pagination,
          filter: undefined
        });
      }
    }

    // this.$axios
    //   .delete("/api/v1/notification/0") // 0 = employee
    //   .then(function(response) {
    //     this.set_notification({
    //       type: "read_employee"
    //     });
    //   })
    //   .catch(function(error) {});
  },
  methods: {
    /**
     * -------------------------------------------------------------
     * Handler Block
     * -------------------------------------------------------------
     */
    onEmitToolbarHandler() {
      // emit dengan keyword "input" bisa di v-model oleh parent
      this.$emit("input", (toolbar = !toolbar));
    },
    onSelectHandler(data, type) {
      this.pagination[type] = data;
    },
    onTableHandler(props) {
      const vm = this;

      let {
        sortBy,
        descending,
        page,
        rowsPerPage,
        rowsNumber
      } = props.pagination;

      let filter = props.filter;

      // console.log("sortBy", sortBy);

      // update rowsCount with appropriate value
      this.pagination.rowsNumber = this.getRowsNumberCount(filter);
      this.pagination.page = page;
      this.pagination.rowsPerPage = rowsPerPage;
      this.pagination.sortBy = sortBy;
      this.pagination.descending = descending;

      vm.requestAxios();
    },

    /**
     * -------------------------------------------------------------
     * Axios Block
     * -------------------------------------------------------------
     */
    requestAxios: _.debounce(function() {
      var vm = this;

      vm.loading = true;

      vm.$axios
        .get(vm.buildURL())
        .then(function(response) {
          // console.log(response.data);

          vm.loading = false;

          vm.actionVuex({
            data: response.data.payload,
            type: "payload"
          });

          // Vue.set(vm.$data, "model", response.data);
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

      // console.log(JSON.stringify(local_paginate));

      return `/api/v1${q.segment}?sortBy=${q.sortBy}&direction=${q.descending}&per_page=${q.rowsPerPage}&page=${q.page}&search_column=${q.search_column}&search_operator=${q.search_operator}&search_query_1=${q.search_query_1}&search_query_2=${q.search_query_2}`;
    },
    getRowsNumberCount(filter) {
      return 0;
    }
  }
};

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

<style>
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
