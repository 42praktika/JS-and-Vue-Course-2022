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
    const trafficLightsSelect = document.querySelector('.traffic__lights-select');

    // Создаем сам светофор
    const container = document.createElement('div');
    container.classList.add('traffic__lights-container');

    Object.keys(LIGHTS).forEach((light) => {
        const lightElement = document.createElement('span');
        lightElement.dataset.type = LIGHTS[light].type;
        container.append(lightElement);
    });

    trafficLights.append(container);

    // Создаем селект
    const selectElement = document.createElement('select');

    Object.keys(LIGHTS).forEach((light) => {
        const option = document.createElement('option');
        option.textContent = LIGHTS[light].text;
        option.value = LIGHTS[light].type;
        selectElement.append(option);
    });

    const resetLights = () => {
        const lights = trafficLights.querySelectorAll('span');
        lights.forEach((element) => {
            element.className = '';
        });
    };

    const setLight = (type) => {
        const currentLight = trafficLights.querySelector(`[data-type=${type}]`);
        currentLight.classList.add(`${type}-light`);
    }

    selectElement.addEventListener('change', (event) => {
        resetLights();
        const currentType = selectElement.value;
        setLight(currentType);
    });

    //выбираем дефолтное значение
    const currentType = selectElement.value;
    setLight(currentType);

    trafficLightsSelect.append(selectElement);
    // Конец
};

module.exports = setTrafficLight;