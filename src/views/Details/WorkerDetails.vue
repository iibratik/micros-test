<template>
  <div>
    <h2>{{ worker.firstName }} {{ worker.lastName }}</h2>
    <p>Дата рождения: {{ worker.dateOfBirth }}</p>
    <p>Серия паспорта: {{ worker.passportSeries }}</p>
    <p>Пол: {{ worker.gender }}</p>
    <p>Активен: {{ worker.isActive ? 'Да' : 'Нет' }}</p>

    <h3>Документы, принадлежащие рабочему:</h3>
    <ul v-if="workerDocuments.length > 0">
      <li v-for="document in workerDocuments" :key="document.id">
        {{ document.typeOfDocument }} - {{ document.documentNumber }}
      </li>
    </ul>
    <p v-else>Нет документов для этого рабочего.</p>
  </div>
</template>

<script>
export default {
  computed: {
    worker() {
      const workerId = parseInt(this.$route.params.id);
      return this.$store.getters.getWorkerById(workerId);
    },
    workerDocuments() {
      const workerId = parseInt(this.$route.params.id);
      return this.$store.getters.getDocuments.filter(
        (document) => document.belongTo === this.worker.firstName
      );
    },
  },
  methods: {
    // Метод для получения документа по его id
    getDocumentById(id) {
      return this.$store.getters.getDocumentById(id);
    },
  },
  async created() {
    // Получаем документы и рабочих при загрузке страницы
    await this.$store.dispatch("fetchDocuments");
    await this.$store.dispatch("fetchWorkers");
  },
};
</script>
 