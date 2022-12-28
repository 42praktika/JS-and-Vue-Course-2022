import Vue from 'vue';
import Vuex from 'vuex';

import gameTable from './modules/gameTable.js';
import statistics from './modules/statistics.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        gameTable,
        statistics,
    },
});
