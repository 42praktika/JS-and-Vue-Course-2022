import {watchCatsState} from './watchers.js';
import axios from "axios";

const startModal1 = () => {
    const catsModalState = {
        imageURL: '',
        fact: '',
        isLoading: false
    };

    const radioPNG = document.getElementsByName('imageTypeRadio')[0];
    const imageTextInput = document.querySelector('.image-text-input');
    const filterSelector = document.querySelector('.filter-selector');
    const submitButton = document.querySelector('.btn-submit--CATS');
    imageTextInput.value = '';

    const imageFilters = ['', 'blur', 'mono', 'sepia', 'negative', 'paint', 'pixel'];

    submitButton.addEventListener('click', () => {
        catsModalState.isLoading = true;
        let imageType = radioPNG.checked ? 'PNG' : 'GIF';
        let imageText = imageTextInput.value;
        let filter = imageFilters[filterSelector.selectedIndex];
        let imageRequest = '';
        let promises = [];

        if (imageText === '') {
            imageRequest = imageType === 'PNG' ?
                `https://cataas.com/cat?filter=${filter}&json=true` :
                `https://cataas.com/cat/gif?filter=${filter}&json=true`;
        } else {
            imageRequest = imageType === 'PNG' ?
                `https://cataas.com/cat/says/${imageText}?filter=${filter}&json=true` :
                `https://cataas.com/cat/gif/says/${imageText}?filter=${filter}&json=true`;
        }

        promises.push(axios.get('https://meowfacts.herokuapp.com/?lang=rus')
            .then(response => catsModalState.fact = response.data.data[0]));
        promises.push(axios.get(imageRequest)
            .then(response => catsModalState.imageURL = 'https://cataas.com' + response.data.url));
        Promise.all(promises).then(() => catsModalState.isLoading = false);
    })

    watchCatsState(catsModalState);
}

export default startModal1