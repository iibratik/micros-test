<template>
  <div>
    <v-row class="justify-center">
      <v-col cols="2">
        <SortWin :sortParams="sortParams" @sort-changed="handleSortChanged" />
      </v-col>
      <v-col theme="surface" cols="8" style="margin-bottom: 70px">
        <v-card class="lists-card">
          <SortDataTable
            :link="link"
            :headers="headers"
            :items="documents"
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
      link: 'document',
      sortParams: [
        {
          paramTitle: 'Тип документа',
          paramValue: 'typeOfDocument',
          options: [
            { label: 'Счет-фактура', value: 'Счет-фактура', selected: false },
            { label: 'Доверенность', value: 'Доверенность', selected: false },
          ],
        },
        {
          paramTitle: 'Доп тип документа',
          paramValue: 'typeDocument',
          options: [
            { label: 'Стандартная', value: 'Стандартная', selected: false },
            {
              label: 'Дополнительная',
              value: 'Дополнительная',
              selected: false,
            },
          ],
        },
      ],
      headers: [
        {
          align: 'start',
          sortable: false,
          key: 'typeOfDocument',
          title: 'Тип документа',
        },
        { key: 'documentNumber', title: 'Номер документа' },
        { key: 'dateDocument', title: 'Дата создания' },
        { key: 'belongTo', title: 'Владелец' },
        { key: 'typeDocument', title: 'Тип документа' },
      ],
      title: 'Список документов',
    }
  },
  computed: {
    documents() {
      return this.$store.getters.getDocuments
    },
  },
  created() {
    this.$store.dispatch('fetchSortedDocuments') // Действие для получения списка документов
  },

  methods: {
    handleSortChanged(selectedOptions) {
      const sortDocumentParam = selectedOptions.join('&')
      // Вызываем action для обновления параметра сортировки
      this.$store.dispatch('updateSortDocumentsParams', sortDocumentParam)
      // Вызываем action для запроса отсортированных данных
      this.$store.dispatch('fetchSortedDocuments')
    },
  },
}
</script>
