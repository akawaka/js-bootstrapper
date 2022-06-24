import './sass/main.scss';

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from "./pages/Home.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
    ]
});

const app = createApp({ template: '<router-view></router-view>' });
app.use(router);
app.mount('#app');
