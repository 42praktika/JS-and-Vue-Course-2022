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
const trafficLights = document.querySelector('.traffic__lights')
const container = document.createElement('div')
container.className='traffic__lights-container'
    trafficLights.prepend(container)
    const firstSpan = document.createElement('span')
    firstSpan.className='red-light'
    const secondSpan = document.createElement('span')
    const thirdSpan = document.createElement('span')
    container.append(firstSpan,secondSpan,thirdSpan)

    const trafficLightsSelect = document.querySelector('.traffic__lights-select')
    const select = document.createElement('select')
    trafficLightsSelect.append(select)
    const firstColor = document.createElement('option')
    const secondColor = document.createElement('option')
    const thirdColor = document.createElement('option')
    select.append(firstColor,secondColor,thirdColor)
    firstColor.value='red'
    secondColor.value='yellow'
    thirdColor.value='green'
    firstColor.textContent='Красный'
    secondColor.textContent='Желтый'
    thirdColor.textContent='Зеленый'

    select.addEventListener("change", function (){
        if (select.value === 'red') {
            secondSpan.className=''
            thirdSpan.className=''
           return  firstSpan.className='red-light'
        }
        if (select.value==='yellow'){
            firstSpan.className=''
            thirdSpan.className=''
           return  secondSpan.className='yellow-light'
        }
        if(select.value==='green'){
            firstSpan.className=''
            secondSpan.className=''
           return  thirdSpan.className='green-light'
        }
    })
    // Конец
};

export default setTrafficLight;