const LIGHTS = {
    red: {
        type: 'red',
        text: 'Красный',
    },
    yellow: {
        type: 'yellow',
        text: 'Желтый',
    },
    green: {
        type: 'green',
        text: 'Зеленый',
    },
};

const setTrafficLight = () => {
    // Начало
    const trafficLights = document.querySelector('.traffic__lights');
    const trafficLightsContainer = document.createElement('div');
    trafficLightsContainer.className = 'traffic__lights-container';
    trafficLights.append(trafficLightsContainer);
    const trafficLightsObjects = {};
    let currentLight;
    for (let i of Object.keys(LIGHTS)) {
        const span = document.createElement('span');
        if (i === 'red') {
            span.className = 'red-light';
            currentLight = span;
        }
        trafficLightsObjects[i] = span;
        trafficLightsContainer.append(span);
    }
    const trafficLightsSelect = document.querySelector('.traffic__lights-select');
    const formSelect = document.createElement('select');
    formSelect.className = 'form-select';
    trafficLightsSelect.append(formSelect);
    for (let i of Object.keys(LIGHTS)) {
        const option = document.createElement('option')
        option.value = i;
        option.textContent = LIGHTS[i].text;
        formSelect.append(option);
    }
    formSelect.addEventListener('change', (event) => {
        currentLight.className = '';
        const changedTo = event.target.value;
        currentLight = trafficLightsObjects[changedTo];
        currentLight.className = changedTo + '-light';
    });
    // Конец
};

export default setTrafficLight;