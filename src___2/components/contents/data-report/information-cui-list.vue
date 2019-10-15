<template>
  <fragment>
    <q-virtual-scroll
      class="full-width q-mb-sm q-mt-sm"
      style="max-height: 300px;"
      :items="heavyList"
      separator
    >
      <template v-slot="{ item, index }">
        <q-item :key="index" dense>
          <q-item-section>
            <q-item-label>#{{ index }} - {{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-virtual-scroll>
  </fragment>
</template>

<script>
const maxSize = 10000;
const heavyList = [];

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: "Option " + (i + 1)
  });
}

Object.freeze(heavyList);

export default {
  data() {
    return {
      heavyList
    };
  }
};
</script>