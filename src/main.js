import { createApp } from 'vue';
import Ripple from 'vue-ripple-directive';
import App from './App.vue';
import "./css/style.scss";
import router from './router';
import store from './store';

Ripple.color = 'rgba(255, 255, 255, 0.35)';

const app = createApp(App);
app.directive('ripple', Ripple);
app.use(store);
app.use(router);
app.mount('#app');
