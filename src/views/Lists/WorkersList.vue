<template>
  <div>
    <v-row class="justify-center">
      <v-col cols="2">
        <SortWin
          :sortParams="sortParams"
          @sort-changed="handleSortChanged"
        />
      </v-col>
      <v-col theme="surface" cols="8" style="margin-bottom: 70px">
        <v-card>
        <SortDataTable
          :link="link"
          :headers="headers"
          :items="workers"
          :title="title"
          :search="search"
        ></SortDataTable>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SortDataTable from '@/components/SortDataTable.vue'
import SortWin from '@/components/SortWin.vue'
export default {
  components: { SortDataTable, SortWin },
  data() {
    return {
      search: '',
      link: 'worker',
      sortParams: [
        {
          paramTitle: 'Пол',
          paramValue: 'gender',
          options: [
            { label: 'Мужчины', value: 'Мужской', selected: false },
            { label: 'Женщины', value: 'Женский', selected: false },
          ],
        },
        {
          paramTitle: 'Активность',
          paramValue: 'isActive',
          options: [
            { label: 'Активные', value: true, selected: false },
            { label: 'Неактивные', value: false, selected: false },
          ],
        },
      ],
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
  this.$store.dispatch('fetchSortedWorkers'); // Действие для получения списка Рабочих
},

methods: {
  handleSortChanged(selectedOptions) {
    const sortWorkerParam = selectedOptions.join('&');
    // Вызываем action для обновления параметра сортировки
    this.$store.dispatch('updateSortWorkersParams', sortWorkerParam);
    // Вызываем action для запроса отсортированных данных
    this.$store.dispatch('fetchSortedWorkers');
  }
}
}
</script>
