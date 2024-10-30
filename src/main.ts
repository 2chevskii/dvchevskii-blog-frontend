import './styles/main.sass'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import {createApplicationRouter} from './router'

createApp(App)
  .use(createPinia())
  .use(createApplicationRouter())
  .mount('#app')
