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
          <q-toolbar-title>Daftar Alat</q-toolbar-title>
        </q-toolbar>

        <!-- ROW -->
        <template slot="row" slot-scope="props">
          <q-tr>
            <q-td key="no" :props="props.props">
              <q-avatar color="red" text-color="white" size="md">
                <span style="font-size: 14px;">{{ props.props.row.no }}</span>
              </q-avatar>
            </q-td>
            <q-td key="label_equipment" :props="props.props">{{ props.props.row.label_equipment }}</q-td>
            <q-td key="name_equipment" :props="props.props">
              <q-chip v-pointer color="teal" text-color="white" icon="edit">
                <span>{{ props.props.row.name_equipment ? props.props.row.name_equipment : data_row('name_equipment', props.props.row.__index) | upper}}</span>
                <q-tooltip
                  v-if="!isMobileViewport"
                  content-style="font-size: 14px"
                  anchor="center left"
                  self="center right"
                >Klik untuk edit</q-tooltip>

                <q-popup-edit
                  :anchor="popup_edit"
                  self="bottom left"
                  content-style="width:auto;"
                  v-model="props.props.row.name_equipment"
                  @save="onUpdateHandler('name_equipment', props.props.row)"
                >
                  <template v-slot="{ initialValue, value, emitValue, validate, set, cancel }">
                    <q-input
                      label="Nama Equipement"
                      ref="name_equipment"
                      stack-label
                      debounce="250"
                      v-model.lazy="props.props.row.name_equipment"
                      @input="onEmptyHandler($event, 'name_equipment', props.props.row.__index)"
                      @keypress.enter="onUpdateHandler('name_equipment', props.props.row)"
                      maxlength="50"
                      autofocus
                      counter
                      hint
                      :rules="[
                        val => !!val || 'Tidak boleh kosong', 
                        val => val.length > 2 || 'Terlalu sedikit char', ]"
                      :loading="false"
                    >
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
                :ref="'spinner_name_equipment_'+props.props.row.__index"
                :_visible="false"
              />
            </q-td>
            <q-td key="created_at" :props="props.props">{{ props.props.row.created_at }}</q-td>
            <q-td key="updated_at" :props="props.props">{{ props.props.row.updated_at }}</q-td>
          </q-tr>
        </template>
        <info-library-alat slot="info" />
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
      error: false,
      store_module: "aset_equipment", // lihat modules di store/index.js
      default_data: {
        // ini adalah data static yang digunakan untuk reset jika inline edit diisi null
        init: false,
        data: []
      },
      popup_edit: this.isMobileViewport ? "bottom center" : "bottom left"
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
  watch: {
    "this.get_aset_equipment_data": function(val) {
      // inline edit
      if (!this.default_data.init) {
        this.default_data.data = this.get_aset_equipment_data;
        this.default_data.init = true;
      }
    }
  },
  mounted() {
    this.default_data = this.get_aset_equipment_data;
  },
  methods: {
    /**
     * -------------------------------------------------------------
     * Handler Block
     * -------------------------------------------------------------
     */
    onUpdateHandler(key, payload) {
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

      vm.requestAxios(payload);

      // alert("ENTER", this.$refs[key].value);
    },
    onEmptyHandler(value, key, __index) {
      //console.log(value, key, __index);

      if (value) {
        // inline edit
        // digunakan untuk update default_data sesuai value terakhir
        const array = this.default_data;
        for (let index = 0; index < array.length; index++) {
          if (index == __index) {
            const element = array[index];
            element[key] = value;
            // console.log("onUpdateHandler", value, element[key]);
          }
        }
      }
    },

    /**
     * -------------------------------------------------------------
     * Axios Block
     * -------------------------------------------------------------
     */
    requestAxios: _.debounce(function(payload) {
      const vm = this;

      vm.$refs[
        "spinner_name_equipment_" + payload.__index
      ]._data.visible = true;

      // console.log(payload);

      vm.$axios
        .put("/api/v1/library/equipment", payload)
        .then(function(response) {
          // console.log('response', response.data.payload);

          vm.$refs[
            "spinner_name_equipment_" + payload.__index
          ]._data.visible = false;

          vm.set_aset_equipment({
            type: "replace",
            data: response.data.payload
          });
        })
        .catch(function(error) {
          vm.$refs[
            "spinner_name_equipment_" + payload.__index
          ]._data.visible = false;
        });
    }, 250)
  }
};
</script>