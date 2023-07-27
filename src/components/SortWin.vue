<template>
  <v-card class="">
    <v-card-title class="data-table-title" primary-title>
      {{ cardTitle }}
    </v-card-title>
    <v-card-text>
      <p class=""></p>
      <div class="text--primary">
        <ul class="sort-params">
          <li
            v-for="param in sortParams"
            :key="param.paramTitle"
            class="sort-param"
          >
            <h3 class="param__title">{{ param.paramTitle }}</h3>
            <v-checkbox
              v-for="option in param.params"
              :key="option.label"
              :label="option.label"
              v-model="option.selected"
            ></v-checkbox>
          </li>
        </ul>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    cardTitle: {
      type: String,
      required: true,
    },
    sortParams: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
/* Ваши стили */
</style>
