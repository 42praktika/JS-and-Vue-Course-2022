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

    const trafficContainer = document.createElement('div');
    trafficContainer.classList.add('traffic__lights-container');

    const trafficContainerSpanRed = document.createElement('span');
    trafficContainerSpanRed.classList.add('red-light');
    const trafficContainerSpanYellow = document.createElement('span');
    const trafficContainerSpanGreen = document.createElement('span');

    trafficContainer.append(trafficContainerSpanRed, trafficContainerSpanYellow, trafficContainerSpanGreen);

    const trafficLightsSelect = document.querySelector('.traffic__lights-select');

    const selectElement = document.createElement('select');
    selectElement.classList.add('form-select');

    const redLightSelect = document.createElement('option');

    redLightSelect.setAttribute('value', 'red');
    redLightSelect.setAttribute('selected', 'selected');
    redLightSelect.textContent = 'Красный';

    const yellowLightSelect = document.createElement('option');
    yellowLightSelect.setAttribute('value', 'yellow');
    yellowLightSelect.textContent = 'Желтый';

    const greenLightSelect = document.createElement('option');
    greenLightSelect.setAttribute('value', 'green');
    greenLightSelect.textContent = 'Зеленый';

    selectElement.addEventListener('change', (event) => {
       let value = event.target.value;
       switch (value) {
           case ('red'):
               trafficContainerSpanRed.setAttribute('class', 'red-light');
               trafficContainerSpanYellow.setAttribute('class', '');
               trafficContainerSpanGreen.setAttribute('class', '');
               break;
           case ('yellow'):
               trafficContainerSpanRed.setAttribute('class', '');
               trafficContainerSpanYellow.setAttribute('class', 'yellow-light');
               trafficContainerSpanGreen.setAttribute('class', '');
               break;
           case ('green'):
               trafficContainerSpanRed.setAttribute('class', '');
               trafficContainerSpanYellow.setAttribute('class', '');
               trafficContainerSpanGreen.setAttribute('class', 'green-light');
               break;
       }
    });
    trafficLightsSelect.append(selectElement);
    selectElement.append(redLightSelect, yellowLightSelect, greenLightSelect);
    trafficLights.append(trafficContainer);
    // Конец
};

export default setTrafficLight;