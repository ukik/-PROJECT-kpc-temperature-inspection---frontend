<template>
  <!-- place QPageScroller at end of page -->
  <q-page-scroller
    v-if="isMobileViewport"
    position="bottom-left"
    :scroll-offset="100"
    :offset="[10, 18]"
  >
    <div style="display: flex; justify-content: center; padding: 10px;">
      <q-btn
        icon="arrow_upward"
        class="bg-white"
        outline
        rounded
        color="negative"
        label="Back To Top"
        no-caps
      />
    </div>
  </q-page-scroller>
</template>