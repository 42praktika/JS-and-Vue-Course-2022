import {watchSunriseState} from './watchers.js';


const startModal3 = () => {
    const sunriseState = {
        isLoading: false,
        sunrise: '',
        sunset: ''
    }

    const submitButton = document.querySelector('.btn-submit--SUNRISE');
    const latitudeInput = document.querySelector('.latitude-input');
    const longitudeInput = document.querySelector('.longitude-input');
    const dateInput = document.querySelector('.date-input');

    submitButton.addEventListener('click', () => {
        sunriseState.isLoading = true;

        let request = `https://api.sunrise-sunset.org/json?lat=${latitudeInput.value}&lng=
                        ${longitudeInput.value}&date=${dateInput.value}`;

        fetch(request)
            .then(response => response.json())
            .then(data => {
                sunriseState.sunrise = data.results.sunrise;
                sunriseState.sunset = data.results.sunset;
                sunriseState.isLoading = false;
            });
    });

    watchSunriseState(sunriseState);
}

export default startModal3