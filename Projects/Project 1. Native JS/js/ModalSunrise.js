import {watchSunriseState} from './watchers.js';


const startModalSunrise = () => {
    const sunriseState = {
        isLoading: false,
        sunrise: '',
        sunset: ''
    }

    addListeners(sunriseState);
    watchSunriseState(sunriseState);
};

const addListeners = (state) => {
    const submitButton = document.querySelector('.btn-submit--SUNRISE');
    const latitudeInput = document.querySelector('.latitude-input');
    const longitudeInput = document.querySelector('.longitude-input');
    const dateInput = document.querySelector('.date-input');

    submitButton.addEventListener('click', () => {
        state.isLoading = true;

        let request = `https://api.sunrise-sunset.org/json?lat=${latitudeInput.value}&lng=
                        ${longitudeInput.value}&date=${dateInput.value}`;

        fetch(request)
            .then(response => response.json())
            .then(data => {
                state.sunrise = data.results.sunrise;
                state.sunset = data.results.sunset;
                state.isLoading = false;
            });
    });
};

export default startModalSunrise