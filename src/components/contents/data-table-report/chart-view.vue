<template>
  <fragment>
    <p>
      <q-toolbar style="padding:0px">
        <slot />
      </q-toolbar>
    </p>
    <chart-bar
      :_newDatasets="_chartData"
      :_newLabel="_newLabel"
      :_fieldInspection="_fieldInspection"
      class="row full-width q-mb-sm"
    />
  </fragment>
</template>

<script>
export default {
  props: {
    _chartData: {
      default: () => []
    },
    _searchColumn: {
      default: ""
    },
    _fieldInspection: {
      default: ""
    }
  },
  computed: {
    _newLabel() {
      switch (this._searchColumn) {
        case "week":
          return this.get_laporan_custom_chartLabel("day_name");
        case "month":
          let label = [];
          for (
            let j = 0;
            j < this.get_laporan_custom_chartLabel("week").length;
            j++
          ) {
            const element = this.get_laporan_custom_chartLabel("week")[j];
            label.push("Minggu ke " + element);
          }
          return label;
        case "quartal":
          return this.get_laporan_custom_chartLabel("month_name");
      }
    }
  }
};
</script>