import { createApp } from 'vue'
import router from './router'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

axios.defaults.baseURL = "http://127.0.0.1:8080"
const app = createApp(App)
app.use(router).use(ElementPlus)
app.mount('#app')
