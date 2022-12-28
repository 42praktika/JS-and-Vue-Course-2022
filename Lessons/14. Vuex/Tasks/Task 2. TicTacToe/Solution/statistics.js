export default {
    state: {
        players: {
            0: {
                name: 'Игрок 1',
                gameElement: 'Tic',
                points: 0,
            },
            1: {
                name: 'Игрок 2',
                gameElement: 'Tac',
                points: 0,
            },
        },
        activePlayerIndex: 0,
    },
    mutations: {
        updatePoints(state) {
            state.players[state.activePlayerIndex].points += 1;
        },
        changeActivePlayerIndex(state) {
            state.activePlayerIndex = state.activePlayerIndex === 0 ? 1 : 0;
        },
    },
    actions: {
        updatePoints({ commit }) {
            commit('updatePoints');
        },
        changeActivePlayerIndex({ commit }) {
            commit('changeActivePlayerIndex');
        },
    },
    getters: {
        getCurrentPlayer(state) {
            return state.players[state.activePlayerIndex];
        },
    },
    namespaced: true,
};