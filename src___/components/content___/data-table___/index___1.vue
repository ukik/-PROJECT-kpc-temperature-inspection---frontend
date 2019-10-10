<template>
  <div class="q-pa-md">
    <!-- <q-option-group
      v-model="separator"
      inline
      class="q-mb-md"
      :options="[
        { label: 'Horizontal (default)', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
        { label: 'Cell', value: 'cell' },
        { label: 'None', value: 'none' },
      ]"
    />-->

    <!-- <div class="row no-wrap">
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>Quasar Framework</q-toolbar-title>
      </q-toolbar>
    </div>-->

    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
      :pagination.sync="pagination"
      :loading="loading"
      :filter="filter"
      @request="onRequest"
      binary-state-sort
      :separator="separator"
      selection="single"
      :selected.sync="selected"
      class="my-sticky-header-table my-sticky-column-table"
      :visible-columns="visibleColumns"
    >
      <template v-slot:top="props">
        <q-toolbar style="padding:0px">
          <q-icon name="font_download" size="lg" />
          <q-toolbar-title>Quasar Framework</q-toolbar-title>
        </q-toolbar>

        <!-- <div class="col-2 q-table__title">Treats</div> -->
        <!-- <img
          style="height: 50px; width: 50px"
          src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
        />-->

        <!-- <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />-->

        <q-select
          v-model="visibleColumns"
          multiple
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="selectedColumns"
          option-value="name"
          style="min-width: 150px"
        />

        <q-space />

        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:header-cell="props">
        <q-th :props="props">
          <!-- <q-icon name="lock_open" size="1.5em" /> -->
          {{ props.col.label }}
        </q-th>
      </template>

      <!-- row -->
      <template v-slot:body="props">
        <q-tr :props="props">
          <!-- <q-td>
            <q-checkbox dense v-model="props.selected" />
          </q-td>-->

          <q-td key="action">
            <q-btn-dropdown split class="glossy" color="teal" label="Action">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-avatar icon="folder" color="primary" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Pembaruan</q-item-label>
                    <q-item-label caption>inspeksi ulang</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon name="info" color="amber" />
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-avatar icon="assignment" color="secondary" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Hapus</q-item-label>
                    <q-item-label caption>hilang permanen</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon name="info" color="amber" />
                  </q-item-section>
                </q-item>

                <!-- <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-avatar icon="assignment" color="secondary" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Hapus</q-item-label>
                    <q-item-label caption>hilang permanen</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon name="info" color="amber" />
                  </q-item-section>
                </q-item>-->
              </q-list>
            </q-btn-dropdown>
          </q-td>

          <q-td
            key="name"
            class="ellipsis"
            style="background:rgba(0, 188, 255, 0.05)"
            :props="props"
          >
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name">
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="calories" :props="props">
            {{ props.row.calories }}
            <q-popup-edit v-model="props.row.calories" title="Update calories" buttons>
              <q-input type="number" v-model="props.row.calories" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="fat" :props="props">
            <div class="text-pre-wrap">{{ props.row.fat }}</div>
            <q-popup-edit v-model="props.row.fat">
              <q-input type="textarea" v-model="props.row.fat" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="carbs" :props="props">
            {{ props.row.carbs }}
            <q-popup-edit v-model="props.row.carbs" title="Update carbs" buttons persistent>
              <q-input
                type="number"
                v-model="props.row.carbs"
                dense
                autofocus
                hint="Use buttons to close"
              />
            </q-popup-edit>
          </q-td>
          <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
          <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
          <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
          <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
        </q-tr>
      </template>

      <!-- no data -->
      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <!-- <q-icon size="2em" name="sentiment_dissatisfied" />
          <span>Well this is sad... {{ message }}</span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />-->
        </div>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  watch: {
    selected: function(val) {
      console.log(val);
    },
    pagination: {
      handler: function(after, before) {
        var vm = this;
        let element = document.getElementsByClassName("q-table__bottom row")[0]
          .children[0];

        if (vm.data.length > 0) {
          element.innerHTML = `Halaman ${vm.pagination.page}`;
          return;
        }
        element.innerHTML = `
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <i aria-hidden="true" class="material-icons q-icon" style="font-size: 2em;">warning</i>
          <span>No matching records found ${vm.filter}</span>
        </div>`;
      },
      deep: true
    }
  },
  data() {
    return {
      separator: "horizontal",
      visibleColumns: ["calories", "fat", "carbs", "sodium", "calcium", "iron"],
      selected: [],
      filter: "",
      loading: false,
      pagination: {
        sortBy: "name",
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10
      },
      selectedColumns: [
        "calories",
        "fat",
        "carbs",
        "sodium",
        "calcium",
        "iron"
      ],
      columns: [
        {
          name: "name",
          required: true,
          label: "Dessert (100g serving)",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "calories",
          align: "center",
          label: "Calories",
          field: "calories",
          sortable: true
        },
        { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
        { name: "carbs", label: "Carbs (g)", field: "carbs", sortable: true },
        {
          name: "protein",
          label: "Protein (g)",
          field: "protein",
          sortable: true
        },
        {
          name: "sodium",
          label: "Sodium (mg)",
          field: "sodium",
          sortable: true
        },
        {
          name: "calcium",
          label: "Calcium (%)",
          field: "calcium",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "iron",
          label: "Iron (%)",
          field: "iron",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ],
      data: [],
      original: [
        {
          id: 1,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          id: 2,
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          id: 3,
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          id: 4,
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        },
        {
          id: 5,
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%"
        },
        {
          id: 6,
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%"
        },
        {
          id: 7,
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%"
        },
        {
          id: 8,
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%"
        },
        {
          id: 9,
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%"
        },
        {
          id: 10,
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%"
        },
        {
          id: 11,
          name: "Frozen Yogurt-1",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          id: 12,
          name: "Ice cream sandwich-1",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          id: 13,
          name: "Eclair-1",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          id: 14,
          name: "Cupcake-1",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        },
        {
          id: 15,
          name: "Gingerbread-1",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%"
        },
        {
          id: 16,
          name: "Jelly bean-1",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%"
        },
        {
          id: 17,
          name: "Lollipop-1",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%"
        },
        {
          id: 18,
          name: "Honeycomb-1",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%"
        },
        {
          id: 19,
          name: "Donut-1",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%"
        },
        {
          id: 20,
          name: "KitKat-1",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%"
        },
        {
          id: 21,
          name: "Frozen Yogurt-2",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          id: 22,
          name: "Ice cream sandwich-2",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          id: 23,
          name: "Eclair-2",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          id: 24,
          name: "Cupcake-2",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        },
        {
          id: 25,
          name: "Gingerbread-2",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%"
        },
        {
          id: 26,
          name: "Jelly bean-2",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%"
        },
        {
          id: 27,
          name: "Lollipop-2",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%"
        },
        {
          id: 28,
          name: "Honeycomb-2",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%"
        },
        {
          id: 29,
          name: "Donut-2",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%"
        },
        {
          id: 30,
          name: "KitKat-2",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%"
        },
        {
          id: 31,
          name: "Frozen Yogurt-3",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          id: 32,
          name: "Ice cream sandwich-3",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          id: 33,
          name: "Eclair-3",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          id: 34,
          name: "Cupcake-3",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        },
        {
          id: 35,
          name: "Gingerbread-3",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%"
        },
        {
          id: 36,
          name: "Jelly bean-3",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%"
        },
        {
          id: 37,
          name: "Lollipop-3",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%"
        },
        {
          id: 38,
          name: "Honeycomb-3",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%"
        },
        {
          id: 39,
          name: "Donut-3",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%"
        },
        {
          id: 40,
          name: "KitKat-3",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%"
        }
      ]
    };
  },
  mounted() {
    // const object = (document.getElementsByClassName(
    //   "q-table__bottom row"
    // )[0].children[0].innerText = `Halaman ${this.pagination.page}`);

    // get initial data from server (1st page)
    this.onRequest({
      pagination: this.pagination,
      filter: undefined
    });
  },
  methods: {
    addRow() {
      this.loading = true;
      setTimeout(() => {
        const index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)];
        if (this.data.length === 0) {
          this.rowCount = 0;
        }
        row.id = ++this.rowCount;
        const addRow = { ...row }; // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [
          ...this.data.slice(0, index),
          addRow,
          ...this.data.slice(index)
        ];
        this.loading = false;
      }, 500);
    },
    removeRow() {
      this.loading = true;
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length);
        this.data = [
          ...this.data.slice(0, index),
          ...this.data.slice(index + 1)
        ];
        this.loading = false;
      }, 500);
    },

    onRequest(props) {
      let {
        page,
        rowsPerPage,
        rowsNumber,
        sortBy,
        descending
      } = props.pagination;
      let filter = props.filter;

      this.loading = true;

      // emulate server
      setTimeout(() => {
        // update rowsCount with appropriate value
        this.pagination.rowsNumber = this.getRowsNumberCount(filter);

        // get all rows if "All" (0) is selected
        let fetchCount = rowsPerPage === 0 ? rowsNumber : rowsPerPage;

        // calculate starting row of data
        let startRow = (page - 1) * rowsPerPage;

        // fetch data from "server"
        let returnedData = this.fetchFromServer(
          startRow,
          fetchCount,
          filter,
          sortBy,
          descending
        );

        // clear out existing data and add new
        this.data.splice(0, this.data.length, ...returnedData);

        // don't forget to update local pagination object
        this.pagination.page = page;
        this.pagination.rowsPerPage = rowsPerPage;
        this.pagination.sortBy = sortBy;
        this.pagination.descending = descending;

        // ...and turn of loading indicator
        this.loading = false;

        console.log(JSON.stringify(this.data));
      }, 1500);
    },

    // emulate ajax call
    // SELECT * FROM ... WHERE...LIMIT...
    fetchFromServer(startRow, count, filter, sortBy, descending) {
      let data = [];

      if (!filter) {
        data = this.original.slice(startRow, startRow + count);
      } else {
        let found = 0;
        for (
          let index = startRow, items = 0;
          index < this.original.length && items < count;
          ++index
        ) {
          let row = this.original[index];
          // match filter?
          if (!row["name"].includes(filter)) {
            // get a different row, until one is found
            continue;
          }
          ++found;
          if (found >= startRow) {
            data.push(row);
            ++items;
          }
        }
      }

      // handle sortBy
      if (sortBy) {
        data.sort((a, b) => {
          let x = descending ? b : a;
          let y = descending ? a : b;
          if (sortBy === "desc") {
            // string sort
            return x[sortBy] > y[sortBy] ? 1 : x[sortBy] < y[sortBy] ? -1 : 0;
          } else {
            // numeric sort
            return parseFloat(x[sortBy]) - parseFloat(y[sortBy]);
          }
        });
      }

      return data;
    },

    // emulate 'SELECT count(*) FROM ...WHERE...'
    getRowsNumberCount(filter) {
      if (!filter) {
        return this.original.length;
      }
      let count = 0;
      this.original.forEach(treat => {
        if (treat["name"].includes(filter)) {
          ++count;
        }
      });
      return count;
    }
  }
};
</script>

