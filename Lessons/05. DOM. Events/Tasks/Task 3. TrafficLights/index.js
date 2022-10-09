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
    const el = document.querySelector('.traffic__lights');
    const div = document.createElement('div');

    el.appendChild(div);

    div.className = 'traffic__lights-container';


    const redSpan = document.createElement('span');
    redSpan.className = 'red-light';

    const yellowSpan = document.createElement('span');

    const greenSpan = document.createElement('span');


    div.append(redSpan);
    div.append(yellowSpan);
    div.append(greenSpan);



    const selectEl = document.querySelector('.traffic__lights-select');
    const select = document.createElement('select');

// select.className= "form-select";
    selectEl.appendChild(select);

    const redOption = document.createElement('option');
    redOption.value = 'red';
    redOption.innerHTML = 'Красный'

    select.appendChild(redOption);

    const yellowOption = document.createElement('option');
    yellowOption.value = 'yellow';
    yellowOption.innerHTML = 'Желтый';

    select.appendChild(yellowOption);

    const greenOption = document.createElement('option');
    greenOption.value = 'green';
    greenOption.innerHTML='Зеленый';

    select.appendChild(greenOption);

    select.addEventListener('change',function () {
        let getValue = select.value;
        switch (getValue) {
            case('red'):
                redSpan.className = 'red-light';
                yellowSpan.className = '';
                greenSpan.className= '';
                break;
            case('yellow'):
                yellowSpan.className = 'yellow-light';
                redSpan.className = '';
                greenSpan.className= '';
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