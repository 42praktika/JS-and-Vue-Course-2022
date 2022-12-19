import Vue from 'vue';
import Vuex from 'vuex';
import gameTableModules from "./modules/gameTable";
import statisticsModules from "./modules/statistics";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        fieldSize: 3,
        // field: createDoubleArray(this.fieldSize, -1),
        // field: [ [ 1, 0, -1 ], [ 1, 0, -1 ], [ 1, 0, -1 ] ],
        field: [
            {
                id: 0,
                name: 'sad'
            }
        ]
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        getFieldSize: state => state.fieldSize,
    },
    namespaced: true,
});
