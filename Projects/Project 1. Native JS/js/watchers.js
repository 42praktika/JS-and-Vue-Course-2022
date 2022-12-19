import WatchJS from 'melanke-watchjs';
import { MODAL_WINDOWS } from './consts';

const { watch } = WatchJS;

const modalsKeys = Object.keys(MODAL_WINDOWS);

const watchAppState = (appState) => {
    watch(appState, 'openedModalIndex', () => {
        if (appState.openedModalIndex !== -1) {
            modalsKeys.forEach((key) => {
                const closedModal = document.querySelector(MODAL_WINDOWS[key]);
                closedModal.style.display = 'none';
            });

            const openedModalElement = document.querySelector(
                MODAL_WINDOWS[modalsKeys[appState.openedModalIndex]],
            );
            openedModalElement.style.display = 'block';
        } else {
            modalsKeys.forEach((key) => {
                const closedModal = document.querySelector(MODAL_WINDOWS[key]);
                closedModal.style.display = 'none';
            });
        }
    });
};

const watchCatsState = (catsState) => {
    watch(catsState, 'isLoading', () => {
        const fact = document.querySelector('.cat-fact');
        const image = document.querySelector('.cat-image');
        const imageTextInput = document.querySelector('.image-text-input');
        const loadingSpinner = document.querySelector('.loading-spinner--CATS');

        if (catsState.isLoading) {
            loadingSpinner.style.display = 'block';
        } else {
            fact.textContent = catsState.fact;
            image.src = catsState.imageURL;
            fact.style.display = 'block';
            image.style.display = 'block';
            imageTextInput.value = '';
            loadingSpinner.style.display = 'none';
        }
    });
};

const watchCharactersState = (charactersState) => {
    watch(charactersState, 'isLoading', () => {
        const charactersElement = document.querySelector('.characters');
        const loadingSpinner = document.querySelector('.loading-spinner--RickAndMorty');
        const characterTags = ['status', 'gender', 'species'];

        if (charactersState.isLoading) {
            loadingSpinner.style.display = 'block';
        } else {
            charactersElement.innerHTML = '';

            charactersState.characters.forEach((character) => {
                const characterElement = document.createElement('div');
                characterElement.className = 'character';

                const title = document.createElement('h4');
                title.textContent = character.name;
                characterElement.append(title);

                const image = document.createElement('img');
                image.className = 'character__img';
                image.src = character.image;
                characterElement.append(image);

                characterTags.forEach((tag) => {
                    const tagElement = document.createElement('div');
                    tagElement.className = `character__tag character__tag--${tag}`;

                    const type = document.createElement('span');
                    type.className = 'character__tag__type';
                    type.textContent = tag;
                    tagElement.append(type);

                    const value = document.createElement('span');
                    value.className = 'character__tag__value';
                    value.textContent = character[tag];
                    tagElement.append(value);

                    characterElement.append(tagElement);
                });

                charactersElement.append(characterElement);
            });

            loadingSpinner.style.display = 'none';
        }
    });
};

const watchSunriseState = (sunriseState) => {
    watch(sunriseState, 'isLoading', () => {
        const loadingSpinner = document.querySelector('.loading-spinner--SUNRISE');
        const sunriseElement = document.querySelector('.SUNRISE-information__element__sunrise');
        const sunsetElement = document.querySelector('.SUNRISE-information__element__sunset');

        if (sunriseState.isLoading) {
            loadingSpinner.style.display = 'block';
        } else {
            sunriseElement.textContent = `Sunrise: ${sunriseState.sunrise}`;
            sunsetElement.textContent = `Sunset: ${sunriseState.sunset}`;
            loadingSpinner.style.display = 'none';
        }
    });
};

export {
    watchAppState, watchCatsState, watchCharactersState, watchSunriseState,
};
