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
          >Halaman ini berisi data tentang laporan inspeksi conveyor dalam bentuk grafik (chart) yang terbagi atas laporan mingguan, laporan bulanan, dan laporan kuartal. Dapat diakses oleh Admin, Pengawas, dan Temperature Man. Hanya menampilkan data yang sudah valid.</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>