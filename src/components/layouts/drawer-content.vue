<template>
  <fragment>
    <q-scroll-area :style="avatar">
      <q-list>
        <!-- <q-toolbar v-show="!miniState" class="bg-primary text-white shadow-2">Karyawan</q-toolbar> -->
        <q-item
          clickable
          v-ripple
          :active="link === 'biodata'"
          @click="link = 'biodata'"
          :to="{ path: 'karyawan-biodata' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="assignment_ind" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Biodata</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'role'"
          @click="link = 'role'"
          :to="{ path: 'karyawan-role' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Role</q-item-label>
          </q-item-section>
        </q-item>

        <!-- <q-toolbar v-show="!miniState" class="bg-primary text-white shadow-2">Aset</q-toolbar> -->
        <q-separator />
        <q-item
          clickable
          v-ripple
          :active="link === 'equipment'"
          @click="link = 'equipment'"
          :to="{ path: 'aset-equipment' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="build" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Equipment</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'lokasi'"
          @click="link = 'lokasi'"
          :to="{ path: 'aset-lokasi', query: {leadId: 'contact.id', startTab: 'profileTab'} }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="room" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lokasi</q-item-label>
          </q-item-section>
        </q-item>

        <!-- <q-toolbar v-show="!miniState" class="bg-primary text-white shadow-2">Laporan</q-toolbar> -->
        <q-separator />
        <!-- <q-item
          clickable
          v-ripple
          :active="link === 'mingguan'"
          @click="link = 'mingguan'"
          :to="{ path: 'laporan-mingguan' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="assessment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Mingguan</q-item-label>
          </q-item-section>
        </q-item> -->

        <!-- <q-item
          clickable
          v-ripple
          :active="link === 'bulanan'"
          @click="link = 'bulanan'"
          :to="{ path: 'laporan-bulanan' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="assessment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Bulanan</q-item-label>
          </q-item-section>
        </q-item> -->

        <!-- <q-item
          clickable
          v-ripple
          :active="link === 'kuartal'"
          @click="link = 'kuartal'"
          :to="{ path: 'laporan-kuartal' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="assessment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Kuartal</q-item-label>
          </q-item-section>
        </q-item> -->

        <q-item
          clickable
          v-ripple
          :active="link === 'laporan'"
          @click="link = 'laporan'"
          :to="{ path: 'laporan' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="assessment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Laporan</q-item-label>
          </q-item-section>
        </q-item>

        <!-- <q-toolbar v-show="!miniState" class="bg-primary text-white shadow-2">Inspeksi</q-toolbar> -->
        <q-separator />
        <q-item
          clickable
          v-ripple
          :active="link === 'temperatur'"
          @click="link = 'temperatur'"
          :to="{ path: 'inspeksi-temperatur' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="brightness_medium" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Temperatur</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'catatan'"
          @click="link = 'catatan'"
          :to="{ path: 'inspeksi-catatan' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="low_priority" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Catatan</q-item-label>
          </q-item-section>
        </q-item>

        <q-item-label header />
      </q-list>
    </q-scroll-area>

    <q-img
      v-show="!miniState"
      class="absolute-top"
      :src="drawer_background_base64"
      style="height: 200px;"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="80px" font-size="52px" color="teal" text-color="white" class="q-mb-sm">
          <img src="../../assets/boy-avatar.png" />
        </q-avatar>
        <div class="text-weight-bold">Razvan Stoenescu</div>
        <div>@rstoenescu</div>
      </div>
    </q-img>
  </fragment>
</template>


<script>
export default {
  props: ["miniState"],
  data() {
    return {
      link: "biodata"
    };
  },
  computed: {
    avatar() {
      if (this.miniState) {
        return "height: calc(100% - 0px); margin-top: 0px;";
      }
      return "height: calc(100% - 200px); margin-top: 200px;";
    }
  }
};
</script>script


<style lang="scss" scoped>
.my-menu-link {
  color: white;
  background: #f2c037;
  border-left: 7px solid white;
  .text-caption {
    color: white;
  }
}
</style>
