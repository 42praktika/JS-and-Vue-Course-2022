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
    const colorContainer = document.createElement('div');
    colorContainer.classList.add('traffic__lights-container');


    trafficLights.append(colorContainer);





    // Конец
};

export default setTrafficLight;