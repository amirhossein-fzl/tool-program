import { createApp } from 'vue';
import App from './App.vue';
import "./css/style.scss";
import router from './router';
import store from './store';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
