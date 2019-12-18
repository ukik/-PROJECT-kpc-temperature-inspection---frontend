<template>
  <div :class="isMobileViewport ? 'fixed-center text-center' : 'text-center'">
    <q-toolbar style="padding:0px; margin-top:100px">
      <q-toolbar-title class="text-h5 text-grey">
        <strong>Selamat Bergabung</strong>
      </q-toolbar-title>
    </q-toolbar>
    <p>
      <q-icon name="verified_user" color="green" size="100px" />
    </p>
    <p class="text-faded">
      <strong class="text-h6">Informasi</strong>
    </p>Terimakasih sudah melakukan verifikasi akun, jika login ternyata akun anda masih belum aktif, silahkan menghubungi admin.
    <ol class="text-left" style="margin:10px 15% 0 15%">
      <li
        class="text-green"
      >Verifikasi akun melalui tautan yang dikirim ke email yang didaftarkan (selesai).</li>
      <li>Hubungi admin untuk mendapatkan persetujuan penggunaan.</li>
    </ol>
    <br />Terimakasih.
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="secondary"
        icon="keyboard_arrow_left"
        outline
        @click="$router.replace({ name: 'login' })"
        label="login"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
