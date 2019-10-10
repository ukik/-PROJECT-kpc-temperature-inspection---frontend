<template>
  <div>
    <!-- <q-linear-progress :value="progress" :buffer="buffer" />

    <q-linear-progress :value="progress" :buffer="buffer" color="warning" class="q-mt-sm" />

    <q-linear-progress :value="progress" :buffer="buffer" color="secondary" class="q-mt-sm" />

    <q-linear-progress :value="progress" :buffer="buffer" color="accent" class="q-mt-sm" />-->
    <!-- <q-linear-progress :value="progress" :buffer="buffer" color="negative" class="q-mt-sm" /> -->

    <q-linear-progress
      v-show="visible"
      :value="progress"
      :buffer="buffer"
      color="white"
      track-color="white"
      class="q-mt-sm"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0.0,
      buffer: 0.0,
      visible: true
    };
  },

  mounted() {
    this.interval = setInterval(() => {
      if (this.progress >= 1) {
        clearInterval(this.interval);
        clearInterval(this.bufferInterval);
        this.visible = false;
        this.progress = 0.0;
        this.buffer = 0.0;
        return;
      }

      this.progress = Math.min(1, this.buffer, this.progress + 0.1);
    }, 50 + Math.random() * 200);

    this.bufferInterval = setInterval(() => {
      if (this.buffer < 1) {
        this.buffer = Math.min(1, this.buffer + Math.random() * 0.2);
      }
    }, 100);
  },

  beforeDestroy() {
    clearInterval(this.interval);
    clearInterval(this.bufferInterval);
  }
};
</script>