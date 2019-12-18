<template>
  <fragment>
    <q-page>
      <data-table-karyawan-role :_store_module="store_module">
        <!-- TITLE -->
        <q-toolbar slot="title" style="padding:0px">
          <q-icon
            v-if="!isMobileViewport"
            name="keyboard_arrow_left"
            size="lg"
            v-pointer
            @click="$router.back()"
          >
            <q-tooltip
              content-style="font-size: 14px"
              anchor="center left"
              self="center right"
            >Kembali</q-tooltip>
          </q-icon>
          <q-toolbar-title>Aturan Karyawan</q-toolbar-title>
        </q-toolbar>

        <!-- ROW -->
        <template slot="row" slot-scope="props">
          <q-tr>
            <q-td
              key="name_employee"
              class="ellipsis"
              style="background:#c1f4cdd3; padding: 0px;"
              :props="props.props"
              v-row-color="{val: props.visibleColumns, oldColor: '#c1f4cdd3', newColor: '#fff'}"
            >
              <q-item style="padding: 0px;">
                <q-item-section avatar class="q-pa-sm bg-white">
                  <q-btn-dropdown split outline rounded icon="view_list" color="red">
                    <q-list>
                      <q-item
                        @click="gotoEmployeeFormHandler(props.props.row, 'formulir-karyawan-detail')"
                        clickable
                        v-close-popup
                      >
                        <q-item-section avatar>
                          <q-avatar icon="filter_none" color="primary" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Lihat</q-item-label>
                          <q-item-label caption>detail informasi</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item
                        @click="gotoEmployeeFormHandler(props.props.row, 'formulir-karyawan')"
                        clickable
                        v-close-popup
                      >
                        <q-item-section avatar>
                          <q-avatar icon="create" color="red" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Ubah</q-item-label>
                          <q-item-label caption>inspeksi ulang</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </q-item-section>
                <q-item-section
                  class="q-pa-md"
                  style="text-align: left;border-left: 1px solid rgba(0, 0, 0, 0.12);border-right: 1px solid rgba(0, 0, 0, 0.12);"
                >
                  <span>
                    {{ props.props.row.name_employee }}
                    <inner-loading
                      :ref="'spinner_name_employee_'+props.props.row.__index"
                      :_visible="false"
                    />
                  </span>
                </q-item-section>
              </q-item>
            </q-td>

            <q-td key="position_employee" :props="props.props">
              <q-btn-dropdown
                split
                rounded
                outline
                v-arrow
                disable-main-btn
                class
                :color="position_color(props.props.row.position_employee)"
                :label="props.props.row.position_employee | position"
              >
                <dropdown-item
                  @onBubble="props.props.row.position_employee = $event; onUpdateHandler(props.props.row)"
                  :payload="{label: 'Supervisor', value:1 }"
                >
                  <q-item-label slot="item-label" caption>jabatan petugas</q-item-label>
                </dropdown-item>
                <dropdown-item
                  @onBubble="props.props.row.position_employee = $event; onUpdateHandler(props.props.row)"
                  :payload="{label: 'Temperature Man', value:2 }"
                >
                  <q-item-label slot="item-label" caption>jabatan petugas</q-item-label>
                </dropdown-item>
                <q-separator />
                <dropdown-item
                  @onBubble="props.props.row.position_employee = $event; onUpdateHandler(props.props.row)"
                  :payload="{label: 'Super Admin', value:0 }"
                >
                  <q-item-label slot="item-label" caption>jabatan petugas</q-item-label>
                </dropdown-item>
              </q-btn-dropdown>
            </q-td>

            <q-td key="verification_employee" :props="props.props">
              <q-btn
                v-if="props.props.row.verification_employee == 1"
                split
                rounded
                outline
                disable
                class
                :color="verification_color(props.props.row.verification_employee)"
                :label="props.props.row.verification_employee | verification"
              ></q-btn>
              <q-btn-dropdown
                v-else
                split
                rounded
                outline
                disable-main-btn
                class
                :color="verification_color(props.props.row.verification_employee)"
                :label="props.props.row.verification_employee | verification"
              >
                <dropdown-item
                  @onBubble="props.props.row.verification_employee = $event; onUpdateHandler(props.props.row)"
                  :payload="{label: 'Verifikasi', value:1 }"
                >
                  <q-avatar
                    slot="avatar"
                    icon="assignment_turned_in"
                    color="secondary"
                    text-color="white"
                  />
                  <q-item-label slot="item-label" caption>akun baru</q-item-label>
                </dropdown-item>
              </q-btn-dropdown>
            </q-td>
            <q-td key="disable_employee" :props="props.props">
              <q-toggle
                color="red"
                @input="onUpdateHandler(props.props.row)"
                v-model="props.props.row.disable_employee"
                :value="props.props.row.disable_employee"
                :label="props.props.row.disable_employee | disable"
              />
            </q-td>
            <q-td key="created_at" :props="props.props">{{ props.props.row.created_at }}</q-td>
            <q-td key="updated_at" :props="props.props">{{ props.props.row.updated_at }}</q-td>
          </q-tr>
        </template>
        <info-karyawan slot="info" />
      </data-table-karyawan-role>

      <!-- place QPageScroller at end of page -->
      <q-page-scroller
        v-if="isMobileViewport"
        position="bottom-left"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <div style="display: flex; justify-content: center; padding: 10px;">
          <q-btn
            icon="arrow_upward"
            class="bg-white"
            outline
            rounded
            color="negative"
            label="Back To Top"
            no-caps
          />
        </div>
      </q-page-scroller>

      <!-- place QPageScroller at end of page -->
      <scroll-to-top />
    </q-page>
  </fragment>
