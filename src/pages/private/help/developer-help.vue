<template>
  <fragment>
    <!-- TITLE -->
    <q-toolbar class="q-mb-md">
      <q-item class="text-center full-width">
        <q-item-section>
          <q-item-label>
            <q-toolbar-title class="q-pa-sm">“The only way to do great work is to love what you do.”</q-toolbar-title>
          </q-item-label>
          <q-item-label>Satu-satunya cara mencapai keberhasilan adalah dengan mencintai proses mengerjakannya</q-item-label>
          <q-item-label style="font-size:14px" class="q-pt-sm" caption>Steve Jobs</q-item-label>
        </q-item-section>
      </q-item>
    </q-toolbar>
    <div :class="!isMobileViewport ? 'row q-col-gutter-md' : 'row'">
      <div
        class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
        :style="isMobileViewport ? 'margin-bottom:15px' : ''"
      >
        <q-card>
          <q-card-section class="text-center">
            <q-avatar size="250px">
              <img src="~assets/developers/ukik.jpg" @click="onZoom(ukik_base64)" />
            </q-avatar>
          </q-card-section>
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="sentiment_satisfied_alt" />
              </q-item-section>

              <q-item-section>
                <q-item-label caption>Nama</q-item-label>
                <q-item-label>Muhamad Duki</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="bookmarks" />
              </q-item-section>

              <q-item-section>
                <q-item-label caption>Deskripsi</q-item-label>
                <q-item-label>Programmer, Analyst & PM</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="amber" name="room" />
              </q-item-section>

              <q-item-section class="q-pb-sm">
                <q-item-label caption>Location</q-item-label>
                <q-item-label>Samarinda</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <div
        class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
        :style="isMobileViewport ? 'margin-bottom:15px' : ''"
      >
        <q-card>
          <q-card-section class="text-center">
            <q-avatar size="250px">
              <img src="~assets/developers/ahmad.jpg" @click="onZoom(ahmad_base64)" />
            </q-avatar>
          </q-card-section>

          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="sentiment_satisfied_alt" />
              </q-item-section>

              <q-item-section>
                <q-item-label caption>Nama</q-item-label>
                <q-item-label>Ahmad</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="bookmarks" />
              </q-item-section>

              <q-item-section>
                <q-item-label caption>Deskripsi</q-item-label>
                <q-item-label>Programmer & Tester</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="amber" name="room" />
              </q-item-section>

              <q-item-section class="q-pb-sm">
                <q-item-label caption>Location</q-item-label>
                <q-item-label>Tokyo</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <div
        class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
        :style="isMobileViewport ? 'margin-bottom:15px' : ''"
      >
        <q-card>
          <q-card-section class="text-center">
            <q-avatar size="250px">
              <img src="~assets/developers/fery.jpg" @click="onZoom(fery_base64)" />
            </q-avatar>
          </q-card-section>

          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="sentiment_satisfied_alt" />
              </q-item-section>

              <q-item-section>
                <q-item-label caption>Nama</q-item-label>
                <q-item-label>Feriansyah</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="bookmarks" />
              </q-item-section>

              <q-item-section>
                <q-item-label caption>Deskripsi</q-item-label>
                <q-item-label>Programmer & UI/UX</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="amber" name="room" />
              </q-item-section>

              <q-item-section class="q-pb-sm">
                <q-item-label caption>Location</q-item-label>
                <q-item-label>Samarinda</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <div
        class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"
        :style="isMobileViewport ? 'margin-bottom:15px' : ''"
      >
        <q-card>
          <q-card-section class="text-center">
            <q-avatar size="250px">
              <img src="~assets/developers/faza.jpg" @click="onZoom(faza_base64)" />
            </q-avatar>
          </q-card-section>
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="sentiment_satisfied_alt" />
              </q-item-section>

              <q-item-section>
                <q-item-label caption>Nama</q-item-label>
                <q-item-label>Faza Alameka</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="bookmarks" />
              </q-item-section>

              <q-item-section>
                <q-item-label caption>Deskripsi</q-item-label>
                <q-item-label>Public Relation & Legal</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="amber" name="room" />
              </q-item-section>

              <q-item-section class="q-pb-sm">
                <q-item-label caption>Location</q-item-label>
                <q-item-label>Samarinda</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <div class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <q-card>
          <q-card-section class="text-center">
            <q-avatar size="250px">
              <img src="~assets/developers/jordan.jpg" @click="onZoom(jordan_base64)" />
            </q-avatar>
          </q-card-section>
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="sentiment_satisfied_alt" />
              </q-item-section>

              <q-item-section>
                <q-item-label caption>Nama</q-item-label>
                <q-item-label>Jordan Dimas Ariesta</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="bookmarks" />
              </q-item-section>

              <q-item-section>
                <q-item-label caption>Deskripsi</q-item-label>
                <q-item-label>Networking & Service</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="amber" name="room" />
              </q-item-section>

              <q-item-section class="q-pb-sm">
                <q-item-label caption>Location</q-item-label>
                <q-item-label>Samarinda</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {
  computed: {
    ahmad() {
      return `height: 300px;background-image: url(${this.ahmad_base64});width: 100%;background-repeat-x: no-repeat;background-size: cover; background-position: initial;`;
    }
  }
};
</script>

<style scoped>
table,
td,
th {
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 15px;
}
</style>


    