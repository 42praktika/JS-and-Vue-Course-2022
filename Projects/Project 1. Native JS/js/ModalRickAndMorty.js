import {charactersModalState as state} from "@/state";
import {characterGenders as genders, characterStatuses as statuses} from "@/consts";


const addRickAndMortyListeners = () => {
    const statusSelector = document.querySelector('.status-selector');
    const genderSelector = document.querySelector('.gender-selector');

    statusSelector.addEventListener('change', () => {
        state.status = statuses[statusSelector.selectedIndex];
        fetchToAPI();
    });

    genderSelector.addEventListener('change', () => {
        state.gender = genders[genderSelector.selectedIndex];
        fetchToAPI();
    });
};

const fetchToAPI = () => {
    state.isLoading = true;

    const request = `https://rickandmortyapi.com/api/character/?gender=${state.gender}&status=${state.status}`;
    fetch(request)
        .then(response => response.json())
        .then(data => {
            state.characters = data.results;
            state.isLoading = false;
        });
}

export default addRickAndMortyListeners