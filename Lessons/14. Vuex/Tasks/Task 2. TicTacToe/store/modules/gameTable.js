export default {
    state: {
        fieldSize: 3,
        field: [],
    },
    actions: {
        setFieldAction(context, field) {
            context.commit('setField', field);
        },
        changeFieldAction(context, params) {
            context.commit('changeField', params);
        }
    },
    mutations: {
        setField(state, field) {
            state.field = field;
        },
        changeField(state, params) {
            state.field[params[0]][params[1]] = params[2];
        }
    },
    getters: {

    },
    namespaced: true,
};
