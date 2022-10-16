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

const setTrafficLight = (element, before) => {
    const lightsValues = Object.values(LIGHTS);

    //Добавляем светофор
    const trafficLightBlock = document.querySelector('div.traffic__lights');
    const trafficLight = document.createElement('div');
    trafficLight.className = "traffic__lights-container";

    const lightSpans = [document.createElement('span'),
                    document.createElement('span'),
                    document.createElement('span')];
    lightSpans[0].className = "red-light";
    lightSpans.forEach(light => {trafficLight.append(light)});

    trafficLightBlock.append(trafficLight);

    //Добавляем селектор
    const selectorBlock = document.querySelector('div.traffic__lights-select');
    const selector = document.createElement('select');
    selector.className = "form-select";

    const options = [document.createElement('option'),
                     document.createElement('option'),
                     document.createElement('option')];

    for (let i = 0; i < options.length; i++)
    {
        options[i].text = lightsValues[i].text;
        options[i].value = lightsValues[i].type;
        selector.add(options[i]);
    }

    selectorBlock.append(selector);

    let activeLightIndex = 0;

    selector.addEventListener('change', (event) => {
        lightSpans[activeLightIndex].className = "";
        activeLightIndex = selector.selectedIndex;
        lightSpans[activeLightIndex].className = `${lightsValues[activeLightIndex].type}-light`;
    })
};

export default setTrafficLight;