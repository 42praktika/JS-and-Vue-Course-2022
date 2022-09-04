import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';

import moment from 'moment';

moment.locale('ru');

Vue.config.productionTip = false;

window.appendVueComponent = function (target, component, data) {
    Vue.component('app', function (resolve, reject) {
        resolve(require('./App/' + component + '.vue'));
    });

    return new Vue({
        el: target,
        data: () => ({ data }),
        render: function (createElement) {
            return createElement(App);
        },
    });
};

window.moment = moment;
