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
    const span1 = document.createElement('span');
    span1.className='red-light';
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    trafficLightsContainer.append(span1);
    trafficLightsContainer.append(span2);
    trafficLightsContainer.append(span3);

    const trafficLightsSelect = document.querySelector('.traffic__lights-select');
    const select = document.createElement('select');
    trafficLightsSelect.append(select);
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');

    select.append(option1);
    select.append(option2);
    select.append(option3);
    option1.value = 'red';
    option2.value = 'yellow';
    option3.value = 'green';
    option1.textContent = 'Красный';
    option2.textContent = 'Желтый';
    option3.textContent = 'Зеленый';


    select.addEventListener('change', function() {
        if (select.value === 'red') {
            span2.className = '';
            span3.className = '';
            return span1.className = 'red-light';
        } else if (select.value === 'yellow') {
            span1.className = '';
            span3.className = '';
            return span2.className = 'yellow-light';
        } else if (select.value === 'green') {
            span1.className = '';
            span2.className = '';
            return span3.className = 'green-light';
        }
    })

    // Конец
};

export default setTrafficLight;