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
          <q-toolbar-title>Inspeksi Temperatur</q-toolbar-title>
        </q-toolbar>

        <!-- ROW -->
        <template slot="row" slot-scope="props">
          <q-tr>
            <q-td
              key="belong_employee.name_employee"
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
                >{{ props.props.row.belong_employee.name_employee }}</q-item-section>
              </q-item>
            </q-td>
            <q-td
              key="belong_library_equipment.name_equipment"
              :props="props.props"
            >{{ props.props.row.belong_library_equipment.name_equipment }}</q-td>

            <!-- <q-td key="uuid" :props="props.props">{{ props.props.row.uuid }}</q-td> -->
            <!-- <q-td key="uuid_tb_employee" :props="props.props">{{ props.props.row.uuid_tb_employee }}</q-td> -->
            <!-- <q-td
              key="uuid_tb_inspection"
              :props="props.props"
            >{{ props.props.row.uuid_tb_inspection }}</q-td>-->
            <!-- <q-td
              key="equipment_inspection"
              :props="props.props"
            >{{ props.props.row.equipment_inspection }}</q-td>-->

            <q-td
              key="belong_library_location.name_location"
              :props="props.props"
            >{{ props.props.row.belong_library_location.name_location }}</q-td>

            <q-td
              key="place_inspection"
              :props="props.props"
            >{{ props.props.row.place_inspection | place}}</q-td>
            <q-td
              key="condition_inspection"
              :props="props.props"
            >{{ props.props.row.condition_inspection }}</q-td>
            <q-td
              key="grease_shoot_inspection"
              :props="props.props"
            >{{ props.props.row.grease_shoot_inspection }}</q-td>
            <q-td
              key="weather_inspection"
              :props="props.props"
            >{{ props.props.row.weather_inspection }}</q-td>
            <q-td
              key="temperature_inspection"
              :props="props.props"
            >{{ props.props.row.temperature_inspection }}</q-td>
            <q-td key="rain_inspection" :props="props.props">{{ props.props.row.rain_inspection }}</q-td>
            <q-td
              key="current_upnormal_inspection"
              :props="props.props"
            >{{ props.props.row.current_upnormal_inspection }}</q-td>
            <q-td
              key="last_upnormal_inspection"
              :props="props.props"
            >{{ props.props.row.last_upnormal_inspection }}</q-td>

            <q-td key="screenshoot_inspection" :props="props.props">
              <div @click="onZoom()" v-pointer>
                <q-chip :color="props.props.row.screenshoot_inspection ? 'green' : 'red'" outline>
                  <q-avatar
                    icon="perm_media"
                    :color="props.props.row.screenshoot_inspection ? 'green' : 'red'"
                    text-color="white"
                  />
                  {{ props.props.row.screenshoot_inspection ? 'Ada' : 'Tidak Ada' }}
                  <q-tooltip
                    content-style="font-size: 14px"
                    anchor="center left"
                    self="center right"
                  >Klik untuk zoom-in</q-tooltip>
                </q-chip>
              </div>
              <!-- <q-popup-edit v-model=" props.props.row.name_location">
                <q-input
                  label="Nama Equipement"
                  ref="name_location"
                  stack-label
                  debounce="250"
                  v-model.lazy="props.props.row.name_location"
                  @input="onUpdate($event, 'name_location', props.props.row.__index)"
                  @keypress.enter="onEnter('name_location')"
                  maxlength="50"
                  autofocus
                  counter
                  hint="ENTER"
                  :rules="[val => !!val || 'Tidak boleh kosong']"
                />
              </q-popup-edit>-->
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
      store_module: "inspeksi_temperatur" // lihat modules di store/index.js
      // url: null,
      // toolbar: false,
    };
  },
  mounted() {
    // this.onZoom();
  },
  methods: {
    // toggle() {
    //   this.url =
    //     this.url === null
    //       ? "https://community.openenergymonitor.org/uploads/default/original/2X/3/3fc1bd5759825d0a69cc61238cc1cd1dd2604130.png"
    //       : null;
    //   this.toolbar = true;
    // }
  },
  computed: {}
};
</script>