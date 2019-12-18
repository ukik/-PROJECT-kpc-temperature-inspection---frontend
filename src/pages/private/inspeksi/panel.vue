<template>
  <q-page>
    <q-tab-panels
      v-model.lazy="get_inspection_tab"
      animated
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel name="0">
        <PanelInvalidInspection />
      </q-tab-panel>

      <q-tab-panel name="1">
        <PanelValidInspection />
      </q-tab-panel>
    </q-tab-panels>

    <!-- place QPageScroller at end of page -->
    <scroll-to-top />

    <q-page-sticky
      v-if="get_credentials.role != 0 && isMobileViewport"
      position="bottom-right"
      :offset="get_credentials.role != 1 ? [80, 17] : [18, 18]"
      style="z-index:9"
    >
      <q-btn
        round
        color="primary"
        @click="onGridHandler"
        outline
        :icon="grid_icon"
        class="bg-white"
        size="lg"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import PanelInvalidInspection from "./inspeksi-temperatur-invalid";
import PanelValidInspection from "./inspeksi-temperatur-valid";

export default {
  components: {
    PanelInvalidInspection,
    PanelValidInspection
  },
  data() {
    return {
      display: true,

      grid_icon: "view_carousel" // 'view_carousel' : 'view_list'"
    };
  },
  methods: {
    onGridHandler() {
      switch (this.get_inspection_tab) {
        case "0":
          this.set_inspeksi_temperatur_panel_invalid({
            type: "grid"
          });
          this.get_inspeksi_temperatur_panel_invalid_grid
            ? (this.grid_icon = "view_carousel")
            : (this.grid_icon = "view_list");
          break;
        case "1":
          this.set_inspeksi_temperatur_panel_valid({
            type: "grid"
          });
          this.get_inspeksi_temperatur_panel_valid_grid
            ? (this.grid_icon = "view_carousel")
            : (this.grid_icon = "view_list");
          break;
      }
    }
  },
  mounted() {
    switch (this.get_inspection_tab) {
      case 0:
        this.get_inspeksi_temperatur_panel_invalid_grid
          ? (this.grid_icon = "view_carousel")
          : (this.grid_icon = "view_list");
        break;
      case 1:
        this.get_inspeksi_temperatur_panel_valid_grid
          ? (this.grid_icon = "view_carousel")
          : (this.grid_icon = "view_list");
        break;
    }

    // hapus sisa detail
    this.set_formulir_inspeksi({
      data: null,
      type: "reset_form"
    });
  },
  watch: {
    get_inspection_tab: function(val) {
      // console.log(val);
      this.display = false;

      setTimeout(() => {
        this.display = true;
      }, 500);
    }
  }
};
</script>
