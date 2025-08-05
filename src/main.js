import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createNaiveUI } from './plugins/naive'
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import axios from 'axios'
import { getAuthorization } from '@/plugins/authentication'

axios.interceptors.request.use((config) => {
  const token = getAuthorization()
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

import store from './store'

const app = createApp(App)

app.use(store)

app.use(router)
app.use(createNaiveUI())

app.mount('#app')
