<template>
  <div class="app">
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar>  -->
      <v-app>
      <v-app-bar
        color="primary"
        class="nav-content"
      >
    <Nabvar class="v-col-9"/>
  </v-app-bar>
      <v-container>
  <v-main>
        <router-view></router-view>
    </v-main>
    </v-container>
    <Footer/>
      </v-app>
    </v-layout>
  </div>
</template>

<script>
import Nabvar from "@/components/Nabvar.vue"
import Footer from "@/components/Footer.vue"
  export default{
    components: { Nabvar, Footer },

  }
</script>

<style lang="scss" scoped>

</style>