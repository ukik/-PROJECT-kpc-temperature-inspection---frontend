<template>
  <fragment>
    <!-- <q-page> -->
    <data-table-panel-valid-inspeksi :_store_module="store_module">
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
        <q-toolbar-title>
          <q-item-section>
            <q-item-label>Inspeksi Temperatur</q-item-label>
            <q-item-label caption>Sudah Divalidasi</q-item-label>
          </q-item-section>
        </q-toolbar-title>
      </q-toolbar>

      <!-- MOBILE GRID -->
      <template
        slot="mobile-grid"
        slot-scope="props"
        v-if="isMobileViewport && get_inspeksi_temperatur_panel_valid_grid"
      >
        <transition name="fade">
          <q-card
            key="grid"
            class="q-ma-sm"
            style="border: 1px #0043ff57 solid;box-shadow:none !important"
          >
            <q-card-section>
              <q-item style="padding: 0px;">
                <q-item-section avatar class="bg-white">
                  <q-btn-dropdown
                    v-if="props.props.row.valid_inspection == 'true'"
                    no-caps
                    split
                    outline
                    rounded
                    :color="props.props.row.valid_inspection == 'true' ? 'green':'red'"
                    :icon="props.props.row.valid_inspection == 'true' ? 'lock':'lock_open'"
                  >
                    <q-list>
                      <q-item
                        @click="gotoTemperaturFormHandler(props.props.row, 'formulir-inspeksi-detail')"
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
                    </q-list>
                  </q-btn-dropdown>

                  <q-btn-dropdown
                    v-else
                    no-caps
                    split
                    outline
                    rounded
                    :color="props.props.row.valid_inspection == 'true' ? 'green':'red'"
                    :icon="props.props.row.valid_inspection == 'true' ? 'lock':'lock_open'"
                  >
                    <q-list>
                      <q-item
                        @click="gotoTemperaturFormHandler(props.props.row, 'formulir-inspeksi-detail')"
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
                        @click="gotoTemperaturFormHandler(props.props.row, 'formulir-inspeksi')"
                        clickable
                        v-close-popup
                      >
                        <q-item-section avatar>
                          <q-avatar icon="edit" color="orange" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Ubah</q-item-label>
                          <q-item-label caption>modifikasi ulang</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item
                        @click="actionVuex('delete', props.props.row)"
                        clickable
                        v-close-popup
                      >
                        <q-item-section avatar>
                          <q-avatar icon="delete_forever" color="red" text-color="white" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Hapus</q-item-label>
                          <q-item-label caption>hilang permanen</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item
                        v-if="get_credentials.role == 0"
                        @click="actionVuex('validate', props.props.row)"
                        clickable
                        v-close-popup
                      >
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
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </q-item-section>
                <q-item-section
                  class="q-pa-md"
                  style="text-align: left;border-left: 0px solid rgba(0, 0, 0, 0.12);"
                >
                  <span>
                    <!-- {{ props.props.row.name_employee | capitalize }} -->
                    <inner-loading
                      :ref="'spinner_name_employee_'+props.props.row.__index"
                      :_visible="false"
                    />
                  </span>
                </q-item-section>
              </q-item>
            </q-card-section>
            <q-card-section>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title row">Nama</div>
                <div
                  class="q-table__grid-item-value row"
                >{{ props.props.row.name_employee | capitalize }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title row">Dibuat</div>
                <div class="q-table__grid-item-value row">{{ props.props.row.created_at }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title row">Divalidasi</div>
                <div class="q-table__grid-item-value row">{{ props.props.row.updated_at }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Nama Alat</div>
                <div
                  class="q-table__grid-item-value"
                >{{ props.props.row.name_equipment | capitalize }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Lokasi</div>
                <div
                  class="q-table__grid-item-value"
                >{{ props.props.row.name_location | capitalize }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Letak</div>
                <div
                  class="q-table__grid-item-value"
                >{{ props.props.row.place_inspection | capitalize}}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Kondisi</div>
                <div
                  class="q-table__grid-item-value"
                >{{ props.props.row.condition_inspection | capitalize }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Grease Shoot</div>
                <div class="q-table__grid-item-value">{{ props.props.row.grease_shoot_inspection }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Cuaca</div>
                <div
                  class="q-table__grid-item-value"
                >{{ props.props.row.weather_inspection | capitalize }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Temperatur</div>
                <div class="q-table__grid-item-value">{{ props.props.row.temperature_inspection }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Curah Hujan</div>
                <div class="q-table__grid-item-value">{{ props.props.row.rain_inspection }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Upnormal Sekarang</div>
                <div
                  class="q-table__grid-item-value"
                >{{ props.props.row.current_upnormal_inspection | capitalize }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Deskripsi Upnormal Sekarang</div>
                <div
                  class="q-table__grid-item-value"
                >{{ props.props.row.current_upnormal_description_inspection == null ? "..." : props.props.row.current_upnormal_description_inspection }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Upnormal Sebelumnya</div>
                <div
                  class="q-table__grid-item-value"
                >{{ props.props.row.last_upnormal_inspection | capitalize }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Deskripsi Upnormal Sebelumnya</div>
                <div
                  class="q-table__grid-item-value"
                >{{ props.props.row.last_upnormal_description_inspection == null ? "..." : props.props.row.last_upnormal_description_inspection }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Label Jadwal</div>
                <div
                  class="q-table__grid-item-value"
                >{{ props.props.row.label_schedule | capitalize }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Waktu Masuk</div>
                <div class="q-table__grid-item-value">{{ props.props.row.starttime_schedule }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Waktu Keluar</div>
                <div class="q-table__grid-item-value">{{ props.props.row.endtime_schedule }}</div>
              </div>
              <div class="q-table__grid-item-row">
                <div class="q-table__grid-item-title">Valid</div>
                <div
                  class="q-table__grid-item-value"
                >{{ props.props.row.valid_inspection | yes_or_no }}</div>
              </div>
            </q-card-section>
          </q-card>
        </transition>
      </template>

      <!-- MOBLE ROW -->
      <template
        slot="mobile-row"
        slot-scope="props"
        v-if="isMobileViewport && !get_inspeksi_temperatur_panel_valid_grid"
      >
        <q-tr style="border-top: 1px solid rgba(0, 0, 0, 0.12);">
          <q-td
            key="name_employee"
            class="ellipsis"
            style="background:#c1f4cdd3; padding: 0px;"
            :props="props.props"
            v-row-color="{val: props.visibleColumns, oldColor: '#c1f4cdd3', newColor: '#fff'}"
          >
            <q-item style="padding: 0px;">
              <q-item-section avatar class="q-pa-sm bg-white">
                <q-btn-dropdown
                  v-if="props.props.row.valid_inspection == 'true'"
                  no-caps
                  split
                  outline
                  rounded
                  :color="props.props.row.valid_inspection == 'true' ? 'green':'red'"
                  :icon="props.props.row.valid_inspection == 'true' ? 'lock':'lock_open'"
                >
                  <q-list>
                    <q-item
                      @click="gotoTemperaturFormHandler(props.props.row, 'formulir-inspeksi-detail')"
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
                  </q-list>
                </q-btn-dropdown>

                <q-btn-dropdown
                  v-else
                  no-caps
                  split
                  outline
                  rounded
                  :color="props.props.row.valid_inspection == 'true' ? 'green':'red'"
                  :icon="props.props.row.valid_inspection == 'true' ? 'lock':'lock_open'"
                >
                  <q-list>
                    <q-item
                      @click="gotoTemperaturFormHandler(props.props.row, 'formulir-inspeksi-detail')"
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
                      @click="gotoTemperaturFormHandler(props.props.row, 'formulir-inspeksi')"
                      clickable
                      v-close-popup
                    >
                      <q-item-section avatar>
                        <q-avatar icon="edit" color="orange" text-color="white" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Ubah</q-item-label>
                        <q-item-label caption>modifikasi ulang</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item @click="actionVuex('delete', props.props.row)" clickable v-close-popup>
                      <q-item-section avatar>
                        <q-avatar icon="delete_forever" color="red" text-color="white" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Hapus</q-item-label>
                        <q-item-label caption>hilang permanen</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item
                      v-if="get_credentials.role == 0"
                      @click="actionVuex('validate', props.props.row)"
                      clickable
                      v-close-popup
                    >
                      <q-item-section avatar>
                        <q-avatar icon="assignment_turned_in" color="secondary" text-color="white" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Validasi</q-item-label>
                        <q-item-label caption>mengunci data</q-item-label>
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
                  {{ props.props.row.name_employee | capitalize }}
                  <q-btn
                    dense
                    round
                    flat
                    @click="expandArray[props.props.row.__index] = !expandArray[props.props.row.__index]; onExpandHandler(props.props.row)"
                  >
                    <q-icon :id="'icon'+props.props.row.__index" name="arrow_drop_down" />
                  </q-btn>
                  <inner-loading
                    :ref="'spinner_name_employee_'+props.props.row.__index"
                    :_visible="false"
                  />
                </span>
              </q-item-section>
            </q-item>
          </q-td>

          <q-td
            key="created_at"
            :props="props.props"
            class="text-bold"
          >{{ props.props.row.created_at }}</q-td>
          <q-td
            key="updated_at"
            :props="props.props"
            class="text-bold text-primary"
          >{{ props.props.row.updated_at }}</q-td>

          <q-td key="uuid" :props="props.props">{{ props.props.row.uuid }}</q-td>
          <q-td key="uuid_tb_employee" :props="props.props">{{ props.props.row.uuid_tb_employee }}</q-td>
          <q-td key="uuid_tb_equipment" :props="props.props">{{ props.props.row.uuid_tb_equipment }}</q-td>
          <q-td key="uuid_tb_schedule" :props="props.props">{{ props.props.row.uuid_tb_schedule }}</q-td>

          <q-td
            key="name_equipment"
            :props="props.props"
          >{{ props.props.row.name_equipment | capitalize }}</q-td>

          <q-td
            key="name_location"
            :props="props.props"
          >{{ props.props.row.name_location | capitalize }}</q-td>

          <q-td
            key="place_inspection"
            :props="props.props"
          >{{ props.props.row.place_inspection | capitalize}}</q-td>
          <q-td
            key="condition_inspection"
            :props="props.props"
          >{{ props.props.row.condition_inspection | capitalize }}</q-td>
          <q-td
            key="grease_shoot_inspection"
            :props="props.props"
          >{{ props.props.row.grease_shoot_inspection }}</q-td>
          <q-td
            key="weather_inspection"
            :props="props.props"
          >{{ props.props.row.weather_inspection | capitalize }}</q-td>
          <q-td
            key="temperature_inspection"
            :props="props.props"
          >{{ props.props.row.temperature_inspection }}</q-td>
          <q-td key="rain_inspection" :props="props.props">{{ props.props.row.rain_inspection }}</q-td>
        </q-tr>

        <q-tr :id="'expand'+props.props.row.__index" :ref="'expand'+props.props.row.__index"></q-tr>
      </template>

      <!-- DESKTOP -->
      <template slot="desktop" slot-scope="props" v-if="!isMobileViewport">
        <q-tr style="border-top: 1px solid rgba(0, 0, 0, 0.12);">
          <q-td
            key="name_employee"
            class="ellipsis"
            style="background:#c1f4cdd3; padding: 0px;"
            :props="props.props"
            v-row-color="{val: props.visibleColumns, oldColor: '#c1f4cdd3', newColor: '#fff'}"
          >
            <q-item style="padding: 0px;">
              <q-item-section avatar class="q-pa-sm bg-white">
                <q-btn-dropdown
                  v-if="props.props.row.valid_inspection == 'true'"
                  no-caps
                  split
                  outline
                  rounded
                  :color="props.props.row.valid_inspection == 'true' ? 'green':'red'"
                  :icon="props.props.row.valid_inspection == 'true' ? 'lock':'lock_open'"
                >
                  <q-list>
                    <q-item
                      @click="gotoTemperaturFormHandler(props.props.row, 'formulir-inspeksi-detail')"
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
                  </q-list>
                </q-btn-dropdown>

                <q-btn-dropdown
                  v-else
                  no-caps
                  split
                  outline
                  rounded
                  :color="props.props.row.valid_inspection == 'true' ? 'green':'red'"
                  :icon="props.props.row.valid_inspection == 'true' ? 'lock':'lock_open'"
                >
                  <q-list>
                    <q-item
                      @click="gotoTemperaturFormHandler(props.props.row, 'formulir-inspeksi-detail')"
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
                      @click="gotoTemperaturFormHandler(props.props.row, 'formulir-inspeksi')"
                      clickable
                      v-close-popup
                    >
                      <q-item-section avatar>
                        <q-avatar icon="edit" color="orange" text-color="white" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Ubah</q-item-label>
                        <q-item-label caption>modifikasi ulang</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item @click="actionVuex('delete', props.props.row)" clickable v-close-popup>
                      <q-item-section avatar>
                        <q-avatar icon="delete_forever" color="red" text-color="white" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Hapus</q-item-label>
                        <q-item-label caption>hilang permanen</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item
                      v-if="get_credentials.role == 0"
                      @click="actionVuex('validate', props.props.row)"
                      clickable
                      v-close-popup
                    >
                      <q-item-section avatar>
                        <q-avatar icon="assignment_turned_in" color="secondary" text-color="white" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Validasi</q-item-label>
                        <q-item-label caption>mengunci data</q-item-label>
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
                  {{ props.props.row.name_employee | capitalize }}
                  <q-btn
                    dense
                    round
                    flat
                    @click="expandArray[props.props.row.__index] = !expandArray[props.props.row.__index]; onExpandHandler(props.props.row)"
                  >
                    <q-icon :id="'icon'+props.props.row.__index" name="arrow_drop_down" />
                  </q-btn>
                  <inner-loading
                    :ref="'spinner_name_employee_'+props.props.row.__index"
                    :_visible="false"
                  />
                </span>
              </q-item-section>
            </q-item>
          </q-td>

          <q-td
            key="created_at"
            :props="props.props"
            class="text-bold"
          >{{ props.props.row.created_at }}</q-td>
          <q-td
            key="updated_at"
            :props="props.props"
            class="text-bold text-primary"
          >{{ props.props.row.updated_at }}</q-td>

          <q-td key="uuid" :props="props.props">{{ props.props.row.uuid }}</q-td>
          <q-td key="uuid_tb_employee" :props="props.props">{{ props.props.row.uuid_tb_employee }}</q-td>
          <q-td key="uuid_tb_equipment" :props="props.props">{{ props.props.row.uuid_tb_equipment }}</q-td>
          <q-td key="uuid_tb_schedule" :props="props.props">{{ props.props.row.uuid_tb_schedule }}</q-td>

          <q-td
            key="name_equipment"
            :props="props.props"
          >{{ props.props.row.name_equipment | capitalize }}</q-td>

          <q-td
            key="name_location"
            :props="props.props"
          >{{ props.props.row.name_location | capitalize }}</q-td>

          <q-td
            key="place_inspection"
            :props="props.props"
          >{{ props.props.row.place_inspection | capitalize}}</q-td>
          <q-td
            key="condition_inspection"
            :props="props.props"
          >{{ props.props.row.condition_inspection | capitalize }}</q-td>
          <q-td
            key="grease_shoot_inspection"
            :props="props.props"
          >{{ props.props.row.grease_shoot_inspection }}</q-td>
          <q-td
            key="weather_inspection"
            :props="props.props"
          >{{ props.props.row.weather_inspection | capitalize }}</q-td>
          <q-td
            key="temperature_inspection"
            :props="props.props"
          >{{ props.props.row.temperature_inspection }}</q-td>
          <q-td key="rain_inspection" :props="props.props">{{ props.props.row.rain_inspection }}</q-td>
        </q-tr>

        <q-tr :id="'expand'+props.props.row.__index" :ref="'expand'+props.props.row.__index"></q-tr>
      </template>

      <!-- place QPageScroller at end of page -->
      <scroll-to-top />
    </data-table-panel-valid-inspeksi>

    <!-- <q-page-sticky
      v-if="get_credentials.role != 0"
      position="bottom-right"
      :offset="[18, 18]"
      style="z-index:9"
    >
      <q-btn
        round
        color="primary"
        @click="onGridHandler"
        outline
        :icon="get_inspeksi_temperatur_panel_valid_grid ? 'view_module' : 'view_list'"
        class="bg-white"
        size="lg"
      />
    </q-page-sticky>-->

    <!-- </q-page> -->
  </fragment>
</template>

<script>
import role_auth from "../../../helpers/role_auth";

export default {
  mixins: [role_auth],
  data() {
    return {
      expandArray: [],
      store_module: "inspeksi_temperatur_panel_valid" // lihat modules di store/index.js
    };
  },

  methods: {
    /**
     * -------------------------------------------------------------
     * Handler Block
     * -------------------------------------------------------------
     */
    // onGridHandler() {
    //   this.set_inspeksi_temperatur_panel_valid({
    //     type: "grid"
    //   });
    // },
    onExpandHandler(val) {
      switch (document.querySelector("#icon" + val.__index).innerHTML) {
        case "arrow_drop_up":
          document.querySelector("#icon" + val.__index).innerHTML =
            "arrow_drop_down";
          break;
        case "arrow_drop_down":
          document.querySelector("#icon" + val.__index).innerHTML =
            "arrow_drop_up";
          break;
      }

      if (this.expandArray[val.__index]) {
        let descriptionArray = [];
        if (val.current_upnormal_description_inspection)
          descriptionArray.push({
            label: "Deskripsi Upnormal Saat Mengisi",
            val: val.current_upnormal_description_inspection
          });
        if (val.last_upnormal_description_inspection)
          descriptionArray.push({
            label: "Deskripsi Upnormal Sebelumnya",
            val: val.last_upnormal_description_inspection
          });
        if (val.common_description_inspection)
          descriptionArray.push({
            label: "Deskripsi Tambahan",
            val: val.common_description_inspection
          });

        let elementHTML = `<td colspan=100>
            <span style="font-size:14px">Jadwal: <b>${this.getCapitalize(
              val.label_schedule
            )} </b>(${val.starttime_schedule} - ${
          val.endtime_schedule
        })</span><br>
        `;

        for (let i = 0; i < descriptionArray.length; i++) {
          elementHTML += `
            <div class="q-avatar q-ma-sm" style="font-size: 32px;">
              <div class="q-avatar__content row flex-center overflow-hidden bg-red text-white q-chip--colored">
                <span style="font-size: 14px;">${i + 1}</span>
              </div>
            </div>
            <div style="display: inline-table;">
            <span style="font-size: 14px;"><b>${
              descriptionArray[i].label
            }</b></span><br>
            <span style="font-size: 14px;">${descriptionArray[i].val}</span>
            </div>
          <br>`;
        }

        elementHTML += "</td>";

        document.getElementById("expand" + val.__index).innerHTML = elementHTML;
      } else {
        document.getElementById("expand" + val.__index).innerHTML = ``;
      }
    },
    gotoTemperaturFormHandler(payload, route) {
      // console.log(typeof payload.valid_inspection);

      // WAJIB
      // digunakan laravel Model untuk menentukan cluster table
      const pagination = this["get_inspeksi_temperatur_panel_valid_pagination"];
      // console.log(pagination);

      let payloadObject = {
        ...payload
      };
      payloadObject["year"] = pagination.year;
      payloadObject["month"] = pagination.month;

      // hapus sisa detail
      this.set_formulir_inspeksi({
        data: null,
        type: "empty_form"
      });

      // hapus sisa detail
      this.set_formulir_inspeksi_new({
        data: null,
        type: "empty_form"
      });

      new Promise(resolve => {
        this.set_formulir_inspeksi({
          type: "update_form",
          data: payloadObject
        });
        resolve();
      }).then(result => {
        this.$router.push({
          path: route,
          query: {
            // dynamic props
            routeProps: {
              origin: "valid",
              valid_inspection:
                payload.valid_inspection == "true" ? true : false // set di target component props ['valid']
            }
          }
        });
      });
    },

    /**
     * -------------------------------------------------------------
     * Vuex Block
     * -------------------------------------------------------------
     */

    actionVuex(key, payload) {
      payload["action"] = key;
      switch (key) {
        // case "renewal":
        //   // alert("renewal");
        //   this.requestAxios({
        //     url: "/api/v1/mutation/inspection?",
        //     method: "post",
        //     payload: payload
        //   });
        //   break;
        case "delete":
          // alert("delete");
          this.requestAxios({
            url: "/api/v1/mutation/inspection?",
            method: "delete",
            payload: payload
          });
          break;
        case "validate":
          this.requestAxios({
            url: "/api/v1/mutation/inspection?",
            method: "put",
            payload: payload
          });
          // alert("validate")
          break;
      }
    },

    /**
     * -------------------------------------------------------------
     * Axios Block
     * -------------------------------------------------------------
     */
    requestAxios: _.debounce(function(params) {
      const { url, method, payload } = params;

      // console.log("inspeksi-temperature", this["get_inspeksi_temperatur_pagination"], payload);

      const vm = this;

      const spinner = vm.$refs["spinner_name_employee_" + payload.__index];
      // console.log(spinner);

      if (spinner == undefined) return;

      spinner.visible = true;

      // WAJIB
      // digunakan laravel Model untuk menentukan cluster table
      const pagination = vm["get_inspeksi_temperatur_panel_valid_pagination"];

      vm.$axios[method](
        url + `year=${pagination.year}&month=${pagination.month}`,
        payload
      )
        .then(function(response) {
          // console.log("response", response.data.payload);

          spinner.visible = false;

          vm.set_inspeksi_temperatur_panel_valid({
            type: "replace",
            data: response.data.payload
          });
        })
        .catch(function(error) {
          spinner.visible = false;
        });
    }, 250)
  }
};
</script>

<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>