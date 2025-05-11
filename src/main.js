import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createNaiveUI } from './plugins/naive'

const app = createApp(App)

app.use(router)
app.use(createNaiveUI())

app.mount('#app')
