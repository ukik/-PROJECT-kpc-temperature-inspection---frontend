<template>
  <fragment>
    <!-- <q-toolbar class="text-primary">
      <q-toolbar-title>Aset Equipement</q-toolbar-title>
    </q-toolbar>-->
    <q-page>
      <data-table :store_module="store_module">
        <!-- TITLE -->

        <!-- <q-toolbar slot="title" style="padding:0px">
          <q-icon name="font_download" size="lg" />
          <q-toolbar-title>Aset Equipment</q-toolbar-title>
        </q-toolbar>-->

        <!-- ROW -->
        <template slot="row" slot-scope="props">
          <q-tr>
            <q-td key="label_equipment" :props="props.props">{{ props.props.row.label_equipment }}</q-td>
            <q-td key="name_equipment" :props="props.props">
              <q-chip
                v-pointer
                color="teal"
                text-color="white"
                icon="edit"
              >{{ props.props.row.name_equipment ? props.props.row.name_equipment : data_row('name_equipment', props.props.row.__index) }}</q-chip>
              <q-popup-edit v-model=" props.props.row.name_equipment">
                <q-input
                  label="Nama Equipement"
                  ref="name_equipment"
                  stack-label
                  debounce="250"
                  v-model.lazy="props.props.row.name_equipment"
                  @input="onUpdate($event, 'name_equipment', props.props.row.__index)"
                  @keypress.enter="onEnter('name_equipment')"
                  maxlength="50"
                  autofocus
                  counter
                  hint="ENTER"
                  :rules="[val => !!val || 'Tidak boleh kosong']"
                />
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
    onEnter(key) {
      this.$refs[key].validate();
      if (this.$refs[key].hasError) {
        // this.formHasError = true;
        this.$q.notify({
          color: "negative",
          message: "Peringatan! Data update tidak boleh kosong"
        });
        return;
      }

      alert(this.$refs[key].value);
    },
    onUpdate(value, key, __index) {
      if (value) {
        // inline edit
        // digunakan untuk update default_data sesuai value terakhir
        const array = this.default_data;
        for (let index = 0; index < array.length; index++) {
          if (index == __index) {
            const element = array[index];
            element[key] = value;
            console.log(value, element[key]);
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