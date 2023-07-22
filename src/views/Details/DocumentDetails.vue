<!-- DocumentDetailsPage.vue -->

<template>
  <div>
    <h2>{{ document.typeOfDocument }}</h2>
    <p>{{ document.documentNumber }}</p>
    <p>{{ document.dateDocument }}</p>
    <p>{{ document.belongTo }}</p>

  </div>
</template>

<script>
export default {
  computed: {
    document() {
      const documentId = parseInt(this.$route.params.id)
      return this.$store.getters.getDocumentById(documentId)
    },
  },
}
</script>
