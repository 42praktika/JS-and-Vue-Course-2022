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

    const elem = document.querySelector('.traffic__lights');
    const div = document.createElement('div');
    div.className = 'traffic__lights-container';
    elem.appendChild(div);

    const redLight = document.createElement('span');
    redLight.className = 'red-light';

    const yellowLight = document.createElement('span');
    yellowLight.className = '';

    const greenLight = document.createElement('span');
    greenLight.className = '';

    div.append(redLight, yellowLight, greenLight);
    const elemSelect = document.querySelector('.traffic__lights-select');
    const selector = document.createElement('select');
    elemSelect.append(selector);

    const redOption = document.createElement('option');
    redOption.value = LIGHTS.red.type;
    redOption.textContent = LIGHTS.red.text;

    const yellowOption = document.createElement('option');
    yellowOption.value = LIGHTS.yellow.type;
    yellowOption.textContent = LIGHTS.yellow.text;

    const greenOption = document.createElement('option');
    greenOption.value = LIGHTS.green.type;
    greenOption.textContent = LIGHTS.green.text;

    selector.append(redOption, yellowOption, greenOption);
    selector.addEventListener('change', () => {
        if(selector.value === 'red') {
            yellowLight.className = '';
            greenLight.className = '';
            return redLight.className = 'red-light';
        }
        if(selector.value === 'yellow') {
            redLight.className = '';
            greenLight.className = '';
            return yellowLight.className = 'yellow-light';
        }
        if(selector.value === 'green') {
            redLight.className = '';
            yellowLight.className = '';
            return greenLight.className = 'green-light';
        }
    });

};

export default setTrafficLight;