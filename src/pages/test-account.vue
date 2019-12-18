<template>
  <fragment>
    <table v-if="!isMobileViewport">
      <tr>
        <th>Admin</th>
        <td>
          <q-item dense>
            <q-item-section>
              <q-item-label caption>Email</q-item-label>
              <q-item-label>admin@gmail.com</q-item-label>
              <hr />
              <q-item-label caption>Password</q-item-label>
              <q-item-label>123456</q-item-label>
            </q-item-section>
          </q-item>
        </td>
      </tr>
      <tr>
        <th>Supervisor</th>
        <td>
          <q-item dense>
            <q-item-section>
              <q-item-label caption>Email</q-item-label>
              <q-item-label
                >supervisor1@gmail.com, supervisor2@gmail.com</q-item-label
              >
              <hr />
              <q-item-label caption>Password</q-item-label>
              <q-item-label>123456</q-item-label>
            </q-item-section>
          </q-item>
        </td>
      </tr>
      <tr>
        <th>Temperature Man</th>
        <td>
          <q-item dense>
            <q-item-section>
              <q-item-label caption>Email</q-item-label>
              <q-item-label
                >temperatur1@gmail.com, temperatur2@gmail.com,
                temperatur3@gmail.com, temperatur4@gmail.com</q-item-label
              >
              <hr />
              <q-item-label caption>Password</q-item-label>
              <q-item-label>123456</q-item-label>
            </q-item-section>
          </q-item>
        </td>
      </tr>
    </table>

    <table v-else>
      <tr>
        <td>
          <q-item dense>
            <q-item-section>
              <q-item-label caption>Email</q-item-label>
              <q-item-label>admin@gmail.com</q-item-label>
              <hr />
              <q-item-label caption>Password</q-item-label>
              <q-item-label>123456</q-item-label>
            </q-item-section>
          </q-item>
        </td>
      </tr>
      <tr>
        <td>
          <q-item dense>
            <q-item-section>
              <q-item-label caption>Email</q-item-label>
              <q-item-label
                >supervisor1@gmail.com, supervisor2@gmail.com</q-item-label
              >
              <hr />
              <q-item-label caption>Password</q-item-label>
              <q-item-label>123456</q-item-label>
            </q-item-section>
          </q-item>
        </td>
      </tr>
      <tr>
        <td>
          <q-item dense>
            <q-item-section>
              <q-item-label caption>Email</q-item-label>
              <q-item-label
                >temperatur1@gmail.com, temperatur2@gmail.com,
                temperatur3@gmail.com, temperatur4@gmail.com</q-item-label
              >
              <hr />
              <q-item-label caption>Password</q-item-label>
              <q-item-label>123456</q-item-label>
            </q-item-section>
          </q-item>
        </td>
      </tr>
    </table>
  </fragment>
</template>

<script>
export default {};
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
