import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createNaiveUI } from './plugins/naive'
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)


import axios from 'axios'

// Import the main store within store/index.js
import store from './store'

const app = createApp(App)

// Use it within the App
app.use(store)

app.use(router)
app.use(createNaiveUI())

app.mount('#app')
