import {stateImage, stateInfoRickAndMorty, stateGetApiInfo} from "../state";
import {
    watchStateOfImage,
    watchStateOfInformationName,
    watchStateOfRickAndMorty,
    watchStateOfInformationGender,
    watchStateOfInformationSpecies,
    watchStateOfInformationStatus,
    watchStateOfApiInfoTimeZone,
    watchStateOfApiInfoCity,
    watchStateOfApiInfoContinent,
    watchStateOfApiInfoCountry,
    watchStateOfApiInfoRegion
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
            stateImage.imageDogs = data.message;
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
            stateImage.imageRickAndMorty = data.results[targetValue].image;
            stateInfoRickAndMorty.name = data.results[targetValue].name;
            stateInfoRickAndMorty.status = data.results[targetValue].status;
            stateInfoRickAndMorty.species = data.results[targetValue].species;
            stateInfoRickAndMorty.gender = data.results[targetValue].gender;
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
            stateGetApiInfo.city = data.city;
            stateGetApiInfo.country = data.country;
            stateGetApiInfo.region = data.region;
            stateGetApiInfo.continent = data.continent;
            stateGetApiInfo.timezone = data.timezone.id;
        } catch (error) {
            alert('Неправильно введен ip!');
            console.log(error);
        }
    })


    watchStateOfImage(stateImage);
    watchStateOfRickAndMorty(stateImage);
    watchStateOfInformationName(stateInfoRickAndMorty);
    watchStateOfInformationSpecies(stateInfoRickAndMorty);
    watchStateOfInformationStatus(stateInfoRickAndMorty);
    watchStateOfInformationGender(stateInfoRickAndMorty);
    watchStateOfApiInfoCountry(stateGetApiInfo);
    watchStateOfApiInfoRegion(stateGetApiInfo);
    watchStateOfApiInfoTimeZone(stateGetApiInfo);
    watchStateOfApiInfoCity(stateGetApiInfo);
    watchStateOfApiInfoContinent(stateGetApiInfo);
}







