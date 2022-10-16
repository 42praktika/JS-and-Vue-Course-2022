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
    const trafficLightsElement = document.querySelector('.traffic__lights');
    const trafficLightsContainer = document.createElement('div');
    trafficLightsContainer.className = 'traffic__lights-container';
    const spanRedElement = document.createElement('span');
    const spanYellowElement = document.createElement('span');
    const spanGreenElement = document.createElement('span');
    trafficLightsContainer.append(spanRedElement, spanYellowElement, spanGreenElement);
    trafficLightsElement.append(trafficLightsContainer);

    const trafficLightsSelectElement = document.querySelector('.traffic__lights-select');
    const selectElement = document.createElement('select');
    selectElement.className = 'form-select';
    const optionRedElement = document.createElement('option');
    optionRedElement.value = 'red';
    optionRedElement.text = 'Красный';
    const optionYellowElement = document.createElement('option');
    optionYellowElement.value = 'yellow';
    optionYellowElement.text = 'Желтый';
    const optionGreenElement = document.createElement('option');
    optionGreenElement.value = 'green';
    optionGreenElement.text = 'Зеленый';
    selectElement.append(optionRedElement, optionYellowElement, optionGreenElement);
    trafficLightsSelectElement.append(selectElement);

    spanRedElement.className = 'red-light';

    selectElement.addEventListener('change', (event) => {
        switch (event.target.value) {
            case 'red':
                spanRedElement.className = 'red-light';
                spanYellowElement.removeAttribute('class');
                spanGreenElement.removeAttribute('class');
                break;
            case 'yellow':
                spanRedElement.removeAttribute('class');
                spanYellowElement.className = 'yellow-light';
                spanGreenElement.removeAttribute('class');
                break;
            case 'green':
                spanRedElement.removeAttribute('class');
                spanYellowElement.removeAttribute('class');
                spanGreenElement.className = 'green-light';
                break;
        }
    });

    // Конец
};

export default setTrafficLight;
