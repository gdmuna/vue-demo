import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: '',
        redirect: '/demo'
    },
    {
        path: '/demo',
        name: 'demo',
        component: () => import('../pages/demo/demo.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
