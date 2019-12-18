<template>
  <div id="q-app">
    <!-- opsional scroll to top: TARGET -->
    <div id="top-element" style="display:none"></div>
    <transition name="fade">
      <page-init v-if="init" />
    </transition>
    <keep-alive>
      <vue-page-transition>
        <router-view v-if="isOnline && !init" />
      </vue-page-transition>
    </keep-alive>
    <page-connection v-if="isOffline && !init" />
  </div>
</template>

<script>
import PageConnection from "./pages/connection.vue";
import PageInit from "./pages/init.vue";

export default {
  name: "App",
  components: {
    PageConnection,
    PageInit
  },
  data() {
    return {
      init: true
    };
  },
  methods: {
    actionVuex() {
      this.set_init({
        type: "initialized",
        data: false
      });
    }
  },
  beforeCreate() {
    const vm = this;
    vm.$axios
      .get("/api/v1/init")
      .then(function(response) {
        // console.log("init", response);
        vm.init = false;
        vm.actionVuex();
      })
      .catch(function(error) {
        vm.init = false;
        vm.actionVuex();
      });

    // var OneSignal = window.OneSignal || [];
    // OneSignal.push(function() {
    //   OneSignal.init({
    //     appId: "a0d15240-3412-476b-91c0-4f69cfd89cae",
    //     autoResubscribe: true,
    //     notifyButton: {
    //       enable: true
    //     }
    //     // allowLocalhostAsSecureOrigin: true,
    //   });
    //   OneSignal.showNativePrompt();
    // });
    // console.log(biodata);
    // console.log(this.get_karyawan_biodata_separator);
  }
};
</script>
