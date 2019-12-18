<template>
  <fragment>
    <q-scroll-area id="drawer" :style="avatar">
      <q-list>
        <q-item
          v-if="
            get_credentials.role == 0 ||
              get_credentials.role == 1 ||
              get_credentials.role == 2
          "
          clickable
          v-ripple
          dense
          class="q-pt-sm q-pb-sm"
          :active="link === 'laporan'"
          :to="{ name: 'laporan' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="assessment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Laporan</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-if="
            get_credentials.role == 0 ||
              get_credentials.role == 1 ||
              get_credentials.role == 2
          "
          clickable
          v-ripple
          dense
          class="q-pt-sm q-pb-sm"
          :active="link === 'temperatur'"
          :to="{ name: 'inspeksi-temperatur-panel' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="brightness_medium" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Temperatur
              <q-badge v-if="unread_notification_inspection > 0" color="red">{{
                unread_notification_inspection
              }}</q-badge>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <!-- <q-toolbar v-show="!miniState" class="bg-primary text-white shadow-2">Karyawan</q-toolbar> -->
        <q-item
          v-if="
            get_credentials.role == 0 ||
              get_credentials.role == 1 ||
              get_credentials.role == 2
          "
          clickable
          v-ripple
          dense
          class="q-pt-sm q-pb-sm"
          :active="link === 'biodata'"
          :to="{ name: 'karyawan-biodata' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="assignment_ind" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Biodata
              <!-- <q-badge
                v-if="get_unread_notification.employee == 0"
                color="red"
              >{{ get_unread_notification.employee }}</q-badge>-->
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-if="get_credentials.role == 0"
          clickable
          v-ripple
          dense
          class="q-pt-sm q-pb-sm"
          :active="link === 'role'"
          :to="{ name: 'karyawan-role' }"
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
        <q-separator v-if="get_credentials.role == 0" />

        <q-item
          v-if="get_credentials.role == 0"
          clickable
          v-ripple
          dense
          class="q-pt-sm q-pb-sm"
          :active="link === 'equipment'"
          :to="{ name: 'library-equipment' }"
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
          v-if="get_credentials.role == 0"
          clickable
          v-ripple
          dense
          class="q-pt-sm q-pb-sm"
          :active="link === 'lokasi'"
          :to="{
            name: 'library-lokasi',
            query: { leadId: 'contact.id', startTab: 'profileTab' }
          }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="room" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lokasi</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-if="get_credentials.role == 0"
          clickable
          v-ripple
          dense
          class="q-pt-sm q-pb-sm"
          :active="link === 'schedule'"
          :to="{ name: 'library-schedule' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="timer" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Shift</q-item-label>
          </q-item-section>
        </q-item>

        <!-- <q-toolbar v-show="!miniState" class="bg-primary text-white shadow-2">Inspeksi</q-toolbar> -->

        <q-separator />

        <q-item
          v-if="
            get_credentials.role == 0 ||
              get_credentials.role == 1 ||
              get_credentials.role == 2
          "
          clickable
          v-ripple
          dense
          class="q-pt-sm q-pb-sm"
          :active="link === 'help'"
          :to="{ name: 'help' }"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Informasi</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <!-- class="q-pt-sm q-pb-sm fixed full-width" -->
        <!-- style="bottom:0; border-top:1px solid rgba(0, 0, 0, 0.12)" -->
        <q-item
          v-if="
            get_credentials.role == 0 ||
              get_credentials.role == 1 ||
              get_credentials.role == 2
          "
          clickable
          v-ripple
          dense
          class="q-pt-sm q-pb-sm"
          @click="confirm = true"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>

        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section
              class="row items-center"
              :style="
                isMobileViewport
                  ? 'center; display: flex; justify-content: center; padding-bottom: 10px; text-align: center;'
                  : ''
              "
            >
              <q-avatar
                color="red"
                text-color="white"
                :style="isMobileViewport ? 'margin: 5px 0 20px;' : ''"
              >
                <q-icon v-if="!loading" name="power_settings_new" />
                <q-spinner-hourglass v-if="loading" color="white" />
              </q-avatar>

              <span class="q-ml-sm"
                >Apa anda yakin ingin keluar dari akun?</span
              >
            </q-card-section>

            <q-card-actions
              :align="!isMobileViewport ? 'right' : 'center'"
              :style="isMobileViewport ? 'padding-bottom:15px' : ''"
            >
              <q-btn outline label="Batal" color="primary" v-close-popup />
              <q-btn
                :disable="loading"
                outline
                label="Ya Keluar"
                color="primary"
                @click="onLogoutHandler"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-item-label header />
      </q-list>
    </q-scroll-area>

    <!-- <q-img
      class="absolute-top"
      src="https://pavarazi.files.wordpress.com/2011/04/liebherr.jpg"
      style="height: 200px; background-position: initial;"
    >-->

    <q-img
      class="absolute-top"
      :src="drawer_background_base64"
      style="height: 200px;"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar
          size="80px"
          font-size="52px"
          color="teal"
          text-color="white"
          class="q-mb-sm"
        >
          <img
            id="avatar-image"
            :src="get_user_photo"
            @click="onZoom(get_user_photo, 'avatar')"
          />
        </q-avatar>
        <div class="text-weight-bold">{{ name | capitalize }}</div>
        <div>{{ position | position }}</div>
      </div>
    </q-img>
  </fragment>
</template>

<script>
export default {
  data() {
    return {
      link: "laporan",
      confirm: false,
      loading: false
    };
  },
  watch: {
    "$route.name": function(val) {
      // console.log("drawer", val);

      switch (val) {
        case "laporan":
          this.link = "laporan";
          break;
        case "inspeksi-temperatur-panel":
          this.link = "temperatur";
          break;
        case "karyawan-biodata":
          this.link = "biodata";
          break;
        case "karyawan-role":
          this.link = "role";
          break;
        case "library-equipment":
          this.link = "equipment";
          break;
        case "library-lokasi":
          this.link = "lokasi";
          break;
        case "library-schedule":
          this.link = "schedule";
          break;
        case "help":
          this.link = "help";
          break;
        default:
          this.link = "";
          break;
      }
    }
  },
  computed: {
    get_user_photo() {
      if (this.get_user != undefined) {
        return this.get_user.photo_employee;
      }
      return;
    },
    unread_notification_inspection() {
      if (this.get_unread_notification != undefined) {
        return this.get_unread_notification.inspection;
      }
      return 0;
    },
    name() {
      if (!this.get_user) {
        return "";
      }
      return this.get_user.name_employee;
    },
    position() {
      if (!this.get_user) {
        return "";
      }
      return this.get_user.position_employee;
    },
    avatar() {
      // if (this.miniState) {
      //   return "height: calc(100% - 0px); margin-top: 0px;";
      // }
      return "height: calc(100% - 200px); margin-top: 200px;";
    }
  },
  beforeMount() {
    // console.log("avatarExist", this.get_user.photo_employee);
    this.avatarExist(this.get_user_photo, "avatar-image");
  },
  methods: {
    onLogoutHandler() {
      const vm = this;
      this.loading = true;

      this.$axios
        .get("/api/v1/logout") // 1 = inspection
        .then(function(response) {
          //this.confirm = false;
          //this.loading = false;
        })
        .catch(function(error) {
          //this.confirm = false;
          //this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.my-menu-link {
  // color: white;
  // background: #f2c037;
  // border-left: 5px solid #ffee76;
  // .text-caption {
  //   color: white;
  // }
}
</style>
