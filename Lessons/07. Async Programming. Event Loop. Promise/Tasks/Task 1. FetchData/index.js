const fetchData = () => {
    // Начало
    const input = document.querySelector('.form-control');
    let timeoutId
    input.addEventListener('input', () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(alert, 1000, `Ищем: ${input.value}`);
    });
    // Конец
};

export default fetchData;