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
    for (let i = 0; i < 3; i++) {
        trafficLightsContainer.append(document.createElement('span'));
    }
    const trafficLightsSelect = document.querySelector('.traffic__lights-select');
    const formSelect = document.createElement('select');
    formSelect.className = 'form-select';
    trafficLightsSelect.append(formSelect);
    const listOfLights = Object.values(LIGHTS);
    for (let i = 0; i < 3; i++) {
        const option = document.createElement('option');
        formSelect.append(option);
        option.text = listOfLights[i].text;
        option.value = listOfLights[i].type;
    }
    trafficLightsContainer.children[0].className = 'red-light';
    formSelect.addEventListener('change', (event) => {
        for (let i = 0; i < 3; i++) {
            trafficLightsContainer.children[i].className = '';
        }
        trafficLightsContainer.children[formSelect.selectedIndex].className = listOfLights[formSelect.selectedIndex].type + '-light';
    });
    // Конец
};

export default setTrafficLight;