import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from "@/plugins/vuetify"
// styles
import "@/assets/scss/common/main.scss"

createApp(App).use(store).use(vuetify).use(router).mount('#app')
