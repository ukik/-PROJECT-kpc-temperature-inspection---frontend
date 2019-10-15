<template>
  <fragment>
    <!-- <q-toolbar class="text-primary">
      <q-toolbar-title>Aset Equipement</q-toolbar-title>
    </q-toolbar>-->
    <q-page>
      <data-table :_store_module="store_module" _toolbar="true">
        <!-- TITLE -->
        <q-toolbar slot="title" style="padding:0px">
          <q-icon name="font_download" size="lg" />
          <q-toolbar-title>Pengaturan Karyawan</q-toolbar-title>
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
                <q-item-section
                  class="q-pa-md"
                  style="text-align: left;border-left: 1px solid rgba(0, 0, 0, 0.12);border-right: 1px solid rgba(0, 0, 0, 0.12);"
                >{{ props.props.row.name_employee }}</q-item-section>
              </q-item>
            </q-td>
            <!-- <q-td key="uuid" :props="props.props">{{ props.props.row.uuid }}</q-td> -->
            <q-td key="position_employee" :props="props.props">
              <q-btn-dropdown
                split
                rounded
                disable-main-btn
                class="glossy"
                :color="position_color(props.props.row.position_employee)"
                :label="props.props.row.position_employee | position"
              >
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
              </q-btn-dropdown>
            </q-td>
            <!-- <q-td key="nik_employee" :props="props.props">{{ props.props.row.nik_employee }}</q-td> -->

            <q-td key="verification_employee" :props="props.props">
              <q-btn-dropdown
                split
                rounded
                disable-main-btn
                class="glossy"
                :color="verification_color(props.props.row.verification_employee)"
                :label="props.props.row.verification_employee | verification"
              >
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
              </q-btn-dropdown>
            </q-td>
            <q-td key="disable_employee" :props="props.props">
              <q-btn-dropdown
                split
                disable-main-btn
                rounded
                class="glossy"
                :color="disabled_color(props.props.row.disable_employee)"
                :label="props.props.row.disable_employee | disable"
              >
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
              </q-btn-dropdown>
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
      store_module: "karyawan_role_edit" // lihat modules di store/index.js
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
  }
};
</script>