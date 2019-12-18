<template>
  <q-layout view="lHr LpR lfr">
    <!-- <test-account /> -->
    <q-page-container>
      <div class="demo-ribbon"></div>
      <router-view />
    </q-page-container>

    <q-dialog v-model="dialog">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <q-item dense style="padding: 0px;">
            <q-item-section avatar>
              <q-icon name="how_to_reg" size="lg" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <div class="text-h6">Demo User</div>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>

        <q-card-section>
          <test-account />
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal q-mr-sm q-mb-sm">
          <q-btn outline label="Tutup" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-sticky
      v-if="$route.name == 'login'"
      position="top-right"
      :offset="[18, 18]"
      style="z-index:9"
    >
      <q-btn
        round
        color="primary"
        @click="dialog = true"
        outline
        icon="contact_mail"
        class="bg-white"
        size="lg"
      >
        <q-tooltip
          content-style="font-size: 14px"
          anchor="center left"
          self="center right"
        >Demo User</q-tooltip>
      </q-btn>
    </q-page-sticky>
  </q-layout>
</template>

<script>
import TestAccount from "../pages/test-account";

export default {
  components: {
    TestAccount
  },
  data() {
    return {
      dialog: false
    };
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

.demo-ribbon {
  width: 100%;
  height: 48vh;
  background-color: #93dcff;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  background-image: url(http://www.kpc.co.id/images/article/image/37/port_1_1-wan.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
