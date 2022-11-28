import {stateInfoRickAndMorty, stateGetApiInfo, stateImageDogs} from "../state";
import {
    watchStateOfImage,
    watchStateOfRickAndMorty,
    watchStateOfApiInfo,
    watchStateOfInformationRickAndMorty,
} from "../watchers";
import {URL_DOGS, RickAndMortyURL, GET_API_INFO} from "./URL";

export const runModalsApi = () => {
    const loader = document.querySelector('#loader');

    const displayLoading = () => {
        loader.classList.add('display');
    }
    const hideLoading = () => {
        loader.classList.remove('display');
    }
    const button = document.querySelector('.btn-dogs');
    button.addEventListener('click', async () => {
        try {
            displayLoading();
            const response = await fetch(URL_DOGS);
            const data = await response.json();
            stateImageDogs.imageDogs = data.message;
            hideLoading();
        } catch (error) {
            console.log(error);
        }
    })

    const select = document.querySelector('.select-RickAndMorty');
    select.addEventListener('change', async (event) => {
        try {
            let targetValue = event.target.value;
            const response = await fetch(RickAndMortyURL);
            const data = await response.json();
            stateInfoRickAndMorty.url.imageRickAndMorty = data.results[targetValue].image;
            stateInfoRickAndMorty.data.name = data.results[targetValue].name;
            stateInfoRickAndMorty.data.status = data.results[targetValue].status;
            stateInfoRickAndMorty.data.species = data.results[targetValue].species;
            stateInfoRickAndMorty.data.gender = data.results[targetValue].gender;
        } catch (error) {
            console.log(error);
        }
    })

    const inputElement = document.querySelector('.input-api');
    const buttonElement = document.querySelector('.button-api');
    buttonElement.addEventListener('click', async () => {
        try {
            const inputValue = inputElement.value;
            const response = await fetch(GET_API_INFO + inputValue);
            const data = await response.json();
            stateGetApiInfo.data = {
                city: data.city,
                country: data.country,
                region: data.region,
                continent: data.continent,
                timezone: data.timezone.id,
            }
        } catch (error) {
            stateGetApiInfo.data = null;
            console.log(error);
        }
    })


    watchStateOfImage();
    watchStateOfRickAndMorty();
    watchStateOfInformationRickAndMorty();
    watchStateOfApiInfo();
}







