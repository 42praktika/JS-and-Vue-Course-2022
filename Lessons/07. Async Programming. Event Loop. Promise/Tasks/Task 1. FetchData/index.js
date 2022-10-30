const fetchData = () => {
    // Начало
    const input = document.querySelector('input.form-control');
    let timeOuter;

    input.addEventListener('input', (event) => {
        clearTimeout(timeOuter);
        timeOuter = setTimeout(gettingAlert, 1000);
    })

    const gettingAlert = () => {
        alert("Ищем: " + input.value);
    }
    // Конец
};

export default fetchData;