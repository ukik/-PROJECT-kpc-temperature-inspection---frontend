<template>
  <q-tabs align="left" v-if="navs.length > 0">
    <!-- <q-route-tab v-for="(nav, index) in navs" :key="index" :to="nav.to" :label="nav.label" /> -->
  </q-tabs>
</template>

<script>
export default {
  props: ["navs"],
  mounted() {
    console.log(this.navs[0].to);
  }
};
</script>
