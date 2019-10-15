<template>
  <!-- <q-inner-loading :showing="visible"> -->
  <q-spinner-facebook v-if="visible" color="primary" size="2em" />
  <!-- </q-inner-loading> -->
</template>

<script>
export default {
  props: {
    _visible: {
      default: false
    }
  },
  data() {
    return {
      visible: this._visible
    };
  },
  watch: {
    visible() {
      setTimeout(() => {
        this.visible = false;
      }, 2500);
    }
  }
};
</script>