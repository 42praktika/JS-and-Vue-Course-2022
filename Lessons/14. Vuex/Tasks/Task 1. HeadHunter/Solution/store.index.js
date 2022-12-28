const baseUrl = 'https://api.hh.ru/vacancies';

const state = {
    allVacancies: [],
    myVacancies: [],
};

const mutations = {
    setAllVacanciesMutation(state, data) {
        state.allVacancies = data;
    },
    addVacancyMutation(state, data) {
        state.myVacancies.push(data);
    },
    removeVacancyMutation(state, vacancyIndex) {
        state.myVacancies.splice(vacancyIndex, 1);
    },
};

const actions = {
    searchVacancies({ commit }, filter) {
        const parameters = Object
            .entries(filter)
            .filter(([ _key, value ]) => !!value)
            .map((items) => items.join('='))
            .join('&');

        const currentUrl = `${baseUrl}?${parameters}`;
        return fetch(currentUrl)
            .then((data) => data.json())
            .then(({ items }) => {
                commit('setAllVacanciesMutation', items);
            });

    },
    addVacancy({ commit }, data) {
        commit('addVacancyMutation', data);
    },
    removeVacancy({ commit }, vacancy) {
        const vacancyIndex = state.myVacancies.findIndex(({ id }) => id === vacancy.id);
        commit('removeVacancyMutation', vacancyIndex);
    },
};

export default {
    state,
    mutations,
    actions,
};
