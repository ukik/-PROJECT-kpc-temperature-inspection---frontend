<template>
  <div id="q-app">
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // console.log(biodata);
    console.log(this.get_karyawan_biodata_separator);
  }
};
</script>
