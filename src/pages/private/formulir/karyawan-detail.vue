<template>
  <q-page>
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section style="padding-top: 12px;">
          <!-- TITLE -->
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
                <q-item-label>Formulir Karyawan</q-item-label>
              </q-item-section>
            </q-toolbar-title>
          </q-toolbar>
        </q-card-section>
        <q-card-section>
          <q-form>
            <div :class="!isMobileViewport ? 'row q-col-gutter-md' : 'row'">
              <div class="row col-12 col-xs-2 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <!-- Nama -->
                <div
                  :style="isMobileViewport ? 'margin-bottom:10px' : ''"
                  class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                >
                  <q-input
                    ref="name_employee"
                    readonly
                    maxlength="50"
                    v-model="form.name_employee"
                    label="Nama"
                  />
                </div>

                <!-- Position -->
                <div
                  :style="isMobileViewport ? 'margin-bottom:10px' : ''"
                  class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                >
                  <q-input
                    ref="position_employee"
                    readonly
                    :value="form.position_employee | position"
                    label="Jabatan"
                  ></q-input>
                </div>

                <!-- NIK -->
                <div
                  :style="isMobileViewport ? 'margin-bottom:10px' : ''"
                  class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                >
                  <q-input
                    ref="nik_employee"
                    readonly
                    maxlength="16"
                    type="text"
                    v-model="form.nik_employee"
                    label="Nomor Induk"
                  />
                </div>

                <!-- Telpon -->
                <div
                  :style="isMobileViewport ? 'margin-bottom:10px' : ''"
                  class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                >
                  <q-input
                    ref="telpon_employee"
                    readonly
                    maxlength="20"
                    type="text"
                    v-model="form.telpon_employee"
                    label="Telpon"
                  />
                </div>

                <!-- Email -->
                <div
                  :style="isMobileViewport ? 'margin-bottom:10px' : ''"
                  class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                >
                  <q-input
                    ref="email_employee"
                    readonly
                    maxlength="50"
                    type="text"
                    v-model="form.email_employee"
                    label="Email"
                  />
                </div>

                <!-- Birth Place -->
                <div
                  :style="isMobileViewport ? 'margin-bottom:10px' : ''"
                  class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                >
                  <q-input
                    ref="birth_place_employee"
                    readonly
                    maxlength="50"
                    v-model="form.birth_place_employee"
                    label="Tempat Lahir"
                  />
                </div>

                <!-- Birth Date -->
                <div
                  :style="isMobileViewport ? 'margin-bottom:10px' : ''"
                  class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                >
                  <q-input
                    ref="birth_date_employee"
                    readonly
                    v-model="form.birth_date_employee"
                    mask="date"
                    label="Tanggal Lahir"
                  ></q-input>
                </div>

                <!-- Gender -->
                <div
                  :style="isMobileViewport ? 'margin-bottom:10px' : ''"
                  class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                >
                  <q-input
                    ref="birth_date_employee"
                    readonly
                    :value="form.gender_employee | gender"
                    label="Jenis Kelamin"
                  ></q-input>
                </div>

                <!-- Marital -->
                <div
                  :style="isMobileViewport ? 'margin-bottom:10px' : ''"
                  class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                >
                  <q-input
                    ref="birth_date_employee"
                    readonly
                    :value="form.marital_employee | marital"
                    label="Status Pernikahan"
                  ></q-input>
                </div>

                <!-- Alamat -->
                <div :style="isMobileViewport ? 'margin-bottom:10px' : ''" class="col-12">
                  <q-input
                    readonly
                    ref="address_employee"
                    v-model="form.address_employee"
                    label="Alamat"
                    type="textarea"
                  />
                </div>
              </div>

              <div class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div style="display: flex;justify-content: center; margin-bottom: 30px;">
                  <img
                    v-once
                    style="height:100%;width:100%; border-radius:10px;"
                    v-pointer
                    id="image"
                    @click="onZoom(form.photo_employee)"
                    :src="form.photo_employee"
                  />
                </div>
              </div>
            </div>

            <!-- <q-separator spaced /> -->

            <div
              :style="isMobileViewport ? 'display: flex; justify-content: center; margin-top: 0px;' : ''"
              :class="!isMobileViewport ? 'q-pt-lg' : ''"
            >
              <q-btn
                class
                style="min-width:150px"
                color="primary"
                label="ubah "
                :to="{ name: 'formulir-karyawan' }"
                :loading="loading"
                outline
              >
                <q-icon class="q-pl-lg" name="edit" />
              </q-btn>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>

    <!-- place QPageScroller at end of page -->
    <scroll-to-top />
  </q-page>
</template>

<script>
import role_auth from "../../../helpers/role_auth";

export default {
  mixins: [role_auth],
  data() {
    return {
      loading: false,
      buildURL: `/api/v1/employee`
    };
  },
  computed: {
    password_confirmation() {
      return this["get_formulir_karyawan_password_confirmation"];
    },
    form() {
      return this["get_formulir_karyawan_form"];
    },
    updated() {
      return this.$store.state.formulir_karyawan.data.update;
    },
    position_employee: {
      get() {
        return this.form.position_employee.toString();
      },
      set(val) {
        this.form.position_employee = val.toString();
      }
    }
    // checkImageSync() {
    //   return function(val) {
    //     return this.checkImage(val);
    //   };
    // }
  },
  methods: {
    // imageExists(image_url) {
    //   var http = new XMLHttpRequest();
    //   http.open("HEAD", image_url, false);
    //   http.send();
    //   return http.status != 404;
    //   exist
    //     ? this.form.photo_employee
    //     : "https://cdn.dribbble.com/users/37530/screenshots/2485318/no-results.png";
    // }
  },
  mounted() {
    // var img = new Image();

    // img.onload = function() {
    //   // alert("good");
    //   document.getElementById("image").src = this.form.photo_employee;
    // };
    // img.onerror = function() {
    //   // alert("bad");
    //   document.getElementById("image").src =
    //     "https://cdn.dribbble.com/users/37530/screenshots/2485318/no-results.png";
    // };
    // img.src = this.form.photo_employee;

    this.imageExist(this.form.photo_employee, "image");

    if (this.get_formulir_karyawan_update == false) this.$router.back();
  }
};
</script>

<style lang="css" scoped>
.my-content {
  padding: 10px 15px;
  background: rgba(86, 61, 124, 0.15);
  border: 1px solid rgba(86, 61, 124, 0.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>