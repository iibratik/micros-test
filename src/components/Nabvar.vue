<template>
  <header>
    <nav>
      <v-container fluid class="container nav-content">
        <div class="logo">
        <v-icon icon="$vuetify"></v-icon>
        <v-toolbar-title>LOGO HERE</v-toolbar-title>
        </div>
        <v-tabs
          v-model="tab"
          align-tabs="title"
        >
          <v-tab
            v-for="item in links"
            :key="item"
            :value="item"
          >
            <router-link :to="`${item.link}`" class="nav-link">
              {{ item.text }}
            </router-link>
          </v-tab>
        </v-tabs>
      </v-container>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
      return {
        tab: null,
        links: [
          {
            text: 'Список работников',
            link:'/workers'
          },
          {
            text: "Список докуметов",
            link:'/documents',
          }
        ],
      }
    },
}
</script>

<style lang="scss" scoped></style>
