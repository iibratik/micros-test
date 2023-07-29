<template>
  <v-card class="">
    <v-card-title class="data-table-title" primary-title>
     Сортировать по:
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
              v-for="option in param.options"
              :key="option.label"
              :label="option.label"
              v-model="option.selected"
              @change="handleSortChange(param, option)"
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
    sortParams: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleSortChange(selectedParam, selectedOption) {
      // Unselect all other options in the same sorting parameter
      for (const option of selectedParam.options) {
        if (option !== selectedOption) {
          option.selected = false;
        }
      }

      // Create an array to hold the selected sorting options
      const sortOptions = [];
      for (const param of this.sortParams) {
        for (const option of param.options) {
          if (option.selected) {
            sortOptions.push(`${param.paramValue}=${option.value}`);
          }
        }
      }
      // Emit the selected sorting options to the parent component
      this.$emit('sort-changed', sortOptions);
    },
  },
};
</script>

<style lang="scss" scoped>
/* Ваши стили */
</style>
