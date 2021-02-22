import { createRouter, createWebHistory } from 'vue-router';
import Tools from '../views/Tools.vue';
import Links from '../views/Links.vue';

const routes = [
    {
        path: '/',
        name: 'Tools',
        component: Tools
    },
    {
        path: '/links',
        name: 'Links',
        component: Links
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
