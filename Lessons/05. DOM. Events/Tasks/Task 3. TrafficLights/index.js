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
    }
};
const setTrafficLight = () => {
    let element1 = document.querySelector(".traffic__lights")
    let newClass = document.createElement("div")
    newClass.className = "traffic__lights-container";
    let firstSpan = document.createElement("span")
    let secondSpan = document.createElement("span")
    let thirdSpan = document.createElement("span")
    firstSpan.className = "red-light"
    element1.append(newClass)
    newClass.append(firstSpan, secondSpan, thirdSpan)


    let element2 = document.querySelector(".traffic__lights-select")
    let newSelect = document.createElement("select")
    let red = document.createElement('option');
    let yellow = document.createElement('option');
    let green = document.createElement('option');

    red.value = LIGHTS.red.type;
    red.text = LIGHTS.red.text;
    yellow.value = LIGHTS.yellow.type;
    yellow.text = LIGHTS.yellow.text;
    green.value = LIGHTS.green.type;
    green.text = LIGHTS.green.text;
    element2.append(newSelect)
    newSelect.append(red, yellow, green)

    newSelect.addEventListener("change", () => {
        if (newSelect.value === "red") {
            secondSpan.className = ''
            thirdSpan.className = ''
            return firstSpan.className = "red-light"
        }
        if (newSelect.value === "yellow") {
            firstSpan.className = ''
            thirdSpan.className = ''
            return secondSpan.className = "yellow-light"
        }
        if (newSelect.value === "green") {
            firstSpan.className = ''
            secondSpan.className = ''
            return thirdSpan.className = "green-light"
        }
    });
}

export default setTrafficLight;

