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
    const lightsContainer = document.createElement('div');
    trafficLights.append(lightsContainer);
    lightsContainer.className = 'traffic__lights-container';

    const redSpan = document.createElement('span');
    redSpan.className = 'red-light';
    const yellowSpan = document.createElement('span');
    const greenSpan = document.createElement('span');
    lightsContainer.append(redSpan, yellowSpan, greenSpan);

    const selector = document.querySelector('.traffic__lights-select');
    const select = document.createElement('select');
    selector.append(select);

    const redLight = document.createElement('option');
    redLight.textContent = 'Красный';
    redLight.value = 'red';
    
    const yellowLight = document.createElement('option');
    yellowLight.textContent = 'Желтый';
    yellowLight.value = 'yellow';
    
    const greenLight = document.createElement('option');
    greenLight.textContent='Зеленый';
    greenLight.value = 'green';

    select.append(redLight);
    select.append(yellowLight);
    select.append(greenLight);

    select.addEventListener('change', (event) => {
        if(select.value === 'red'){
            redSpan.className = 'red-light';
            yellowSpan.className = '';
            greenSpan.className = '';
        }
        else if(select.value === 'yellow'){
            yellowSpan.className = 'yellow-light';
            redSpan.className = '';
            greenSpan.className = '';
        }
        else{
            greenSpan.className = 'green-light';
            redSpan.className = '';
            yellowSpan.className = '';
        }
    })
    // Конец
};

export default setTrafficLight;