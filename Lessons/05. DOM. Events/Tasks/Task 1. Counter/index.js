const setCounter = () => {
    const text = "Количество нажатий: "
    const count = document.querySelector(".main")
    const button = document.createElement("button")
    button.classList.add("btn", "btn-warning")
    button.textContent = text + "0"
    button.addEventListener('click', (event) => {
        const current_count = event.target.textContent.split(": ")[1]
        const new_count = Number(current_count) + 1
        event.target.textContent = text + new_count
    })
    count.append(button)
};
export default setCounter;