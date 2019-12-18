<template>
  <q-page>
    <div class="q-pa-md">
      <!-- TITLE -->
      <q-card-section style="padding-top: 12px;">
        <q-toolbar style="padding:0px">
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
          <q-toolbar-title>
            <q-item-section>
              <q-item-label>Informasi Partnership</q-item-label>
              <q-item-label caption>Proudly Working With Great Compony</q-item-label>
            </q-item-section>
          </q-toolbar-title>
        </q-toolbar>
      </q-card-section>

      <q-card>
        <q-tabs
          v-model="tab"
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab no-caps name="stakeholder" label="Stakeholder" />
          <q-tab no-caps name="description" label="Deskripsi" />
          <q-tab no-caps name="developer" label="Developer" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="stakeholder">
            <stakeholder-help />
          </q-tab-panel>

          <q-tab-panel name="description">
            <description-help />
          </q-tab-panel>

          <q-tab-panel name="developer">
            <developer-help />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>

    <!-- place QPageScroller at end of page -->
    <scroll-to-top />
  </q-page>
</template>

<script>
import StakeholderHelp from "./stakeholder-help";
import DescriptionHelp from "./description-help";
import DeveloperHelp from "./developer-help";

export default {
  components: {
    StakeholderHelp,
    DescriptionHelp,
    DeveloperHelp
  },
  data() {
    return {
      tab: "stakeholder"
    };
  }
};
</script>