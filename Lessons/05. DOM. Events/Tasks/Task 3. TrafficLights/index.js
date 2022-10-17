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
    const div = document.createElement('div');
    div.className = 'traffic__lights-container';

    trafficLights.appendChild(div);

    const redSpan = document.createElement('span');
    redSpan.className = 'red-light';

    const yellowSpan = document.createElement('span');
    yellowSpan.className = '';

    const greenSpan = document.createElement('span');
    greenSpan.className = '';

    div.append(redSpan, yellowSpan, greenSpan);

    const trafficLightsSelect = document.querySelector('.traffic__lights-select');
    const select = document.createElement('select');

    trafficLightsSelect.append(select);

    const redOption = document.createElement('option');
    redOption.value = LIGHTS.red.type;
    redOption.textContent = LIGHTS.red.text;

    const yellowOption = document.createElement('option');
    yellowOption.value = LIGHTS.yellow.type;
    yellowOption.textContent = LIGHTS.yellow.text;

    const greenOption = document.createElement('option');
    greenOption.value = LIGHTS.green.type;
    greenOption.textContent = LIGHTS.green.text;

    select.append(redOption, yellowOption ,greenOption);

    select.addEventListener('change',() => {
        let selected = select.value;
        switch (selected) {
            case('red'):
                redSpan.className = 'red-light';
                yellowSpan.className = '';
                greenSpan.className = '';
                break;
            case('yellow'):
                yellowSpan.className = 'yellow-light';
                redSpan.className = '';
                greenSpan.className = '';
                break;
            case('green'):
                greenSpan.className = 'green-light';
                redSpan.className = '';
                yellowSpan.className = '';
                break;
        }
    })
    // Конец
};

export default setTrafficLight;