import WatchJS from 'melanke-watchjs';
import state, {stateGetApiInfo, stateInfoRickAndMorty, stateImageDogs} from "../state";
import {MODALS_TYPES} from "../const";

const watch = WatchJS.watch;

watch(state, 'openedModalType', () => {
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach((item) => {
        item.classList.remove('modal__active');
    })
    if (state.openedModalType !== MODALS_TYPES.NONE) {
        const modal = document.querySelector(`.modal[data-type="${state.openedModalType}"]`);
        modal.classList.add('modal__active');
    }
});
export const watchStateOfImage = () => {
    watch(stateImageDogs,'imageDogs',() => {
        document.querySelector('.img-dog').
        setAttribute('src', stateImageDogs.imageDogs);
    })
}
export const watchStateOfRickAndMorty = () => {
    watch(stateInfoRickAndMorty, 'url', () => {
        document.querySelector('.img-RickAndMorty')
            .setAttribute('src', stateInfoRickAndMorty.url.imageRickAndMorty);
    })
}

export const watchStateOfInformationRickAndMorty = () => {
    watch(stateInfoRickAndMorty, 'data', () => {
        document.querySelector('.gender').textContent = `gender: ${stateInfoRickAndMorty.data.gender}`;
        document.querySelector('.species').textContent = `species: ${stateInfoRickAndMorty.data.species}`;
        document.querySelector('.status').textContent = `status: ${stateInfoRickAndMorty.data.status}`;
        document.querySelector('.name').textContent = `name: ${stateInfoRickAndMorty.data.name}`;
    })
}

export const watchStateOfApiInfo = () => {
    watch(stateGetApiInfo, 'data', () => {
        if (stateGetApiInfo.data === null) {
            alert('Неправильно введен ip!');
        } else {
            document.querySelector('.continent').textContent = `Континент: ${stateGetApiInfo.data.continent}`;
            document.querySelector('.city').textContent = `Город: ${stateGetApiInfo.data.city}`;
            document.querySelector('.region').textContent = `Регион: ${stateGetApiInfo.data.region}`;
            document.querySelector('.country').textContent = `Страна: ${stateGetApiInfo.data.country}`;
            document.querySelector('.timezone').textContent = `Часовой пояс: ${stateGetApiInfo.data.timezone}`;
        }
    })
}
