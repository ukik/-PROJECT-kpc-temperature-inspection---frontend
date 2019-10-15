<template>
  <fragment>
    <q-page>
      <div class="q-pa-md">
        <!-- <q-toolbar class="text-primary">
          <q-toolbar-title>Aset Equipement</q-toolbar-title>
        </q-toolbar>-->

        <q-table title="Laporan Bulanan" :data="data" :columns="columns" row-key="name">
          <template v-slot:top="props">
            <div class="row full-width q-mb-sm">
              <div class="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
                <q-toolbar style="padding:0px">
                  <q-icon name="font_download" size="lg" />
                  <q-toolbar-title>Data Table</q-toolbar-title>
                </q-toolbar>
              </div>
              <div class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                <div class="row" style="display: flex;justify-content: flex-end;">
                  <div
                    class="col-6 col-md-5 col-lg-5 col-xl-5 q-pr-sm"
                    style="justify-content: center; display: flex;"
                  >
                    <q-btn-dropdown
                      class="glossy float-right btn-fixed-width"
                      color="purple"
                      label="Pilihan"
                    >
                      <div class="row no-wrap">
                        <div class="column q-ma-md" style="margin-bottom:20px;">
                          <!-- <div class="text-bold q-mb-md">Kolom Data</div> -->
                          <q-toggle class="q-pr-md" />
                        </div>
                      </div>
                    </q-btn-dropdown>
                  </div>
                  <div
                    class="col-6 col-md-5 col-lg-5 col-xl-5"
                    style="justify-content: center; display: flex;"
                  >
                    <q-btn
                      class="glossy float-right btn-fixed-width"
                      color="primary"
                      label="saring"
                      style=" margin-right:8px;"
                    />
                    <q-btn color="secondary" class="glossy">
                      <q-icon name="keyboard_arrow_up" />
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>

            <!-- <hr /> -->

            <q-space />
            <div class="row full-width q-mb-sm">
              <div class="col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <q-select
                  options-dense
                  emit-value
                  map-options
                  :value="{value:123,label:'22'}"
                  option-value="value"
                  label="Kolom pencarian"
                  style="min-width: 100%;"
                  class="float-left"
                />
              </div>
              <div class="col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <q-select
                  options-dense
                  emit-value
                  map-options
                  :value="{value:123,label:'22'}"
                  option-value="value"
                  label="Operasi pencarian"
                  style="min-width: 100%;"
                  class="float-left"
                />
              </div>
              <div class="col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <q-input
                  label="Kata kunci"
                  stack-label
                  placeholder="......."
                  style="min-width: 100%;"
                  class="float-right"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-xs-2 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <q-input
                  label="Kata kunci kedua"
                  style="min-width: 100%;"
                  stack-label
                  placeholder="......."
                  class="float-right"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
            </div>
          </template>

          <template v-slot:header>
            <q-tr>
              <q-th>ddddd</q-th>
            </q-tr>
          </template>
          <template v-slot:body="props">
            <q-td key="fat">{{ props.row.name }}</q-td>
          </template>
        </q-table>
      </div>
    </q-page>
  </fragment>
</template>

<script>
export default {
  data() {
    return {
      columns: [{ name: "fat", label: "Fat (g)", align: "left" }],
      data: [
        {
          name: "Frozen Yogurt"
        }
      ]
    };
  }
};
</script>