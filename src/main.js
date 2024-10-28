import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapVue3 from 'bootstrap-vue-3'
import router from './Router'
const app = createApp(App)

app.use(BootstrapVue3)
app.use(router)
app.mount('#app')