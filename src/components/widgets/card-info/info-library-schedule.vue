<template>
  <q-card class="q-mt-sm">
    <q-card-section>
      <q-item>
        <q-item-section v-if="!isMobileViewport" avatar>
          <q-icon name="message" class="text-secondary" style="font-size: 3rem;" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold">
            <q-icon
              v-if="isMobileViewport"
              name="message"
              class="text-secondary"
              style="font-size: 2rem; padding-right:10px"
            />Info
          </q-item-label>

          <q-item-label
            caption
            class="text-black"
            style="font-size: 13px;"
          >Halaman ini berisi data tentang jadwal kerja karyawan (shift) yang melakukan inspeksi. Admin dapat merubah jadwal-jadwal tersebut sesuai kebutuhan. Sebaiknya tidak merubah kecuali penting.</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>