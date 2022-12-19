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
        turn: 0,
    },
    // Начало

    // Конец
    namespaced: true,
};