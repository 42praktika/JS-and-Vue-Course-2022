const fetchData = () => {
    // Начало
const input = document.querySelector('input');
let timeout=null;
input.addEventListener('input',()=>{
    const text = document.querySelector('input').value;
   clearTimeout(timeout);
   timeout = setTimeout(function (){
       alert("Ищем: " + text);
   },1000)
})
    // Конец
};

export default fetchData;