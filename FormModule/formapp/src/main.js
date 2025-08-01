import { createApp } from 'vue'
import App from './App.vue'
import { vMaska } from 'maska/vue'
import moment from 'moment'


const app = createApp(App)
app.directive('maska', vMaska) // plugin
app.config.globalProperties.$moment = moment // global property 
app.config.globalProperties.$moment.locale('pt-br') // set locale to Portuguese (Brazil)
app.mount('#app')
