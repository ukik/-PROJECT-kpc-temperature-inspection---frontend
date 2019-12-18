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
          >Halaman ini berisi data tentang inspeksi conveyor yang bisa diisi oleh Temperature Man (TM) atau Admin. Data yang masuk wajib divalidasi oleh Admin agar bisa tampil di halaman laporan inspeksi. Dapat diakses oleh Admin, Pengawas, dan Temperature Man. Temperature Man tidak diizinkan mengakses data inspeksi karyawan lainnya.</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>