import createDoubleArray from '../../consts/functions';

export default {
    state: {
        fieldSize: 3,
        field: [],
    },
    actions: {
        setFieldAction(context, field) {
            context.commit('setField', field);
        }
    },
    mutations: {
        setField(state, field) {
            state.field = field;
        }
    },
    getters: {

    },
    namespaced: true,
};
