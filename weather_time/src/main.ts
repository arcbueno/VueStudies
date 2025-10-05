import './assets/main.css'
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from 'vuetify'
import { aliases, md } from 'vuetify/iconsets/md'

import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
})

createApp(App).use(vuetify).mount('#app')
