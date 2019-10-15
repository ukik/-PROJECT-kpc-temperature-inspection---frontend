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
          <q-toolbar-title>Aset Equipment</q-toolbar-title>
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
                {{ props.props.row.name_equipment ? props.props.row.name_equipment : data_row('name_equipment', props.props.row.__index) }}
                <q-tooltip
                  content-style="font-size: 14px"
                  anchor="center left"
                  self="center right"
                >Klik untuk edit</q-tooltip>
              </q-chip>
              <inner-loading
                :ref="'spinner_name_equipment_'+props.props.row.__index"
                :_visible="false"
              />

              <q-popup-edit
                v-model=" props.props.row.name_equipment"
                @save="onUpdate('name_equipment', props.props.row.__index)"
              >
                <template v-slot="{ initialValue, value, emitValue, validate, set, cancel }">
                  <q-input
                    label="Nama Equipement"
                    ref="name_equipment"
                    stack-label
                    debounce="250"
                    v-model.lazy="props.props.row.name_equipment"
                    @input="onEmptyHandler($event, 'name_equipment', props.props.row.__index)"
                    @keypress.enter="onUpdate('name_equipment', props.props.row.__index)"
                    maxlength="50"
                    autofocus
                    counter
                    hint
                    :rules="[val => !!val || 'Tidak boleh kosong', val => validate(value) || 'More than 5 chars required']"
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
                        content-style="font-size: 14px"
                        anchor="top middle"
                        self="bottom middle"
                        :offset="[10, 10]"
                      >Tutup</q-tooltip>
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
                        content-style="font-size: 14px"
                        anchor="top middle"
                        self="bottom middle"
                        :offset="[10, 10]"
                      >Simpan Perubahan</q-tooltip>
                    </q-btn>
                  </q-input>
                </template>
              </q-popup-edit>
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
    onUpdate(key, __index) {
      console.log(
        (this.$refs["spinner_name_equipment_" + __index]._data.visible = true)
      );

      this.$refs[key].validate();
      if (this.$refs[key].hasError) {
        // this.formHasError = true;
        this.$q.notify({
          color: "negative",
          message: "Peringatan! Data update tidak boleh kosong"
        });
        return;
      }

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
            console.log("onUpdate", value, element[key]);
          }
        }
      }
    }
  },
  data() {
    return {
      store_module: "aset_equipment", // lihat modules di store/index.js
      default_data: {
        // ini adalah data static yang digunakan untuk reset jika inline edit diisi null
        init: false,
        data: []
      }
    };
  }
};
</script>