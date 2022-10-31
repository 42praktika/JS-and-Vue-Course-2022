const fetchData = () => {
    // Начало
    const input = document.querySelector('.form-control');
    let timer;
    input.addEventListener('input', () => {
        clearTimeout(timer);
        const alertSecond = () => {
            alert(`Ищем: ${input.value}`);
        }
        timer=setTimeout(alertSecond, 1000);
    });
    // Конец
};

export default fetchData;