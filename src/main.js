import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft);

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app")