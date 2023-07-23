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
        <li v-for="(title, prop) in documentTitles" :key="prop" class="document-list">
          <span class="document-list-title">{{ title }}: <span class="info">{{ document[prop] }}</span></span>
        </li>
      </ul>
    </v-card-text>
  </v-card>
  <v-card v-else>
    <!-- В случае если ничего не прогрузилось -->
    <v-card-title primary-title>
    Вернитесь обратно чтобы загрузить данные
    </v-card-title>
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
        proxy:'Доверенность'
      }
    }
  }
}
</script>
