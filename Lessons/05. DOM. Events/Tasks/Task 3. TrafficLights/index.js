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
    const trafficLights = document.querySelector('.traffic__lights')
    const container = document.createElement('div')
    container.className='traffic__lights-container'
    trafficLights.appendChild(container)
    const red_span = document.createElement("span")
    red_span.className = "red-light"
    const yellow_span = document.createElement("span")
    const green_span = document.createElement("span")
    container.append(red_span, yellow_span, green_span)

    const traffic_lights_select = document.querySelector('.traffic__lights-select')
    const select = document.createElement('select')
    traffic_lights_select.append(select)
    const first_color = document.createElement('option')
    const second_color = document.createElement('option')
    const third_color = document.createElement('option')
    select.append(first_color, second_color, third_color)

    first_color.value='red'
    second_color.value='yellow'
    third_color.value='green'
    first_color.textContent = 'Красный'
    second_color.textContent = 'Желтый'
    third_color.textContent = 'Зеленый'

    select.addEventListener("change", () => {
        if (select.value === 'red') {
            yellow_span.className = ''
            green_span.className = ''
            return  red_span.className = 'red-light'
        }
        if (select.value ==='yellow'){
            red_span.className = ''
            green_span.className = ''
            return  yellow_span.className = 'yellow-light'
        }
        if (select.value ==='green'){
            red_span.className = ''
            yellow_span.className = ''
            return  green_span.className = 'green-light'
        }
    })
};

export default setTrafficLight;