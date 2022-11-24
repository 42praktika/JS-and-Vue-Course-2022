import WatchJS from 'melanke-watchjs';
import state, {stateGetApiInfo} from "../state";
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
export const watchStateOfImage = (stateImage) => {
    watch(stateImage,'imageDogs',() => {
        document.querySelector('.img-dog').
        setAttribute('src', stateImage.imageDogs);
    })
}
export const watchStateOfRickAndMorty = (stateImage) => {
    watch(stateImage, 'imageRickAndMorty', () => {
        document.querySelector('.img-RickAndMorty')
            .setAttribute('src', stateImage.imageRickAndMorty);
    })
}
export const watchStateOfInformationName = (stateInfoRickAndMorty) => {
    watch(stateInfoRickAndMorty, 'name', () => {
        document.querySelector('.name').textContent = `name: ${stateInfoRickAndMorty.name}`;
    })
}
export const watchStateOfInformationStatus = (stateInfoRickAndMorty) => {
    watch(stateInfoRickAndMorty, 'status', () => {
        document.querySelector('.status').textContent = `status: ${stateInfoRickAndMorty.status}`;
    })
}
export const watchStateOfInformationSpecies = (stateInfoRickAndMorty) => {
    watch(stateInfoRickAndMorty, 'species', () => {
        document.querySelector('.species').textContent = `species: ${stateInfoRickAndMorty.species}`;
    })
}
export const watchStateOfInformationGender = (stateInfoRickAndMorty) => {
    watch(stateInfoRickAndMorty, 'gender', () => {
        document.querySelector('.gender').textContent = `gender: ${stateInfoRickAndMorty.gender}`;
    })
}

export const watchStateOfApiInfoCity = (stateGetApiInfo) => {
    watch(stateGetApiInfo, 'city', () => {
        document.querySelector('.city').textContent = `Город: ${stateGetApiInfo.city}`;
    })
}
export const watchStateOfApiInfoRegion = (stateGetApiInfo) => {
    watch(stateGetApiInfo, 'region', () => {
        document.querySelector('.region').textContent = `Регион: ${stateGetApiInfo.region}`;
    })
}
export const watchStateOfApiInfoCountry = (stateGetApiInfo) => {
    watch(stateGetApiInfo, 'country', () => {
        document.querySelector('.country').textContent = `Страна: ${stateGetApiInfo.country}`;
    })
}
export const watchStateOfApiInfoTimeZone = (stateGetApiInfo) => {
    watch(stateGetApiInfo, 'timezone', () => {
        document.querySelector('.timezone').textContent = `Часовой пояс: ${stateGetApiInfo.timezone}`;
    })
}
export const watchStateOfApiInfoContinent = (stateGetApiInfo) => {
    watch(stateGetApiInfo, 'continent', () => {
        document.querySelector('.continent').textContent = `Континент: ${stateGetApiInfo.continent}`;
    })
}
