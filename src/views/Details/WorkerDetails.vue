<template>
  <div class="d-flex justify-center" >
    <v-card class="v-col-10 justify-center" style="margin-bottom: 50px;" v-if="worker">
      <v-card-title class="font-weight-bold">
        {{ worker.firstName }} {{ worker.lastName }}
      </v-card-title>
      <v-card-text>
        <ul class="worker-lists">
          <li class="worker-list" v-for="item in workerData" :key="item.title">
            <span class="worker-info-title">
              {{ item.title }}: <span>{{ item.data }}</span>
            </span>
          </li>
          <li class="worker-list">
            <span class="worker-info-title">Активность: </span>
            <v-icon
              v-if="worker.isActive"
              size="large"
              color="primary"
              icon="mdi-checkbox-marked"
            ></v-icon>
            <v-icon
              v-if="!worker.isActive"
              size="large"
              color="primary"
              icon="mdi-alpha-x-box"
            ></v-icon>
          </li>
        </ul>
        <DataTable
          :title="`Документы, принадлежащие рабочему:`"
          :items="workerDocuments"
          :headers="documentHeader"
          :link="`document`"
          v-if="workerDocuments && workerDocuments.length > 0"
        />
        <v-card-subtitle v-else>Нет документов для этого рабочего.</v-card-subtitle>
      </v-card-text>
    </v-card>
  <v-card v-else>
    <!-- Если что-то не загрузится -->
    Вернитесь в начало для повторной загрузки данных
  </v-card>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    DataTable,
  },
  data() {
    return {
      workerData: [
        {
          title: 'Дата рождения',
          data: '',
        },
        {
          title: 'Серия паспорта',
          data: '',
        },
        {
          title: 'Пол',
          data: '',
        },
      ],
      documentHeader: [
        {
          align: 'start',
          sortable: true,
          key: 'typeOfDocument',
          title: 'Тип документа',
        },
        { key: 'documentNumber', title: 'Номер документа' },
        { key: 'dateDocument', title: 'Дата создания' },
        { key: 'belongTo', title: 'Владелец', sortable: false },
        { key: 'typeDocument', title: 'Тип документа' },
      ],
    }
  },
  computed: {
    worker() {
      const workerId = parseInt(this.$route.params.id)
      return this.$store.getters.getWorkerById(workerId)
    },
    workerDocuments() {
      if (!this.worker) return null
      const workerId = parseInt(this.$route.params.id)
      return this.$store.getters.getDocuments.filter(
        (document) =>
          document.belongTo ===
          `${this.worker.firstName} ${this.worker.lastName}`
      )
    },
  },
  methods: {
    // Метод для получения документа по его id
    getDocumentById(id) {
      return this.$store.getters.getDocumentById(id)
    },
  },
  async created() {
    // Получаем документы и рабочих при загрузке страницы
    await this.$store.dispatch('fetchDocuments')
    await this.$store.dispatch('fetchWorkers')

    // Обновляем данные рабочего при загрузке страницы
    this.updateWorkerData()
  },
  watch: {
    worker(newWorker) {
      if (newWorker) {
        // Обновляем данные рабочего при каждом изменении worker
        this.updateWorkerData()
      }
    },
  },
  methods: {
    updateWorkerData() {
      if (this.worker) {
        this.workerData = [
          {
            title: 'Дата рождения',
            data: this.worker.dateOfBirth,
          },
          {
            title: 'Серия паспорта',
            data: this.worker.passportSeries,
          },
          {
            title: 'Пол',
            data: this.worker.gender,
          },
        ]
      }
    },
  },
}
</script>
