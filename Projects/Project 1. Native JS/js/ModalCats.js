import axios from 'axios';
import { catsModalState as state } from './state';

const addCatsListeners = () => {
    const radioPNG = document.getElementsByName('imageTypeRadio')[0];
    const imageTextInput = document.querySelector('.image-text-input');
    const filterSelector = document.querySelector('.filter-selector');
    const submitButton = document.querySelector('.btn-submit--CATS');
    imageTextInput.value = '';

    const imageFilters = ['', 'blur', 'mono', 'sepia', 'negative', 'paint', 'pixel'];

    submitButton.addEventListener('click', () => {
        state.isLoading = true;
        const imageType = radioPNG.checked ? 'PNG' : 'GIF';
        const imageText = imageTextInput.value;
        const filter = imageFilters[filterSelector.selectedIndex];
        let imageRequest;
        const promises = [];

        if (imageText === '') {
            imageRequest = imageType === 'PNG'
                ? `https://cataas.com/cat?filter=${filter}&json=true`
                : `https://cataas.com/cat/gif?filter=${filter}&json=true`;
        } else {
            imageRequest = imageType === 'PNG'
                ? `https://cataas.com/cat/says/${imageText}?filter=${filter}&json=true`
                : `https://cataas.com/cat/gif/says/${imageText}?filter=${filter}&json=true`;
        }

        promises.push(axios.get('https://meowfacts.herokuapp.com/?lang=rus')
            // eslint-disable-next-line no-return-assign,prefer-destructuring
            .then((response) => state.fact = response.data.data[0]));
        promises.push(axios.get(imageRequest)
            // eslint-disable-next-line no-return-assign
            .then((response) => state.imageURL = `https://cataas.com${response.data.url}`));
        // eslint-disable-next-line no-return-assign
        Promise.all(promises).then(() => state.isLoading = false);
    });
};

export default addCatsListeners;
