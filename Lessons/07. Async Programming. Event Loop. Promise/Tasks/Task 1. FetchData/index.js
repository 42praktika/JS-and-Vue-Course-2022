const fetchData = () => {
    let timeoutID;
    let input=document.querySelector('.form-control')
    input.addEventListener('input',()=>{
        clearTimeout(timeoutID);
        timeoutID=setTimeout(function () {
            alert("Ищем: "+input.value)
        },1000)
    })
};

export default fetchData;