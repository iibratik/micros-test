<template>
  <v-card>
    <v-card-title>
      <span class="data-table-title">{{ title }}</span>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Поиск"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headersWithActions" :items="items" :search="search">
      <template v-slot:item.actions="{ item  }">
        <v-btn class=" data-table-link" :to="`/${link}/${item.raw.id}`" @click="viewItem(item)" text>
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
  computed: {
    headersWithActions() {
      return [
        ...this.headers,
        { key: 'actions', title: 'Действия ', sortable: false, },
      ]
    },
  },
  methods: {
    viewItem(item) {
      // Handle the action when "View" button is clicked
      console.log('Viewing item:', item.raw.id)
      // You can replace the console.log with your custom logic to view the item in detail.
    },
  },
}
</script>

<style lang="scss" scoped>
/* Add any custom styles here */
</style>
