<template>
  <div>
    <v-row class="justify-center">
      <v-col theme="surface" cols="10" style="margin-bottom: 70px;">
        <SortDataTable :link="link" :headers="headers" :items="documents" :title="title" :search="search"></SortDataTable>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SortDataTable from '@/components/SortDataTable.vue'
export default {
  components: { SortDataTable },
  data() {
    return {
      search: '',
      link:"document",
      headers: [
        {
          align: 'start',
          sortable: false,
          key: 'typeOfDocument', title: 'Тип документа'
        },
        { key: 'documentNumber', title: 'Номер документа' },
        { key: 'dateDocument', title: 'Дата создания' },
        { key: 'belongTo', title: 'Владелец' },
        { key: 'typeDocument', title: 'Тип документа' },
      ],
      title: "Список документов"
    }
  },
  computed: {
    documents() {
      return this.$store.getters.getDocuments
    },
    
  },
  created() {
    this.$store.dispatch('fetchSortedDocuments') // Действие для получения списка Рабочих
  },
}
</script>
