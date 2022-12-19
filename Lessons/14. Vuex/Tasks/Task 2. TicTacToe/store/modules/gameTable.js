import createDoubleArray from '../../consts/functions';

export default {
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

    },
    namespaced: true,
};
