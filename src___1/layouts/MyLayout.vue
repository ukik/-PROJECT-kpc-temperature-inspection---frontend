<template>
  <q-layout view="lHr LpR lfr">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar class="bg-primary text-white">
        <q-btn flat round dense icon="menu" class="q-mr-sm" @click="left = !left" />
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </q-avatar>

        <q-toolbar-title>Quasar Framework</q-toolbar-title>

        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>

      <LayoutTab :navs="layout_tab" />

      <LinierProgress />
    </q-header>

    <!-- <q-drawer
      v-model="left"
      show-if-above
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :width="210"
      :breakpoint="500"
      bordered
      content-class="bg-grey-2"
    >-->
    <q-drawer
      v-model="left"
      @click.capture="drawerClick"
      :width="210"
      :breakpoint="500"
      bordered
      content-class="bg-grey-2"
    >
      <!-- <drawer-content :miniState="miniState" /> -->
      <drawer-content />
    </q-drawer>

    <q-drawer v-model="right" @mouseout="right = false" side="right" overlay bordered>
      <!-- drawer content -->
      <q-btn dense flat round icon="menu" @click="right = !right" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>-->
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      link: "library_equipment",
      left: true,
      right: false,

      // drawer: false,
      miniState: false,

      layout_tab: [
        {
          to: "/page1",
          label: "Page One"
        },
        {
          to: "/table",
          label: "Page Two"
        }
      ]
    };
  },

  computed: {
    avatar() {
      if (this.miniState) {
        return "height: calc(100% - 0px); margin-top: 0px;";
      }
      return "height: calc(100% - 200px); margin-top: 200px;";
    }
  },
  methods: {
    drawerClick(e) {
      // if in "mini" state and user
      // click on drawer, we switch it to "normal" mode
      if (this.miniState) {
        this.miniState = false;

        // notice we have registered an event with capture flag;
        // we need to stop further propagation as this click is
        // intended for switching drawer to "normal" mode only
        e.stopPropagation();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.my-menu-link {
  color: white;
  background: #f2c037;
  .text-caption {
    color: white;
  }
}
</style>

