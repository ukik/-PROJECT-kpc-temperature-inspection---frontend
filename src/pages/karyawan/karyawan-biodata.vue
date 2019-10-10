<template>
  <fragment>
    <!-- <q-toolbar class="text-primary">
      <q-toolbar-title>Aset Equipement</q-toolbar-title>
    </q-toolbar>-->
    <q-page>
      <data-table :_store_module="store_module">
        <!-- TITLE -->
        <q-toolbar slot="title" style="padding:0px">
          <q-icon name="font_download" size="lg" />
          <q-toolbar-title>Biodata Karyawan</q-toolbar-title>
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
                          <q-icon name="info" color="amber" />
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
                          <q-icon name="info" color="amber" />
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-close-popup>
                        <q-item-section avatar>
                          <q-avatar
                            icon="assignment_turned_in"
                            color="secondary"
                            text-color="white"
                          />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Validasi</q-item-label>
                          <q-item-label caption>mengunci data</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-icon name="info" color="amber" />
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </q-item-section>
                <q-item-section
                  class="q-pa-md"
                  style="text-align: left;border-left: 1px solid rgba(0, 0, 0, 0.12);border-right: 1px solid rgba(0, 0, 0, 0.12);"
                >{{ props.props.row.name_employee }}</q-item-section>
              </q-item>
            </q-td>
            <q-td key="position_employee" :props="props.props">
              <q-btn
                flat
                class="text-deep-purple-10"
                :to="route_employee_role(props.props.row)"
                style="color:green; text-weight:normal;"
                no-caps
              >
                {{ props.props.row.position_employee | position}}
                <q-badge align="top" color="orange" floating>edit</q-badge>
              </q-btn>
            </q-td>
            <q-td key="nik_employee" :props="props.props">{{ props.props.row.nik_employee }}</q-td>
            <q-td key="telpon_employee" :props="props.props">{{ props.props.row.telpon_employee }}</q-td>
            <q-td key="email_employee" :props="props.props">{{ props.props.row.email_employee }}</q-td>
            <q-td
              style="text-transform:capitalize;"
              key="birth_place_employee"
              :props="props.props"
            >{{ props.props.row.birth_place_employee }}</q-td>
            <q-td
              key="birth_date_employee"
              :props="props.props"
            >{{ props.props.row.birth_date_employee }}</q-td>
            <q-td
              key="gender_employee"
              :props="props.props"
            >{{ props.props.row.gender_employee | gender }}</q-td>
            <q-td
              key="marital_employee"
              :props="props.props"
            >{{ props.props.row.marital_employee | marital }}</q-td>
            <q-td key="address_employee" :props="props.props">{{ props.props.row.address_employee }}</q-td>
            <q-td
              key="plain_password_employee"
              :props="props.props"
            >{{ props.props.row.plain_password_employee }}</q-td>
            <q-td key="photo_employee" :props="props.props">{{ props.props.row.photo_employee }}</q-td>
            <q-td key="verification_employee" :props="props.props">
              <q-btn
                v-text-color="{val:props.props.row.verification_employee, colors:['green','red']}"
                flat
                :to="route_employee_role(props.props.row)"
                style="text-weight:normal;"
                no-caps
              >
                {{ props.props.row.verification_employee | verification }}
                <q-badge align="top" color="orange" floating>edit</q-badge>
              </q-btn>
            </q-td>
            <q-td key="disable_employee" :props="props.props">
              <q-btn
                v-text-color="{val:props.props.row.disable_employee, colors:['red','green']}"
                flat
                :to="route_employee_role(props.props.row)"
                style="text-weight:normal;"
                no-caps
              >
                {{ props.props.row.disable_employee | disable }}
                <q-badge align="top" color="orange" floating>edit</q-badge>
              </q-btn>
            </q-td>
            <q-td key="created_at" :props="props.props">{{ props.props.row.created_at }}</q-td>
            <q-td key="updated_at" :props="props.props">{{ props.props.row.updated_at }}</q-td>
          </q-tr>
        </template>
      </data-table>
    </q-page>
  </fragment>
</template>

<script>
export default {
  data() {
    return {
      store_module: "karyawan_biodata" // lihat modules di store/index.js
    };
  },
  computed: {
    route_employee_role() {
      return function(payload) {
        return {
          path: "karyawan-role-edit",
          query: {
            column: "uuid",
            search_column: "uuid",
            search_operator: "equal_to",
            search_query_1: payload.uuid
          }
        };
      };
    }
  }
};
</script>