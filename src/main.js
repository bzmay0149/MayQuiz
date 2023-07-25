import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';

// Configurar la base URL para las solicitudes a la API
axios.defaults.baseURL = 'http://localhost:5000';

createApp(App).use(router).mount('#app');

