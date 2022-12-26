import Vue from 'vue';
import Vuex from 'vuex';
import gameTableModules from "./modules/gameTable";
import statisticsModules from "./modules/statistics";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        gameTableModules, statisticsModules
    }
});
