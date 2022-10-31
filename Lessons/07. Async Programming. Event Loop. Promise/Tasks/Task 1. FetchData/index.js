const fetchData = () => {
    let formControl = document.querySelector('.form-control')
    let timeout
    formControl.addEventListener('input',() => {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            alert("Ищем: " + formControl.value)
        },1000)
    })
};
export default fetchData;