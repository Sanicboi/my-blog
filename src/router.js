import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/index.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes: routes
})