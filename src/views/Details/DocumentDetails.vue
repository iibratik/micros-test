<template>
  <div class="d-flex justify-center">
    <v-card class="v-col-6" v-if="document">
      <v-card-title primary-title>
        <span class="document-card-title">
          {{ document.typeOfDocument }}
        </span>
      </v-card-title>
      <v-card-text>
        <ul class="document-lists">
          <li
            v-for="(title, prop) in documentTitles"
            :key="prop"
            class="document-list"
          >
            <span class="document-list-title"
              >{{ title }}: <span class="info">{{ document[prop] }}</span></span
            >
          </li>
        </ul>
      </v-card-text>
      <v-btn color="primary" to="/documents" prepend-icon="mdi-arrow-left-bold" variant="outlined"> Обратно к списку </v-btn>
    </v-card>
    <v-card class="d-flex flex-column align-center" v-else>
      <!-- В случае если ничего не прогрузилось -->
      <v-card-title primary-title>
        Вернитесь обратно чтобы загрузить данные
      </v-card-title>
      <v-btn color="primary" prepend-icon="mdi-arrow-left-bold" to="/documents" variant="outlined"> Обратно к списку </v-btn>
    </v-card>
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
  data() {
    return {
      documentTitles: {
        documentNumber: 'Номер документа',
        dateDocument: 'Дата документа',
        description: 'Описание',
        typeDocument: 'Тип',
        proxy: 'Доверенность',
      },
    }
  },
}
</script>
