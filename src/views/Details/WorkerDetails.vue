<!-- WorkerDetailsPage.vue -->

<template>
  <div>
    <h2>{{ worker.firstName }} {{ worker.lastName }}</h2>
    <p>Дата рождения: {{ worker.dateOfBirth }}</p>
    <p>Серия паспорта: {{ worker.passportSeries }}</p>
    <p>Пол: {{ worker.gender }}</p>
    <p>Активен: {{ worker.isActive ? 'Да' : 'Нет' }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    worker() {
      const workerId = parseInt(this.$route.params.id)
      return this.$store.getters.getWorkerById(workerId)
    },
  },
}
</script>
