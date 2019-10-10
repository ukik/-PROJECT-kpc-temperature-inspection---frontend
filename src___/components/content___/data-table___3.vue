<template>
  <div class="q-pa-md">
    <q-table
      :data="payload.data"
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
                  <!-- <q-toggle v-model="visibleColumns" val="uuid" label="ID" /> -->
                  <!-- <q-toggle v-model="visibleColumns" val="name_employee" label="Nama" /> -->
                  <q-toggle v-model="visibleColumns" val="position_employee" label="Posisi" />
                  <q-toggle v-model="visibleColumns" val="nik_employee" label="NIK" />
                  <q-toggle v-model="visibleColumns" val="telpon_employee" label="Telpon" />
                  <q-toggle v-model="visibleColumns" val="email_employee" label="Email" />
                  <q-toggle
                    v-model="visibleColumns"
                    val="birth_place_employee"
                    label="Tempat Lahir"
                  />
                  <q-toggle
                    v-model="visibleColumns"
                    val="birth_date_employee"
                    label="Tanggal Lahir"
                  />
                  <q-toggle v-model="visibleColumns" val="gender_employee" label="Gender" />
                  <q-toggle v-model="visibleColumns" val="marital_employee" label="Pernikahan" />
                  <q-toggle v-model="visibleColumns" val="address_employee" label="Alamat" />
                  <!-- <q-toggle v-model="visibleColumns" val="password_employee" label="Sandi" /> -->
                  <q-toggle v-model="visibleColumns" val="plain_password_employee" label="Sandi" />
                  <q-toggle v-model="visibleColumns" val="photo_employee" label="Foto" />
                  <q-toggle
                    v-model="visibleColumns"
                    val="verification_employee"
                    label="Verifikasi"
                  />
                  <q-toggle v-model="visibleColumns" val="disable_employee" label="Aktif" />
                  <q-toggle v-model="visibleColumns" val="created_at" label="Dibuat" />
                  <q-toggle v-model="visibleColumns" val="updated_at" label="Diperbarui" />
                </div>
              </div>
            </q-btn-dropdown>
            <q-btn
              class="glossy float-right q-mr-sm"
              color="primary"
              label="Refresh"
              icon="refresh"
            />
          </div>
        </div>

        <hr />

        <q-space />
        <q-select
          options-dense
          v-model="pagination.search_column"
          @input="fetchData"
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
          @input="fetchData"
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
          :max="payload.last_page"
          :max-pages="payload.current_page"
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
    columns: {
      default: () => [
        {
          name: "uuid",
          label: "ID",
          field: "uuid",
          align: "left",
          sortable: true
        },
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
        {
          name: "plain_password_employee",
          label: "Password",
          align: "left",
          sortable: true
        },
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
          label: "Aktif",
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
        },
        {
          name: "updated_at",
          label: "Diperbarui",
          field: "updated_at",
          sortable: true,
          align: "left"
        }
      ]
    },

    selectedColumns: {
      default: () => [
        {
          value: "uuid",
          label: "ID",
          required: true
          // disable: true
        },
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
        {
          value: "plain_password_employee",
          label: "Password"
        },
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
          label: "Aktif"
        },
        {
          value: "created_at",
          label: "Dibuat"
        },
        {
          value: "updated_at",
          label: "Diperbarui"
        }
      ]
    }
  },
  watch: {
    loading: {
      handler: function(after, before) {
        var vm = this;

        let element = document.getElementsByClassName("q-table__bottom row")[0]
          .children[0];

        console.log(after, before);

        if (!vm.loading) {
          if (vm.payload.data !== undefined) {
            if (vm.payload.data.length > 0) {
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
    }
  },
  data() {
    return {
      separator: "horizontal",
      visibleColumns: [
        // "uuid",
        "name_employee",
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
        "plain_password_employee",
        "photo_employee",
        "verification_employee",
        "disable_employee",
        "created_at",
        "updated_at"
      ],
      selected: [],
      loading: false,

      operators: [
        {
          label: "*",
          value: "*",
          disable: true,
          required: true,
          category: "1"
        },
        {
          label: "sama dengan",
          value: "equal_to",
          disable: false,
          category: "1"
        },
        {
          label: "bukan",
          value: "not_equal",
          disable: false,
          category: "1"
        },
        {
          label: "lebih kecil",
          value: "less_than",
          disable: false,
          category: "1"
        },
        {
          label: "lebih besar",
          value: "greater_than",
          disable: false,
          category: "1"
        },
        {
          label: "lebih kecil sama dengan",
          value: "less_than_or_equal_to",
          disable: false,
          category: "1"
        },
        {
          label: ">=", // (lebih besar atau sama dengan)",
          value: "greater_than_or_equal_to",
          disable: false,
          category: "1"
        },
        {
          label: "In", // (meliputi)",
          value: "in",
          disable: false,
          category: "1"
        },
        {
          label: "Not In", // (selain)",
          value: "not_in",
          disable: false,
          category: "1"
        },
        {
          label: "Like", // (mencakup)",
          value: "like",
          disable: false,
          category: "1"
        },
        {
          label: "Between", // (antara)",
          value: "between",
          disable: false,
          category: "1"
        }
      ],
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
        // from server
        // last_page: 0,
        // current_page: 0
      },
      payload: [{ last_page: 0, current_page: 0, data: [] }]
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
    fetchData: _.debounce(function() {
      var vm = this;
      vm.loading = true;

      vm.$axios
        .get(vm.buildURL())
        .then(function(response) {
          // console.log(response);
          vm.loading = false;
          vm.payload = response.data.payload;

          // vm.pagination.last_page = response.data.payload.last_page;
          // vm.pagination.current_page = response.data.payload.current_page;

          console.log(JSON.stringify(vm.pagination));
          // vm[vm.setter](response.data);
          // Vue.set(vm.$data, "model", response.data);
        })
        .catch(function(error) {
          vm.loading = false;
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
      // lihat mounted cara mengaksesnya
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

      // don't forget to update local pagination object
      this.pagination.page = page;
      this.pagination.rowsPerPage = rowsPerPage;
      this.pagination.sortBy = sortBy;
      this.pagination.descending = descending;

      // console.log(JSON.stringify(this.pagination));
      this.fetchData();
    },

    // emulate 'SELECT count(*) FROM ...WHERE...'
    getRowsNumberCount(filter) {
      let count = 0;
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