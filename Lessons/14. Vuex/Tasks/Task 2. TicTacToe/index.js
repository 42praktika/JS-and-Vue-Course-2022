import Vue from 'vue';

import TicTacToe from './TicTacToe.vue';
import store from './store';

new Vue({
    store,
    render: (h) => h(TicTacToe),
}).$mount('#tic-tac-toe');
