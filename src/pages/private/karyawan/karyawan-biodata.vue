<template>
  <fragment>
    <q-page>
      <data-table-karyawan :_store_module="store_module">
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
              >Kembali</q-tooltip
            >
          </q-icon>
          <q-toolbar-title>Biodata Karyawan</q-toolbar-title>
        </q-toolbar>

        <!-- GRID -->
        <template
          slot="grid"
          v-if="isMobileViewport && get_credentials.role != 0"
          slot-scope="props"
        >
          <div class="q-pa-md">
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Nama</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.name_employee }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Jabatan</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.position_employee }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">KTP</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.nik_employee }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Telpon</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.telpon_employee }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Email</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.email_employee }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Tempat Lahir</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.birth_place_employee }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Tanggal Lahir</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.birth_date_employee }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Jenis Kelamin</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.gender_employee | gender }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Status Perkawinan</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.marital_employee | marital }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Alamat</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.address_employee }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Password</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.plain_password_employee }}
              </div>
            </div>
            <!-- <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Foto</div>
              <div class="q-table__grid-item-value">
                https://kpc.labsnip.com/images/karyawan/1576606962.jpeg
              </div>
            </div> -->
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Verifikasi</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.verification_employee | verification }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Diblokir</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.disable_employee | disable }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Dibuat</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.created_at }}
              </div>
            </div>
            <div class="q-table__grid-item-row">
              <div class="q-table__grid-item-title">Diperbarui</div>
              <div class="q-table__grid-item-value">
                {{ props.props.row.updated_at }}
              </div>
            </div>
          </div>
        </template>

        <!-- ROW -->
        <template
          slot="row"
          v-if="!isMobileViewport || (isMobileViewport && get_credentials.role == 0)"
          slot-scope="props"
        >
          <q-tr>
            <q-td
              key="name_employee"
              class="ellipsis"
              style="background:#c1f4cdd3; padding: 0px;"
              :props="props.props"
              v-row-color="{
                val: props.visibleColumns,
                oldColor: '#c1f4cdd3',
                newColor: '#fff'
              }"
            >
              <q-item style="padding: 0px;">
                <q-item-section avatar class="q-pa-sm bg-white">
                  <q-btn-dropdown
                    split
                    outline
                    rounded
                    icon="view_list"
                    color="red"
                  >
                    <q-list>
                      <q-item
                        @click="
                          gotoEmployeeFormHandler(
                            props.props.row,
                            'formulir-karyawan-detail'
                          )
                        "
                        clickable
                        v-close-popup
                      >
                        <q-item-section avatar>
                          <q-avatar
                            icon="filter_none"
                            color="primary"
                            text-color="white"
                          />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Lihat</q-item-label>
                          <q-item-label caption>detail informasi</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item
                        @click="
                          gotoEmployeeFormHandler(
                            props.props.row,
                            'formulir-karyawan'
                          )
                        "
                        clickable
                        v-close-popup
                      >
                        <q-item-section avatar>
                          <q-avatar
                            icon="create"
                            color="red"
                            text-color="white"
                          />
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
                  >{{ props.props.row.name_employee }}</q-item-section
                >
              </q-item>
            </q-td>
            <q-td key="position_employee" :props="props.props">
              <q-btn
                flat
                v-if="get_credentials.role == 0"
                class="text-deep-purple-10"
                @click="gotoEmployeeRoleHandler(props.props.row)"
                style="color:green; text-weight:normal;"
                no-caps
              >
                {{ props.props.row.position_employee | position }}
                <q-badge align="top" color="orange" floating>edit</q-badge>
              </q-btn>
              <span v-else>{{
                props.props.row.position_employee | position
              }}</span>
            </q-td>
            <q-td key="nik_employee" :props="props.props">{{
              props.props.row.nik_employee
            }}</q-td>
            <q-td key="telpon_employee" :props="props.props">{{
              props.props.row.telpon_employee
            }}</q-td>
            <q-td key="email_employee" :props="props.props">{{
              props.props.row.email_employee
            }}</q-td>
            <q-td
              style="text-transform:capitalize;"
              key="birth_place_employee"
              :props="props.props"
              >{{ props.props.row.birth_place_employee }}</q-td
            >
            <q-td key="birth_date_employee" :props="props.props">{{
              props.props.row.birth_date_employee
            }}</q-td>
            <q-td key="gender_employee" :props="props.props">{{
              props.props.row.gender_employee | gender
            }}</q-td>
            <q-td key="marital_employee" :props="props.props">{{
              props.props.row.marital_employee | marital
            }}</q-td>
            <q-td key="address_employee" :props="props.props">{{
              props.props.row.address_employee
            }}</q-td>
            <q-td key="plain_password_employee" :props="props.props">{{
              props.props.row.plain_password_employee
            }}</q-td>
            <!-- <q-td key="photo_employee" :props="props.props">{{ props.props.row.photo_employee }}</q-td> -->
            <q-td key="photo_employee" :props="props.props">
              <div @click="onZoom(props.props.row.photo_employee)" v-pointer>
                <q-chip
                  :color="props.props.row.photo_employee ? 'green' : 'red'"
                  outline
                >
                  <q-avatar
                    icon="perm_media"
                    :color="props.props.row.photo_employee ? 'green' : 'red'"
                    text-color="white"
                  />
                  {{ props.props.row.photo_employee ? "Ada" : "Tidak Ada" }}
                  <q-tooltip
                    content-style="font-size: 14px"
                    anchor="center left"
                    self="center right"
                    >Klik untuk zoom-in</q-tooltip
                  >
                </q-chip>
              </div>
            </q-td>
            <q-td key="verification_employee" :props="props.props">
              <q-btn
                v-if="get_credentials.role == 0"
                v-text-color="{
                  val: props.props.row.verification_employee,
                  colors: ['red', 'green']
                }"
                flat
                @click="gotoEmployeeRoleHandler(props.props.row)"
                style="text-weight:normal;"
                no-caps
              >
                {{ props.props.row.verification_employee | verification }}
                <q-badge align="top" color="orange" floating>edit</q-badge>
              </q-btn>
              <span v-else>{{
                props.props.row.verification_employee | verification
              }}</span>
            </q-td>
            <q-td key="disable_employee" :props="props.props">
              <q-btn
                v-if="get_credentials.role == 0"
                v-text-color="{
                  val: props.props.row.disable_employee,
                  colors: ['green', 'red']
                }"
                flat
                @click="gotoEmployeeRoleHandler(props.props.row)"
                style="text-weight:normal;"
                no-caps
              >
                {{ props.props.row.disable_employee | disable }}
                <q-badge align="top" color="orange" floating>edit</q-badge>
              </q-btn>
              <span v-else>{{
                props.props.row.disable_employee | disable
              }}</span>
            </q-td>
            <q-td key="created_at" :props="props.props">{{
              props.props.row.created_at
            }}</q-td>
            <q-td key="updated_at" :props="props.props">{{
              props.props.row.updated_at
            }}</q-td>
          </q-tr>
        </template>
        <info-karyawan slot="info" />
      </data-table-karyawan>

      <q-page-sticky
        v-if="get_credentials.role != 0 && isMobileViewport"
        position="bottom-right"
        :offset="get_credentials.role != 1 ? [80, 17] : [18, 18]"
        style="z-index:9"
      >
        <q-btn
          round
          color="primary"
          @click="
            gotoEmployeeFormHandler(
              get_karyawan_biodata_data[0],
              'formulir-karyawan'
            )
          "
          outline
          icon="edit"
          class="bg-white"
          size="lg"
        />
      </q-page-sticky>

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
      store_module: "karyawan_biodata" // lihat modules di store/index.js
    };
  },
  mounted() {
    // console.log("mounted", this.get_karyawan_biodata_data);
    console.log(document.getElementsByClassName("q-table__grid-item-value"));
  },
  methods: {
    /**
     * -------------------------------------------------------------
     * Handler Block
     * -------------------------------------------------------------
     */
    gotoEmployeeRoleHandler(payload) {
      new Promise(resolve => {
        this.set_karyawan_role_edit({
          type: "payload",
          data: payload
        });
        resolve();
      }).then(result => {
        this.$router.push({
          path: "karyawan-role-edit",
          query: {
            role_edit: true,
            column: "uuid",
            search_column: "uuid",
            search_operator: "equal_to",
            search_query_1: payload.uuid
          }
        });
      });
    },
    gotoEmployeeFormHandler(payload, route) {
      // console.log("gotoEmployeeFormHandler", payload);

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

<style scoped>
div.q-table__grid-item-value {
  white-space: nowrap;
  width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
