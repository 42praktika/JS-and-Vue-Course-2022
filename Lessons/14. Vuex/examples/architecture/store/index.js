import Vue from 'vue';
import Vuex from 'vuex';
import moduleOne from './modules/moduleOne';
import moduleTwo from './modules/moduleTwo';

Vue.use(Vuex);

const modules = {
    moduleOne,
    moduleTwo,
};

export default new Vuex.Store({ modules });
