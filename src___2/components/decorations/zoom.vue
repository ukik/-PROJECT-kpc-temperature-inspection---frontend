<template>
  <div class="q-pa-md">
    <q-btn label="With QBar" color="primary" @click="onZoom" />
  </div>
</template>

<script>
export default {
  props: {
    zoom: {
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
    }
  },
  data() {
    return {
      image: this.zoom
    };
  },
  methods: {
    onZoom() {
      // document.getElementById("image-zoom_3RXUOVXR_17")
      this.$zoom(
        this.image,
        // "https://community.openenergymonitor.org/uploads/default/original/2X/3/3fc1bd5759825d0a69cc61238cc1cd1dd2604130.png",
        {
          allowZoom: true, // When false, zooming is not available. Image will be shown on 100% size.
          autoScale: true, // When true, if the image is larger than the screen, it will be automatically scaled down until suitable. Along with 'allowZoom'
          closeOnClickModal: true // When false, clicking modal layer will close the viewer.
        }
      );

      document.querySelector(".__image-zoom__image").style.display = "none";
      this.$nextTick(() => {
        document.querySelector(".__image-zoom__image").style.display =
          "initial";
        document.querySelector(".__image-zoom__image").className =
          "__image-zoom__image fade-in";
      });

      // dibawah untuk menghapus toolbar dipojok atas
      document.querySelector(".__image-zoom__close-container").style.display =
        "none";
    }
  }
};
</script>

<style>
.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>