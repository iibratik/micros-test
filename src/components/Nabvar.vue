<template>
  <header>
    <nav>
      <v-container fluid class="container nav-content">
          <router-link to="/" class="d-flex align-center text-white logo">
          <v-icon icon="$vuetify"></v-icon>
          <v-toolbar-title>LOGO HERE</v-toolbar-title>
          </router-link>
        <v-tabs v-model="tab" align-tabs="title">
          <v-tab v-for="item in links" :key="item" :to="item.link">
            <span class="nav-link">
            {{ item.text }}
            </span>
          </v-tab>
        </v-tabs>
      </v-container>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      links: [
        {
          text: 'Список работников',
          link: '/workers',
        },
        {
          text: 'Список документов',
          link: '/documents',
        },
      ],
    };
  },
  created() {
    this.updateActiveTab();
  },
  methods: {
    updateActiveTab() {
      this.tab = this.$route.path;
    },
  },
  watch: {
    $route() {
      this.updateActiveTab();
    },
  },
};
</script>

<style lang="scss" scoped></style>
