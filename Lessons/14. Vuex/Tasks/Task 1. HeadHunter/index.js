import Vue from 'vue';
import Vuex from 'vuex';

import HeadHunter from './HeadHunter.vue';
import currentStore from './store/index.js';

Vue.use(Vuex);
const store = new Vuex.Store(currentStore);

new Vue({
    store,
    render: (h) => h(HeadHunter),
}).$mount('#container');
