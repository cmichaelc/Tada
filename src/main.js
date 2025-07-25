import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- Vérifiez cette ligne

const app = createApp(App)
app.use(router) // <-- Doit être présent !
app.mount('#app')