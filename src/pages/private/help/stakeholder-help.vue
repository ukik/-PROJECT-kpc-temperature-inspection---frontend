<template>
  <fragment>
    <div :class="!isMobileViewport ? 'row q-col-gutter-md' : 'row q-pt-md'">
      <div class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <q-img
          :src="poltak_sinaga_base64"
          @click="onZoom(poltak_sinaga_base64)"
          style="width: 100%"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            General Manager KPC
            <br />Coal Processing & Handling
          </div>
        </q-img>
      </div>
      <div class="row col-12 col-xs-2 col-sm-12 col-md-8 col-lg-8 col-xl-8">
        <table>
          <tr>
            <th colspan="2">Team Member</th>
          </tr>
          <tr>
            <th>Sponsor</th>
            <td>Poltak Sinaga (GM CPHD)</td>
          </tr>
          <tr>
            <th>Champion</th>
            <td>Edy Sanyoto (Manager CPPM)</td>
          </tr>
          <tr>
            <th>Facilitator</th>
            <td>Indra Ristiadi (Supt Mechanical CPPM)</td>
          </tr>
          <tr>
            <th>Project Leader</th>
            <td>M. Iqbal</td>
          </tr>
          <tr>
            <th colspan="2">Member</th>
          </tr>
          <tr>
            <th></th>
            <td style="padding-left: 5px !important;">
              <q-item dense style="padding: 0px;">
                <q-item-section avatar>
                  <q-radio value val="orange" color="orange" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Nikol Sidabutar</q-item-label>
                </q-item-section>
              </q-item>
              <q-item dense style="padding: 0px;">
                <q-item-section avatar>
                  <q-radio value val="orange" color="orange" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Parjono</q-item-label>
                </q-item-section>
              </q-item>
              <q-item dense style="padding: 0px;">
                <q-item-section avatar>
                  <q-radio value val="orange" color="orange" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Madia</q-item-label>
                </q-item-section>
              </q-item>
              <q-item style="padding: 0px;">
                <q-item-section avatar>
                  <q-radio value val="orange" color="orange" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Ariyadi</q-item-label>
                </q-item-section>
              </q-item>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </fragment>
</template>



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