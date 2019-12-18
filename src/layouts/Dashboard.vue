<template>
  <q-layout view="lHr LpR lfr">
    <q-header elevated class="bg-white text-white" height-hint="100">
      <q-toolbar class="bg-white text-black">
        <!-- <q-avatar> -->
        <img style="height:40px" src="~assets/Icon Kpc.png" />
        <!-- </q-avatar> -->

        <q-toolbar-title>
          <strong v-if="!isMobileViewport">Conveyor Inspector</strong>
          <!-- <q-badge
            align="top"
            v-if="get_total_unread_notification > 0 && get_credentials.role == 0"
            color="red"
          >{{ get_total_unread_notification }}</q-badge>-->
        </q-toolbar-title>

        <q-btn dense flat size="md" round icon="menu" class="q-ml-md" @click="left = !left"></q-btn>
        <!-- <q-btn flat round dense icon="whatshot" /> -->
      </q-toolbar>

      <div class="q-gutter-y-md" v-if="$route.name == 'inspeksi-temperatur-panel'">
        <q-tabs
          align="justify"
          indicator-color="white"
          active-color="white"
          inline-label
          :value="get_inspection_tab"
          class="text-grey-4 bg-negative"
        >
          <q-tab
            name="0"
            :breakpoint="0"
            no-caps
            icon="assignment"
            @click="onTabHandler('0', 'inspection')"
            :label="!isMobileViewport ? 'Belum Divalidasi' : 'Invalid'"
            :disable="disabled"
          />
          <q-tab
            name="1"
            :breakpoint="0"
            no-caps
            @click="onTabHandler('1', 'inspection')"
            icon="assignment_turned_in"
            :label="!isMobileViewport ? 'Sudah Divalidasi' : 'Valid'"
            :disable="disabled"
          />
        </q-tabs>
      </div>

      <!-- <LinierProgress /> -->
    </q-header>

    <q-drawer
      v-model="left"
      @click.capture="drawerClick"
      :width="210"
      :breakpoint="500"
      bordered
      content-class="bg-grey-2"
    >
      <!-- <drawer-content :miniState="miniState" /> -->

      <content-drawer />
    </q-drawer>

    <!-- <q-drawer side="right" overlay bordered>
      <q-btn dense flat round icon="menu" />
    </q-drawer>-->

    <q-page-container style="padding-bottom:75px;">
      <router-view />

      <q-page-sticky
        v-if="get_credentials.role != 1"
        position="bottom-right"
        :offset="[18, 18]"
        style="z-index:9"
      >
        <q-fab icon="add" direction="up" color="accent">
          <q-fab-action
            v-if="get_credentials.role == 0"
            color="primary"
            icon="person_add"
            @click="gotoKaryawan"
          >
            <q-tooltip
              content-style="font-size: 14px"
              anchor="center left"
              self="center right"
            >Buat data karyawan baru</q-tooltip>
          </q-fab-action>
          <q-fab-action
            v-if="get_credentials.role == 0 || get_credentials.role == 2"
            color="primary"
            icon="playlist_add"
            @click="gotoInspeksi"
          >
            <q-tooltip
              content-style="font-size: 14px"
              anchor="center left"
              self="center right"
            >Buat Data Inspeksi</q-tooltip>
          </q-fab-action>
        </q-fab>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import ContentDrawer from "../components/drawer/content-drawer";

export default {
  components: {
    ContentDrawer
  },
  data() {
    return {
      link: "library_equipment",
      left: false,
      // right: false,

      disabled: false,
      // drawer: false,
      miniState: false
    };
  },
  created() {
    this.isMobileViewport ? (this.left = false) : (this.left = true);
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
    onTabHandler: _.debounce(function(val, page) {
      this.disabled = true;
      this.set_tab({
        type: page,
        data: val
      });
      setTimeout(() => {
        this.disabled = false;
      }, 500);
    }, 500),
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
    },
    gotoKaryawan() {
      this.set_formulir_karyawan({
        type: "reset_form"
      });

      if (this.$route.name == "formulir-karyawan") return;

      this.$router.push({
        name: "formulir-karyawan"
      });
    },
    gotoInspeksi() {
      this.set_formulir_inspeksi({
        data: null,
        type: "reset_form"
      });

      this.set_formulir_inspeksi_new({
        data: null,
        type: "reset_form"
      });

      if (this.$route.name == "formulir-inspeksi-new") return;

      this.$router.push({
        name: "formulir-inspeksi-new"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.my-menu-link {
  color: white;
  background: #f2c037;
  .text-caption {
    color: white;
  }
}
</style>
