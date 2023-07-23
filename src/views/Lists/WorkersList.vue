<template>
  <div>
    <v-row class="justify-center">
      <v-col theme="surface" cols="10" style="margin-bottom: 70px;">
        <DataTable :headers="headers" :items="workers" :title="title" :search="search"></DataTable>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
export default {
  components: { DataTable },
  data() {
    return {
      search: '',
      headers: [
        {
          align: 'start',
          sortable: false,
          key: 'firstName', title: 'Имя'
        },
        { key: 'lastName', title: 'Фамилия' },
        { key: 'dateOfBirth', title: 'Дата рождения' },
        { key: 'passportSeries', title: 'Серия пасспорта' },
        // { key: "link", title:'Страница рабочего'},
        { key: 'gender', title: 'Пол' },
      ],
      title: "Список рабочих"
    }
  },
  computed: {
    workers() {
      return this.$store.getters.getWorkers
    },
  },
  created() {
    this.$store.dispatch('fetchWorkers') // Действие для получения списка Рабочих
  },
}
</script>
