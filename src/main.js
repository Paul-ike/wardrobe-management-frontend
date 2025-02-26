import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'vue-toastification/dist/index.css';
import Toast from 'vue-toastification';

createApp(App).use(router).use(Toast).mount('#app')
