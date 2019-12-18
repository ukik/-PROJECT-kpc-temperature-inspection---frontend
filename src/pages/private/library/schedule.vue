<template>
  <fragment>
    <q-page>
      <data-table-library :_store_module="store_module" :_visibleColumnStatus="false">
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
          <q-toolbar-title>Daftar Shift</q-toolbar-title>
        </q-toolbar>

        <!-- ROW -->
        <template slot="row" slot-scope="props">
          <q-tr>
            <q-td key="no" :props="props.props">
              <q-avatar color="red" text-color="white" size="md">
                <span style="font-size: 14px;">{{ props.props.row.no }}</span>
              </q-avatar>
            </q-td>
            <q-td
              key="label_schedule"
              :props="props.props"
            >{{ props.props.row.label_schedule | upper }}</q-td>
            <q-td key="starttime_schedule" :props="props.props">
              <q-chip v-pointer color="teal" text-color="white" icon="edit" style="width:auto">
                {{ props.props.row.starttime_schedule ? props.props.row.starttime_schedule : data_row('starttime_schedule', props.props.row.__index) }}
                <q-tooltip
                  v-if="!isMobileViewport"
                  content-style="font-size: 14px"
                  anchor="center left"
                  self="center right"
                >Klik untuk edit</q-tooltip>

                <q-popup-edit
                  :persistent="false"
                  anchor="bottom middle"
                  self="bottom left"
                  content-style="width:250px"
                  v-model="props.props.row.starttime_schedule"
                  @save="onUpdateHandler('starttime_schedule', props.props.row, 'spinner_starttime_schedule' + props.props.row.__index)"
                >
                  <template v-slot="{ initialValue, value, emitValue, validate, set, cancel }">
                    <q-input
                      ref="starttime_schedule"
                      stack-label
                      debounce="250"
                      v-model.lazy="props.props.row.starttime_schedule"
                      maxlength="50"
                      autofocus
                      counter
                      :hint="'masuk: '+props.props.row.label_schedule | capitalize"
                      readonly
                      :rules="[val => !!val || 'Tidak boleh kosong', val => validate(value) || 'More than 5 chars required']"
                      :loading="false"
                    >
                      <template v-slot:prepend>
                        <q-btn flat dense size="18px" icon="timer">
                          <q-tooltip
                            v-if="!isMobileViewport"
                            content-style="font-size: 14px"
                            anchor="top middle"
                            self="bottom middle"
                            :offset="[10, 10]"
                          >Atur ulang</q-tooltip>

                          <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time
                              v-model="props.props.row.starttime_schedule"
                              @input="() => $refs.qDateProxy.hide()"
                            />
                          </q-popup-proxy>
                        </q-btn>
                      </template>

                      <q-btn
                        flat
                        dense
                        size="18px"
                        color="negative"
                        icon="cancel"
                        @click.stop="cancel"
                      >
                        <q-tooltip
                          v-if="!isMobileViewport"
                          content-style="font-size: 14px"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                        >Batal</q-tooltip>
                      </q-btn>

                      <q-btn
                        flat
                        dense
                        size="18px"
                        color="positive"
                        icon="save"
                        @click.stop="set"
                        :disable="validate(value) === false || initialValue === value"
                      >
                        <q-tooltip
                          v-if="!isMobileViewport"
                          content-style="font-size: 14px"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                        >Simpan Perubahan</q-tooltip>
                      </q-btn>
                    </q-input>
                  </template>
                </q-popup-edit>
              </q-chip>

              <inner-loading
                :ref="'spinner_starttime_schedule'+props.props.row.__index"
                :_visible="false"
              />
            </q-td>

            <q-td key="endtime_schedule" :props="props.props">
              <q-chip v-pointer color="teal" text-color="white" icon="edit" style="width:auto">
                {{ props.props.row.endtime_schedule ? props.props.row.endtime_schedule : data_row('endtime_schedule', props.props.row.__index) }}
                <q-tooltip
                  v-if="!isMobileViewport"
                  content-style="font-size: 14px"
                  anchor="center left"
                  self="center right"
                >Klik untuk edit</q-tooltip>

                <q-popup-edit
                  :persistent="false"
                  anchor="bottom middle"
                  self="bottom left"
                  content-style="width:250px"
                  v-model="props.props.row.endtime_schedule"
                  @save="onUpdateHandler('endtime_schedule', props.props.row, 'spinner_endtime_schedule' + props.props.row.__index)"
                >
                  <template v-slot="{ initialValue, value, emitValue, validate, set, cancel }">
                    <q-input
                      ref="endtime_schedule"
                      stack-label
                      debounce="250"
                      v-model.lazy="props.props.row.endtime_schedule"
                      maxlength="50"
                      autofocus
                      counter
                      :hint="'keluar: '+props.props.row.label_schedule | capitalize"
                      readonly
                      :rules="[val => !!val || 'Tidak boleh kosong', val => validate(value) || 'More than 5 chars required']"
                      :loading="false"
                    >
                      <template v-slot:prepend>
                        <q-btn flat dense size="18px" icon="timer">
                          <q-tooltip
                            v-if="!isMobileViewport"
                            content-style="font-size: 14px"
                            anchor="top middle"
                            self="bottom middle"
                            :offset="[10, 10]"
                          >Atur ulang</q-tooltip>

                          <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-time
                              v-model="props.props.row.endtime_schedule"
                              @input="() => $refs.qDateProxy.hide()"
                            />
                          </q-popup-proxy>
                        </q-btn>
                      </template>

                      <q-btn
                        flat
                        dense
                        size="18px"
                        color="negative"
                        icon="cancel"
                        @click.stop="cancel"
                      >
                        <q-tooltip
                          v-if="!isMobileViewport"
                          content-style="font-size: 14px"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                        >Batal</q-tooltip>
                      </q-btn>

                      <q-btn
                        flat
                        dense
                        size="18px"
                        color="positive"
                        icon="save"
                        @click.stop="set"
                        :disable="validate(value) === false || initialValue === value"
                      >
                        <q-tooltip
                          v-if="!isMobileViewport"
                          content-style="font-size: 14px"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                        >Simpan Perubahan</q-tooltip>
                      </q-btn>
                    </q-input>
                  </template>
                </q-popup-edit>
              </q-chip>

              <inner-loading
                :ref="'spinner_endtime_schedule'+props.props.row.__index"
                :_visible="false"
              />
            </q-td>
            <q-td key="created_at" :props="props.props">{{ props.props.row.created_at }}</q-td>
            <q-td key="updated_at" :props="props.props">{{ props.props.row.updated_at }}</q-td>
          </q-tr>
        </template>
        <info-library-schedule slot="info" />
      </data-table-library>

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
      store_module: "aset_schedule", // lihat modules di store/index.js
      default_data: {
        // ini adalah data static yang digunakan untuk reset jika inline edit diisi null
        init: false,
        data: []
      }
    };
  },
  computed: {
    data_row: function() {
      // inline edit
      const vm = this;
      return function(key, __index) {
        const array = this.default_data;
        for (let index = 0; index < array.length; index++) {
          if (index == __index) {
            const element = array[index];

            return element[key];
          }
        }
      };
    }
  },
  mounted() {
    this.default_data = this.get_aset_schedule_data;
  },
  methods: {
    /**
     * -------------------------------------------------------------
     * Handler Block
     * -------------------------------------------------------------
     */
    onUpdateHandler(key, payload, spinner) {
      const vm = this;

      vm.$refs[key].validate();
      if (vm.$refs[key].hasError) {
        if (!vm.error) {
          vm.error = true;
          vm.$q.notify({
            color: "warning",
            message: "Peringatan! Data update tidak boleh kosong"
          });
        }
        // this.formHasError = true;

        return;
      }
      vm.error = false;

      vm.requestAxios(payload, spinner);

      // alert("ENTER", this.$refs[key].value);
    },

    /**
     * -------------------------------------------------------------
     * Axios Block
     * -------------------------------------------------------------
     */
    requestAxios: _.debounce(function(payload, spinner) {
      const vm = this;

      vm.$refs[spinner]._data.visible = true;

      // console.log(payload);

      vm.$axios
        .put("/api/v1/library/schedule", payload)
        .then(function(response) {
          // console.log("response", response.data.payload);

          vm.$refs[spinner]._data.visible = false;

          vm.set_aset_schedule({
            type: "replace",
            data: response.data.payload
          });
        })
        .catch(function(error) {
          vm.$refs[spinner]._data.visible = false;
        });
    }, 250)
  }
};
</script>