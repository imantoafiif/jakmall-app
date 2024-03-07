import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faCheck, faExclamation, faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft, faCheck, faExclamation, faTimes, faAngleRight);

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app")