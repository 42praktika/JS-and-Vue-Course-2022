const fetchData = () => {
    // Начало

    const textArea = document.querySelector('input');
    let timeout;

    textArea.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            alert('Ищем: ' + textArea.value);
        }, 1000);
    });
    // Конец
};

export default fetchData;
