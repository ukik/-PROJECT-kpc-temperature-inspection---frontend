<template>
  <q-card class="q-mb-sm">
    <q-card-section>
      <q-item>
        <q-item-section v-if="!isMobileViewport" avatar>
          <q-icon name="report_problem" class="text-negative" style="font-size: 3rem;" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold">
            <q-icon
              v-if="isMobileViewport"
              name="report_problem"
              class="text-negative"
              style="font-size: 2rem; padding-right:10px"
            />Validasi Error
          </q-item-label>

          <q-item-label caption class="text-black" style="font-size: 13px;" v-html="_rule"></q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["_rule"]
};
</script>