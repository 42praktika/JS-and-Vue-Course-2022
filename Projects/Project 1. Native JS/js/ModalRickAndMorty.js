import {watchCharactersState} from './watchers.js';


const startModalRickAndMorty = () => {
    const charactersModalState = {
        isLoading: false,
        characters: [],
        status: '',
        gender: ''
    }

    addListeners(charactersModalState);
    watchCharactersState(charactersModalState);
};

const addListeners = (state) => {
    const statusSelector = document.querySelector('.status-selector');
    const genderSelector = document.querySelector('.gender-selector');
    const statuses = ['', 'alive', 'dead', 'unknown'];
    const genders = ['', 'male', 'female', 'genderless', 'unknown'];

    statusSelector.addEventListener('change', () => {
        state.isLoading = true;
        state.status = statuses[statusSelector.selectedIndex];
        let request = `https://rickandmortyapi.com/api/character/?gender=${state.gender}&status=${state.status}`;

        fetch(request)
            .then(response => response.json())
            .then(data => {
                state.characters = data.results;
                state.isLoading = false;
            });
    });

    genderSelector.addEventListener('change', () => {
        state.isLoading = true;
        state.gender = genders[genderSelector.selectedIndex];
        let request = `https://rickandmortyapi.com/api/character/?gender=${state.gender}&status=${state.status}`;

        fetch(request)
            .then(response => response.json())
            .then(data => {
                state.characters = data.results;
                state.isLoading = false;
            });
    });
};

export default startModalRickAndMorty