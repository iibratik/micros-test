<template>
  <div>
    <v-row class="justify-center">
      <v-col theme="surface" cols="10" style="margin-bottom: 70px;">
        <DataTable :headers="headers" :items="documents" :title="title" :search="search"></DataTable>
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
    this.$store.dispatch('fetchDocuments') // Действие для получения списка Рабочих
  },
}
</script>
