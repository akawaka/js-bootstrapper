import './sass/main.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./pages/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
    ]
});

new Vue({
    router,

    template: '<router-view></router-view>',

}).$mount('#app');
