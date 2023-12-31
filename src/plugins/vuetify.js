// plugins/vuetify.js

import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import '@mdi/font/css/materialdesignicons.css'
// Vuetify theme settings
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#aeaeae',
    surface: '#FFFFFF',
    primary: '#008AEE',
    secondary: '#0308DA',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}


// Vuetify sass


// Vuetify - declaration
const vuetify = createVuetify({
  components:{
    ...components,
    ...labsComponents,
  },
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
})

export default vuetify
