const fetchData = () => {

    let timeID;
    const input = document.querySelector('.form-control');
    input.addEventListener('input', () => {
        clearTimeout(timeoutID);
        timeID = setTimeout(doMessage, 1000);
    });
    function doMessage() {
        alert("Ищем: " + input.value);
    }
};

export default fetchData;