</template>

<script>
import role_auth from "../../../helpers/role_auth";

export default {
  mixins: [role_auth],
  data() {
    return {
      store_module: "karyawan_role" // lihat modules di store/index.js
    };
  },
  computed: {
    position_color() {
      return payload => {
        switch (Number(payload)) {
          case 0:
            return "deep-purple-10";

          case 1:
            return "deep-purple-8";

          case 2:
            return "deep-purple-6";
        }
      };
    },
    verification_color() {
      return payload => {
        switch (Number(payload)) {
          case 0:
            return "negative";
          case 1:
            return "positive";
        }
      };
    },
    disabled_color() {
      return payload => {
        switch (Number(payload)) {
          case 0:
            return "negative";
          case 1:
            return "positive";
        }
      };
    }
  },
  // membersihkan store menghindari UI jamming
  beforeDestroy() {
    this.set_karyawan_role({
      type: "payload",
      data: []
    });
  },
  methods: {
    /**
     * -------------------------------------------------------------
     * Handler Block
     * -------------------------------------------------------------
     */
    onUpdateHandler(payload) {
      const vm = this;

      const spinner = vm.$refs["spinner_name_employee_" + payload.__index];

      if (spinner == undefined) return;

      spinner.visible = true;

      vm.$axios
        .put("/api/v1/employee", vm.get_karyawan_role_data[payload.__index])
        .then(function(response) {
          // console.log("response", response.data.payload);

          spinner.visible = false;

          vm.set_karyawan_biodata({
            type: "replace",
            data: response.data.payload
          });

          vm.set_karyawan_role({
            type: "replace",
            data: response.data.payload
          });
        })
        .catch(function(error) {
          spinner.visible = false;
        });
    },
    gotoEmployeeFormHandler(payload, route) {
      // console.log(payload);

      new Promise(resolve => {
        this.set_formulir_karyawan({
          type: "update_form",
          data: payload
        });
        resolve();
      }).then(result => {
        this.$router.push({
          name: route
          // query: {
          //   update: param
          // }
        });
      });
    }
  }
};
</script>