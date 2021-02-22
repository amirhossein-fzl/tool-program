import { createRouter, createWebHistory } from 'vue-router';
import Tools from '../views/Tools.vue';

const routes = [
    {
        path: '/',
        name: 'Tools',
        component: Tools
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
