import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

//import "./style.css"


const app = createApp(App)
app.use(router)
app.mount('#app')