<style>
.my-sticky-column-table {
  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  max-width: 100%;
  /* bg color is important for th; just specify one */
}

/* .my-sticky-column-table thead tr:nth-child(2) th:nth-child(2) {
  background-color: #fff;
  opacity: 1;
} */

/* .my-sticky-column-table td:nth-child(2) {
  background-color: #f1e4ff36;
} */

.my-sticky-column-table thead tr:nth-child(1) th:nth-child(2) {
  left: 0;
  z-index: 3;
  /* opacity: 1; */
  /* background-color: #f5f5dc;     */
}
.my-sticky-column-table td:nth-child(2) {
  position: sticky;
  left: 0;
  z-index: 1;
  /* opacity: 1; */
  /* background-color: #f1e4ff36; */
}

.my-sticky-header-table .q-table__middle {
  max-height: 350px;
}

/* .my-sticky-header-table .q-table__top,
.my-sticky-header-table .q-table__bottom, */
/* .my-sticky-header-table thead tr:nth-child(1) th {
    background-color: #c1f4cd;
} */

.my-sticky-header-table thead tr:nth-child(1) th {
  position: sticky;
  top: 0;
  opacity: 1;
  z-index: 2;
  background-color: #c1f4cd80;
}

.q-table__progress {
  z-index: 9 !important;
  position: sticky;
  top: 49px;
}
</style>