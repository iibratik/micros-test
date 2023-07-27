<template>
  <v-card-title primary-title>
    {{ title }}
  </v-card-title>
  <v-data-table :headers="headersWithActions" :items="items">
      <template v-slot:item.actions="{ item  }">
        <v-btn class=" data-table-link" :to="`/${link}/${item.raw.id}`" text>
          Подробнее
        </v-btn>
      </template>
    </v-data-table>
</template>
<script>
export default {
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
}
</script>

<style lang="scss" scoped></style>
