<template>
  <q-layout view="lHr LpR lfr">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left;  miniState = !miniState" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>Title
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/table" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
      <LinierProgress />
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :width="210"
      :breakpoint="500"
      bordered
      content-class="bg-grey-2"
    >
      <q-scroll-area :style="avatar">
        <q-list>
          <q-toolbar v-show="!miniState" class="bg-primary text-white shadow-2">Karyawan</q-toolbar>
          <!-- <q-separator /> -->
          <!-- <q-item-label v-show="!miniState" header>Karyawan</q-item-label> -->
          <q-item
            clickable
            v-ripple
            :active="link === 'biodata'"
            @click="link = 'biodata'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="assignment_ind" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Biodata</q-item-label>
              <!-- <q-item-label caption>Data Karyawan</q-item-label> -->
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :active="link === 'role'"
            @click="link = 'role'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Role</q-item-label>
              <!-- <q-item-label caption>Data Karyawan</q-item-label> -->
            </q-item-section>
          </q-item>

          <q-toolbar v-show="!miniState" class="bg-primary text-white shadow-2">Aset</q-toolbar>
          <q-separator />
          <!-- <q-item-label v-show="!miniState" header>Aset</q-item-label> -->
          <q-item
            clickable
            v-ripple
            :active="link === 'equipment'"
            @click="link = 'equipment'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="build" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Equipment</q-item-label>
              <!-- <q-item-label caption>Data Aset</q-item-label> -->
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :active="link === 'lokasi'"
            @click="link = 'lokasi'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="room" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Lokasi</q-item-label>
              <!-- <q-item-label caption>Data Aset</q-item-label> -->
            </q-item-section>
          </q-item>

          <q-toolbar v-show="!miniState" class="bg-primary text-white shadow-2">Laporan</q-toolbar>
          <q-separator />
          <!-- <q-item-label v-show="!miniState" header>Laporan</q-item-label> -->
          <q-item
            clickable
            v-ripple
            :active="link === 'week'"
            @click="link = 'week'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="assessment" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Mingguan</q-item-label>
              <!-- <q-item-label caption>Data Laporan</q-item-label> -->
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :active="link === 'month'"
            @click="link = 'month'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="assessment" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Bulanan</q-item-label>
              <!-- <q-item-label caption>Data Laporan</q-item-label> -->
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :active="link === 'quartal'"
            @click="link = 'quartal'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="assessment" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Kuartal</q-item-label>
              <!-- <q-item-label caption>Data Laporan</q-item-label> -->
            </q-item-section>
          </q-item>

          <q-toolbar v-show="!miniState" class="bg-primary text-white shadow-2">Inspeksi</q-toolbar>
          <q-separator />
          <!-- <q-item-label v-show="!miniState" header>Inspeksi</q-item-label> -->
          <q-item
            clickable
            v-ripple
            :active="link === 'temperatur'"
            @click="link = 'temperatur'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="brightness_medium" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Temperatur</q-item-label>
              <!-- <q-item-label caption>Data Inspeksi</q-item-label> -->
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :active="link === 'catatan'"
            @click="link = 'catatan'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="low_priority" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Catatan</q-item-label>
              <!-- <q-item-label caption>Data Inspeksi</q-item-label> -->
            </q-item-section>
          </q-item>

          <q-item-label header />
        </q-list>
      </q-scroll-area>

      <q-img
        v-show="!miniState"
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 200px;"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="80px" font-size="52px" color="teal" text-color="white" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
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
      left: false,
      right: false,

      drawer: false,
      miniState: false
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

