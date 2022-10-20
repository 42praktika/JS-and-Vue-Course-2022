const fetchData = () => {
    let timerId = null;
    const input = document.querySelector('input.form-control');
    input.addEventListener('input', (event) => {
        clearTimeout(timerId);
        timerId = setTimeout(alertFind, 1000);
    })

    const alertFind = () => {
        alert(`Ищем: ${input.value}`);
    }
};

export default fetchData;