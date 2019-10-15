<template>
  <fragment>
    <!-- <div class="row full-width q-mb-sm"> -->
    <q-table
      class="full-width q-mb-sm q-mt-sm"
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
      hide-item
      hide-body
      hide-body-cell
      hide-row
      hide-top-row
    >
      <template v-slot:top="props">
        <div class="row full-width q-mb-sm">
          <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <q-toolbar style="padding:0px">
              <q-icon name="font_download" size="md" />
              <q-toolbar-title>CUI</q-toolbar-title>
            </q-toolbar>
          </div>
        </div>
      </template>

      <template v-slot:no-data="{ icon, message, filter }">
        <list class="row full-width q-mb-sm" />
      </template>

      <!-- row -->
      <template v-slot:body="props">
        <list class="row full-width q-mb-sm" />
      </template>
    </q-table>
    <!-- </div> -->
  </fragment>
</template>

<script>
import List from "./information-cui-list";

export default {
  components: {
    List
  },

  data() {
    return {
      columns: [
        {
          name: "time",
          label: "Waktu",
          field: "time",
          align: "left",
          sortable: false
        }
      ],
      data: []
    };
  }
};
</script>