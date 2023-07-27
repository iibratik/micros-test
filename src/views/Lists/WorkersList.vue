<template>
  <div>
    <v-row class="justify-center">
      <v-col cols="2">
        <SortWinVue :cardTitle="cardTitle" />
      </v-col>
      <v-col theme="surface" cols="8" style="margin-bottom: 70px">
        <SortDataTable
          :link="link"
          :headers="headers"
          :items="workers"
          :title="title"
          :search="search"
        ></SortDataTable>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SortDataTable from '@/components/SortDataTable.vue'
import SortWinVue from '@/components/SortWin.vue'
export default {
  components: { SortDataTable, SortWinVue },
  data() {
    return {
      search: '',
      link: 'worker',
      cardTitle: 'Сортировать по:',
      headers: [
        {
          align: 'start',
          sortable: false,
          key: 'firstName',
          title: 'Имя',
        },
        { key: 'lastName', title: 'Фамилия' },
        { key: 'dateOfBirth', title: 'Дата рождения' },
        { key: 'passportSeries', title: 'Серия пасспорта' },
        // { key: "link", title:'Страница рабочего'},
        { key: 'gender', title: 'Пол' },
      ],
      title: 'Список рабочих',
    }
  },
  computed: {
    workers() {
      return this.$store.getters.getWorkers
    },
  },
  created() {
    this.$store.dispatch('fetchSortedWorkes') // Действие для получения списка Рабочих
  },
}
</script>
