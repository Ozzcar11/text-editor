import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { icons } from './plugins/icons'

import "./assets/styles/main.scss"

const pinia = createPinia()
const app = createApp(App)

app.use(icons).use(pinia)

app.mount('#app')
