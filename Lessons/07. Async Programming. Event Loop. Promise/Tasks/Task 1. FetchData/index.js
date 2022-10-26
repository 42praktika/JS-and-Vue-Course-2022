const fetchData = () => {
    // Начало
    const inputForm = document.querySelector('.form-control');
    let keyUpTimer;
    inputForm.addEventListener('input', () => {
        clearTimeout(keyUpTimer);
        if (inputForm.value) {
            keyUpTimer = setTimeout(alertMessage, 1000);
        }
    })

    const alertMessage = () => {
        alert(`Ищем: ${inputForm.value}`);
    }
    // Конец
};

export default fetchData;