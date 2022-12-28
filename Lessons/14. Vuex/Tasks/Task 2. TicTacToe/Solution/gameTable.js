import Vue from 'vue';

const getIsVictoryOnRow = (row) => {
    return row[0] ? row.every((item) => item === row[0]) : false;
};

export default {
    state: {
        fieldSize: 3,
        gameTable: [],
    },
    mutations: {
        setClearGame(state) {
            const row = Array(state.fieldSize).map(() => null);
            state.gameTable = Array
                .apply(null, Array(state.fieldSize))
                .map(() => [ ...row ]);
        },
        updateTableAfterClick(state, { y, currentRow }) {
            Vue.set(state.gameTable, y, currentRow);
        },
    },
    actions: {
        setClearGame({ commit }) {
            commit('setClearGame');
        },
        updateTableAfterClick({ commit, state }, { x, y, playerElement }) {
            const currentRow = [ ...state.gameTable[y] ];
            currentRow[x] = playerElement;
            commit('updateTableAfterClick', { y, currentRow });
        },
    },
    getters: {
        getIsGameCompleted(state) {
            if (state.gameTable.length === 0) {
                return false;
            }
            const columns = state.gameTable
                .map((rows, rowIndex) => rows
                    .map((items, itemIndex) => state.gameTable[itemIndex][rowIndex]));

            const firstDiagonal = [];
            const secondDiagonal = [];
            for (let i = 0; i < state.fieldSize; i += 1) {
                firstDiagonal[i] = state.gameTable[i][i];
                secondDiagonal[i] = state.gameTable[state.fieldSize - i - 1][i];
            }

            const isRowVictory = state.gameTable.some(getIsVictoryOnRow);
            const isColumnVictory = columns.some(getIsVictoryOnRow);
            const isFirstDiagonalVictory = getIsVictoryOnRow(firstDiagonal);
            const isSecondDiagonalVictory = getIsVictoryOnRow(secondDiagonal);

            return isRowVictory
                || isColumnVictory
                || isFirstDiagonalVictory
                || isSecondDiagonalVictory;
        },
    },
    namespaced: true,
};
