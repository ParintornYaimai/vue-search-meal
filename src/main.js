import { createApp } from 'vue'
import './style.css'
import router from './router/index'
import App from './App.vue'
import store from './store/index'
import VueAxios from 'vue-axios'
import axios from 'axios'

const app = createApp(App)
    app.use(router)
    app.use(store)
    app.use(VueAxios,axios)
    app.mount('#app')

