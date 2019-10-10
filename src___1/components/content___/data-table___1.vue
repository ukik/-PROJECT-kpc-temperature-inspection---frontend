<template>
  <div class="q-pa-md">
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      :pagination.sync="pagination"
      :loading="loading"
      @request="onRequest"
      binary-state-sort
      :separator="separator"
      selection="single"
      :selected.sync="selected"
      class="my-sticky-header-table my-sticky-column-table"
      :visible-columns="visibleColumns"
      :rows-per-page-options="[5, 10, 25, 50, 75, 100]"
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
                  <q-toggle v-model="visibleColumns" val="position_employee" label="Posisi" />
                  <q-toggle v-model="visibleColumns" val="fat" label="Fat" />
                  <q-toggle v-model="visibleColumns" val="carbs" label="Carbs" />
                  <q-toggle v-model="visibleColumns" val="protein" label="Protein" />
                  <q-toggle v-model="visibleColumns" val="sodium" label="Sodium" />
                  <q-toggle v-model="visibleColumns" val="calcium" label="Calcium" />
                  <q-toggle v-model="visibleColumns" val="iron" label="Iron" />
                </div>
              </div>
            </q-btn-dropdown>
            <q-btn
              class="glossy float-right q-mr-sm"
              color="primary"
              label="Refresh"
              icon="refresh"
            />

            <!-- <q-select
              multiple
              options-dense
              v-model="visibleColumns"
              emit-value
              map-options
              :options="selectedColumns"
              option-value="value"
              display-value="Kolom"
              label="Pilih data tampil"
              style="min-width: 250px; padding-right: 10px;"
            />-->
          </div>
        </div>

        <hr />

        <!-- <q-btn color="primary" icon="create" label="On Left" /> -->
        <q-space />
        <q-select
          options-dense
          v-model="pagination.search_column"
          emit-value
          map-options
          :options="selectedColumns"
          @change="fetchData"
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
          @change="fetchData"
          option-value="value"
          label="Operasi pencarian"
          placeholder="xxxxxxx"
          style="min-width: 250px; "
          class="q-mr-md"
        />

        <q-input
          debounce="250"
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
          debounce="250"
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

        <!-- <q-select
          v-model="visibleColumns"
          multiple
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="selectedColumns"
          option-value="value"
          style="min-width: 150px;"
        />-->
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
          >
            {{ props.row.name_employee }}
            <!-- <q-popup-edit v-model="props.row.name">
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>-->
          </q-td>
          <q-td key="position_employee" :props="props">
            {{ props.row.position_employee }}
            <!-- <q-popup-edit v-model="props.row.calories" title="Update calories" buttons>
              <q-input type="number" v-model="props.row.calories" dense autofocus />
            </q-popup-edit>-->
          </q-td>
          <q-td key="nik_employee" :props="props">
            <div class="text-pre-wrap">{{ props.row.nik_employee }}</div>
            <!-- <q-popup-edit v-model="props.row.fat">
              <q-input type="textarea" v-model="props.row.fat" dense autofocus />
            </q-popup-edit>-->
          </q-td>
          <q-td key="telpon_employee" :props="props">
            {{ props.row.telpon_employee }}
            <!-- <q-popup-edit v-model="props.row.carbs" title="Update carbs" buttons persistent>
              <q-input
                type="number"
                v-model="props.row.carbs"
                dense
                autofocus
                hint="Use buttons to close"
              />
            </q-popup-edit>-->
          </q-td>
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
          v-model="server_paginate.current_page"
          :max="server_paginate.total"
          :max-pages="server_paginate.to"
          :boundary-numbers="true"
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
export default {
  props: {
    columns: {
      default: () => [
        // {
        //   name: "uuid"
        // },
        {
          name: "name_employee",
          label: "Nama",
          field: "name_employee",
          align: "left",
          sortable: true,
          required: true
        },
        {
          name: "position_employee",
          label: "Posisi",
          field: "position_employee",
          sortable: true,
          align: "left"
        },
        {
          name: "nik_employee",
          label: "NIK",
          field: "nik_employee",
          sortable: true,
          align: "left"
        },
        {
          name: "telpon_employee",
          label: "Telpon",
          field: "telpon_employee",
          sortable: true,
          align: "left"
        },
        {
          name: "email_employee",
          label: "Email",
          field: "email_employee",
          sortable: true,
          align: "left"
        },
        {
          name: "birth_place_employee",
          label: "Tempat Lahir",
          field: "birth_place_employee",
          sortable: true,
          align: "left"
        },
        {
          name: "birth_date_employee",
          label: "Tanggal Lahir",
          field: "birth_date_employee",
          sortable: true,
          align: "left"
        },
        {
          name: "gender_employee",
          label: "Gender",
          field: "gender_employee",
          sortable: true,
          align: "left"
        },
        {
          name: "marital_employee",
          label: "Pernikahan",
          field: "marital_employee",
          sortable: true,
          align: "left"
        },
        {
          name: "address_employee",
          label: "Alamat",
          field: "address_employee",
          sortable: true,
          align: "left"
        },
        // {
        //   name: "password_employee",
        //   label: "Password",
        //   align: "left"
        // },
        // {
        //   name: "plain_password_employee",
        //   label: "Plain Password",
        //   align: "left"
        // },
        {
          name: "photo_employee",
          label: "Foto",
          field: "photo_employee",
          sortable: true,
          align: "left"
        },
        {
          name: "verification_employee",
          label: "Verifikasi",
          field: "verification_employee",
          sortable: true,
          align: "left"
        },
        {
          name: "disable_employee",
          label: "Dibekukan",
          field: "disable_employee",
          sortable: true,
          align: "left"
        },
        {
          name: "created_at",
          label: "Dibuat",
          field: "created_at",
          sortable: true,
          align: "left"
        }
        // {
        //   name: "updated_at",
        //   label: "Dessert (100g serving)",
        //   align: "left"
        // },

        // {
        //   name: "name",
        //   required: true,
        //   label: "Dessert (100g serving)",
        //   align: "left",
        //   sortable: true
        // },
        // {
        //   name: "calories",
        //   align: "center",
        //   label: "Calories",
        //   field: "calories",
        //   sortable: true
        // },
        // { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
        // { name: "carbs", label: "Carbs (g)", field: "carbs", sortable: true },
        // {
        //   name: "protein",
        //   label: "Protein (g)",
        //   field: "protein",
        //   sortable: true
        // },
        // {
        //   name: "sodium",
        //   label: "Sodium (mg)",
        //   field: "sodium",
        //   sortable: true
        // },
        // {
        //   name: "calcium",
        //   label: "Calcium (%)",
        //   field: "calcium",
        //   sortable: true
        //   // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        // },
        // {
        //   name: "iron",
        //   label: "Iron (%)",
        //   field: "iron",
        //   sortable: true
        //   // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        // }
      ]
    },

    // visibleColumns: {
    //   default: () => ["calories", "fat", "carbs", "sodium", "calcium", "iron"]
    // }
    selectedColumns: {
      default: () => [
        // {
        //   label: "uuid"
        // },
        {
          value: "name_employee",
          label: "Nama",
          required: true
          // disable: true
        },
        {
          value: "position_employee",
          label: "Posisi"
        },
        {
          value: "nik_employee",
          label: "NIK"
        },
        {
          value: "telpon_employee",
          label: "Telpon"
        },
        {
          value: "email_employee",
          label: "Email"
        },
        {
          value: "birth_place_employee",
          label: "Tempat Lahir"
        },
        {
          value: "birth_date_employee",
          label: "Tanggal Lahir"
        },
        {
          value: "gender_employee",
          label: "Gender"
        },
        {
          value: "marital_employee",
          label: "Pernikahan"
        },
        {
          value: "address_employee",
          label: "Alamat"
        },
        // {
        //   name: "password_employee",
        //   label: "Password",
        //   align: "left"
        // },
        // {
        //   name: "plain_password_employee",
        //   label: "Plain Password",
        //   align: "left"
        // },
        {
          value: "photo_employee",
          label: "Foto"
        },
        {
          value: "verification_employee",
          label: "Verifikasi"
        },
        {
          value: "disable_employee",
          label: "Dibekukan"
        },
        {
          value: "created_at",
          label: "Dibuat"
        }
      ]
    }
    // original: {
    //   default: [

    //   ]
    // }
  },
  watch: {
    selected: function(val) {
      console.log(val);
    },
    pagination: {
      handler: function(after, before) {
        var vm = this;

        vm.fetchData();

        let element = document.getElementsByClassName("q-table__bottom row")[0]
          .children[0];

        if (!vm.request_status) {
          if (vm.data.length > 0) {
            element.innerHTML = `Halaman ${vm.pagination.page}`;
            return;
          }
          element.innerHTML = `
            <div class="full-width row flex-center text-accent q-gutter-sm">
            <i aria-hidden="true" class="material-icons q-icon" style="font-size: 2em;">warning</i>
            <span>No matching records found ${vm.filter}</span>
            </div>`;
        } else {
          element.innerHTML = `
            <div class="full-width row flex-center text-accent q-gutter-sm">
            <i aria-hidden="true" class="material-icons q-icon" style="font-size: 2em;">warning</i>
            <span>Data sedang diproses ${vm.filter}</span>
            </div>`;
        }
      },
      deep: true
    }
  },
  data() {
    return {
      request_status: true,
      separator: "horizontal",
      visibleColumns: [
        // "uuid",
        // "name_employee",
        "position_employee",
        "nik_employee",
        "telpon_employee",
        "email_employee",
        "birth_place_employee",
        "birth_date_employee",
        "gender_employee",
        "marital_employee",
        "address_employee",
        // "password_employee",
        // "plain_password_employee",
        "photo_employee",
        "verification_employee",
        "disable_employee",
        "created_at",
        "updated_at"
      ],
      selected: [],
      // filter: "",
      loading: false,

      model: null,

      operators: [
        {
          label: "*",
          value: "*",
          disable: true,
          required: true,
          category: "1"
        },
        {
          label: "= (sama dengan)",
          value: "=",
          disable: false,
          category: "1"
        },
        {
          label: "<> (bukan)",
          value: "<>",
          disable: false,
          category: "1"
        },
        {
          label: "< (lebih kecil)",
          value: "<",
          disable: false,
          category: "1"
        },
        {
          label: "> (lebih besar)",
          value: ">",
          disable: false,
          category: "1"
        },
        {
          label: "<= (lebih kecil atau sama dengan)",
          value: "<=",
          disable: false,
          category: "1"
        },
        {
          label: ">= (lebih besar atau sama dengan)",
          value: ">=",
          disable: false,
          category: "1"
        },
        {
          label: "IN (meliputi)",
          value: "in",
          disable: false,
          category: "1"
        },
        {
          label: "NOT IN (selain)",
          value: "in",
          disable: false,
          category: "1"
        },
        {
          label: "LIKE (mencakup)",
          value: "like",
          disable: false,
          category: "1"
        },
        {
          label: "BETWEEN (antara)",
          value: "between",
          disable: false,
          category: "1"
        }
      ],

      server_paginate: {
        current_page: 1,
        first_page_url: "http://localhost:8000/api/v1/employee?page=1",
        from: 1,
        last_page: 2,
        last_page_url: "http://localhost:8000/api/v1/employee?page=2",
        next_page_url: "http://localhost:8000/api/v1/employee?page=2",
        path: "http://localhost:8000/api/v1/employee",
        per_page: "3",
        prev_page_url: null,
        to: 6,
        total: 10
      },
      // {"sortBy":"name","descending":false,"page":1,"rowsPerPage":75,"rowsNumber":1}
      pagination: {
        sortBy: "name_employee",
        descending: false,
        page: 1,
        rowsPerPage: 1,
        rowsNumber: 1,
        // below is additional object
        // column:"" is sortBy: "",
        segment: "/employee",
        search_column: "name_employee",
        search_operator: "*", // default
        search_query_1: "",
        search_query_2: ""
      },
      params: {
        column: "name_employee",
        direction: "desc",
        per_page: 25,
        page: 1,
        search_column: "name_employee",
        search_operator: "like",
        search_query_1: "",
        search_query_2: ""
      },
      source: "/employee",
      data: [
        {
          uuid: "TEM-729ca0eb-2422-388e-95bb-120ffea771e3",
          name_employee: "Lawrence Hansen PhD",
          position_employee: "2",
          nik_employee: "9103607689863598",
          telpon_employee: "+7074684525504",
          email_employee: "shaley@example.org",
          birth_place_employee: "samarinda",
          birth_date_employee: "1976-05-06",
          gender_employee: "1",
          marital_employee: "0",
          address_employee: "390 Hegmann Highway\nCheyanneland, NH 29390-0612",
          password_employee: "123456",
          photo_employee: "123456",
          verification_employee: "1",
          disable_employee: "0",
          created_at: "2019-09-25 02:00:13",
          updated_at: null
        },
        {
          uuid: "TEM-fbda986e-d5a7-37aa-8606-ba84b4b5274a",
          name_employee: "Kassandra Kulas IV",
          position_employee: "2",
          nik_employee: "9546209232923101",
          telpon_employee: "+8602001541821",
          email_employee: "dustin71@example.org",
          birth_place_employee: "bontang",
          birth_date_employee: "1982-02-24",
          gender_employee: "0",
          marital_employee: "0",
          address_employee: "160 Meggie Forge\nJohnsonshire, WV 50021-1803",
          password_employee: "123456",
          photo_employee: "123456",
          verification_employee: "1",
          disable_employee: "0",
          created_at: "2019-09-26 04:03:41",
          updated_at: null
        }
      ],
      original: [
        {
          uuid: "TEM-729ca0eb-2422-388e-95bb-120ffea771e3",
          name_employee: "Lawrence Hansen PhD",
          position_employee: "2",
          nik_employee: "9103607689863598",
          telpon_employee: "+7074684525504",
          email_employee: "shaley@example.org",
          birth_place_employee: "samarinda",
          birth_date_employee: "1976-05-06",
          gender_employee: "1",
          marital_employee: "0",
          address_employee: "390 Hegmann Highway\nCheyanneland, NH 29390-0612",
          password_employee: "123456",
          photo_employee: "123456",
          verification_employee: "1",
          disable_employee: "0",
          created_at: "2019-09-25 02:00:13",
          updated_at: null
        },
        {
          uuid: "TEM-fbda986e-d5a7-37aa-8606-ba84b4b5274a",
          name_employee: "Kassandra Kulas IV",
          position_employee: "2",
          nik_employee: "9546209232923101",
          telpon_employee: "+8602001541821",
          email_employee: "dustin71@example.org",
          birth_place_employee: "bontang",
          birth_date_employee: "1982-02-24",
          gender_employee: "0",
          marital_employee: "0",
          address_employee: "160 Meggie Forge\nJohnsonshire, WV 50021-1803",
          password_employee: "123456",
          photo_employee: "123456",
          verification_employee: "1",
          disable_employee: "0",
          created_at: "2019-09-26 04:03:41",
          updated_at: null
        }
      ]
    };
  },
  mounted() {
    // get initial data from server (1st page)
    this.onRequest({
      pagination: this.pagination,
      filter: undefined
    });
  },
  methods: {
    onAlert() {
      alert(123);
    },
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
    fetchData() {
      var vm = this;

      this.$axios
        .get(this.buildURL())
        .then(function(response) {
          console.log(response);
          vm.request_status = false;
          vm.loading = false;
          vm.data = response.data.payload.data;
          // vm[vm.setter](response.data);
          // Vue.set(vm.$data, "model", response.data);
        })
        .catch(function(error) {
          vm.loading = false;
          // console.log(error)
        });
    },
    buildURL() {
      // error handler reset
      // this.$root.error.status = false;
      // this.$root.error.message = "";
      // this.$root.request = true; // membuka spinner ui

      /*
      pagination: {
        sortBy: "name_employee",
        descending: false,
        page: 1,
        rowsPerPage: 100,
        rowsNumber: 1,
        // below is additional object
        // column:"" is sortBy: "",
        segement: "/employee",
        search_column: "name_employee",
        search_operator: "*", // default
        search_query_1: "",
        search_query_2: ""
      },
      */

      var p = this.params;
      const q = this.pagination;

      const q_direction = q.descending ? "desc" : "asc";

      // return `http://localhost:8000/api/v1${this.source}?column=${q.sortBy}&direction=${q_direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`;

      return `http://localhost:8000/api/v1${q.segment}?column=${q.sortBy}&direction=${q_direction}&per_page=${q.rowsPerPage}&page=${q.page}&search_column=${q.sortBy}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`;
    },
    onRequest(props) {
      // this.loading = true;

      // return;
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
      // setTimeout(() => {
      // update rowsCount with appropriate value
      this.pagination.rowsNumber = this.getRowsNumberCount(filter);

      // get all rows if "All" (0) is selected
      // let fetchCount = rowsPerPage === 0 ? rowsNumber : rowsPerPage;

      // calculate starting row of data
      // let startRow = (page - 1) * rowsPerPage;

      // fetch data from "server"
      // let returnedData = this.fetchFromServer(
      //   startRow,
      //   fetchCount,
      //   filter,
      //   sortBy,
      //   descending
      // );

      // // // clear out existing data and add new
      // this.data.splice(0, this.data.length, ...returnedData);

      // don't forget to update local pagination object
      this.pagination.page = page;
      this.pagination.rowsPerPage = rowsPerPage;
      this.pagination.sortBy = sortBy;
      this.pagination.descending = descending;

      console.log(JSON.stringify(this.pagination));
      this.fetchData();
      // console.log(JSON.stringify(this.data));
      // }, 1500);
    },

    // emulate ajax call
    // SELECT * FROM ... WHERE...LIMIT...
    fetchFromServer(startRow, count, filter, sortBy, descending) {
      // let data = [];
      // if (!filter) {
      //   data = this.original.slice(startRow, startRow + count);
      // } else {
      //   let found = 0;
      //   for (
      //     let index = startRow, items = 0;
      //     index < this.original.length && items < count;
      //     ++index
      //   ) {
      //     let row = this.original[index];
      //     // match filter?
      //     if (!row["name"].includes(filter)) {
      //       // get a different row, until one is found
      //       continue;
      //     }
      //     ++found;
      //     if (found >= startRow) {
      //       data.push(row);
      //       ++items;
      //     }
      //   }
      // }
      // // handle sortBy
      // if (sortBy) {
      //   data.sort((a, b) => {
      //     let x = descending ? b : a;
      //     let y = descending ? a : b;
      //     if (sortBy === "desc") {
      //       // string sort
      //       return x[sortBy] > y[sortBy] ? 1 : x[sortBy] < y[sortBy] ? -1 : 0;
      //     } else {
      //       // numeric sort
      //       return parseFloat(x[sortBy]) - parseFloat(y[sortBy]);
      //     }
      //   });
      // }
      // return data;
    },

    // emulate 'SELECT count(*) FROM ...WHERE...'
    getRowsNumberCount(filter) {
      // if (!filter) {
      //   return this.original.length;
      // }
      let count = 0;
      // this.original.forEach(treat => {
      //   if (treat["name"].includes(filter)) {
      //     ++count;
      //   }
      // });
      return count;
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