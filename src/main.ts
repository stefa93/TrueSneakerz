import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {RouteConfig} from "vue-router/types/router";
import Homepage from './components/homepage/Homepage.vue';
import ProductExpanded from './components/product-expanded/ProductExpanded.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter)

const routes: RouteConfig [] = [
    {path: '/', component: Homepage },
    {path: '/product/:id', component: ProductExpanded},
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

new Vue({
  render: h => h(App),
    router: router
}).$mount('#app')
