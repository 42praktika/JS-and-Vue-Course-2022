const fetchData = () => {
    // Начало
    let input = document.querySelector('input');
    let typing;

    input.addEventListener('input', () => {
        clearTimeout(typing);
        if (input.value) {
            typing = setTimeout(doneTyping, 1000);
        }
    })

    function doneTyping() {
        alert('Ищем: ' + input.value);
    }
    // Конец
};

export default fetchData;