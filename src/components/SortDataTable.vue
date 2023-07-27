<template>
  <v-card>
    <v-card-title>
      <span class="data-table-title">{{ title }}</span>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Поиск"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table no-data-text="Нет данных!" :loading="loaderStatus"  :headers="headersWithActions" :items="items" :search="search">
      <template v-slot:item.actions="{ item  }">
        <v-btn class=" data-table-link" :to="`/${link}/${item.raw.id}`" text>
          Подробнее
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      loaderStatus: true
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    link:{
      type: String,
      required: true,
    }
  },
  watch:{
    items: {
      immediate: true, // Вызвать обработчик наблюдения сразу после монтирования компонента
      handler(newItems) {
        // Если items пустой, установить loaderStatus в true, иначе в false
        this.loaderStatus = newItems.length === 0;
      }
    }
  },
  computed: {
    headersWithActions() {
      return [
        ...this.headers,
        { key: 'actions', title: 'Действия ', sortable: false, },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
/* Add any custom styles here */
</style>
