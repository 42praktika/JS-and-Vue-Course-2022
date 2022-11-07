const fetchData = () => {
    const input = document.querySelector('.form-control');
    let timer = null;
    input.addEventListener('input', ({ target }) => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            window.alert(`Ищем: ${target.value}`);
        }, 1000);
    });
};

export default fetchData;