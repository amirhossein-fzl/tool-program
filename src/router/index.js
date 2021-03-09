import { createRouter, createWebHistory } from 'vue-router';
import Tools from '../views/Tools.vue';
import LinksIndex from '../views/links/index.vue';
import Links from '../views/links/Links.vue';

const routes = [
    {
        path: '/',
        name: 'Tools',
        component: Tools
    },
    {
        path: '/links',
        component: LinksIndex,
        children: [
            {
                path: 'dashboard',
                name: 'Links',
                component: Links,
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
