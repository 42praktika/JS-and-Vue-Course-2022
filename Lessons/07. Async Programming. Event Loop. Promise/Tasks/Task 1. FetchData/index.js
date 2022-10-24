const fetchData = () => {
    const message = (text) => {
        return alert(`Ищем: ${text}`);
    }
    let text = '';
    let timer = null;
    const input = document.querySelector('.form-control');
    input.addEventListener('input', event => {
        text = input.value;
        clearTimeout(timer);
        timer = setTimeout(message, 1000, text);
    })
};

export default fetchData;